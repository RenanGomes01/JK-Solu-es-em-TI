# Guia de Deploy - JK Soluções em TI

## 📦 Build para Produção

```bash
npm run build
```

O build será gerado na pasta `dist/` com todos os arquivos otimizados.

## 🚀 Opções de Deploy

### 1. Servidor Web Estático (Nginx/Apache)

1. Faça upload da pasta `dist/` para o servidor
2. Configure o servidor para servir `index.html` em todas as rotas (SPA)

**Nginx:**
```nginx
server {
    listen 80;
    server_name seudominio.com.br;
    root /var/www/jk-solucoes/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache para assets estáticos
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Compressão gzip
    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml application/xml+rss text/javascript;
    gzip_min_length 1000;
}
```

**Apache (.htaccess):**
```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Cache para assets
<IfModule mod_expires.c>
  ExpiresActive On
  ExpiresByType image/jpg "access plus 1 year"
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType text/css "access plus 1 year"
  ExpiresByType application/javascript "access plus 1 year"
</IfModule>
```

### 2. Vercel

```bash
npm i -g vercel
vercel
```

### 3. Netlify

1. Arraste a pasta `dist/` para o Netlify Drop
2. Ou configure build command: `npm run build`
3. Publish directory: `dist`

### 4. GitHub Pages

1. Instale `gh-pages`: `npm install --save-dev gh-pages`
2. Adicione ao `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```
3. Execute: `npm run deploy`

## ⚙️ Configurações Pós-Deploy

1. **Atualize o sitemap.xml** com seu domínio real:
   - Edite `public/sitemap.xml`
   - Substitua `https://seusite.com.br` pelo seu domínio

2. **Atualize o robots.txt**:
   - Edite `public/robots.txt`
   - Substitua `https://seusite.com.br` pelo seu domínio

3. **Verifique SSL/HTTPS**:
   - Certifique-se de que seu site está usando HTTPS

4. **Google Analytics** (opcional):
   - Adicione o código de tracking no `index.html`

5. **Google Search Console**:
   - Envie o sitemap para o Google Search Console

## ✅ Checklist Pós-Deploy

- [ ] Site carrega corretamente
- [ ] Todas as rotas funcionam (SPA)
- [ ] Imagens carregam corretamente
- [ ] Formulário de contato funciona
- [ ] Links externos funcionam
- [ ] Site é responsivo em mobile
- [ ] SSL/HTTPS configurado
- [ ] Sitemap.xml atualizado
- [ ] Robots.txt atualizado
- [ ] Performance testada (PageSpeed Insights)

## 🔍 Verificação de Performance

Teste seu site em:
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

## 📞 Suporte

Em caso de problemas, verifique:
1. Console do navegador (F12)
2. Logs do servidor
3. Configuração de rotas (SPA)
4. Permissões de arquivos

