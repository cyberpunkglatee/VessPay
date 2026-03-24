import Link from 'next/link';
import Image from 'next/image';
import { Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
    return (
        <footer className="bg-[#0a1f12] border-t border-white/5 pt-24 pb-12 px-6">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row justify-between gap-16 mb-24">
                    <div className="max-w-sm">
                        <Link href="/" className="flex items-center gap-3 mb-8 group">
                            <div className="relative w-10 h-10 overflow-hidden rounded-md">
                                <Image
                                    src="/vesspay_official_logo_01.PNG"
                                    alt="VessPay Logo"
                                    fill
                                    className="object-contain"
                                />
                            </div>
                            <span className="text-white font-serif text-xl tracking-tight">
                                VessPay<span className="text-[#c9a84c]">.</span>
                            </span>
                        </Link>
                        <p className="text-white/40 text-sm leading-relaxed mb-8">
                             Premium financial bridge for the African diaspora. 
                             Regulated infrastructure, instant payments, absolute transparency.
                        </p>
                        <div className="flex items-center gap-4">
                            {[Twitter, Linkedin, Instagram].map((Icon, i) => (
                                <Link key={i} href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/60 hover:text-[#c9a84c] hover:border-[#c9a84c] transition-all duration-300">
                                    <Icon size={18} strokeWidth={1.5} />
                                </Link>
                            ))}
                        </div>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-16">
                        <FooterColumn 
                            title="Product" 
                            links={[
                                { name: 'How It Works', href: '/how-it-works' },
                                { name: 'Features', href: '/features' },
                                { name: 'Pricing', href: '/pricing' },
                                { name: 'Download App', href: '/download' },
                            ]} 
                        />
                        <FooterColumn 
                            title="Who It's For" 
                            links={[
                                { name: 'Tourists', href: '/who-its-for#tourists' },
                                { name: 'Expats', href: '/who-its-for#expats' },
                                { name: 'Diaspora', href: '/who-its-for#diaspora' },
                            ]} 
                        />
                        <FooterColumn 
                            title="Company" 
                            links={[
                                { name: 'About Us', href: '/about' },
                                { name: 'Blog', href: '/blog' },
                                { name: 'Contact', href: '/contact' },
                            ]} 
                        />
                        <FooterColumn 
                            title="Legal" 
                            links={[
                                { name: 'Privacy Policy', href: '/legal/privacy' },
                                { name: 'Terms of Service', href: '/legal/terms' },
                                { name: 'Regulatory', href: '/legal/regulatory' },
                            ]} 
                        />
                    </div>
                </div>

                <div className="pt-12 border-t border-white/5 text-center lg:text-left">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                        <div className="space-y-4 max-w-2xl">
                            <p className="text-white/20 text-[10px] uppercase tracking-[0.2em] leading-relaxed">
                                VessPay is a financial technology company, not a bank. VessPay Ghana Limited is a subsidiary of Lncksys.
                                Banking services are provided by our regulated banking partners.
                            </p>
                            <p className="text-white/40 text-xs font-bold font-sans uppercase tracking-widest">
                                &copy; {new Date().getFullYear()} VessPay GHANA LIMITED. ALL RIGHTS RESERVED.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

function FooterColumn({ title, links }) {
    return (
        <div className="flex flex-col gap-6">
            <h4 className="text-white/20 text-[10px] font-bold uppercase tracking-[0.2em]">{title}</h4>
            <div className="flex flex-col gap-4">
                {links.map((link) => (
                    <Link 
                        key={link.name} 
                        href={link.href}
                        className="text-white/60 hover:text-[#c9a84c] transition-colors text-sm font-medium"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
        </div>
    );
}
