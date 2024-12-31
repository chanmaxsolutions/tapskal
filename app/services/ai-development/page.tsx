// app/services/ai-development/page.tsx
import React from 'react';
import PageHeader from '@/components/PageHeader';
import Overview from './Overview';
import Capabilities from './Capabilities';
import FAQ from './FAQ';
import CTA from '@/components/CTA';
export default function AIDevelopment() {
    return (
        <main>
            <PageHeader
                title="AI Agent Development"
                description="Transform your business with artificial intelligence"
            />
            <Overview />
            <Capabilities />
            <FAQ />
            <CTA />
        </main>
    );
}