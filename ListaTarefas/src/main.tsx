import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');

if (!container) {
  throw new Error("Elemento 'root' não encontrado");
}

const root = createRoot(container);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
