// components/Contact/ContactSection.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import CountryCodeSelect from '@/components/ui/CountryCodeSelect';

const services = [
    { id: 'general', label: 'General Inquiry' },
    { id: 'support', label: 'Technical Support' },
    { id: 'sales', label: 'Sales' },
    { id: 'partnership', label: 'Partnership' }
];

const ContactSection = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    {/* Contact Information */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20"
                    >
                        <div className="text-center">
                            <div className="w-16 h-16 bg-secondary/5 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Mail className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Email Us</h3>
                            <p className="text-lg text-gray-600 font-light">hello@tapskal.com</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-secondary/5 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <Phone className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Call Us</h3>
                            <p className="text-lg text-gray-600 font-light">+1 (555) 123-4567</p>
                        </div>

                        <div className="text-center">
                            <div className="w-16 h-16 bg-secondary/5 rounded-xl flex items-center justify-center mx-auto mb-6">
                                <MapPin className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Visit Us</h3>
                            <p className="text-lg text-gray-600 font-light">
                                123 Business Street<br />
                                City, State 12345
                            </p>
                        </div>
                    </motion.div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <form className="space-y-8">
                            {/* Personal Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <input
                                    type="text"
                                    placeholder="Full Name"
                                    className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                                    required
                                />
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                                    required
                                />
                            </div>

                            {/* Phone Number with Country Code */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <CountryCodeSelect
                                    onChange={(code) => {
                                        console.log(code);
                                    }}
                                />
                                <div className="md:col-span-2">
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                                        required
                                    />
                                </div>
                            </div>

                            {/* Inquiry Type */}
                            <div className="space-y-4">
                                <label className="text-lg text-gray-600 font-light">Type of Inquiry:</label>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {services.map((service) => (
                                        <label
                                            key={service.id}
                                            className="flex items-center space-x-3 p-4 rounded-xl border border-gray-200 cursor-pointer hover:border-primary transition-all duration-300 group"
                                        >
                                            <input
                                                type="radio"
                                                name="inquiry"
                                                value={service.id}
                                                className="w-4 h-4 accent-secondary cursor-pointer"
                                            />
                                            <span className="text-gray-600 group-hover:text-primary transition-colors duration-300">
                                                {service.label}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Message */}
                            <textarea
                                placeholder="Your Message"
                                rows={6}
                                className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                                required
                            />

                            <button
                                type="submit"
                                className="w-fit mx-auto px-12 py-4 bg-primary text-white rounded-full text-xl hover:opacity-90 transition-all duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;