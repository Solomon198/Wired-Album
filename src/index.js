import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import axios from 'axios';
import './app.css'

axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
