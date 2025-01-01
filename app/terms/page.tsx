// app/terms/page.tsx
import React from 'react';
import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';

export default function TermsOfService() {
    return (
        <main>
            <PageHeader
                title="Terms of Service"
                description="Our terms and conditions"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto prose prose-lg">
                        <p className="text-xl text-gray-600 font-light">Last updated: January 1, 2025</p>

                        <h2 className="text-3xl font-semibold text-primary tracking-tighter mt-12">1. Agreement to Terms</h2>
                        <p className="text-gray-600">By accessing or using our services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using our services.</p>

                        <h2 className="text-3xl font-semibold text-primary tracking-tighter mt-12">2. Use License</h2>
                        <p className="text-gray-600">Permission is granted to temporarily access our services for personal, non-commercial use. This license shall automatically terminate if you violate any of these restrictions and may be terminated by us at any time.</p>

                        <h2 className="text-3xl font-semibold text-primary tracking-tighter mt-12">3. Services</h2>
                        <p className="text-gray-600">We provide digital services including:</p>
                        <ul className="text-gray-600">
                            <li>Web development and design</li>
                            <li>Digital marketing services</li>
                            <li>Search engine optimization</li>
                            <li>AI development solutions</li>
                        </ul>

                        <h2 className="text-3xl font-semibold text-primary tracking-tighter mt-12">4. Payment Terms</h2>
                        <p className="text-gray-600">Payment terms will be specified in individual service agreements. All fees are non-refundable unless otherwise specified in writing.</p>

                        <h2 className="text-3xl font-semibold text-primary tracking-tighter mt-12">5. Intellectual Property</h2>
                        <p className="text-gray-600">All content, features, and functionality of our services are owned by us and are protected by international copyright, trademark, and other intellectual property laws.</p>
                    </div>
                </div>
            </section>
            <CTA />
        </main>
    );
}