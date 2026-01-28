import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Facebook, Instagram, Linkedin, ChevronRight, Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
// Asigură-te că ai componenta Logo sau șterge linia dacă nu o folosești
import Logo from '@/components/ui/Logo'; 

const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  // Efect pentru scroll
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Cataloage', path: '/cataloage' },
    { name: 'Colecții', path: '/colectii' },
    { name: 'Despre Noi', path: '/desprenoi' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <div className="min-h-screen flex flex-col font-sans text-gray-900">
      {/* --- HEADER --- */}
      <header 
        className={cn(
          "fixed top-0 w-full z-50 transition-all duration-300",
          isScrolled || !isHomePage ? "bg-white/95 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
        )}
      >
        <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
          {/* Logo */}
          {/* În loc de div-ul cu PM, pune asta: */}
          <Link to="/" className="flex items-center gap-2">
           <img src="/Logo.png" alt="Porte Milliem Logo" className="h-10 w-auto" />
            <span className={cn(
             "text-xl font-bold tracking-tight",
           isScrolled || !isHomePage ? "text-gray-900" : "text-white"
           )}>
    PORTE MILLIEM
  </span>
     </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-[#A32035] relative group py-2",
                  location.pathname === link.path 
                    ? "text-[#A32035]" 
                    : (isScrolled || !isHomePage ? "text-gray-700" : "text-white/90")
                )}
              >
                {link.name}
                <span className={cn(
                  "absolute bottom-0 left-0 w-full h-0.5 bg-[#A32035] transform scale-x-0 transition-transform origin-left group-hover:scale-x-100",
                  location.pathname === link.path && "scale-x-100"
                )} />
              </Link>
            ))}
            <Button 
              className={cn(
                "ml-4 rounded-full px-6 transition-all shadow-lg hover:shadow-xl",
                isScrolled || !isHomePage 
                  ? "bg-[#A32035] hover:bg-[#8a1b2d] text-white" 
                  : "bg-white text-[#A32035] hover:bg-gray-100"
              )}
            >
              Cere Ofertă
            </Button>
          </nav>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden text-gray-800">
                <Menu className={cn("h-6 w-6", !isScrolled && isHomePage && "text-white")} />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-l border-gray-100 p-0">
              <div className="p-6 border-b border-gray-100">
                <span className="text-xl font-bold text-[#A32035]">Meniu</span>
              </div>
              <div className="flex flex-col py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={cn(
                      "px-6 py-4 text-lg font-medium border-b border-gray-50 hover:bg-gray-50 hover:text-[#A32035] transition-colors flex items-center justify-between",
                      location.pathname === link.path && "text-[#A32035] bg-red-50/50"
                    )}
                  >
                    {link.name}
                    <ChevronRight className="h-4 w-4 opacity-50" />
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* --- CONTENT PRINCIPAL --- */}
      <main className="flex-grow pt-0">
        {/* Aici vine conținutul paginilor (Home, Contact etc.) */}
        <Outlet /> 
      </main>

      {/* --- FOOTER --- */}
      <footer className="bg-gray-900 text-white pt-20 pb-10 border-t border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-16">
            <div className="space-y-6">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded bg-[#A32035] flex items-center justify-center font-bold">PM</div>
                <span className="text-xl font-bold">PORTE MILLIEM</span>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Transformăm spațiile prin uși de interior și exterior ce îmbină perfecțiunea estetică cu inovația tehnică.
              </p>
              <div className="flex gap-4">
                {[Facebook, Instagram, Linkedin].map((Icon, i) => (
                  <a key={i} href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#A32035] transition-colors group">
                    <Icon className="h-5 w-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Navigare Rapidă</h3>
              <ul className="space-y-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-gray-400 hover:text-[#A32035] transition-colors flex items-center gap-2">
                      <ChevronRight className="h-4 w-4 text-[#A32035]" />
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Contact</h3>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-[#A32035] shrink-0 mt-1" />
                  <span>Strada Exemplului Nr. 12,<br />București, Sector 1</span>
                </li>
                <li className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-[#A32035] shrink-0" />
                  <span>+40 722 123 456</span>
                </li>
                <li className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-[#A32035] shrink-0" />
                  <span>contact@porte-milliem.ro</span>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-6">Program Showroom</h3>
              <ul className="space-y-3 text-gray-400">
                <li className="flex justify-between border-b border-gray-800 pb-2">
                  <span>Luni - Vineri</span>
                  <span className="text-white">09:00 - 18:00</span>
                </li>
                <li className="flex justify-between border-b border-gray-800 pb-2">
                  <span>Sâmbătă</span>
                  <span className="text-white">10:00 - 14:00</span>
                </li>
                <li className="flex justify-between pb-2">
                  <span>Duminică</span>
                  <span className="text-[#A32035]">Închis</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Porte Milliem. Toate drepturile rezervate.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Termeni și Condiții</a>
              <a href="#" className="hover:text-white transition-colors">Politica de Confidențialitate</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;