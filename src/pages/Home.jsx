import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Award, Shield, Palette, Wrench, ArrowRight } from 'lucide-react';
import HeroSlider from '@/components/ui/HeroSlider';
import SectionTitle from '@/components/ui/SectionTitle';
import CollectionCard from '@/components/ui/CollectionCard';
import FeatureCard from '@/components/ui/FeatureCard';

const collections = [
  {
    title: 'Colecția Lăcuit',
    description: 'Eleganță pură cu finisaje lăcuite impecabile',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
    link: 'Colectii'
  },
  {
    title: 'Colecția Laminat',
    description: 'Versatilitate și durabilitate pentru orice ambient',
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80',
    link: 'Colectii'
  },
  {
    title: 'Colecția Cristal',
    description: 'Lumină și transparență cu inserții de sticlă',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&q=80',
    link: 'Colectii'
  },
  {
    title: 'Colecția Lemn',
    description: 'Căldura și noblețea lemnului natural',
    image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
    link: 'Colectii'
  }
];

const features = [
  {
    icon: Award,
    title: 'Calitate Garantată',
    description: 'Peste 40 de ani de excelență în producția de uși interioare de înaltă calitate.'
  },
  {
    icon: Palette,
    title: 'Design Personalizat',
    description: 'Fiecare ușă poate fi personalizată conform preferințelor și nevoilor dumneavoastră.'
  },
  {
    icon: Shield,
    title: 'Materiale Premium',
    description: 'Folosim doar materiale de cea mai înaltă calitate pentru durabilitate maximă.'
  },
  {
    icon: Wrench,
    title: 'Instalare Profesională',
    description: 'Echipa noastră de specialiști asigură montajul perfect al fiecărei uși.'
  }
];

export default function Home() {
  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Production Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Producție"
            accent="uși interioare"
            subtitle="Uși moderne, clasice, uși interioare filo muro, antifoc cu certificări REI, uși pentru hoteluri."
          />
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <Link
              to={createPageUrl('Colectii')}
              className="inline-flex items-center gap-2 bg-[#A32035] text-white px-8 py-4 hover:bg-[#8a1b2d] transition-colors text-sm uppercase tracking-wider"
            >
              Vezi toate colecțiile <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Descoperă"
            accent="Colecțiile Noastre"
            subtitle="Alegeți din gama noastră variată de uși interioare, fiecare colecție cu caracteristici unice."
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {collections.map((collection, index) => (
              <CollectionCard key={collection.title} {...collection} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-light text-gray-800 mb-6">
                Maeștri <span className="text-[#A32035] font-semibold">Tâmplari din 1980</span>
              </h2>
              <div className="w-20 h-0.5 bg-[#A32035] mb-8" />
              
              <p className="text-gray-600 leading-relaxed mb-6">
                Compania noastră activează din 1980 în sectorul lemnului, dar doar în ultimii zece ani 
                s-a concentrat pe întreaga producție pentru realizarea ușilor interioare. Tehnica și 
                perseverența cu care compania s-a concentrat pe producția de uși a făcut ca în scurt 
                timp Porte Milliem să se alăture marilor realități prezente în acest sector.
              </p>
              
              <p className="text-gray-600 leading-relaxed mb-8">
                Sectorul ușilor reprezintă astăzi Core Business-ul companiei, care și-a început 
                producția cu o singură linie de uși, ajungând astăzi să aibă un portofoliu de 
                produse capabil să ofere o gamă completă de uși interioare.
              </p>
              
              <Link
                to={createPageUrl('DespreNoi')}
                className="inline-flex items-center gap-2 text-[#A32035] hover:text-[#8a1b2d] transition-colors text-sm uppercase tracking-wider font-medium"
              >
                Află mai multe despre noi <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Sediul Porte Milliem"
                className="w-full rounded-lg shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-[#A32035] text-white p-6 rounded-lg shadow-xl">
                <p className="text-4xl font-bold">40+</p>
                <p className="text-sm uppercase tracking-wider">Ani de experiență</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="De ce să alegi"
            accent="Porte Milliem"
            light={true}
          />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {features.map((feature, index) => (
              <FeatureCard key={feature.title} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section 
        className="py-32 bg-cover bg-center bg-fixed relative"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1920&q=80)' }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-light text-white mb-6"
          >
            Pregătit să transformi spațiul tău?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Contactează-ne astăzi pentru o consultație gratuită și descoperă ușa perfectă pentru casa ta.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link
              to={createPageUrl('Contact')}
              className="inline-flex items-center gap-2 bg-[#A32035] text-white px-10 py-4 hover:bg-[#8a1b2d] transition-colors text-sm uppercase tracking-wider"
            >
              Contactează-ne <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}