import React from 'react';
import { motion } from 'framer-motion';
import { Target, Heart, Eye, CheckCircle } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

const values = [
  {
    icon: Heart,
    title: 'Pasiune',
    description: 'Pasiunea pentru meșteșugul nostru ne ghidează în fiecare proiect.'
  },
  {
    icon: Target,
    title: 'Calitate',
    description: 'Ne concentrăm pe calitatea superioară a fiecărui produs.'
  },
  {
    icon: Eye,
    title: 'Inovație',
    description: 'Căutăm constant noi tehnologii și design-uri moderne.'
  }
];

const milestones = [
  { year: '1980', title: 'Înființare', description: 'Fondarea companiei în Italia' },
  { year: '1995', title: 'Expansiune', description: 'Prima fabrică modernă de producție' },
  { year: '2010', title: 'Inovație', description: 'Introducerea tehnologiilor avansate' },
  { year: '2024', title: 'Prezent', description: 'Lider pe piața ușilor interioare' }
];

export default function DespreNoi() {
  return (
    <div>
      {/* Hero Section */}
      <section 
        className="relative h-[50vh] bg-cover bg-center"
        style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1920&q=80)' }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative h-full flex items-center justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-light text-white"
          >
            Compania Porte Milliem
          </motion.h1>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-light text-gray-800 mb-2">
                  Maeștri <span className="text-[#A32035] font-semibold">Tâmplari din 1980</span>
                </h2>
                <div className="w-20 h-0.5 bg-[#A32035] mb-8" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6 text-gray-600 leading-relaxed"
              >
                <p>
                  Compania noastră activează din 1980 în sectorul lemnului, dar doar în ultimii zece ani 
                  s-a concentrat pe întreaga producție pentru realizarea ușilor interioare. Tehnica și 
                  perseverența cu care compania s-a concentrat pe producția de uși a făcut ca în scurt 
                  timp Porte Milliem să se alăture marilor realități prezente în acest sector.
                </p>

                <p>
                  Sectorul ușilor reprezintă astăzi Core Business-ul companiei, care și-a început 
                  producția cu o singură linie de uși, ajungând astăzi să aibă un portofoliu de 
                  produse capabil să ofere o gamă completă de uși interioare.
                </p>

                <p>
                  Colectăm peste 10 colecții care acoperă sectoare diverse, stiluri de la clasic la 
                  modern, diferite tipologii de preț, de la ușa economică la modelele super luxoase, 
                  și diverse tendințe pentru a reuși să satisfacem cele mai variate exigențe, toate 
                  modelele fiind unite de un singur aspect: marca Porte Milliem care este în același 
                  timp sinonim de calitate, grijă și inovație.
                </p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&q=80"
                alt="Sediul Porte Milliem"
                className="w-full rounded-lg shadow-xl"
              />
              <p className="text-sm text-gray-500 text-right">Sediul Porte Milliem srl</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?w=800&q=80"
                alt="Fabrica noastră"
                className="w-full rounded-lg shadow-xl"
              />
            </motion.div>

            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-light text-gray-800 mb-2">
                  <span className="text-[#A32035] font-semibold">Misiunea</span> Noastră
                </h2>
                <div className="w-20 h-0.5 bg-[#A32035] mb-8" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6 text-gray-600 leading-relaxed"
              >
                <p>
                  Pasiune, cercetare, calitate și ambient. Acestea sunt punctele cardinale ale tuturor 
                  parcursurilor Porte Milliem. O companie care se distinge întotdeauna prin vocația 
                  înnăscută către excelență, astfel cum se vede în grija și selecția materialelor. 
                  Filosofia mereu la baza drumului companiei.
                </p>

                <p>
                  De peste treizeci de ani traducem în profesionalism pasiunea pentru modernitatea 
                  tehnologică și îndemânarea artizanală. Producător de uși interioare și creatori 
                  de soluții pentru amenajare cu stil.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Valorile"
            accent="Noastre"
            subtitle="Principiile care ne ghidează în fiecare zi"
          />

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
                className="text-center p-8 bg-gray-50 rounded-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-6 bg-[#A32035]/10 rounded-full flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-[#A32035]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{value.title}</h3>
                <p className="text-gray-500 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Istoria"
            accent="Noastră"
            light={true}
          />

          <div className="mt-16 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white/20" />
            
            <div className="space-y-16">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.15 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-12' : 'text-left pl-12'}`}>
                    <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg">
                      <span className="text-[#A32035] text-4xl font-bold">{milestone.year}</span>
                      <h4 className="text-white text-xl font-semibold mt-2">{milestone.title}</h4>
                      <p className="text-gray-400 mt-2">{milestone.description}</p>
                    </div>
                  </div>
                  
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#A32035] rounded-full border-4 border-gray-900" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <SectionTitle
            title="Certificări și"
            accent="Garanții"
            subtitle="Calitate certificată conform standardelor europene"
          />

          <div className="grid md:grid-cols-4 gap-6 mt-12">
            {['ISO 9001', 'CE Mark', 'FSC Certified', 'REI Certification'].map((cert, index) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center gap-3 p-6 bg-gray-50 rounded-lg"
              >
                <CheckCircle className="w-8 h-8 text-[#A32035]" />
                <span className="font-semibold text-gray-800">{cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}