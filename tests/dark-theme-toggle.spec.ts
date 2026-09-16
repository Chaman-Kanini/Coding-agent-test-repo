import { test, expect, type Page } from '@playwright/test';

type ThemeSnapshot = {
  htmlDataTheme: string | null;
  bodyDataTheme: string | null;
  htmlClass: string;
  bodyClass: string;
  headerClass: string;
  htmlBackground: string;
  bodyBackground: string;
  headerBackground: string;
  htmlColor: string;
  bodyColor: string;
  headerColor: string;
};

function extractRgbChannels(color: string): [number, number, number] | null {
  const m = color.match(/rgba?\((\d+)\s*,\s*(\d+)\s*,\s*(\d+)/i);
  if (!m) return null;
  return [Number(m[1]), Number(m[2]), Number(m[3])];
}

function isPerceivedDark(color: string): boolean {
  const rgb = extractRgbChannels(color);
  if (!rgb) return false;
  const [r, g, b] = rgb;
  const luminance = (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
  return luminance < 0.5;
}

function hasExplicitDarkIndicator(snapshot: ThemeSnapshot): boolean {
  return (
    snapshot.htmlDataTheme === 'dark' ||
    snapshot.bodyDataTheme === 'dark' ||
    /\bdark\b/i.test(snapshot.htmlClass) ||
    /\bdark\b/i.test(snapshot.bodyClass) ||
    /\bdark\b/i.test(snapshot.headerClass)
  );
}

function isThemeDark(snapshot: ThemeSnapshot): boolean {
  return (
    hasExplicitDarkIndicator(snapshot) ||
    isPerceivedDark(snapshot.htmlBackground) ||
    isPerceivedDark(snapshot.bodyBackground) ||
    isPerceivedDark(snapshot.headerBackground)
  );
}

async function readSnapshot(page: Page): Promise<ThemeSnapshot> {
  return page.evaluate(() => {
    const html = document.documentElement;
    const body = document.body;
    const header = document.querySelector('header');

    const htmlStyle = window.getComputedStyle(html);
    const bodyStyle = window.getComputedStyle(body);
    const headerStyle = header ? window.getComputedStyle(header as Element) : null;

    return {
      htmlDataTheme: html.getAttribute('data-theme'),
      bodyDataTheme: body.getAttribute('data-theme'),
      htmlClass: html.className,
      bodyClass: body.className,
      headerClass: header ? (header as HTMLElement).className : '',
      htmlBackground: htmlStyle.backgroundColor,
      bodyBackground: bodyStyle.backgroundColor,
      headerBackground: headerStyle?.backgroundColor ?? '',
      htmlColor: htmlStyle.color,
      bodyColor: bodyStyle.color,
      headerColor: headerStyle?.color ?? '',
    };
  });
}

test('AC-1: default landing page shows a header theme toggle and light theme root state', async ({ page }) => {
  await page.goto('/');

  const header = page.locator('header').first();
  await expect(header).toBeVisible();

  const themeToggle = header.getByRole('button').first();
  await expect(themeToggle).toBeVisible();

  const snapshot = await readSnapshot(page);
  expect(snapshot.bodyBackground).toBe('rgb(245, 247, 251)');
  expect(hasExplicitDarkIndicator(snapshot)).toBeFalsy();
});

test('AC-2: clicking the header theme toggle switches to explicit dark state with observable style change', async ({ page }) => {
  await page.goto('/');

  const header = page.locator('header').first();
  const themeToggle = header.getByRole('button').first();
  await expect(themeToggle).toBeVisible();

  const before = await readSnapshot(page);
  await themeToggle.click();
  const after = await readSnapshot(page);

  expect(hasExplicitDarkIndicator(after)).toBeTruthy();
  expect(
    after.htmlBackground !== before.htmlBackground ||
      after.bodyBackground !== before.bodyBackground ||
      after.headerBackground !== before.headerBackground ||
      after.htmlColor !== before.htmlColor ||
      after.bodyColor !== before.bodyColor ||
      after.headerColor !== before.headerColor
  ).toBeTruthy();
  expect(isThemeDark(after)).toBeTruthy();
});

test('AC-3: keyboard Enter on focused header theme toggle changes theme and updates aria-pressed consistently', async ({ page }) => {
  await page.goto('/');

  const header = page.locator('header').first();
  const themeToggle = header.getByRole('button').first();
  await expect(themeToggle).toBeVisible();

  await themeToggle.focus();

  const beforeAriaPressed = await themeToggle.getAttribute('aria-pressed');
  expect(beforeAriaPressed === 'true' || beforeAriaPressed === 'false').toBeTruthy();

  const beforeTheme = await readSnapshot(page);
  await page.keyboard.press('Enter');
  const afterTheme = await readSnapshot(page);

  const afterAriaPressed = await themeToggle.getAttribute('aria-pressed');
  expect(afterAriaPressed === 'true' || afterAriaPressed === 'false').toBeTruthy();
  expect(afterAriaPressed).not.toBe(beforeAriaPressed);

  const expectedDark = afterAriaPressed === 'true';
  expect(isThemeDark(afterTheme)).toBe(expectedDark);
  expect(isThemeDark(afterTheme)).not.toBe(isThemeDark(beforeTheme));
});
