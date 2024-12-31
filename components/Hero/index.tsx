// components/Hero/index.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white">
      

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.1 }}
          className="text-center max-w-5xl mx-auto"
        >
          <h1 className="text-6xl md:text-7xl lg:text-9xl max-w-4xl font-semibold mb-8 ">
            <span className="text-primary">Marketing </span>
            <span className="text-secondary">
              Agency
            </span>
          </h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.0, duration: 0.1 }}
            className="text-2xl md:text-2xl lg:text-3xl text-gray-600 font-light mb-12 max-w-4xl mx-auto "
          >
            Elevate your brand with cutting-edge digital marketing strategies. 
            We turn your vision into{' '}
            <span className="relative inline-block">
              measurable success
              <span className="absolute left-0 bottom-1 w-full h-2 bg-secondary/20 -z-10"></span>
            </span>.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.1 }}
            className="flex flex-wrap gap-6 justify-center"
          >
            <button className="button-primary text-xl px-12 py-4">
              Get Started
            </button>
            <button className="px-12 py-4 border-2 border-primary text-primary rounded-full hover:bg-primary hover:text-white transition-all duration-300 font-sans text-xl">
              Learn More
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;