'use client';

import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import Image from 'next/image';
import { Target, Shield, Globe, Award, Briefcase } from 'lucide-react';

const vision = [
  { year: "2026", event: "Launch in Ghana with Ecobank integration.", active: true },
  { year: "2027", event: "Expansion to Nigeria and MoMo network partners.", active: false },
  { year: "2028", event: "Pan-African license and Kenya/East Africa rollout.", active: false },
];

export default function About() {
  return (
    <main className="bg-[#1a3a2a] min-h-screen text-white">
      <PageHero 
        subtitle="OUR STORY" 
        title="Built in Accra." 
        accent="Built for the World." 
      />

      {/* Founder Story */}
      <section className="py-20 lg:py-32 px-6 mt-8 lg:mt-0">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-32 items-center text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="flex-1 w-full max-w-[280px] lg:max-w-lg mx-auto lg:mx-0"
            >
              <div className="relative aspect-square rounded-[40px] overflow-hidden border border-[#c9a84c]/20 shadow-2xl">
                 <Image 
                   src="/founder_picture.jpg" 
                   alt="Ernest Glate - Founder of VessPay" 
                   fill
                   className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#1a3a2a] to-transparent opacity-60" />
                 <div className="absolute bottom-8 left-8">
                    <p className="text-[#c9a84c] font-bold tracking-widest text-xs uppercase">Founder & CEO</p>
                    <h3 className="text-2xl font-serif">Ernest Glate</h3>
                 </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex-1 space-y-8"
            >
              <h2 className="text-3xl lg:text-5xl font-serif leading-tight">The Vision Behind <span className="text-[#c9a84c]">VessPay</span></h2>
              <p className="text-white/60 text-lg leading-relaxed">
                I&apos;m Ernest Glate, a software engineer and entrepreneur building impactful technology from Accra, Ghana. I founded Lncksys, a registered Ghanaian software company, where I design and build scalable digital products that solve real problems.
              </p>
              <p className="text-white/50 leading-relaxed">
                VessPay was born from watching diaspora Ghanaians, tourists, and international visitors arrive in Ghana completely locked out of mobile money — the payment system that runs the entire economy. I built VessPay to fix that.
              </p>
              <div className="pt-6 border-t border-white/5 grid grid-cols-2 gap-8">
                 <div>
                    <p className="text-[#c9a84c] text-[10px] font-bold uppercase tracking-widest mb-2">Company</p>
                    <p className="text-white/80 font-serif text-lg">VessPay Ghana Ltd</p>
                 </div>
                 <div>
                    <p className="text-[#c9a84c] text-[10px] font-bold uppercase tracking-widest mb-2">Origins</p>
                    <p className="text-white/80 font-serif text-lg">Accra, Ghana</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-32 px-6 bg-[#0a1f12]">
        <div className="container mx-auto text-center">
           <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
           >
              <h2 className="text-3xl lg:text-5xl font-serif leading-tight text-[#c9a84c] mb-12">
                &quot;Make it as easy to spend and send money across Africa as it is anywhere else in the world.&quot;
              </h2>
              <div className="w-20 h-1 bg-white/20 mx-auto" />
           </motion.div>
        </div>
      </section>

      {/* Partner Cards */}
      <section className="py-32 px-6">
         <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white/5 p-12 rounded-3xl border border-white/5 hover:border-[#c9a84c]/20 transition-all duration-500"
               >
                  <Briefcase size={32} className="text-[#c9a84c] mb-8" />
                  <h3 className="text-2xl font-serif mb-4">Lncksys</h3>
                  <p className="text-white/40 leading-relaxed">
                     Our parent company and the engine of innovation. Lncksys is a registered Ghanaian software house dedicated to building the next generation of African digital infrastructure.
                  </p>
               </motion.div>
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="bg-white/5 p-12 rounded-3xl border border-white/5 hover:border-[#c9a84c]/20 transition-all duration-500"
               >
                  <Award size={32} className="text-[#c9a84c] mb-8" />
                  <h3 className="text-2xl font-serif mb-4">Ecobank Partnership</h3>
                  <p className="text-white/40 leading-relaxed">
                     Trust is built on security. Our partnership with Ecobank ensures that VessPay operates within a regulated framework, utilizing bank-grade infrastructure for your peace of mind.
                  </p>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Pan-African Vision Timeline */}
      <section className="py-32 px-6 bg-[#0a1f12]/50">
         <div className="container mx-auto max-w-4xl">
            <div className="text-center mb-24">
               <h2 className="text-3xl lg:text-5xl font-serif mb-4">The Pan-African Vision</h2>
               <p className="text-white/40 font-sans tracking-[0.2em] text-[10px] font-bold uppercase">OUR ROADMAP</p>
            </div>

            <div className="relative">
               {/* Vertical Line */}
               <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-white/10" />
               
               <div className="space-y-24">
                  {vision.map((v, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className={`relative flex items-center ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12`}
                    >
                       {/* Dot */}
                       <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#c9a84c] shadow-[0_0_15px_rgba(201,168,76,0.5)] z-10" />
                       
                       {/* Content */}
                       <div className={`ml-16 lg:ml-0 lg:w-1/2 ${i % 2 === 0 ? 'lg:pr-16 text-left lg:text-right' : 'lg:pl-16 text-left'}`}>
                          <p className="text-[#c9a84c] font-bold text-2xl font-serif mb-2">{v.year}</p>
                          <p className="text-white/60 text-lg">{v.event}</p>
                       </div>
                    </motion.div>
                  ))}
               </div>
            </div>
         </div>
      </section>
    </main>
  );
}
