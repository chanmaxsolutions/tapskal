// app/contact/page.tsx
import React from 'react';
import PageHeader from '@/components/PageHeader';
import ContactSection from './ContactSection';

export default function Contact() {
    return (
        <main>
            <PageHeader
                title="Contact Us"
                description="Let's discuss your next project"
            />
            <ContactSection />
        </main>
    );
}