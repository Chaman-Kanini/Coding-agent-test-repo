import { test, expect, type Locator, type Page } from '@playwright/test';

async function sectionForHeading(page: Page, headingName: RegExp): Promise<Locator> {
  const heading = page.getByRole('heading', { name: headingName }).first();
  await expect(heading).toBeVisible();
  return heading.locator('xpath=ancestor::*[self::section or self::header or self::main][1]');
}

async function tabUntilFocused(page: Page, target: Locator, maxTabs = 80): Promise<void> {
  for (let i = 0; i < maxTabs; i++) {
    await page.keyboard.press('Tab');
    const focused = await target.evaluate((el) => el === document.activeElement);
    if (focused) return;
  }
  throw new Error('Target was not reached by keyboard Tab navigation within max tab count.');
}

async function hasVisibleFocusIndicator(target: Locator): Promise<boolean> {
  return target.evaluate((el) => {
    const style = window.getComputedStyle(el);
    const outlineVisible = style.outlineStyle !== 'none' && parseFloat(style.outlineWidth || '0') > 0;
    const boxShadowVisible = !!style.boxShadow && style.boxShadow !== 'none';
    const focusVisiblePseudo = el.matches(':focus-visible');
    const classHint = Array.from(el.classList).some((cls) => /focus|ring|active/i.test(cls));
    return focusVisiblePseudo || outlineVisible || boxShadowVisible || classHint;
  });
}

test('AC-1: desktop landing page shows semantic landmarks, hero positioning text, and hero CTA', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');

  await expect(page.locator('header').first()).toBeVisible();
  await expect(page.locator('nav').first()).toBeVisible();
  await expect(page.locator('main').first()).toBeVisible();
  await expect(page.locator('footer').first()).toBeVisible();

  const heroHeading = page.getByRole('heading', { name: /focusflow.*ai-powered.*(todo|to-?do|productivity).*small teams/i }).first();
  await expect(heroHeading).toBeVisible();

  const heroSection = heroHeading.locator('xpath=ancestor::*[self::section or self::header or self::main][1]');
  const heroCta = heroSection.locator('a,button').filter({ hasText: /\S/ }).first();
  await expect(heroCta).toBeVisible();
});

test('AC-2: middle sections include feature highlights, social proof, and pricing with exactly three complete plans', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));

  const featureSection = await sectionForHeading(page, /feature highlights/i);
  await expect(featureSection).toBeVisible();

  const socialProofSection = await sectionForHeading(page, /social proof/i);
  await expect(socialProofSection).toBeVisible();

  const pricingSection = await sectionForHeading(page, /pricing/i);
  await expect(pricingSection).toBeVisible();

  const plans = await pricingSection.evaluate((sectionRoot) => {
    const section = sectionRoot as HTMLElement;
    const all = Array.from(section.querySelectorAll('*')) as HTMLElement[];
    const priceRe = /(\$\s*\d)|((free)\b)|(\d+\s*\/?\s*(mo|month|yr|year))/i;

    const qualifies = (el: HTMLElement) => {
      const name = el.querySelector('h1,h2,h3,h4,h5,h6')?.textContent?.trim() || '';
      const cta = el.querySelector('a,button')?.textContent?.trim() || '';
      const text = (el.textContent || '').replace(/\s+/g, ' ').trim();
      const hasPrice = priceRe.test(text);
      return !!name && !!cta && hasPrice;
    };

    const candidates = all.filter(qualifies);
    const minimal = candidates.filter((candidate) => {
      return !candidates.some((other) => other !== candidate && candidate.contains(other));
    });

    return minimal.map((el) => {
      const name = el.querySelector('h1,h2,h3,h4,h5,h6')?.textContent?.trim() || '';
      const cta = el.querySelector('a,button')?.textContent?.trim() || '';
      const text = (el.textContent || '').replace(/\s+/g, ' ').trim();
      const priceMatch = text.match(/(\$\s*\d[^\s,;)]*)|((free)\b)|(\d+\s*\/?\s*(mo|month|yr|year))/i);
      const price = priceMatch ? priceMatch[0] : '';
      return { name, price, cta };
    });
  });

  const distinctNames = new Set(plans.map((p) => p.name));
  expect(plans.length).toBe(3);
  expect(distinctNames.size).toBe(3);
  expect(plans.every((p) => p.name.length > 0)).toBeTruthy();
  expect(plans.every((p) => p.price.length > 0)).toBeTruthy();
  expect(plans.every((p) => p.cta.length > 0)).toBeTruthy();
});

test('AC-3: keyboard Tab navigation reaches nav and CTA controls with visible focus indication', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');

  const navControl = page.locator('nav a, nav button').filter({ hasText: /\S/ }).first();
  await expect(navControl).toBeVisible();

  const heroSection = await sectionForHeading(page, /focusflow/i);
  const heroCta = heroSection.locator('a,button').filter({ hasText: /\S/ }).first();
  await expect(heroCta).toBeVisible();

  const pricingSection = await sectionForHeading(page, /pricing/i);
  const pricingCta = pricingSection.locator('a,button').filter({ hasText: /\S/ }).first();
  await expect(pricingCta).toBeVisible();

  await page.keyboard.press('Home');
  await page.locator('body').click({ position: { x: 1, y: 1 } });

  await tabUntilFocused(page, navControl);
  expect(await hasVisibleFocusIndicator(navControl)).toBeTruthy();

  await tabUntilFocused(page, heroCta);
  expect(await hasVisibleFocusIndicator(heroCta)).toBeTruthy();

  await tabUntilFocused(page, pricingCta);
  expect(await hasVisibleFocusIndicator(pricingCta)).toBeTruthy();
});

test('AC-4: no horizontal overflow and core sections stay in viewport flow at mobile and desktop widths', async ({ page }) => {
  for (const width of [375, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');

    const overflow = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      innerWidth: window.innerWidth,
    }));
    expect(overflow.scrollWidth).toBeLessThanOrEqual(overflow.innerWidth);

    await expect(page.locator('header').first()).toBeVisible();
    await expect(page.locator('main').first()).toBeVisible();
    await expect(page.locator('footer').first()).toBeVisible();

    for (const heading of [/feature highlights/i, /social proof/i, /pricing/i]) {
      const section = await sectionForHeading(page, heading);
      const box = await section.boundingBox();
      expect(box).not.toBeNull();
      if (box) {
        expect(box.width).toBeLessThanOrEqual(width);
        expect(box.x).toBeGreaterThanOrEqual(0);
      }
    }
  }
});

test('AC-5: end-of-page contains final CTA control and footer informational content', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto('/');
  await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));

  const footer = page.locator('footer').first();
  await expect(footer).toBeVisible();

  const footerText = (await footer.textContent())?.trim() || '';
  expect(footerText.length).toBeGreaterThan(0);

  const finalCtaMeta = await page.evaluate(() => {
    const footerEl = document.querySelector('footer');
    if (!footerEl) return { found: false, ctaText: '', sectionText: '' };

    const sections = Array.from(document.querySelectorAll('section')) as HTMLElement[];
    const sectionsBeforeFooter = sections.filter((s) => {
      const pos = s.compareDocumentPosition(footerEl);
      return !!(pos & Node.DOCUMENT_POSITION_FOLLOWING);
    });

    const candidates = sectionsBeforeFooter.filter((s) => {
      const control = s.querySelector('a,button');
      return !!control && !!control.textContent?.trim();
    });

    const finalSection = candidates[candidates.length - 1];
    if (!finalSection) return { found: false, ctaText: '', sectionText: '' };

    const control = finalSection.querySelector('a,button');
    return {
      found: true,
      ctaText: control?.textContent?.trim() || '',
      sectionText: finalSection.textContent?.trim() || '',
    };
  });

  expect(finalCtaMeta.found).toBeTruthy();
  expect(finalCtaMeta.sectionText.length).toBeGreaterThan(0);
  expect(finalCtaMeta.ctaText.length).toBeGreaterThan(0);
});
