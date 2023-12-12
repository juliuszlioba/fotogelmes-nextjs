/** @type {import('next').NextConfig} */

const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => {
	if (phase === PHASE_DEVELOPMENT_SERVER) {
		return {
			images: {
				remotePatterns: [
					{
						protocol: 'http',
						hostname: 'localhost',
						port: '8055',
						pathname: '/assets/**',
					},
				],
			},
		}
	}

	return {
		images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'fotogelmes-assets.juliuszlioba.com',
				port: '',
				pathname: '/assets/**',
			},
		]},
		//output: 'standalone',
	}
}