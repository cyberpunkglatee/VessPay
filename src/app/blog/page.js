'use client';

import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const featuredPost = {
  title: "VessPay 2.0: The Future of Pan-African Payments is Here.",
  excerpt: "We're excited to announce our formal partnership with Ecobank and the rollout of our new multi-currency wallet. Here's how we're changing the game for the diaspora.",
  category: "Product Update",
  date: "Oct 12, 2024",
  readTime: "5 min",
  image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
};

const posts = [
  {
    title: "How to Navigating Ghana's MoMo Landscape without a local SIM.",
    excerpt: "The complete guide for tourists and visitors arriving at Kotoka International Airport.",
    category: "Travel Tips",
    date: "Oct 8, 2024",
    readTime: "4 min",
    image: "https://images.unsplash.com/photo-1596487649116-be8ba15483b8?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "Expat Life: Managing your local staff and utilities with VessPay.",
    excerpt: "Why the traditional banking system is failing foreign residents in Accra and how we fix it.",
    category: "Expat Life",
    date: "Oct 5, 2024",
    readTime: "6 min",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=600",
  },
  {
    title: "MoMo Security: How we keep your funds safe with Ecobank.",
    excerpt: "An inside look at our bank-grade encryption and regulatory compliance framework.",
    category: "Security",
    date: "Oct 1, 2024",
    readTime: "5 min",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=600",
  },
];

export default function Blog() {
  return (
    <main className="bg-[#1a3a2a] min-h-screen text-white">
      <PageHero 
        subtitle="VESS PAY BLOG" 
        title="Stories, Tips" 
        accent="& Insights." 
      />

      {/* Featured Post */}
      <section className="py-24 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group rounded-[40px] overflow-hidden border border-white/5 shadow-2xl"
          >
             <div className="flex flex-col lg:flex-row min-h-[500px]">
                <div className="lg:w-1/2 relative">
                   <img src={featuredPost.image} alt={featuredPost.title} className="absolute inset-0 w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                   <div className="absolute inset-0 bg-[#0a1f12]/20" />
                </div>
                <div className="lg:w-1/2 p-12 lg:p-20 bg-[#0a1f12] flex flex-col justify-center">
                   <div className="flex items-center gap-4 mb-6">
                      <span className="text-[#c9a84c] text-[10px] font-bold tracking-widest uppercase">{featuredPost.category}</span>
                      <div className="w-1 h-1 rounded-full bg-white/20" />
                      <span className="text-white/40 text-[10px] uppercase tracking-widest">{featuredPost.date}</span>
                   </div>
                   <h2 className="text-3xl lg:text-5xl font-serif mb-6 leading-tight group-hover:text-[#c9a84c] transition-colors">
                     {featuredPost.title}
                   </h2>
                   <p className="text-white/50 text-lg leading-relaxed mb-10">
                     {featuredPost.excerpt}
                   </p>
                   <Link href="#" className="flex items-center gap-3 text-white font-bold text-xs tracking-widest uppercase hover:text-[#c9a84c] transition-colors group/link">
                      READ FULL ARTICLE <ArrowRight size={16} className="group-hover/link:translate-x-2 transition-transform" />
                   </Link>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24 px-6 pb-48">
        <div className="container mx-auto">
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {posts.map((post, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-[#0a1f12]/50 rounded-3xl border border-white/5 overflow-hidden group hover:border-[#c9a84c]/20 transition-all duration-500"
                >
                   <div className="relative aspect-video overflow-hidden">
                      <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover grayscale transition-all duration-700 group-hover:scale-110 group-hover:grayscale-0" />
                   </div>
                   <div className="p-8">
                      <div className="flex items-center gap-4 mb-4">
                        <span className="text-[#c9a84c] text-[10px] font-bold tracking-widest uppercase">{post.category}</span>
                        <div className="w-1 h-1 rounded-full bg-white/20" />
                        <span className="text-white/40 text-[10px] uppercase tracking-widest">{post.date}</span>
                      </div>
                      <h3 className="text-xl font-serif mb-4 line-clamp-2 min-h-[3.5rem] group-hover:text-[#c9a84c] transition-colors">{post.title}</h3>
                      <p className="text-white/40 text-sm leading-relaxed mb-8 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between pt-6 border-t border-white/5 text-[10px] font-bold text-white/20 uppercase tracking-widest">
                         <div className="flex items-center gap-1">
                            <Clock size={12} /> {post.readTime}
                         </div>
                         <Link href="#" className="text-white/60 hover:text-[#c9a84c] transition-colors">READ MORE</Link>
                      </div>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </section>
    </main>
  );
}
