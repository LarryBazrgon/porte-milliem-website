import React from 'react';
import { motion } from 'framer-motion';
import { Download, Eye, FileText, Book } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

const catalogs = [
  {
    id: 1,
    title: 'Catalog General 2024',
    description: 'Toate colecțiile noastre într-un singur catalog complet.',
    pages: 156,
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    type: 'general'
  },
  {
    id: 2,
    title: 'Colecția Lăcuit',
    description: 'Eleganță și rafinament în finisaje lucioase și mate.',
    pages: 48,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=600&q=80',
    type: 'collection'
  },
  {
    id: 3,
    title: 'Colecția Laminat',
    description: 'Versatilitate și durabilitate pentru orice ambient.',
    pages: 42,
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&q=80',
    type: 'collection'
  },
  {
    id: 4,
    title: 'Colecția Cristal',
    description: 'Transparență și lumină cu inserții de sticlă.',
    pages: 36,
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&q=80',
    type: 'collection'
  },
  {
    id: 5,
    title: 'Colecția Lemn Masiv',
    description: 'Autenticitatea și căldura lemnului natural.',
    pages: 44,
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&q=80',
    type: 'collection'
  },
  {
    id: 6,
    title: 'Uși Antifoc REI',
    description: 'Certificări și specificații tehnice pentru siguranță.',
    pages: 28,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
    type: 'technical'
  }
];

export default function Cataloage() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[40vh] bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=1920&q=80)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl font-light text-white"
            >
              Cataloage
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-white/80 mt-4 text-lg"
            >
              Descoperă toate colecțiile noastre în format digital
            </motion.p>
          </div>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Book className="w-16 h-16 mx-auto text-[#A32035] mb-6" />
            <p className="text-gray-600 text-lg leading-relaxed">
              Răsfoiește cataloagele noastre pentru a descoperi întreaga gamă de uși interioare Condoleo Porte. 
              Fiecare catalog prezintă caracteristicile tehnice, opțiunile de personalizare și imaginile detaliate 
              ale produselor noastre.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Catalogs Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Cataloagele"
            accent="Noastre"
            subtitle="Descarcă sau vizualizează online cataloagele disponibile"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {catalogs.map((catalog, index) => (
              <motion.div
                key={catalog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg shadow-lg overflow-hidden group hover:shadow-2xl transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={catalog.image}
                    alt={catalog.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium uppercase tracking-wider ${
                      catalog.type === 'general' 
                        ? 'bg-[#A32035] text-white' 
                        : catalog.type === 'technical'
                        ? 'bg-gray-800 text-white'
                        : 'bg-white text-gray-800'
                    }`}>
                      {catalog.type === 'general' ? 'General' : catalog.type === 'technical' ? 'Tehnic' : 'Colecție'}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{catalog.title}</h3>
                  <p className="text-gray-500 text-sm mb-4">{catalog.description}</p>
                  
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                    <FileText className="w-4 h-4" />
                    <span>{catalog.pages} pagini</span>
                  </div>

                  <div className="flex gap-3">
                    <button className="flex-1 flex items-center justify-center gap-2 bg-[#A32035] text-white py-3 px-4 hover:bg-[#8a1b2d] transition-colors text-sm font-medium rounded">
                      <Download className="w-4 h-4" />
                      Descarcă
                    </button>
                    <button className="flex items-center justify-center gap-2 border border-gray-300 text-gray-700 py-3 px-4 hover:bg-gray-50 transition-colors text-sm font-medium rounded">
                      <Eye className="w-4 h-4" />
                      Vizualizează
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Catalog Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-gray-900 rounded-2xl p-8 md:p-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl md:text-3xl font-light text-white mb-4">
                Dorești un catalog fizic?
              </h2>
              <p className="text-gray-400 mb-8">
                Trimitem gratuit cataloagele tipărite direct la adresa ta.
              </p>
              
              <form className="max-w-md mx-auto space-y-4">
                <input
                  type="text"
                  placeholder="Nume și prenume"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:border-[#A32035]"
                />
                <input
                  type="email"
                  placeholder="Adresă email"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:border-[#A32035]"
                />
                <input
                  type="text"
                  placeholder="Adresă de livrare"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded text-white placeholder-gray-400 focus:outline-none focus:border-[#A32035]"
                />
                <button
                  type="submit"
                  className="w-full bg-[#A32035] text-white py-3 px-6 hover:bg-[#8a1b2d] transition-colors text-sm uppercase tracking-wider font-medium rounded"
                >
                  Solicită catalog gratuit
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}