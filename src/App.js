import React from 'react';
import logo from '../src/images/ya-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={logo} className="" alt="logo" />
        <p>
          The <code>youth action</code> website will be active here.
        </p>
        <a
          className="App-link"
          href="https://www.fridaysforfuture.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Associated With
        </a>
      </header>
    </div>
  );
}

export default App;
