import React from 'react';
import Home from './component/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
