// components/services/AIDevelopment/Overview.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Bot, MessageSquare, Workflow } from 'lucide-react';

const services = [
    {
        icon: <Brain className="w-10 h-10" />,
        title: 'Custom AI Solutions',
        description: 'Tailored artificial intelligence solutions designed for your specific business needs.',
    },
    {
        icon: <Bot className="w-10 h-10" />,
        title: 'AI Chatbots',
        description: 'Intelligent chatbots that enhance customer service and automate interactions.',
    },
    {
        icon: <MessageSquare className="w-10 h-10" />,
        title: 'NLP Integration',
        description: 'Natural Language Processing solutions for advanced text and speech analysis.',
    },
    {
        icon: <Workflow className="w-10 h-10" />,
        title: 'Process Automation',
        description: 'AI-powered automation to streamline your business operations.',
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
                            AI Solutions
                        </h2>
                        <div className="space-y-6">
                            <p className="text-3xl text-gray-600 font-light tracking-tight">
                                Power your future
                            </p>
                            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                                Leverage artificial intelligence to transform your business operations and create exceptional user experiences.
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