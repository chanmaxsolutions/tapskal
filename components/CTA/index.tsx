// components/CTA/index.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-28 bg-secondary">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center space-y-8"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter">
              Ready to Transform Your Digital Presence?
            </h2>
            <p className="text-xl md:text-2xl text-white/80 font-light max-w-3xl mx-auto">
  Get in touch with us today and let&apos;s discuss how we can help your business grow in the digital landscape.
</p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Link 
                href="/get-quote" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full text-xl hover:opacity-90 transition-all duration-300"
              >
                Get a Free Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;