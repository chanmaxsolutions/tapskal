// app/services/seo/page.tsx
import React from 'react';
import PageHeader from '@/components/PageHeader';
import Overview from './Overview';
import Capabilities from './Capabilities';
import FAQ from './FAQ';
import CTA from '@/components/CTA';
export default function SEO() {
    return (
        <main>
            <PageHeader
                title="Search Engine Optimization"
                description="Improve rankings and drive organic growth"
            />
            <Overview />
            <Capabilities />
            <FAQ />
            <CTA />

        </main>
    );
}