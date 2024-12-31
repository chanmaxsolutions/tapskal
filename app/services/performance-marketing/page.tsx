import React from 'react';
import PageHeader from '@/components/PageHeader';
import Overview from './Overview';
import Capabilities from './Capabilities';
import FAQ from './FAQ';
import CTA from '@/components/CTA';

export default function PerformanceMarketing() {
    return (
        <main>
            <PageHeader
                title="Performance Marketing"
                description="Data-driven strategies for measurable growth"
            />
            <Overview />
            <Capabilities />
            <FAQ />
            <CTA />
        </main>
    );
}