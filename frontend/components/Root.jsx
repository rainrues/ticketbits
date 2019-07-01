import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App.jsx';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
        <App />
    </HashRouter>
  </Provider>
);
  
export default Root;

// Need to impliment AWS photo storage