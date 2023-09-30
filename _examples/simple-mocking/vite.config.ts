import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vitest/config';
import { simple_mock } from './plugin';

export default defineConfig({
	plugins: [sveltekit(), simple_mock()],
	test: {
		include: ['src/**/*.{test,spec}.{js,ts}']
	}
});
