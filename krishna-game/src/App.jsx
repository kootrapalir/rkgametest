import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainMenu from './components/MainMenu';
import GameWorld from './components/GameWorld';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainMenu />} />
          <Route path="/game" element={<GameWorld />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
