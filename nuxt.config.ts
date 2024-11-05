// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxt/fonts',
		'@nuxt/eslint',
		'@pinia/nuxt',
		'@nuxt/icon',
	],
	plugins: [
		{ src: '~/plugins/mongoose.ts', mode: 'server' },
	],
	devtools: { enabled: false },
	runtimeConfig: {
		mongoURILocal: '',
		mongoURIProd: '',
	},
	devServer: {
		port: 8899,
	},
	compatibilityDate: '2024-04-03',
	nitro: {
		esbuild: {
			options: {
				drop: ['console'],
			},
		},
	},
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
			},
		},
	},

});
