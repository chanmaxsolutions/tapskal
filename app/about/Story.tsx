// components/About/Story.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Story = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-8"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-secondary tracking-tighter">
                            Our Story
                        </h2>
                        <div className="space-y-6">
                            <p className="text-3xl text-gray-600 font-light tracking-tight">
                                Building digital excellence
                            </p>
                            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                                A journey of innovation and dedication to creating impactful digital solutions that transform businesses and drive success.
                            </p>
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="prose prose-lg mx-auto text-center"
                    >
                        <p className="text-xl text-gray-600 font-light mb-8">
                            Founded with a vision to bridge the gap between technology and business success,
                            Tapskal has grown into a leading digital solutions provider. We combine expertise
                            in web development, marketing, and AI to deliver results that matter.
                        </p>
                        <p className="text-xl text-gray-600 font-light">
                            Our team of experts brings together years of experience across different
                            domains, working collaboratively to solve complex challenges and create
                            innovative solutions that help businesses thrive in the digital age.
                        </p>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Story;