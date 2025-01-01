'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import CountryCodeSelect from '@/components/ui/CountryCodeSelect';
import { ContactFormSchema, type ContactFormData } from '@/lib/airtable';

const services = [
    { id: 'general', label: 'General Inquiry' },
    { id: 'support', label: 'Technical Support' },
    { id: 'sales', label: 'Sales' },
    { id: 'partnership', label: 'Partnership' }
];

const ContactSection = () => {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState<string | null>(null);

    const {
        register,
        handleSubmit,
        setValue,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(ContactFormSchema),
        defaultValues: {
            inquiryType: undefined,
        }
    });

    const onSubmit = async (data: ContactFormData) => {
        try {
            setIsSubmitting(true);
            setSubmitError(null);

            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    formType: 'contact',
                    ...data,
                }),
            });

            const result = await response.json();

            if (!response.ok) {
                throw new Error(result.error || 'Failed to submit form');
            }

            // Redirect to thank you page on success
            router.push('/thank-you');
        } catch (error) {
            setSubmitError(error instanceof Error ? error.message : 'Something went wrong');
        } finally {
            setIsSubmitting(false);
        }
    };

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
                        {submitError && (
                            <div className="p-4 bg-red-50 border border-red-200 text-red-600 rounded-xl">
                                {submitError}
                            </div>
                        )}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
                            {/* Personal Information */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Full Name"
                                        {...register('name')}
                                        className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                                    />
                                    {errors.name && (
                                        <p className="mt-1 text-red-500">{errors.name.message}</p>
                                    )}
                                </div>
                                <div>
                                    <input
                                        type="email"
                                        placeholder="Email Address"
                                        {...register('email')}
                                        className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                                    />
                                    {errors.email && (
                                        <p className="mt-1 text-red-500">{errors.email.message}</p>
                                    )}
                                </div>
                            </div>

                            {/* Phone Number with Country Code */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    <CountryCodeSelect
                                        onChange={(code) => setValue('countryCode', code)}
                                    />
                                    {errors.countryCode && (
                                        <p className="mt-1 text-red-500">{errors.countryCode.message}</p>
                                    )}
                                </div>
                                <div className="md:col-span-2">
                                    <input
                                        type="tel"
                                        placeholder="Phone Number"
                                        {...register('phoneNumber')}
                                        className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                                    />
                                    {errors.phoneNumber && (
                                        <p className="mt-1 text-red-500">{errors.phoneNumber.message}</p>
                                    )}
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
                                                value={service.id}
                                                {...register('inquiryType')}
                                                className="w-4 h-4 accent-secondary cursor-pointer"
                                            />
                                            <span className="text-gray-600 group-hover:text-primary transition-colors duration-300">
                                                {service.label}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                                {errors.inquiryType && (
                                    <p className="mt-1 text-red-500">{errors.inquiryType.message}</p>
                                )}
                            </div>

                            {/* Message */}
                            <div>
                                <textarea
                                    placeholder="Your Message"
                                    rows={6}
                                    {...register('message')}
                                    className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                                />
                                {errors.message && (
                                    <p className="mt-1 text-red-500">{errors.message.message}</p>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-fit mx-auto px-12 py-4 bg-primary text-white rounded-full text-xl hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ContactSection;