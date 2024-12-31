'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface PageHeaderProps {
    title: string;
    description: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description }) => {
    return (
        <section className="bg-slate-50 min-h-[60vh] md:min-h-[100vh] relative overflow-hidden flex items-center">

            <div className="container mx-auto px-4 py-24 relative z-10">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}

                        >
                            <h1 className="text-5xl md:text-6xl lg:text-9xl font-semibold text-primary tracking-tighter">
                                {title}
                            </h1>
                            <p className="text-3xl text-gray-400 font-light tracking-tight">
                                {description}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PageHeader;