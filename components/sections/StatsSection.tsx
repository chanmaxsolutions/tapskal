// components/Stats/index.tsx
'use client';

import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const stats = [
  { number: '500+', label: 'Projects Completed' },
  { number: '95%', label: 'Client Satisfaction' },
  { number: '10+', label: 'Years Experience' },
  { number: '250+', label: 'Active Clients' }
];

const AnimatedCounter = ({ value, duration = 2 }: { value: string; duration?: number }) => {
  const numberValue = parseInt(value.replace(/\D/g, ''));
  const hasPlus = value.includes('+');
  const hasPercent = value.includes('%');

  return (
    <motion.span
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {numberValue}
        {hasPlus && '+'}
        {hasPercent && '%'}
      </motion.span>
    </motion.span>
  );
};

const Stats = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section className="bg-primary py-20" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center text-white"
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-semibold mb-2">
                <AnimatedCounter value={stat.number} />
              </div>
              <p className="text-lg md:text-xl opacity-80 font-light">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;