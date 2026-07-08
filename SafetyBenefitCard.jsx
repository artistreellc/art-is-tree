import React from 'react';
import { motion } from 'framer-motion';

const SafetyBenefitCard = ({ icon: Icon, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 p-6 border border-gray-100 flex flex-col items-start h-full"
    >
      <div className="bg-blue-50 p-3 rounded-full mb-4">
        <Icon className="w-8 h-8 text-blue-600" />
      </div>
      <h3 className="font-playfair text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="font-inter text-gray-600 text-sm leading-relaxed">{description}</p>
    </motion.div>
  );
};

export default SafetyBenefitCard;