import React from 'react';
import Home from './component/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import TopNavbar from './component/TopNavbar';

function App() {

  return (
    <BrowserRouter>
      <TopNavbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
