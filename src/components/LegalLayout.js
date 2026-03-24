'use client';

import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';

export default function LegalLayout({ title, subtitle, lastUpdated, toc, children }) {
  return (
    <main className="bg-white min-h-screen text-[#1a3a2a]">
      <PageHero 
        subtitle={subtitle} 
        title={title} 
      />
      
      <div className="bg-[#f0f7f0] py-4 px-6 border-b border-[#1a3a2a]/10">
        <div className="container mx-auto">
          <p className="text-[10px] font-bold tracking-widest text-[#1a3a2a]/40 uppercase">
            LAST UPDATED: {lastUpdated}
          </p>
        </div>
      </div>

      <section className="py-24 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-16 items-start">
            {/* Sticky TOC */}
            <aside className="lg:w-1/4 lg:sticky lg:top-32 space-y-4">
              <p className="text-[10px] font-bold tracking-widest text-[#c9a84c] uppercase mb-8">TABLE OF CONTENTS</p>
              <nav className="flex flex-col gap-4">
                {toc.map((item, i) => (
                  <a 
                    key={i} 
                    href={`#${item.id}`}
                    className="text-sm font-sans hover:text-[#c9a84c] transition-colors border-l-2 border-transparent hover:border-[#c9a84c] pl-4 py-1"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </aside>

            {/* Content */}
            <div className="lg:w-3/4 max-w-3xl prose prose-green prose-lg">
              {children}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
