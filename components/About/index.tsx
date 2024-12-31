// components/About/index.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Content Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16">
            {/* Left Column - Big Impact Text */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-8"
            >
              <h2 className="text-7xl md:text-8xl lg:text-9xl font-semibold text-white/15 tracking-tighter">
                About
              </h2>
              <p className="text-4xl md:text-5xl font-semibold text-white tracking-tighter">
                We craft digital experiences that make a difference
              </p>
            </motion.div>

            {/* Right Column - Description and Values */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-12 md:pt-8"
            >
              <div className="space-y-6">
                <p className="text-xl text-white/80 font-light">
                  At Tapskal, we blend creativity with technical excellence to deliver exceptional digital solutions. Our approach is rooted in innovation, driven by results, and focused on your success.
                </p>
                <p className="text-xl text-white/80 font-light">
                  Through cutting-edge technology and strategic thinking, we help businesses transform their digital presence and achieve sustainable growth.
                </p>
              </div>

              {/* Values or Key Points */}
              <div className="grid grid-cols-2 gap-6">
                {[
                  { number: '01', label: 'Innovation First' },
                  { number: '02', label: 'Result Driven' },
                  { number: '03', label: 'Client Focused' },
                  { number: '04', label: 'Future Ready' }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="space-y-2"
                  >
                    <span className="text-2xl text-secondary font-light">{item.number}</span>
                    <p className="text-xl font-semibold text-white tracking-tight">{item.label}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;