# JK Soluções em TI

Site institucional da JK Soluções em TI desenvolvido com React e Vite.

## 🚀 Tecnologias

- **React 18** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool e dev server
- **React Router** - Roteamento
- **Tailwind CSS** - Estilização
- **Framer Motion** - Animações
- **Lucide React** - Ícones

## 📦 Instalação

```bash
npm install
```

## 🛠️ Desenvolvimento

```bash
npm run dev
```

## 🏗️ Build para Produção

```bash
npm run build
```

O build será gerado na pasta `dist/`.

## 🚀 Deploy no GitHub Pages

```bash
# Instalar gh-pages (primeira vez)
npm install --save-dev gh-pages

# Fazer build e deploy
npm run deploy
```

**⚠️ Importante:** 
- Se seu repositório está em uma subpasta (ex: `usuario.github.io/repositorio`), edite `vite.config.js` e mude `base: '/'` para `base: '/repositorio/'`
- Após o deploy, configure GitHub Pages: Settings → Pages → Source: `gh-pages` branch

Veja o arquivo `GITHUB_PAGES_DEPLOY.md` para instruções detalhadas.

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── common/          # Componentes reutilizáveis
│   ├── institutional/   # Componentes institucionais
│   └── ui/              # Componentes de UI
├── pages/               # Páginas da aplicação
├── utils/               # Funções utilitárias
└── main.jsx            # Entry point
```

## 🌐 Páginas

- `/` - Home
- `/about` - Sobre
- `/services` - Serviços
- `/blog` - Blog
- `/contact` - Contato
- `/clientdashboard` - Área do Cliente

## ⚡ Otimizações

- ✅ Code splitting com lazy loading
- ✅ Tree-shaking de imports
- ✅ Lazy loading de imagens
- ✅ Chunks otimizados (vendor, animations, icons)
- ✅ Minificação e compressão
- ✅ Meta tags SEO

## 📝 Licença

© 2025 JK Soluções em TI. Todos os direitos reservados.

