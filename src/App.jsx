import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Cataloage from './pages/Cataloage';
import Colectii from './pages/Colectii';
import DespreNoi from './pages/DespreNoi';

function App() {
  return (
    <Router>
      <Routes>
        {/* Layout este părintele care conține Header și Footer */}
        <Route path="/" element={<Layout />}>
          {/* Outlet din Layout va afișa aceste pagini aici: */}
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cataloage" element={<Cataloage />} />
          <Route path="colectii" element={<Colectii />} />
          <Route path="desprenoi" element={<DespreNoi />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;