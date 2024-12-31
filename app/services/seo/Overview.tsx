// components/services/SEO/Overview.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Search, BarChart2, Globe, LineChart } from 'lucide-react';

const services = [
    {
        icon: <Search className="w-10 h-10" />,
        title: 'Technical SEO',
        description: 'Site optimization and structure improvements for better search engine visibility.',
    },
    {
        icon: <BarChart2 className="w-10 h-10" />,
        title: 'Content Strategy',
        description: 'Strategic content creation and optimization to rank for valuable keywords.',
    },
    {
        icon: <Globe className="w-10 h-10" />,
        title: 'Local SEO',
        description: 'Optimize your local presence to reach customers in your target area.',
    },
    {
        icon: <LineChart className="w-10 h-10" />,
        title: 'SEO Analytics',
        description: 'Comprehensive tracking and reporting of your search performance metrics.',
    },
];

const Overview = () => {
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
                            SEO Solutions
                        </h2>
                        <div className="space-y-6">
                            <p className="text-3xl text-gray-600 font-light tracking-tight">
                                Boost your visibility
                            </p>
                            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                                Strategic SEO solutions to improve your search rankings and drive organic traffic to your website.
                            </p>
                        </div>
                    </motion.div>

                    {/* Services Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="p-8 rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 bg-white"
                            >
                                <div className="w-16 h-16 flex items-center justify-center bg-secondary/5 rounded-xl mb-6">
                                    <div className="text-secondary">
                                        {service.icon}
                                    </div>
                                </div>
                                <h3 className="text-4xl md:text-5xl font-semibold mb-4 text-primary tracking-tighter">
                                    {service.title}
                                </h3>
                                <p className="text-xl text-gray-600 font-light">
                                    {service.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Overview;