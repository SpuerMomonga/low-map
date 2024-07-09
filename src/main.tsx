import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app.tsx';
import './reset.css';
import './global.css';
import './globals.css';
import 'ol/ol.css';
import store from './redux/store';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
