/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Uncomment basePath if using GitHub Pages with repo name in URL
  // basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',
}

module.exports = nextConfig
