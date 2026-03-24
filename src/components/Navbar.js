'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    const navLinks = [
        { name: 'HOW IT WORKS', href: '/how-it-works' },
        { name: 'FEATURES', href: '/features' },
        { name: 'PRICING', href: '/pricing' },
        { name: "WHO IT'S FOR", href: '/who-its-for' },
        { name: 'ABOUT', href: '/about' },
    ];

    return (
        <>
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className={cn(
                    "fixed top-0 left-0 right-0 z-[100] transition-all duration-500",
                    isScrolled 
                        ? "bg-[#1a3a2a]/95 backdrop-blur-xl border-b border-white/5 py-4" 
                        : "bg-transparent py-6"
                )}
            >
                <div className="container mx-auto px-6 flex items-center justify-between">
                    <Link 
                        href="/" 
                        className="flex items-center gap-3 group relative z-[110]"
                        onClick={() => setIsMenuOpen(false)}
                    >
                        <div className="relative w-10 h-10 overflow-hidden rounded-md">
                            <Image
                                src="/vesspay_official_logo_01.PNG"
                                alt="VessPay Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </div>
                        <span className="text-white font-serif text-xl tracking-tight">
                            VessPay<span className="text-[#c9a84c]">.</span>
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-[11px] font-bold tracking-[0.2em] text-white/70 hover:text-[#c9a84c] transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}
                        <Link
                            href="/download"
                            className="bg-[#1a3a2a] text-white border border-white/10 px-8 py-3 rounded-sm text-[11px] font-bold tracking-[0.2em] hover:bg-white hover:text-[#1a3a2a] transition-all duration-300"
                        >
                            GET STARTED
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <button
                        className="lg:hidden text-white p-2 relative z-[110]"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </motion.nav>

            {/* Mobile Menu Overlay - Moved outside motion.nav to fill viewport properly */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: '100%' }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-[#0a1f12] z-[150] flex flex-col items-center justify-center gap-8 lg:hidden"
                    >
                        {/* Mobile Logo inside Menu */}
                        <div className="absolute top-8 left-6 flex items-center gap-3">
                            <div className="relative w-8 h-8 overflow-hidden rounded-md border border-white/10">
                                <Image
                                    src="/vesspay_official_logo_01.PNG"
                                    alt="VessPay Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-white font-serif text-lg tracking-tight">
                                VessPay<span className="text-[#c9a84c]">.</span>
                            </span>
                        </div>
                        {navLinks.map((link, i) => (
                            <motion.div
                                key={link.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <Link
                                    href={link.href}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-2xl font-serif text-white hover:text-[#c9a84c] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </motion.div>
                        ))}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: navLinks.length * 0.1 }}
                        >
                            <Link
                                href="/download"
                                onClick={() => setIsMenuOpen(false)}
                                className="mt-4 bg-[#c9a84c] text-[#1a3a2a] px-12 py-5 rounded-sm font-bold tracking-[0.2em] text-sm block text-center"
                            >
                                GET STARTED
                            </Link>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
