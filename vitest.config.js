/// <reference types="vitest" />
import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
	plugins: [svelte({ hot: !process.env.VITEST })],
	resolve: {
		alias: {
			$components: ['src/components'],
			'$components/*': ['src/components/*'],
			$lib: ['src/lib'],
			'$lib/*': ['src/lib/*']
		}
	},
	test: {
		environment: 'happy-dom',
		include: ['**/*.test.js']
	}
})
