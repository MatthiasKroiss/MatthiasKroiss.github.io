import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

//const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	//preprocess: vitePreprocess(),

	kit: {
		appDir: 'app',
		adapter: adapter({
			pages: 'build',
			assets : 'build',
			fallback: null
		}),
		
	},

	trailingSlash: 'always',
        paths: {
			base: '/matthiaskroiss.github.io',
        },

	


};

export default config;
