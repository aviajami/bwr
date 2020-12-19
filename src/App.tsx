import React from 'react';
import './App.css';
import './components/header/TopBar';
import { TopBar } from './components/header/TopBar';
import { LMap } from './components/Map/LMap';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TopBar></TopBar>
      </header>
      <div className="main">
        <LMap></LMap>
      </div>
    </div>
  );
}

export default App;
