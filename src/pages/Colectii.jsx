import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

const collections = [
  {
    id: 'lacuit',
    name: 'Colecția Lăcuit',
    description: 'Linii fine, Forme Fluide și Geometrice. Produse finisate artizanal manual pentru o eleganță desăvârșită.',
    longDescription: 'Colecția Lăcuit reprezintă excelența în finisajele lucioase și mate. Fiecare ușă este realizată cu atenție la detalii, oferind suprafețe perfecte și culori vibrante care transformă orice spațiu.',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200&q=80',
    features: ['Finisaje lucioase și mate', 'Personalizare culori RAL', 'Mânere integrate', 'Balamale ascunse']
  },
  {
    id: 'laminat',
    name: 'Colecția Laminat',
    description: 'Personalizează-ți Ușa făcând-o Unică și Elegantă cu inserții, gravuri și decorațiuni.',
    longDescription: 'Versatilitate și durabilitate definesc Colecția Laminat. Oferim o gamă largă de texturi și culori care imită perfect lemnul natural, la un preț accesibil și cu întreținere minimă.',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=1200&q=80',
    features: ['Rezistență la zgârieturi', 'Ușor de întreținut', 'Varietate mare de culori', 'Efect lemn natural']
  },
  {
    id: 'cristal',
    name: 'Colecția Cristal',
    description: 'Ușurința cristalului cu diverse decoruri și compoziții pentru spații luminoase.',
    longDescription: 'Colecția Cristal aduce lumină și eleganță în orice ambient. Ușile cu inserții de sticlă securizată oferă transparență și stil, perfecte pentru birouri și spații moderne.',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&q=80',
    features: ['Sticlă securizată', 'Design-uri decorative', 'Transmisie luminoasă', 'Rezistență ridicată']
  },
  {
    id: 'lemn',
    name: 'Colecția Lemn Masiv',
    description: 'Căldura și noblețea lemnului natural pentru un ambient clasic și rafinat.',
    longDescription: 'Pentru cei care apreciază autenticitatea, Colecția Lemn Masiv oferă uși fabricate din cele mai fine esențe lemnoase. Fiecare piesă este unică, cu granulatură și texturi naturale.',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=1200&q=80',
    features: ['Lemn natural 100%', 'Esențe nobile', 'Durabilitate excepțională', 'Finisaje ecologice']
  },
  {
    id: 'filomuro',
    name: 'Colecția Filo Muro',
    description: 'Uși la nivelul peretelui pentru un design minimalist și contemporan.',
    longDescription: 'Colecția Filo Muro reprezintă viitorul design-ului interior. Ușile sunt montate la același nivel cu peretele, creând continuitate vizuală și un aspect ultra-modern.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1200&q=80',
    features: ['Montaj la nivelul peretelui', 'Design invizibil', 'Balamale speciale', 'Aspect minimalist']
  },
  {
    id: 'antifoc',
    name: 'Colecția Antifoc',
    description: 'Uși certificate REI pentru siguranță maximă în spații comerciale și hoteluri.',
    longDescription: 'Siguranța pe primul loc cu Colecția Antifoc. Ușile noastre sunt certificate conform normelor europene, oferind protecție împotriva incendiilor pentru clădiri comerciale și rezidențiale.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1200&q=80',
    features: ['Certificare REI 30/60/90', 'Conformitate europeană', 'Izolare termică', 'Sigilii intumescente']
  }
];

export default function Colectii() {
  const [selectedCollection, setSelectedCollection] = useState(null);

  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[40vh] bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1920&q=80)' }}
      >
        <div className="absolute inset-0 bg-[#A32035]/80" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-light text-white"
            >
              Uși Interioare – Colecții
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 mt-4 text-lg"
            >
              Ușile noastre, alchimie între design și tradiție
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-[#A32035] font-light leading-relaxed"
          >
            Ușile noastre interioare se nasc pentru a oferi emoții estetice, tactile și funcționale.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-20 h-0.5 bg-[#A32035] mx-auto mt-8"
          />
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-gray-600 mt-8 leading-relaxed"
          >
            Protagoniste ale casei, ușile interioare dictează stilul conferind caracter oricărui ambient domestic. 
            Produsele Porte Milliem, realizate cu tehnologie modernă, reușesc să îmbine perfect inovația cu 
            măiestria artizanală tradițională.
          </motion.p>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
                onClick={() => setSelectedCollection(collection)}
              >
                <div className="relative overflow-hidden rounded-lg shadow-lg">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-white text-2xl font-semibold mb-2">{collection.name}</h3>
                    <p className="text-white/80 text-sm line-clamp-2">{collection.description}</p>
                    
                    <div className="mt-4 flex items-center gap-2 text-[#c9a87c] group-hover:text-white transition-colors">
                      <span className="text-sm uppercase tracking-wider">Descoperă</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Collection Modal */}
      <AnimatePresence>
        {selectedCollection && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedCollection(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedCollection.image}
                  alt={selectedCollection.name}
                  className="w-full h-64 md:h-80 object-cover"
                />
                <button
                  onClick={() => setSelectedCollection(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-8">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">{selectedCollection.name}</h2>
                <p className="text-gray-600 leading-relaxed mb-8">{selectedCollection.longDescription}</p>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Caracteristici principale:</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {selectedCollection.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg">
                      <div className="w-2 h-2 bg-[#A32035] rounded-full" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 flex justify-end">
                  <button
                    onClick={() => setSelectedCollection(null)}
                    className="bg-[#A32035] text-white px-8 py-3 hover:bg-[#8a1b2d] transition-colors text-sm uppercase tracking-wider"
                  >
                    Solicită ofertă
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="py-20 bg-[#A32035]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-light text-white mb-6">
            Nu găsești ce cauți?
          </h2>
          <p className="text-white/80 text-lg mb-8">
            Contactează-ne pentru o consultație personalizată. Echipa noastră te va ajuta să găsești ușa perfectă pentru proiectul tău.
          </p>
          <a
            href="/Contact"
            className="inline-flex items-center gap-2 bg-white text-[#A32035] px-10 py-4 hover:bg-gray-100 transition-colors text-sm uppercase tracking-wider font-medium"
          >
            Contactează-ne <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>
    </div>
  );
}