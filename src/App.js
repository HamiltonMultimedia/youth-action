import React from 'react';
import logo from '../src/images/ya-logo.png';
import './App.css';

function App() {
  return (
    <div className="App">
    
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <img src={logo} className="" alt="logo" style={{width:'56%'}}/>
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
      <div style={{padding: '56.25% 0 0 0', position: 'relative'}}><iframe src="https://player.vimeo.com/video/354777368?autoplay=1&title=0&byline=0&portrait=0" style={{position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}} frameBorder={0} allow="autoplay; fullscreen" allowFullScreen /></div>
        <p>If The Video Is Not Playing <a href="https://vimeo.com/354777368">Click Here</a>!</p><p />
    </div>
  );
}

export default App;
