/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  images: {
    domains: [],
    unoptimized: true,
  },
  // Otimizações para produção
  compress: true,
  poweredByHeader: false,
  // Configuração para Locaweb
  distDir: '.next',
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
}

module.exports = nextConfig


