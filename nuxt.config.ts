// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({

	modules: [
		'@nuxtjs/tailwindcss',
		'@nuxt/fonts',
		'@nuxt/eslint',
		'@pinia/nuxt',
		'@nuxt/icon',
	],
	devtools: { enabled: false },
	devServer: {
		port: 8899,
	},
	compatibilityDate: '2024-04-03',
	eslint: {
		config: {
			stylistic: {
				indent: 'tab',
				semi: true,
			},
		},
	},
});
