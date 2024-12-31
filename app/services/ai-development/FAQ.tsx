// components/services/AIDevelopment/FAQ.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
    {
        question: 'How can AI benefit my business?',
        answer: 'AI can streamline operations, enhance customer experiences, automate repetitive tasks, provide data-driven insights, and help you make better business decisions. The specific benefits depend on your business needs and goals.'
    },
    {
        question: 'What types of AI solutions do you develop?',
        answer: 'We develop various AI solutions including custom machine learning models, chatbots, natural language processing systems, computer vision applications, predictive analytics tools, and AI-powered process automation solutions.'
    },
    {
        question: 'How long does AI development take?',
        answer: 'Development timelines vary based on project complexity. Simple AI integrations might take 4-8 weeks, while complex custom solutions can take 3-6 months. We provide detailed timelines during project planning.'
    },
    {
        question: 'What data is needed for AI development?',
        answer: 'The type and amount of data needed depends on your project. We help identify, collect, and prepare the right data for your AI solution while ensuring privacy and security compliance.'
    },
    {
        question: 'How do you ensure AI accuracy and reliability?',
        answer: 'We employ rigorous testing, validation, and monitoring processes. Our AI solutions are continuously refined using real-world feedback and performance data to ensure high accuracy and reliability.'
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
                                Find answers to frequently asked questions about our AI development services.
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