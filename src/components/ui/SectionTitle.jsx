import React from 'react';
import { motion } from 'framer-motion';

export default function SectionTitle({ title, subtitle, accent, centered = true, light = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className={`mb-12 ${centered ? 'text-center' : ''}`}
    >
      <h2 className={`text-3xl md:text-4xl font-light ${light ? 'text-white' : 'text-gray-800'}`}>
        {title} <span className="text-[#A32035] font-semibold">{accent}</span>
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg ${light ? 'text-white/80' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
      <div className={`mt-6 w-20 h-0.5 bg-[#A32035] ${centered ? 'mx-auto' : ''}`} />
    </motion.div>
  );
}