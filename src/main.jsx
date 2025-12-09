import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './index.css';

// Verify root element exists
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Root element not found!');
}

try {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
} catch (error) {
  // Log errors only in development
  if (import.meta.env.DEV) {
    console.error('Error rendering app:', error);
  }
  rootElement.innerHTML = `
    <div style="padding: 40px; background: #fff; min-height: 100vh; font-family: system-ui, sans-serif;">
      <h1 style="color: #dc2626; margin-bottom: 20px;">Erro ao carregar aplicação</h1>
      <p style="color: #64748b; margin-bottom: 20px;">Por favor, recarregue a página ou entre em contato com o suporte.</p>
      <button onclick="window.location.reload()" style="padding: 12px 24px; background: #2563eb; color: #fff; border: none; border-radius: 8px; cursor: pointer;">
        Recarregar Página
      </button>
    </div>
  `;
}

