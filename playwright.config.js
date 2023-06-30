import { devices } from '@playwright/test'

/** @type {import('@playwright/test').PlaywrightTestConfig} */
const config = {
	projects: [
		{
			name: 'chromium',
			use: { ...devices['Desktop Chrome'] }
		},
		{
			name: 'firefox',
			use: { ...devices['Desktop Firefox'] }
		},
		{
			name: 'webkit',
			use: { ...devices['Desktop Safari'] }
		},
		/* Test against mobile viewports. */
		{
			name: 'Mobile Chrome',
			use: { ...devices['Pixel 5'] }
		},
		{
			name: 'Mobile Safari',
			use: { ...devices['iPhone 12'] }
		}
	],
	webServer: {
		command: 'pnpm dev',
		port: 5173
	},
	testDir: 'tests'
}

export default config
