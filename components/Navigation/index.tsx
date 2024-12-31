'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { href: '/services/web-development', label: 'Web Development' },
    { href: '/services/performance-marketing', label: 'Performance Marketing' },
    { href: '/services/seo', label: 'Search Engine Optimization' },
    { href: '/services/ai-development', label: 'AI Agent Development' },
  ];

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
    >
      <nav className="container-custom py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="relative h-10 w-44">
            <Image
              src="https://res.cloudinary.com/dqeujzydw/image/upload/v1735628160/tapskal-logo_rrmh1a.svg"
              alt="Tapskal Logo"
              fill
              style={{ objectFit: 'contain' }}
              quality={100}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Regular Nav Links including Home first */}
            <Link
              href="/"
              className="text-dark hover:text-primary transition-colors duration-300 font-sfpro text-lg"
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative group"
            >
              <button className="text-dark hover:text-primary transition-colors duration-300 font-sfpro text-lg flex items-center gap-1">
                Services
                <ChevronDown className="w-4 h-4" />
              </button>

              {/* Invisible gap filler */}
              <div className="absolute top-full left-0 w-full h-4"></div>

              {/* Dropdown Menu */}
              <div className="absolute hidden group-hover:block top-[calc(100%+1rem)] left-0 w-64 bg-white shadow-lg rounded-xl py-2">
                {services.map((service) => (
                  <Link
                    key={service.label}
                    href={service.href}
                    className="block px-4 py-3 text-dark hover:text-primary hover:bg-slate-50 transition-colors duration-300 font-sfpro"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Other Nav Links excluding Home */}
            {navLinks.slice(1).map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-dark hover:text-primary transition-colors duration-300 font-sfpro text-lg"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-started"
              className="button-primary text-lg px-8 py-3"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="h-8 w-8 text-dark" />
            ) : (
              <Menu className="h-8 w-8 text-dark" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg animate-fade-in">
            <div className="container-custom py-4 flex flex-col space-y-4">
              {/* Home link first */}
              <Link
                href="/"
                className="text-dark hover:text-primary transition-colors duration-300 font-sfpro text-lg"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              {/* Mobile Services Dropdown */}
              <div className="space-y-3">
                <button
                  className="text-dark font-sfpro text-lg flex items-center gap-1"
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                >
                  Services
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isServicesOpen && (
                  <div className="pl-4 space-y-3">
                    {services.map((service) => (
                      <Link
                        key={service.label}
                        href={service.href}
                        className="block text-dark hover:text-primary transition-colors duration-300 font-sfpro text-lg"
                        onClick={() => {
                          setIsOpen(false);
                          setIsServicesOpen(false);
                        }}
                      >
                        {service.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Other Nav Links excluding Home */}
              {navLinks.slice(1).map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="text-dark hover:text-primary transition-colors duration-300 font-sfpro text-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/get-started"
                className="button-primary text-lg text-center px-8 py-3"
                onClick={() => setIsOpen(false)}
              >
                Get Started
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navigation;