import preprocess from 'svelte-preprocess';
import { sass } from 'svelte-preprocess-sass';
import node from '@sveltejs/adapter-node';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [preprocess({ style: sass() })],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',
		adapter: node({
			out: 'build',
			env: {
				host: 'HOST',
				port: 'PORT'
			}
		})
	}
};

export default config;
