// components/About/Team.tsx
'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Linkedin, Twitter } from 'lucide-react';

const teamMembers = [
    {
        name: 'John Smith',
        role: 'Founder & CEO',
        image: 'https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', // Using placeholder for now
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        name: 'Sarah Johnson',
        role: 'Tech Lead',
        image: 'https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        name: 'Mike Wilson',
        role: 'Marketing Director',
        image: 'https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        social: {
            linkedin: '#',
            twitter: '#'
        }
    },
    {
        name: 'Emily Brown',
        role: 'Design Lead',
        image: 'https://images.pexels.com/photos/1015568/pexels-photo-1015568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        social: {
            linkedin: '#',
            twitter: '#'
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
                                        <a href={member.social.linkedin} className="text-white hover:text-secondary transition-colors">
                                            <Linkedin className="w-6 h-6" />
                                        </a>
                                        <a href={member.social.twitter} className="text-white hover:text-secondary transition-colors">
                                            <Twitter className="w-6 h-6" />
                                        </a>
                                    </div>
                                </div>

                                {/* Member Info */}
                                <h3 className="text-2xl font-semibold text-primary mb-2">
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