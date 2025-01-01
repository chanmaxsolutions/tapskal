'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, CheckCircle, Clock, Mail, ArrowRight } from 'lucide-react';

const ThankYou = () => {
    return (
        <div className="min-h-screen bg-white flex items-center">
            <div className="container mx-auto px-4 py-20">
                <div className="max-w-3xl mx-auto">
                    {/* Back Button */}
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 text-primary mb-12 hover:opacity-80 transition-all duration-300"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to Home
                    </Link>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center space-y-8"
                    >
                        {/* Success Icon */}
                        <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                                type: "spring",
                                stiffness: 260,
                                damping: 20,
                                delay: 0.2
                            }}
                            className="w-24 h-24 bg-secondary/10 rounded-full flex items-center justify-center mx-auto"
                        >
                            <CheckCircle className="w-12 h-12 text-secondary" />
                        </motion.div>

                        {/* Main Content */}
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary tracking-tighter">
                                Thank You!
                            </h1>
                            <p className="text-xl text-gray-600 font-light max-w-2xl mx-auto">
                                We have received your message and appreciate you reaching out to us.
                            </p>
                        </div>

                        {/* Next Steps */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.4 }}
                                className="p-6 rounded-xl border border-gray-200 text-center space-y-4"
                            >
                                <div className="w-12 h-12 bg-secondary/5 rounded-full flex items-center justify-center mx-auto">
                                    <Clock className="w-6 h-6 text-secondary" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Response Time</h3>
                                <p className="text-gray-600">
                                    Our team will get back to you within 24 hours during business days.
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                                className="p-6 rounded-xl border border-gray-200 text-center space-y-4"
                            >
                                <div className="w-12 h-12 bg-secondary/5 rounded-full flex items-center justify-center mx-auto">
                                    <Mail className="w-6 h-6 text-secondary" />
                                </div>
                                <h3 className="text-xl font-semibold text-gray-900">Keep an Eye</h3>
                                <p className="text-gray-600">
                                    Check your inbox for a confirmation email from our team.
                                </p>
                            </motion.div>
                        </div>

                        {/* Additional Actions */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            className="pt-8"
                        >
                            {/* <Link
                                href="/blog"
                                className="inline-flex items-center gap-2 text-primary hover:opacity-80 transition-all duration-300"
                            >
                                Explore Our Blog
                                <ArrowRight className="w-5 h-5" />
                            </Link> */}
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;