import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { counterReducer } from './redux/reducer/Counter.reducer.jsx';
import { createRoot } from 'react-dom/client';

const globalState = createStore(counterReducer);

const root = document.getElementById('root');

createRoot(root).render(
  <Provider store={globalState}>
    <App />
  </Provider>
);
