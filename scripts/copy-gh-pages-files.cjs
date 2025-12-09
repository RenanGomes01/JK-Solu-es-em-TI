const fs = require('fs');
const path = require('path');

const distDir = path.join(process.cwd(), 'dist');

// Criar .nojekyll
const nojekyllPath = path.join(distDir, '.nojekyll');
if (!fs.existsSync(nojekyllPath)) {
  fs.writeFileSync(nojekyllPath, '');
  console.log('✓ Created .nojekyll');
}

// Criar 404.html se não existir
const html404Path = path.join(distDir, '404.html');
if (!fs.existsSync(html404Path)) {
  const html404Content = `<!DOCTYPE html>
<html lang="pt-BR">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>JK Soluções em TI</title>
    <script>
      // GitHub Pages 404.html - Redirect to index.html for SPA routing
      var pathSegmentsToKeep = 0;
      var l = window.location;
      l.replace(
        l.protocol + '//' + l.hostname + (l.port ? ':' + l.port : '') +
        l.pathname.split('/').slice(0, 1 + pathSegmentsToKeep).join('/') + '/?/' +
        l.pathname.slice(1).split('/').slice(pathSegmentsToKeep).join('/').replace(/&/g, '~and~') +
        (l.search ? '&' + l.search.slice(1).replace(/&/g, '~and~') : '') +
        l.hash
      );
    </script>
  </head>
  <body>
    <noscript>
      <meta http-equiv="refresh" content="0; url=./index.html" />
    </noscript>
  </body>
</html>`;
  fs.writeFileSync(html404Path, html404Content);
  console.log('✓ Created 404.html');
}

console.log('✓ GitHub Pages files ready');

