import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

const link = document.createElement('link');
link.rel = 'stylesheet';
link.href = "https://cdn.jsdelivr.net/npm/water.css@2/out/dark.css";
// link.href = "https://cdn.jsdelivr.net/npm/water.css@2/out/water.css";
document.head.appendChild(link);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
