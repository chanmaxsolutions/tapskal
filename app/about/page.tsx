// app/about/page.tsx
import React from 'react';
import PageHeader from '@/components/PageHeader';
import Story from './Story';
import VisionMission from './VisionMission';
import Team from './Team';
import CTA from '@/components/CTA';
export default function About() {
    return (
        <main>
            <PageHeader
                title="About Us"
                description="Driving digital transformation through innovation"
            />
            <Story />
            <VisionMission />
            <Team />
            <CTA />
        </main>
    );
}