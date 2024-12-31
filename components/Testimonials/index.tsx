// components/Testimonials/index.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Working with Tapskal has been transformative for our business. Their expertise in digital marketing and web development helped us achieve remarkable growth.",
    author: "Sarah Johnson",
    position: "CEO, TechStart Inc",
  },
  {
    quote: "The AI solutions provided by Tapskal revolutionized our customer service. Their innovative approach and technical excellence are unmatched.",
    author: "Michael Chen",
    position: "CTO, InnovateAI",
  },
  {
    quote: "Their performance marketing strategies delivered exceptional ROI. The team's dedication and expertise make them a valuable partner.",
    author: "Emma Davis",
    position: "Marketing Director, GrowthBox",
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 bg-white">
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
              Client Stories
            </h2>
            <div className="space-y-6">
            <p className="text-3xl text-gray-600 font-light tracking-tight">
  What they&apos;re saying
</p>
              <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                Discover how we've helped businesses transform their digital presence and achieve remarkable success through our innovative solutions.
              </p>
            </div>
          </motion.div>

          {/* Testimonials Carousel */}
          <div className="relative">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: activeIndex === index ? 1 : 0,
                  x: activeIndex === index ? 0 : 20
                }}
                transition={{ duration: 0.5 }}
                className={`text-center max-w-4xl mx-auto ${activeIndex === index ? 'block' : 'hidden'}`}
              >
                <p className="text-3xl md:text-4xl lg:text-5xl text-primary font-light mb-12 tracking-tighter">
  &ldquo;{testimonial.quote}&rdquo;
</p>
                <div className="space-y-3">
                  <p className="text-2xl font-semibold text-secondary">{testimonial.author}</p>
                  <p className="text-xl text-gray-600 font-light">{testimonial.position}</p>
                </div>
              </motion.div>
            ))}

            {/* Navigation Dots */}
            <div className="flex justify-center items-center space-x-4 mt-16">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 
                    ${activeIndex === index ? 'bg-primary w-8' : 'bg-gray-300'}`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;