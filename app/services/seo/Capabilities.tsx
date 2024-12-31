// components/services/SEO/Capabilities.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const capabilities = [
    {
        title: 'Technical SEO',
        skills: [
            'Site Architecture',
            'Speed Optimization',
            'Mobile Optimization',
            'Schema Markup'
        ]
    },
    {
        title: 'On-Page SEO',
        skills: [
            'Keyword Research',
            'Content Optimization',
            'Meta Tags Setup',
            'Internal Linking'
        ]
    },
    {
        title: 'Off-Page SEO',
        skills: [
            'Link Building',
            'Brand Mentions',
            'Local Citations',
            'Social Signals'
        ]
    },
    {
        title: 'SEO Analytics',
        skills: [
            'Rank Tracking',
            'Traffic Analysis',
            'Conversion Tracking',
            'ROI Measurement'
        ]
    }
];

const Capabilities = () => {
    return (
        <section className="py-20 bg-primary">
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
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-white tracking-tighter">
                            Our Capabilities
                        </h2>
                        <div className="space-y-6">
                            <p className="text-3xl text-white/80 font-light tracking-tight">
                                SEO expertise
                            </p>
                            <p className="text-xl text-white/80 font-light max-w-3xl mx-auto">
                                Comprehensive search engine optimization strategies to improve your online visibility.
                            </p>
                        </div>
                    </motion.div>

                    {/* Capabilities List */}
                    <div className="space-y-12">
                        {capabilities.map((capability, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5 }}
                                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 md:p-12 border border-white/10"
                            >
                                <div className="md:flex items-start justify-between gap-12">
                                    <div className="mb-8 md:mb-0 md:w-1/3">
                                        <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter">
                                            {capability.title}
                                        </h3>
                                    </div>
                                    <div className="md:w-2/3">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {capability.skills.map((skill, skillIndex) => (
                                                <div
                                                    key={skillIndex}
                                                    className="flex items-center gap-4 text-xl text-white/80 font-light"
                                                >
                                                    <div className="w-1 h-1 bg-secondary rounded-full"></div>
                                                    {skill}
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Capabilities;