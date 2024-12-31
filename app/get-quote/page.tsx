// app/get-quote/page.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import CountryCodeSelect from '@/components/ui/CountryCodeSelect';

const services = [
  { id: 'web-development', label: 'Web Development' },
  { id: 'performance-marketing', label: 'Performance Marketing' },
  { id: 'seo', label: 'Search Engine Optimization' },
  { id: 'ai-development', label: 'AI Agent Development' }
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+"
];

const GetQuote = () => {
  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-primary mb-12 hover:opacity-80 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary tracking-tighter">
                Get a Free Quote
              </h1>
              <p className="text-xl text-gray-600 font-light">
  Fill out the form below and we&apos;ll get back to you within 24 hours.
</p>
            </div>

            <form className="space-y-8">
              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                  required
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                  required
                />
              </div>

              {/* Phone Number with Country Code */}
              {/* Phone Number with Country Code */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <CountryCodeSelect 
    onChange={(code) => {
      // Handle the selected code
      console.log(code);
    }} 
  />
  <div className="md:col-span-2">
    <input
      type="tel"
      placeholder="Phone Number"
      className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
      required
    />
  </div>
</div>

              {/* Company Information */}
              <input
                type="text"
                placeholder="Company Name"
                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
              />

              {/* Services Selection */}
              <div className="space-y-4">
                <label className="text-lg text-gray-600 font-light">Services Required:</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <label 
                    key={service.id}
                    className="flex items-center space-x-3 p-4 rounded-xl border border-gray-200 cursor-pointer hover:border-primary transition-all duration-300 group"
                  >
                    <input
                      type="checkbox"
                      name="services"
                      value={service.id}
                      className="w-4 h-4 accent-secondary cursor-pointer"
                    />
                    <span className="text-gray-600 group-hover:text-primary transition-colors duration-300">
                      {service.label}
                    </span>
                  </label>
                  ))}
                </div>
              </div>

              {/* Budget Range */}
              <div className="space-y-4">
                <label className="text-lg text-gray-600 font-light">Project Budget:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {budgetRanges.map((range, index) => (
                    <label 
                    key={index}
                    className="flex items-center space-x-3 p-4 rounded-xl border border-gray-200 cursor-pointer hover:border-primary transition-all duration-300 group"
                  >
                    <input
                      type="radio"
                      name="budget"
                      value={range}
                      className="w-4 h-4 accent-secondary cursor-pointer"
                    />
                    <span className="text-gray-600 group-hover:text-primary transition-colors duration-300">
                      {range}
                    </span>
                  </label>
                  ))}
                </div>
              </div>

              {/* Project Details */}
              <textarea
                placeholder="Project Details"
                rows={6}
                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                required
              />

<button
  type="submit"
  className="w-fit mx-auto px-12 py-4 bg-primary text-white rounded-full text-xl hover:opacity-90 transition-all duration-300"
>
  Submit Request
</button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;