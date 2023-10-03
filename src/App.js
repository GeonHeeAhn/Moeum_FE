import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Entrance from './Pages/Entrance';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Entrance />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
