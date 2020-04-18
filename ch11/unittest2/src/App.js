import React from 'react';
import logo from './logo.svg';
import './App.css';

import Link from '../../unittest2/src/components/Link';
import Clock from '../../unittest2/src/components/Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Link><h2>테스트 링크</h2></Link>
        <Clock />
      </header>
    </div>
  );
}

export default App;
