import type { Plugin } from 'vite';
import { loadEnv, mergeConfig } from 'vite';
import { resolve } from 'node:path';

export function simple_mock() {
	return {
		name: 'vite-plugin-simple-mocks',
		enforce: 'post',
		config(config, { mode }) {
			const env = loadEnv(mode, process.cwd(), '');
			if (env.MOCKING === 'true') {
				return mergeConfig(config, {
					resolve: {
						alias: {
							$data: resolve(process.cwd(), './src/data/__mocks__')
						}
					}
				});
			}
			return config;
		}
	} satisfies Plugin;
}
