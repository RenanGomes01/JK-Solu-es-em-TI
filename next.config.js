/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export', // Para GitHub Pages - gera arquivos estáticos
  images: {
    domains: [],
    unoptimized: true,
  },
  // Otimizações para produção
  compress: true,
  poweredByHeader: false,
  // Configuração para GitHub Pages
  basePath: '/JK-Solu-es-em-TI',
  assetPrefix: '/JK-Solu-es-em-TI/',
  distDir: 'out',
  generateBuildId: async () => {
    return 'build-' + Date.now()
  },
}

module.exports = nextConfig


