// components/Services/index.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Globe2, 
  BarChart3, 
  Search, 
  BrainCircuit
} from 'lucide-react';

const services = [
  {
    icon: <Globe2 className="w-8 h-8" />,
    title: 'Website Development',
    description: 'Custom websites and web applications built with cutting-edge technology.'
  },
  {
    icon: <BarChart3 className="w-8 h-8" />,
    title: 'Performance Marketing',
    description: 'Data-driven campaigns that deliver measurable results and ROI.'
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: 'Search Engine Optimization',
    description: 'Strategic SEO services to improve your search rankings.'
  },
  {
    icon: <BrainCircuit className="w-8 h-8" />,
    title: 'AI Agent Development',
    description: 'Custom AI solutions to automate your business processes.'
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Title Column */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-secondary">
              Our Services
            </h2>
            <p className="text-3xl text-gray-600 font-light">
              Comprehensive digital solutions
            </p>
            <div className="space-y-4">
  
</div>
          </motion.div>

          {/* Services Column */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group p-6 rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-lg hover:shadow-secondary/5 bg-white"
                >
                  <div className="text-secondary mb-4 p-3 bg-secondary/5 rounded-lg inline-block ">
                    {service.icon}
                  </div>
                  <h3 className="text-4xl font-semibold mb-3 text-primary">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 font-light text-xl">
                    {service.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;