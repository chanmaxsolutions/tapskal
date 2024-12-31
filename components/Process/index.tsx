// components/Process/index.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const processes = [
  {
    step: '01',
    title: 'Discovery',
    description: 'We dive deep into understanding your business goals, challenges, and vision for the future.'
  },
  {
    step: '02',
    title: 'Strategy',
    description: 'Our team develops a tailored digital strategy aligned with your objectives and market opportunities.'
  },
  {
    step: '03',
    title: 'Development',
    description: 'We bring your vision to life through expert development, design, and implementation.'
  },
  {
    step: '04',
    title: 'Launch & Growth',
    description: 'Your solution goes live, backed by continuous optimization and support for sustainable growth.'
  }
];

const Process = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Title Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-secondary tracking-tighter">
              Our Process
            </h2>
            <div className="space-y-6">
              <p className="text-3xl text-gray-600 font-light tracking-tight">
                How we work
              </p>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                A streamlined approach to transforming your digital presence, from initial concept to successful execution.
              </p>
            </div>
          </motion.div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processes.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-8 rounded-xl bg-primary group"
              >
                <span className="text-5xl font-light text-secondary mb-4 block">
                  {process.step}
                </span>
                <h3 className="text-3xl md:text-4xl font-semibold text-white tracking-tighter mb-4">
                  {process.title}
                </h3>
                <p className="text-xl text-white/80 font-light">
                  {process.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;