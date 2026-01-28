import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function CollectionCard({ title, description, image, link, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden bg-white shadow-lg"
    >
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
        <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
        <p className="text-white/80 text-sm mb-4">{description}</p>
        <Link
          to={createPageUrl(link)}
          className="inline-flex items-center gap-2 text-[#c9a87c] hover:text-white transition-colors text-sm uppercase tracking-wider"
        >
          Descoperă <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
      
      <div className="p-6 group-hover:opacity-0 transition-opacity duration-300">
        <h3 className="text-gray-800 text-xl font-semibold">{title}</h3>
        <p className="text-gray-500 text-sm mt-2">{description}</p>
      </div>
    </motion.div>
  );
}