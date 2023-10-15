/** @type {import('next').NextConfig} */
const nextConfig = {
	swcMinify: false,
	images: {
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cdn.sanity.io',
				port: '',
				pathname: `/images/**`,
			},
		],
	},
};

module.exports = nextConfig;
