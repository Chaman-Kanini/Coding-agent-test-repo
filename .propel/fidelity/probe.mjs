// Run by backend/verify/fidelity_oracle.py inside the workspace. Reads a config
// JSON path from argv, prints one JSON document on stdout. It only collects;
// the comparison (tolerances, normalisation) is Python so it can be unit-tested.
import { spawn } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { chromium } from '@playwright/test';

const config = JSON.parse(readFileSync(process.argv[2], 'utf8'));
const PROPS = config.properties;

async function reachable(url) {
  try {
    const response = await fetch(url);
    return response.status < 500;
  } catch {
    return false;
  }
}

async function ensureServer() {
  if (await reachable(config.base_url)) return null;
  const server = spawn('npx', ['vite', 'preview', '--host', '127.0.0.1', '--port', String(config.port)], {
    stdio: 'ignore',
    shell: process.platform === 'win32',
    detached: process.platform !== 'win32',
  });
  for (let i = 0; i < 60; i++) {
    if (await reachable(config.base_url)) return server;
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  return server;
}

function stopServer(server) {
  if (!server) return;
  if (process.platform === 'win32') server.kill();
  else process.kill(-server.pid);
}

// Every rendered element is compared, not only classed ones: the wireframes
// style bare <input>, <label>, <h1> through descendant rules, and a first
// probe that keyed on classes alone let a 2px input-padding drift through.
// A classed element is keyed by tag+classes and its document-order occurrence
// (so the second div.field is checked too); an unclassed one by the path of
// tag:nth-of-type steps from its nearest classed ancestor, which keeps React's
// unclassed wrapper divs (#root, fragments' hosts) out of every key.
function collect(props) {
  const SKIP = new Set(['SCRIPT', 'STYLE', 'NOSCRIPT', 'TEMPLATE', 'LINK', 'META']);
  const out = {};
  const seen = {};
  const keys = new Map();
  const classKey = (el) => {
    const classes = Array.from(el.classList).sort();
    return el.tagName.toLowerCase() + classes.map((c) => '.' + CSS.escape(c)).join('');
  };
  const nthOfType = (el) => {
    let n = 1;
    for (let s = el.previousElementSibling; s; s = s.previousElementSibling) if (s.tagName === el.tagName) n++;
    return `${el.tagName.toLowerCase()}:nth-of-type(${n})`;
  };
  const keyOf = (el) => {
    if (keys.has(el)) return keys.get(el);
    let key;
    if (el.classList.length) {
      const base = classKey(el);
      seen[base] = (seen[base] || 0) + 1;
      key = seen[base] === 1 ? base : `${base}#${seen[base]}`;
    } else {
      const steps = [];
      let node = el;
      while (node && node !== document.body && !node.classList.length) {
        steps.unshift(nthOfType(node));
        node = node.parentElement;
      }
      const anchor = node && node !== document.body ? keyOf(node) : 'body';
      key = `${anchor} > ${steps.join(' > ')}`;
    }
    keys.set(el, key);
    return key;
  };
  for (const el of document.body.querySelectorAll('*')) {
    if (SKIP.has(el.tagName)) continue;
    // Anchored steps must not start at an unclassed element under <body>
    // (React's #root): those are implementation plumbing, not design.
    if (!el.classList.length && !el.closest('[class]')) continue;
    const cs = getComputedStyle(el);
    if (cs.display === 'none' && !el.classList.length) continue;
    const key = keyOf(el);
    if (key in out) continue;
    const styles = {};
    for (const p of props) styles[p] = cs.getPropertyValue(p);
    // Classed ancestors, innermost first: lets the comparison tell which
    // reference elements contain something the task added.
    const ancestors = [];
    for (let a = el.parentElement; a && a !== document.body; a = a.parentElement) {
      if (a.classList.length) ancestors.push(keyOf(a));
    }
    styles.__ancestors = ancestors;
    out[key] = styles;
  }
  return out;
}

const server = await ensureServer();
const browser = await chromium.launch();
const results = [];
try {
  for (const screen of config.screens) {
    for (const width of config.viewports) {
      const page = await browser.newPage({ viewport: { width, height: 900 } });
      // External fonts and images are blocked: the sandbox has no egress, and
      // the Python side normalises font-family to its first name for this reason.
      await page.route('**/*', (route) => {
        const url = route.request().url();
        return url.startsWith('file:') || url.startsWith(config.base_url) ? route.continue() : route.abort();
      });
      const entry = {
        screen_id: screen.screen_id, viewport: width, route: screen.route,
        route_unreachable: false, redirected_to: null, reference: {}, implementation: {},
      };
      await page.goto(pathToFileURL(screen.reference_file).href);
      entry.reference = await page.evaluate(collect, PROPS);
      try {
        const seed = screen.seed_storage || {};
        if (Object.keys(seed).length) {
          // Storage is per origin: open the origin once, write, then navigate,
          // so the app's first render already sees the session.
          await page.goto(config.base_url + '/', { waitUntil: 'domcontentloaded', timeout: 20000 });
          await page.evaluate((s) => {
            for (const [area, values] of Object.entries(s)) {
              for (const [key, value] of Object.entries(values)) window[area].setItem(key, value);
            }
          }, seed);
        }
        const response = await page.goto(config.base_url + screen.route, { waitUntil: 'networkidle', timeout: 20000 });
        if (!response || response.status() >= 400) entry.route_unreachable = true;
        else {
          // Client-side redirects settle after networkidle; let the router run.
          await page.waitForTimeout(300);
          const landed = new URL(page.url()).pathname;
          const wanted = new URL(config.base_url + screen.route).pathname;
          if (landed.replace(/\/+$/, '') !== wanted.replace(/\/+$/, '')) entry.redirected_to = landed;
          else entry.implementation = await page.evaluate(collect, PROPS);
        }
      } catch (error) {
        entry.route_unreachable = true;
        entry.error = String(error);
      }
      results.push(entry);
      await page.close();
    }
  }
} finally {
  await browser.close();
  stopServer(server);
}
process.stdout.write(JSON.stringify({ results }));
