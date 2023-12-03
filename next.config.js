/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		// remotePatterns: [
		// 	{
		// 		protocol: 'http',
		// 		hostname: 'localhost',
		// 		port: '8055',
		// 		pathname: '/assets/**',
		// 	},
		// ],

		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'fotogelmes-assets.juliuszlioba.com',
				port: '',
				pathname: '/assets/**',
			},
		],
	},

	// output: 'standalone',
}

module.exports = nextConfig
