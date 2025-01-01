// app/get-quote/page.tsx
'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import CountryCodeSelect from '@/components/ui/CountryCodeSelect';
import { QuoteFormSchema, type QuoteFormData } from '@/lib/airtable';

const services = [
  { id: 'web-development', label: 'Web Development' },
  { id: 'performance-marketing', label: 'Performance Marketing' },
  { id: 'seo', label: 'Search Engine Optimization' },
  { id: 'ai-development', label: 'AI Agent Development' }
];

const budgetRanges = [
  "Under $5,000",
  "$5,000 - $10,000",
  "$10,000 - $25,000",
  "$25,000 - $50,000",
  "$50,000+"
];

const GetQuote = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors },
  } = useForm<QuoteFormData>({
    resolver: zodResolver(QuoteFormSchema),
    defaultValues: {
      services: [],
    }
  });

  // Watch the services array for validation feedback
  const selectedServices = watch('services');

  const onSubmit = async (data: QuoteFormData) => {
    try {
      setIsSubmitting(true);
      setSubmitError(null);

      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          formType: 'quote',
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
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Back Button */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary mb-12 hover:opacity-80 transition-all duration-300"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Home
          </Link>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="text-center space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-primary tracking-tighter">
                Get a Free Quote
              </h1>
              <p className="text-xl text-gray-600 font-light">
                Fill out the form below and we&apos;ll get back to you within 24 hours.
              </p>
            </div>

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

              {/* Company Information */}
              <div>
                <input
                  type="text"
                  placeholder="Company Name"
                  {...register('companyName')}
                  className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                />
                {errors.companyName && (
                  <p className="mt-1 text-red-500">{errors.companyName.message}</p>
                )}
              </div>

              {/* Services Selection */}
              <div className="space-y-4">
                <label className="text-lg text-gray-600 font-light">Services Required:</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {services.map((service) => (
                    <label
                      key={service.id}
                      className="flex items-center space-x-3 p-4 rounded-xl border border-gray-200 cursor-pointer hover:border-primary transition-all duration-300 group"
                    >
                      <input
                        type="checkbox"
                        value={service.id}
                        {...register('services')}
                        className="w-4 h-4 accent-secondary cursor-pointer"
                      />
                      <span className="text-gray-600 group-hover:text-primary transition-colors duration-300">
                        {service.label}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.services && (
                  <p className="mt-1 text-red-500">{errors.services.message}</p>
                )}
              </div>

              {/* Budget Range */}
              <div className="space-y-4">
                <label className="text-lg text-gray-600 font-light">Project Budget:</label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {budgetRanges.map((range, index) => (
                    <label
                      key={index}
                      className="flex items-center space-x-3 p-4 rounded-xl border border-gray-200 cursor-pointer hover:border-primary transition-all duration-300 group"
                    >
                      <input
                        type="radio"
                        value={range}
                        {...register('budget')}
                        className="w-4 h-4 accent-secondary cursor-pointer"
                      />
                      <span className="text-gray-600 group-hover:text-primary transition-colors duration-300">
                        {range}
                      </span>
                    </label>
                  ))}
                </div>
                {errors.budget && (
                  <p className="mt-1 text-red-500">{errors.budget.message}</p>
                )}
              </div>

              {/* Project Details */}
              <div>
                <textarea
                  placeholder="Project Details"
                  rows={6}
                  {...register('projectDetails')}
                  className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:border-primary"
                />
                {errors.projectDetails && (
                  <p className="mt-1 text-red-500">{errors.projectDetails.message}</p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-fit mx-auto px-12 py-4 bg-primary text-white rounded-full text-xl hover:opacity-90 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? 'Submitting...' : 'Submit Request'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default GetQuote;