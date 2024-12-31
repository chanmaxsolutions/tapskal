'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'How long does it take to develop a web application?',
        answer: 'The development timeline varies based on the project complexity. A simple website might take 4-6 weeks, while complex web applications can take 3-6 months. We provide detailed timelines during our initial consultation.'
    },
    {
        question: 'What technologies do you use for web development?',
        answer: 'We use modern technologies like React, Next.js, Node.js, and other cutting-edge tools. Our stack is chosen based on your specific needs to ensure the best performance and scalability.'
    },
    {
        question: 'Do you provide maintenance and support after launch?',
        answer: 'Yes, we offer ongoing maintenance and support services to ensure your web application runs smoothly. This includes updates, security patches, and technical support.'
    },
    {
        question: 'How do you ensure the security of web applications?',
        answer: 'We implement industry-standard security practices, including data encryption, secure authentication, regular security audits, and protection against common vulnerabilities.'
    },
    {
        question: 'Can you help migrate an existing website?',
        answer: 'Yes, we provide comprehensive migration services, ensuring a smooth transition of your existing website while maintaining data integrity and improving performance.'
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
                                Find answers to frequently asked questions about our web development services.
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