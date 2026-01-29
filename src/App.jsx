import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Cataloage from './pages/Cataloage';
import Colectii from './pages/Colectii';
import DespreNoi from './pages/DespreNoi';
import { Toaster } from './components/ui/sonner';
import Chatbot from './components/Chatbot'; // 1. Adaugă importul acesta


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="cataloage" element={<Cataloage />} />
          <Route path="colectii" element={<Colectii />} />
          <Route path="desprenoi" element={<DespreNoi />} />
        </Route>
      </Routes>
      <Chatbot /> {/* 2. Adaugă componenta aici, sub Routes */}
      <Toaster position="top-center" richColors />
    </Router>
  );
}

export default App;