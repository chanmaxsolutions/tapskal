// data/services.ts
export interface Service {
    id: string;
    title: string;
    description: string;
    icon: string;
    href: string;
}

export const services: Service[] = [
    {
        id: 'web-development',
        title: 'Web Development',
        description: 'Custom web solutions tailored to your business needs. From responsive websites to complex web applications.',
        icon: 'code',
        href: '/services/web-development'
    },
    {
        id: 'performance-marketing',
        title: 'Performance Marketing',
        description: 'Data-driven marketing strategies to boost your ROI. PPC, social media advertising, and conversion optimization.',
        icon: 'trending-up',
        href: '/services/performance-marketing'
    },
    {
        id: 'seo',
        title: 'Search Engine Optimization',
        description: 'Improve your online visibility and drive organic traffic. Technical SEO, content strategy, and link building.',
        icon: 'search',
        href: '/services/seo'
    },
    {
        id: 'ai-development',
        title: 'AI Agent Development',
        description: 'Cutting-edge AI solutions to automate and enhance your business processes. Custom AI agents and integrations.',
        icon: 'bot',
        href: '/services/ai-development'
    }
];