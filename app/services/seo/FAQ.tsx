// components/services/SEO/FAQ.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'How long does it take to see SEO results?',
        answer: 'SEO is a long-term strategy, typically taking 3-6 months to see significant results. However, the exact timeline depends on factors like your current rankings, competition, and target keywords. We provide regular progress reports to track improvements.'
    },
    {
        question: 'What SEO metrics do you track?',
        answer: 'We track key metrics including keyword rankings, organic traffic, page load speed, bounce rates, conversion rates, backlink quality, and technical SEO health. Our comprehensive reports help you understand your sites search performance.'
    },
    {
        question: 'How do you approach local SEO?',
        answer: 'Our local SEO strategy includes optimizing Google Business Profile, local keyword targeting, citation building, local content creation, and review management to improve your visibility in local search results.'
    },
    {
        question: 'Do you guarantee first page rankings?',
        answer: 'While we use proven SEO strategies and best practices, we cannot guarantee specific rankings as search algorithms constantly evolve. We focus on sustainable, white-hat techniques that deliver long-term results.'
    },
    {
        question: 'What makes your SEO services different?',
        answer: 'We combine technical expertise with data-driven strategies, focusing on both quick wins and long-term growth. Our approach is transparent, with regular reporting and clear communication about all optimizations made.'
    }
];

const FAQ = () => {
    const [openIndex, setOpenIndex] = React.useState<number | null>(null);

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
                            Common Questions
                        </h2>
                        <div className="space-y-6">
                            <p className="text-3xl text-gray-600 font-light tracking-tight">
                                Get your answers
                            </p>
                            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                                Find answers to frequently asked questions about our SEO services and approach.
                            </p>
                        </div>
                    </motion.div>

                    {/* FAQ Items */}
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full bg-slate-50 p-8 rounded-xl flex items-center justify-between group"
                                >
                                    <h3 className="text-2xl md:text-3xl font-semibold text-primary tracking-tighter text-left">
                                        {faq.question}
                                    </h3>
                                    {openIndex === index ? (
                                        <Minus className="w-6 h-6 text-secondary flex-shrink-0" />
                                    ) : (
                                        <Plus className="w-6 h-6 text-secondary flex-shrink-0" />
                                    )}
                                </button>
                                <motion.div
                                    initial={false}
                                    animate={{
                                        height: openIndex === index ? 'auto' : 0,
                                        opacity: openIndex === index ? 1 : 0,
                                    }}
                                    className="overflow-hidden"
                                >
                                    <p className="p-8 text-xl text-gray-600 font-light">
                                        {faq.answer}
                                    </p>
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;