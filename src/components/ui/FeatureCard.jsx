import React from 'react';
import { motion } from 'framer-motion';

export default function FeatureCard({ icon: Icon, title, description, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      viewport={{ once: true }}
      className="text-center p-8 bg-white rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300"
    >
      <div className="w-16 h-16 mx-auto mb-6 bg-[#A32035]/10 rounded-full flex items-center justify-center">
        <Icon className="w-8 h-8 text-[#A32035]" />
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-500 leading-relaxed">{description}</p>
    </motion.div>
  );
}