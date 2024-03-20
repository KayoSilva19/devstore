/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    /* Faz a mesma coisa que o código a baixo, porém esta depreciado,
     domains: ['github.com'], */
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'github.com',
      },
    ],
  },
}

export default nextConfig
