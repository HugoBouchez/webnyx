/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'via.placeholder.com',
      },
    ],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/webnyx' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/webnyx' : '',
  // Exclure les routes API du build statique
  distDir: 'out',
  trailingSlash: true,
}

module.exports = nextConfig

