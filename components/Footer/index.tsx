// components/Footer/index.tsx
'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto py-20 border-t border-white/10">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="space-y-6">
              <Link href="/" className="block">
                <Image
                  src="https://res.cloudinary.com/dqeujzydw/image/upload/v1735667268/Artboard_8_naahp3.svg"
                  alt="Tapskal Logo"
                  width={150}
                  height={40}
                  className="brightness-0 invert" // Makes the logo white
                />
              </Link>
              <p className="text-white/80 font-light">
                Transform your digital presence with cutting-edge solutions and innovative strategies.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold tracking-tight">Quick Links</h3>
              <nav className="flex flex-col space-y-4">
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
                <Link href="/services" className="text-white/80 hover:text-white transition-colors">
                  Services
                </Link>
                <Link href="/get-quote" className="text-white/80 hover:text-white transition-colors">
                  Get Quote
                </Link>
              </nav>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold tracking-tight">Services</h3>
              <nav className="flex flex-col space-y-4">
                <Link href="/services/web-development" className="text-white/80 hover:text-white transition-colors">
                  Web Development
                </Link>
                <Link href="/services/performance-marketing" className="text-white/80 hover:text-white transition-colors">
                  Performance Marketing
                </Link>
                <Link href="/services/seo" className="text-white/80 hover:text-white transition-colors">
                  SEO Optimization
                </Link>
                <Link href="/services/ai-development" className="text-white/80 hover:text-white transition-colors">
                  AI Development
                </Link>
              </nav>
            </div>

            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold tracking-tight">Contact Us</h3>
              <div className="space-y-4">
                <a href="mailto:hello@tapskal.com" className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                  <span>hello@tapskal.com</span>
                </a>
                <a href="tel:+1234567890" className="flex items-center space-x-3 text-white/80 hover:text-white transition-colors">
                  <Phone className="w-5 h-5" />
                  <span>+1 234 567 890</span>
                </a>
                <div className="flex items-center space-x-3 text-white/80">
                  <MapPin className="w-5 h-5 flex-shrink-0" />
                  <span>123 Business Street, Tech City, TC 12345</span>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-16 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-white/60 text-sm">
                © {new Date().getFullYear()} Tapskal. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <Link href="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="text-white/60 hover:text-white text-sm transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;