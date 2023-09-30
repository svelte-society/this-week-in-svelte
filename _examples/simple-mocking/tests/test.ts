import { expect, test } from '@playwright/test';

test('index page has expected h1', async ({ page }) => {
	await page.goto('/');
	await expect(
		page.getByText(
			JSON.stringify({
				userId: 200,
				id: 123,
				title: 'TWIS is awesome',
				completed: true
			})
		)
	).toBeVisible();
});
