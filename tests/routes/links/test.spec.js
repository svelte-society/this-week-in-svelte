import { test, expect } from '@playwright/test'
import { AxeBuilder } from '@axe-core/playwright'

test.describe('links page', () => {
	// 2
	test('should not have any automatically detectable accessibility issues', async ({
		page
	}) => {
		await page.goto('/links') // 3

		const accessibilityScanResults = await new AxeBuilder({
			page
		}).analyze() // 4

		expect(accessibilityScanResults.violations).toEqual([]) // 5
	})
})
