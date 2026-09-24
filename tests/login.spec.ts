import { test, expect } from '@playwright/test';

test.describe('Login page (wireframe) - acceptance tests', () => {
  test('AC-1 - login form present, submit visible, and route served without a full-page reload', async ({ page }) => {
    // Navigate to the route under test
    await page.goto('/login');

    // The login form (role=form) must be present and visible
    const form = page.getByRole('form');
    await expect(form).toBeVisible();

    // The Log in submit button must be visible (exact name as in UI contract)
    const submit = page.getByRole('button', { name: 'Log in', exact: true });
    await expect(submit).toBeVisible();

    // The location.pathname must be /login
    const pathname = await page.evaluate(() => location.pathname);
    expect(pathname).toBe('/login');

    // Attach a navigation listener AFTER initial load and ensure no document navigation occurs
    // (this detects unexpected full-page navigations that would replace the document)
    let navigated = false;
    page.on('framenavigated', () => {
      navigated = true;
    });

    // Wait a short moment to allow any synchronous navigation to occur
    await page.waitForTimeout(250);
    expect(navigated).toBe(false);
  });

  test('AC-2 - submitting empty email shows accessible inline error referenced by the email control and focuses the email input (no navigation)', async ({ page }) => {
    await page.goto('/login');

    const form = page.getByRole('form');
    await expect(form).toBeVisible();

    const email = page.getByLabel('Work email', { exact: true });
    const submit = page.getByRole('button', { name: 'Log in', exact: true });

    // Submit with empty email
    await submit.click();

    // Page must not navigate away
    expect(await page.evaluate(() => location.pathname)).toBe('/login');

    // Prefer an accessible link from the input to an error element: aria-describedby
    const describedBy = await email.getAttribute('aria-describedby');
    if (describedBy) {
      const err = page.locator(`#${describedBy}`);
      await expect(err).toBeVisible();
    } else {
      // Fallback: the control should be marked invalid for accessibility
      await expect(email).toHaveAttribute('aria-invalid', 'true');
    }

    // Focus must move to the invalid control
    await expect(email).toBeFocused();
  });

  test('AC-2 - submitting malformed email shows accessible inline error referenced by the email control and focuses the email input (no navigation)', async ({ page }) => {
    await page.goto('/login');

    const email = page.getByLabel('Work email', { exact: true });
    const password = page.getByLabel('Password', { exact: true });
    const submit = page.getByRole('button', { name: 'Log in', exact: true });

    // Provide a malformed email and attempt to submit
    await email.fill('bad-email');
    // Ensure other fields do not block reaching the error behavior
    await password.fill('irrelevant');
    await submit.click();

    // Must not navigate away from /login
    expect(await page.evaluate(() => location.pathname)).toBe('/login');

    // Check the email control references an error element or is marked invalid
    const describedBy = await email.getAttribute('aria-describedby');
    if (describedBy) {
      const err = page.locator(`#${describedBy}`);
      await expect(err).toBeVisible();
    } else {
      await expect(email).toHaveAttribute('aria-invalid', 'true');
    }

    // Focus must move to the invalid control
    await expect(email).toBeFocused();
  });

  test('Keyboard focus order: tabbing reaches email, then password, then submit in sequence', async ({ page }) => {
    await page.goto('/login');

    const email = page.getByLabel('Work email', { exact: true });
    const password = page.getByLabel('Password', { exact: true });
    const submit = page.getByRole('button', { name: 'Log in', exact: true });

    // Press Tab repeatedly until we reach the email input (guard loop to avoid infinite loops)
    let reached = false;
    for (let i = 0; i < 12; i++) {
      await page.keyboard.press('Tab');
      // Use a DOM check for focus since some Playwright versions may not expose isFocused on locators
      const activeIsEmail = await page.evaluate(() => document.activeElement === document.getElementById('email'));
      if (activeIsEmail) {
        reached = true;
        break;
      }
      // small pause to allow focus changes to be processed
      await page.waitForTimeout(20);
    }
    expect(reached).toBe(true);
    await expect(email).toBeFocused();

    // One more Tab should move focus to the password field
    await page.keyboard.press('Tab');
    await expect(password).toBeFocused();

    // One more Tab should move focus to the submit button
    await page.keyboard.press('Tab');
    await expect(submit).toBeFocused();
  });

  test('AC-3 - responsive visibility: .auth-visual and .mobile-brand at 375px, 768px, 1440px', async ({ page }) => {
    const cases = [
      { width: 375, authVisualVisible: false, mobileBrandVisible: true },
      { width: 768, authVisualVisible: false, mobileBrandVisible: true },
      { width: 1440, authVisualVisible: true, mobileBrandVisible: false },
    ];

    for (const c of cases) {
      await page.setViewportSize({ width: c.width, height: 900 });
      await page.goto('/login');

      const authVisual = page.locator('.auth-visual');
      const mobileBrand = page.locator('.mobile-brand');

      if (c.authVisualVisible) {
        await expect(authVisual).toBeVisible();
      } else {
        await expect(authVisual).toBeHidden();
      }

      if (c.mobileBrandVisible) {
        await expect(mobileBrand).toBeVisible();
      } else {
        await expect(mobileBrand).toBeHidden();
      }
    }
  });
});
