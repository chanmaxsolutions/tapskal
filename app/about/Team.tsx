// components/About/Team.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
    {
        name: 'Prashan C',
        role: 'Co-Founder',
        image: 'https://res.cloudinary.com/dqeujzydw/image/upload/v1735757212/Green_Modern_Social_Media_Agency_Marketing_Instagram_Post_1_ova7cj.jpg', // Using placeholder for now
        social: {
            linkedin: 'https://www.linkedin.com/in/prashanchandrapalan/',
            twitter: 'https://x.com/prashanchan'
        }
    },
    {
        name: 'Tamilnilavan S',
        role: 'Co-Founder',
        image: 'https://res.cloudinary.com/dqeujzydw/image/upload/v1735757211/Green_Modern_Social_Media_Agency_Marketing_Instagram_Post_eqfxui.jpg',
        social: {
            linkedin: 'https://www.linkedin.com/in/tamil-nilavan-6204302a8/',
            twitter: 'https://x.com/'
        }
    },
    {
        name: 'Sakthilaya B',
        role: 'Data Scientist',
        image: 'https://res.cloudinary.com/dqeujzydw/image/upload/v1735840608/8_a2cfzx.jpg',
        social: {
            linkedin: 'https://www.linkedin.com/in/sakthilaya19/',
            twitter: 'https://x.com/'
        }
    },
    {
        name: 'Shobana shri J',
        role: 'Operational Lead',
        image: 'https://res.cloudinary.com/dqeujzydw/image/upload/v1735840604/5_f6ssks.jpg',
        social: {
            linkedin: 'https://www.linkedin.com/in/shobanashrij16/',
            twitter: 'https://x.com/'
        }
    },
    {
        name: 'Padmasri B',
        role: 'Technical Lead',
        image: 'https://res.cloudinary.com/dqeujzydw/image/upload/v1735840604/6_ctqxll.jpg',
        social: {
            linkedin: 'https://www.linkedin.com/in/padmasrib11/',
            twitter: 'https://x.com/'
        }
    },
    {
        name: 'Karthik T',
        role: 'Marketing Lead',
        image: 'https://res.cloudinary.com/dqeujzydw/image/upload/v1735840604/7_ks8sua.jpg',
        social: {
            linkedin: 'https://www.linkedin.com/in/karthikt20/',
            twitter: 'https://x.com/'
        }
    }
];

const Team = () => {
    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="max-w-5xl mx-auto">
                    {/* Title Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-semibold text-secondary tracking-tighter">
                            Meet Our Team
                        </h2>
                        <div className="space-y-6">
                            <p className="text-3xl text-gray-600 font-light tracking-tight">
                                The minds behind the magic
                            </p>
                            <p className="text-xl text-gray-600 font-light max-w-3xl mx-auto">
                                A passionate team of experts dedicated to delivering exceptional digital solutions.
                            </p>
                        </div>
                    </motion.div>

                    {/* Team Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="text-center group"
                            >
                                {/* Image Container */}
                                <div className="relative mb-6 rounded-xl overflow-hidden">
                                    <div className="aspect-square relative">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                                        />
                                    </div>
                                    {/* Social Links Overlay */}
                                    <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                                        <a href={member.social.linkedin} target='_blank' className="text-white hover:text-secondary transition-colors">
                                            <Linkedin className="w-6 h-6" />
                                        </a>
                                        <a href={member.social.twitter} target='_blank' className="text-white hover:text-secondary transition-colors">
                                            <Twitter className="w-6 h-6" />
                                        </a>
                                    </div>
                                </div>

                                {/* Member Info */}
                                <h3 className="text-2xl font-semibold text-primary mb-2 tracking-tighter leading-none">
                                    {member.name}
                                </h3>
                                <p className="text-lg text-gray-600 font-light">
                                    {member.role}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Team;