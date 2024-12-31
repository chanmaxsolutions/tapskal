// components/services/PerformanceMarketing/Overview.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Target, TrendingUp, BarChart2, PieChart } from 'lucide-react';

const services = [
    {
        icon: <Target className="w-10 h-10" />,
        title: 'Paid Advertising',
        description: 'Strategic paid campaigns across Google, Meta, and other platforms to reach your target audience.',
    },
    {
        icon: <TrendingUp className="w-10 h-10" />,
        title: 'Growth Strategy',
        description: 'Data-driven strategies to scale your business and achieve sustainable growth.',
    },
    {
        icon: <BarChart2 className="w-10 h-10" />,
        title: 'Analytics',
        description: 'Advanced tracking and reporting to measure campaign performance and ROI.',
    },
    {
        icon: <PieChart className="w-10 h-10" />,
        title: 'Conversion Rate',
        description: 'Optimize your conversion funnel to maximize return on ad spend.',
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
                            Marketing Solutions
                        </h2>
                        <div className="space-y-6">
                            <p className="text-3xl text-gray-600 font-light tracking-tight">
                                Drive growth with data
                            </p>
                            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                                Leverage data-driven marketing strategies to accelerate your business growth and maximize ROI across all digital channels.
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