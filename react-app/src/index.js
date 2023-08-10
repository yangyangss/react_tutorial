import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'
import './index.css'

//设置移动端的适配
document.documentElement.style.fontSize=100 /750 + 'vw';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //React.StrictMode - 使用严格的模式去渲染React
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
