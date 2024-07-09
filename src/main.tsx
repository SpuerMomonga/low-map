import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import './reset.css';
import './global.css';
import './globals.css';
import 'ol/ol.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
