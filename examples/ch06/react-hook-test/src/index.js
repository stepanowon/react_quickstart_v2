import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
//import App from "./App01";
//import App from "./App02";
//import App from "./App03";
//import App from "./App04";
//import App from "./App05";
//import App from "./App06";
//import App from "./App07";
//import App from "./App08";
//import App from "./App09";
//import App from "./App10";
import App from "./App11";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
