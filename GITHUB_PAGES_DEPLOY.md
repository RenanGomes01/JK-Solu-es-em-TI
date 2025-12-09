# 🚀 Deploy no GitHub Pages - Guia Completo

## ⚠️ Problema Comum: Página em Branco

Se o site está em branco no GitHub Pages, siga estes passos:

## 📋 Passo a Passo

### 1. Instalar gh-pages (se ainda não tiver)

```bash
npm install --save-dev gh-pages
```

### 2. Fazer Build

```bash
npm run build
```

### 3. Verificar Base Path

**IMPORTANTE:** Se seu repositório está em:
- `https://usuario.github.io/repositorio/` → Edite `vite.config.js` e mude `base: '/'` para `base: '/repositorio/'`
- `https://usuario.github.io/` → Mantenha `base: '/'`

### 4. Deploy Manual

```bash
npm run deploy
```

Ou manualmente:

```bash
npx gh-pages -d dist
```

### 5. Configurar GitHub Pages

1. Vá em **Settings** do seu repositório
2. Role até **Pages**
3. Em **Source**, selecione:
   - **Branch:** `gh-pages`
   - **Folder:** `/ (root)`
4. Clique em **Save**

### 6. Aguardar Deploy

- Aguarde 1-2 minutos
- Acesse: `https://seu-usuario.github.io/repositorio/`

## 🔧 Solução de Problemas

### Página ainda em branco?

1. **Verifique o console do navegador (F12)**
   - Procure por erros 404 nos assets
   - Se houver, o base path está errado

2. **Verifique se o arquivo `.nojekyll` está na pasta dist**
   ```bash
   ls dist/.nojekyll
   ```

3. **Limpe o cache do navegador**
   - Ctrl+Shift+R (Windows/Linux)
   - Cmd+Shift+R (Mac)

4. **Verifique se os arquivos foram enviados**
   - Vá em: `https://github.com/seu-usuario/repositorio/tree/gh-pages`
   - Deve ter: `index.html`, `assets/`, `.nojekyll`, `404.html`

### Assets não carregam?

Edite `vite.config.js` e ajuste o `base`:

```js
// Para repositório na raiz (usuario.github.io)
base: '/'

// Para subpasta (usuario.github.io/repositorio)
base: '/repositorio/'
```

Depois faça novo build e deploy:
```bash
npm run build
npm run deploy
```

## 🎯 Deploy Automático com GitHub Actions

Já está configurado! Toda vez que você fizer push na branch `main` ou `master`, o GitHub Actions vai:
1. Fazer build automaticamente
2. Fazer deploy para GitHub Pages

**Não precisa fazer nada!** Só fazer push normalmente.

## ✅ Checklist

- [ ] `gh-pages` instalado
- [ ] Build feito (`npm run build`)
- [ ] Base path correto no `vite.config.js`
- [ ] Deploy feito (`npm run deploy`)
- [ ] GitHub Pages configurado (branch: `gh-pages`)
- [ ] Arquivo `.nojekyll` na pasta dist
- [ ] Arquivo `404.html` na pasta dist
- [ ] Aguardou 1-2 minutos após deploy

## 📝 Notas Importantes

- O GitHub Pages pode levar alguns minutos para atualizar
- Sempre faça `npm run build` antes de `npm run deploy`
- Se mudar o base path, precisa fazer novo build e deploy
- O arquivo `404.html` é essencial para rotas do React Router funcionarem

