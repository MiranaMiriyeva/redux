import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { createRoot } from 'react-dom/client';
import { globalState } from './redux/state/index.jsx';



const root = document.getElementById('root');

createRoot(root).render(
  <Provider store={globalState}>
    <App />
  </Provider>
);
