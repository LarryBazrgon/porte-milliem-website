import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80',
    topHeading: 'PORTE MILLIEM DIN 1980',
    heading: 'Deschide către perfecțiune\nAMENAJEAZĂ-ȚI CASA',
    content: 'Producători de uși și sisteme de închidere',
    link: '/desprenoi' // Corectat din /despre-noi
  },
  {
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1920&q=80',
    topHeading: 'Produse finisate artizanal manual',
    heading: 'Linii fine, Forme Fluide și Geometrice\nCOLECȚIA LĂCUIT',
    content: 'Uși Interioare Colecția Lăcuit',
    link: '/colectii'
  },
  {
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1920&q=80',
    topHeading: 'Fiecărui Ambient Ușa Sa',
    heading: 'Personalizează-ți Ușa făcând-o\nUNICĂ și ELEGANTĂ',
    content: 'Uși din Laminat personalizate cu inserții, gravuri și decorațiuni',
    link: '/colectii'
  },
  {
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80',
    topHeading: 'Uși din sticlă',
    heading: 'Colecția Cristal\nEXCLUSIVE ȘI PREȚIOASE',
    content: 'Ușurința cristalului cu diverse decoruri și compoziții',
    link: '/colectii'
  }
];

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index) => setCurrentSlide(index);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-full h-[70vh] md:h-[85vh] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
          >
            <div className="absolute inset-0 bg-black/40" />
          </div>
          
          <div className="relative h-full flex items-center justify-center">
            <div className="text-center text-white px-4 max-w-4xl">
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-sm md:text-base tracking-[0.3em] text-[#c9a87c] uppercase mb-4"
              >
                {slides[currentSlide].topHeading}
              </motion.p>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="text-3xl md:text-5xl lg:text-6xl font-light leading-tight whitespace-pre-line mb-6"
              >
                {slides[currentSlide].heading}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="text-base md:text-lg font-light mb-8"
              >
                {slides[currentSlide].content}
              </motion.p>
              
              {/* BUTOANELE DIN SLIDER */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                {/* Butonul dinamic (Descoperă mai mult / Colecții) */}
                <Link
                  to={slides[currentSlide].link}
                  className="px-8 py-3 border-2 border-white text-white hover:bg-white hover:text-gray-900 transition-all duration-300 tracking-wider text-sm uppercase"
                >
                  Descoperă mai mult
                </Link>
              {/*
              
                {/* Butonul de Contact (care merge mereu la pagina de contact) }
                <Link
                  to="/contact"
                  className="px-8 py-3 bg-[#A32035] border-2 border-[#A32035] text-white hover:bg-[#8a1b2d] hover:border-[#8a1b2d] transition-all duration-300 tracking-wider text-sm uppercase"
                >
                  Contactează-ne
                </Link>
            */}
            
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Săgeți Navigare */}
      <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10">
        <ChevronLeft className="w-10 h-10" />
      </button>
      <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white z-10">
        <ChevronRight className="w-10 h-10" />
      </button>

      {/* Indicatoare Slide */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-1 transition-all duration-300 ${
              index === currentSlide ? 'w-12 bg-[#A32035]' : 'w-6 bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}