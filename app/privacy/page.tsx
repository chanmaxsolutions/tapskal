// app/privacy/page.tsx
import React from 'react';
import PageHeader from '@/components/PageHeader';
import CTA from '@/components/CTA';

export default function PrivacyPolicy() {
    return (
        <main>
            <PageHeader
                title="Privacy Policy"
                description="How we handle and protect your data"
            />

            <section className="py-20 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto prose prose-lg">
                        <p className="text-xl text-gray-600 font-light">Last updated: January 1, 2025</p>

                        <h2 className="text-3xl font-semibold text-primary tracking-tighter mt-12">1. Information We Collect</h2>
                        <p className="text-gray-600">We collect information that you provide directly to us, including when you:</p>
                        <ul className="text-gray-600">
                            <li>Create an account or fill out forms on our website</li>
                            <li>Subscribe to our newsletter or communications</li>
                            <li>Request a quote or contact us</li>
                            <li>Use our services or make a purchase</li>
                        </ul>

                        <h2 className="text-3xl font-semibold text-primary tracking-tighter mt-12">2. How We Use Your Information</h2>
                        <p className="text-gray-600">We use the information we collect to:</p>
                        <ul className="text-gray-600">
                            <li>Provide and maintain our services</li>
                            <li>Process your transactions</li>
                            <li>Send you technical notices and support messages</li>
                            <li>Communicate with you about products, services, and events</li>
                        </ul>

                        <h2 className="text-3xl font-semibold text-primary tracking-tighter mt-12">3. Information Sharing</h2>
                        <p className="text-gray-600">We do not sell or rent your personal information to third parties. We may share your information with:</p>
                        <ul className="text-gray-600">
                            <li>Service providers who assist in our operations</li>
                            <li>Professional advisors and consultants</li>
                            <li>Law enforcement when required by law</li>
                        </ul>

                        <h2 className="text-3xl font-semibold text-primary tracking-tighter mt-12">4. Data Security</h2>
                        <p className="text-gray-600">We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                    </div>
                </div>
            </section>
            <CTA />
        </main>
    );
}