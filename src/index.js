import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import MyHooks from './hook_examples' 
import reportWebVitals from './reportWebVitals';

// create the react document object model (dom)
// which us used to create the html dom dynamically
const root = ReactDOM.createRoot(document.getElementById('root'));

// render the react dom
root.render(
  <React.StrictMode>

    {/* use module named App imported in line 4*/}
    <App />
    
    {/* execute method MyHooks imported from file hooks:examples.js in line 5*/}
    <MyHooks />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
