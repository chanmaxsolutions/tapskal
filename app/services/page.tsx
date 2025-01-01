'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import {
    Globe2,
    BarChart3,
    Search,
    BrainCircuit,
    ArrowLeft
} from 'lucide-react';

const services = [
    {
        icon: <Globe2 className="w-10 h-10" />,
        title: 'Web App Development',
        description: 'Custom websites and web applications built with cutting-edge technology.',
        slug: 'web-development'
    },
    {
        icon: <BarChart3 className="w-10 h-10" />,
        title: 'Performance Marketing',
        description: 'Data-driven campaigns that deliver measurable results and ROI.',
        slug: 'performance-marketing'
    },
    {
        icon: <Search className="w-10 h-10" />,
        title: 'Search Engine Optimization',
        description: 'Strategic SEO services to improve your search rankings.',
        slug: 'seo'
    },
    {
        icon: <BrainCircuit className="w-10 h-10" />,
        title: 'AI Agent Development',
        description: 'Custom AI solutions to automate your business processes.',
        slug: 'ai-development'
    }
];

const ServicesPage = () => {
    return (
        <div className="min-h-screen bg-white">
            <section className="py-20">
                <div className="container mx-auto px-4">
                    {/* Back Button */}
                    <div className="max-w-5xl mx-auto mb-12">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-all duration-300"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back to Home
                        </Link>
                    </div>

                    <div className="max-w-5xl mx-auto">
                        {/* Title Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-center mb-20"
                        >
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-secondary tracking-tighter">
                                Our Services
                            </h1>
                            <div className="space-y-6">
                                <p className="text-3xl text-gray-600 font-light tracking-tight">
                                    Digital solutions
                                </p>
                                <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                                    We craft digital experiences that transform businesses and drive success in the modern digital landscape. Our expertise spans across web development, digital marketing, and AI integration, ensuring your business stays ahead of the curve.
                                </p>
                            </div>
                        </motion.div>

                        {/* Services Grid */}
                        <div className="grid grid-cols-1 gap-8">
                            {services.map((service, index) => (
                                <Link href={`/services/${service.slug}`} key={index} className="block">
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                        className="group p-8 rounded-xl border border-gray-100 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 bg-white h-full cursor-pointer"
                                    >
                                        <div className="flex items-center justify-between mb-6">
                                            <div className="text-secondary p-3 bg-secondary/5 rounded-xl">
                                                {service.icon}
                                            </div>
                                            <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                →
                                            </div>
                                        </div>
                                        <h3 className="text-4xl md:text-5xl font-semibold mb-4 text-primary tracking-tighter">
                                            {service.title}
                                        </h3>
                                        <p className="text-xl text-gray-600 font-light">
                                            {service.description}
                                        </p>
                                    </motion.div>
                                </Link>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="text-center mt-20"
                        >
                            <Link
                                href="/get-quote"
                                className="button-primary text-xl px-12 py-4"
                            >
                                Get Started
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ServicesPage;