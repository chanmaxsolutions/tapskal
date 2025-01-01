// components/About/VisionMission.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Rocket, Target } from 'lucide-react';

const VisionMission = () => {
    return (
        <section className="py-20 bg-primary">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12">
                        {/* Vision */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5 }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-8">
                                <Rocket className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-6">
                                Our Vision
                            </h3>
                            <p className="text-xl text-white/80 font-light">
                                To be the catalyst for digital transformation, empowering businesses
                                to thrive in an ever-evolving digital landscape through innovative solutions.
                            </p>
                        </motion.div>

                        {/* Mission */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-center"
                        >
                            <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-8">
                                <Target className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter mb-6">
                                Our Mission
                            </h3>
                            <p className="text-xl text-white/80 font-light">
                                To deliver exceptional digital solutions that drive measurable results,
                                combining expertise, innovation, and dedication to help our clients succeed.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default VisionMission;