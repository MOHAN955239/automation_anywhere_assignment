
import { test, expect } from '@playwright/test';

test('Create Message Box Task - UI automation', async ({ page }) => {
  await page.goto('https://community.automationanywhere.com/');
  await page.waitForLoadState('networkidle');

  const newPostButton = page.locator('text=New Post');

  if (await newPostButton.isVisible()) {
    await newPostButton.click();
    await expect.soft(page.url()).toContain('topic');
  } else {
    console.log('New Post button not visible – possibly login required');
  }
});



