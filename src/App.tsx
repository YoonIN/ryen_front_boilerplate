import React, { useEffect, useState } from 'react';
import SideBar from '../src/components/common/sidebar/sidebar';
import './App.css';

function App() {
  const [value, setValue] = useState('1');
  useEffect(() => {
    console.log(value);
  }, []);
  return (
    <>
      <SideBar />
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </>
  );
}

export default App;
