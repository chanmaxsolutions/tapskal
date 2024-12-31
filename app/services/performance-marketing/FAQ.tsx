
// components/services/PerformanceMarketing/FAQ.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'How do you measure marketing campaign success?',
        answer: 'We track key performance indicators (KPIs) including ROI, conversion rates, cost per acquisition (CPA), click-through rates (CTR), and engagement metrics. We provide detailed reports and insights to show the direct impact on your business growth.'
    },
    {
        question: 'What platforms do you work with?',
        answer: 'We manage campaigns across major platforms including Google Ads, Meta (Facebook & Instagram), LinkedIn, YouTube, and other relevant channels based on your target audience and business goals.'
    },
    {
        question: 'How long does it take to see results?',
        answer: 'Initial results can be seen within the first month, but optimal performance typically comes after 2-3 months of campaign optimization and data collection. We continually refine strategies based on performance data.'
    },
    {
        question: 'What budget should I allocate for marketing?',
        answer: 'Budget recommendations are tailored to your goals, market, and competition. We help determine the most effective budget allocation across channels to maximize your ROI and achieve your business objectives.'
    },
    {
        question: 'Do you provide regular reporting?',
        answer: 'Yes, we provide comprehensive monthly reports detailing campaign performance, insights, and recommendations. We also offer real-time dashboard access and regular strategy review meetings.'
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
                                Find answers to frequently asked questions about our performance marketing services.
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