import React from 'react';
import PageHeader from '@/components/PageHeader';
import Overview from './Overview';
import Capabilities from './Capabilities';
import FAQ from './FAQ';
import CTA from '@/components/CTA';

export default function WebDevelopment() {
    return (
        <main>
            <PageHeader
                title="Web App Development"
                description="Create powerful web applications that drive growth"
            />
            <Overview />
            <Capabilities />
            <FAQ />
            <CTA />
        </main>
    );
}