import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Calc from './Calc';
import * as serviceWorker from './serviceWorker';

//let values = { x:"aaa", y:"bbb", oper:"/" };
// ReactDOM.render(
//   <React.StrictMode>
//     <Calc {...values} />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

ReactDOM.render(
  <React.StrictMode>
    <Calc />
  </React.StrictMode>,
  document.getElementById('root')
);
serviceWorker.unregister();
