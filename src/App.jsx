import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Cataloage from './pages/Cataloage';
import Colectii from './pages/Colectii';
import DespreNoi from './pages/DespreNoi';
import { Toaster } from './components/ui/sonner';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout currentPageName="Home"><Home /></Layout>} />
        <Route path="/home" element={<Layout currentPageName="Home"><Home /></Layout>} />
        <Route path="/contact" element={<Layout currentPageName="Contact"><Contact /></Layout>} />
        <Route path="/cataloage" element={<Layout currentPageName="Cataloage"><Cataloage /></Layout>} />
        <Route path="/colectii" element={<Layout currentPageName="Colectii"><Colectii /></Layout>} />
        <Route path="/desprenoi" element={<Layout currentPageName="DespreNoi"><DespreNoi /></Layout>} />
      </Routes>
      <Toaster />
    </Router>
  );
}

export default App;