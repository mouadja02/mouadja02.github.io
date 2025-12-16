/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Only use basePath in production (for GitHub Pages)
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/MJEngi',
    assetPrefix: '/MJEngi/',
  }),
}

module.exports = nextConfig 