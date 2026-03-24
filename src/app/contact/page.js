'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PageHero from '@/components/PageHero';
import FAQAccordion from '@/components/FAQAccordion';
import { Mail, MessageCircle, HelpCircle, Send, CheckCircle2 } from 'lucide-react';

const contactOptions = [
  {
    icon: <Mail size={24} className="text-[#c9a84c]" />,
    title: "Email Support",
    label: "hello@vesspay.com",
    action: "mailto:hello@vesspay.com"
  },
  {
    icon: <MessageCircle size={24} className="text-[#c9a84c]" />,
    title: "WhatsApp Chat",
    label: "+233 50 000 0000",
    action: "https://wa.me/233500000000"
  },
  {
    icon: <HelpCircle size={24} className="text-[#c9a84c]" />,
    title: "Help Center",
    label: "Browse FAQs",
    action: "#faq"
  }
];

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'General Inquiry', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
      return;
    }
    setSubmitted(true);
  };

  return (
    <main className="bg-[#1a3a2a] min-h-screen text-white">
      <PageHero 
        subtitle="GET IN TOUCH" 
        title="We're Here." 
        accent="Always." 
      />

      {/* Contact Options Grid */}
      <section className="py-24 px-6 scale-95 lg:scale-100 origin-top">
         <div className="container mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
               {contactOptions.map((opt, i) => (
                 <motion.a
                   key={i}
                   href={opt.action}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                   className="bg-white/5 p-10 rounded-3xl border border-white/5 hover:border-[#c9a84c]/20 transition-all duration-500 block text-center group"
                 >
                   <div className="mb-6 flex justify-center">{opt.icon}</div>
                   <h3 className="text-xl font-serif mb-2">{opt.title}</h3>
                   <p className="text-white/40 text-sm group-hover:text-[#c9a84c] transition-colors">{opt.label}</p>
                 </motion.a>
               ))}
            </div>
         </div>
      </section>

      {/* Main Contact Form Section */}
      <section className="py-24 px-6 bg-[#0a1f12]">
         <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-20 items-start">
               {/* Left Side Info */}
               <div className="lg:w-1/3 space-y-8">
                  <h2 className="text-3xl lg:text-5xl font-serif">Drop us a line.</h2>
                  <p className="text-white/40 text-lg leading-relaxed">
                    Have a question about your account, a transaction, or a potential partnership? 
                    Our team is on standby to help. 
                  </p>
                  <p className="text-[#c9a84c] font-bold tracking-[0.2em] text-xs uppercase">WE RESPOND WITHIN 24 HOURS</p>
               </div>

               {/* Form Card */}
               <motion.div
                 initial={{ opacity: 0, x: 40 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="lg:w-2/3 w-full bg-[#1a3a2a] p-8 lg:p-16 rounded-[40px] border border-white/10"
               >
                  <AnimatePresence mode="wait">
                     {!submitted ? (
                       <motion.form 
                         key="form"
                         initial={{ opacity: 0 }}
                         animate={{ opacity: 1 }}
                         exit={{ opacity: 0 }}
                         onSubmit={handleSubmit}
                         className="space-y-8"
                       >
                          <div className="grid md:grid-cols-2 gap-8">
                             <div className="space-y-2">
                                <label className="text-white/40 text-[12px] font-bold uppercase tracking-widest px-2">FULL NAME</label>
                                <motion.input
                                  animate={isShaking && !formData.name ? { x: [-10, 10, -10, 10, 0] } : {}}
                                  type="text"
                                  placeholder="Ernest Glate"
                                  className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 focus:outline-none focus:border-[#c9a84c] transition-colors"
                                  value={formData.name}
                                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                             </div>
                             <div className="space-y-2">
                                <label className="text-white/40 text-[12px] font-bold uppercase tracking-widest px-2">EMAIL ADDRESS</label>
                                <motion.input
                                  animate={isShaking && !formData.email ? { x: [-10, 10, -10, 10, 0] } : {}}
                                  type="email"
                                  placeholder="hello@lncksys.com"
                                  className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 focus:outline-none focus:border-[#c9a84c] transition-colors"
                                  value={formData.email}
                                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                             </div>
                          </div>

                          <div className="space-y-2">
                             <label className="text-white/40 text-[12px] font-bold uppercase tracking-widest px-2">SUBJECT</label>
                             <select 
                               className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 focus:outline-none focus:border-[#c9a84c] transition-colors appearance-none"
                               value={formData.subject}
                               onChange={(e) => setFormData({...formData, subject: e.target.value})}
                             >
                                <option className="bg-[#1a3a2a]">General Inquiry</option>
                                <option className="bg-[#1a3a2a]">Account Verification</option>
                                <option className="bg-[#1a3a2a]">Loading Funds</option>
                                <option className="bg-[#1a3a2a]">Partnership</option>
                             </select>
                          </div>

                          <div className="space-y-2">
                             <label className="text-white/40 text-[12px] font-bold uppercase tracking-widest px-2">MESSAGE</label>
                             <motion.textarea
                               animate={isShaking && !formData.message ? { x: [-10, 10, -10, 10, 0] } : {}}
                               rows={6}
                               placeholder="How can we help?"
                               className="w-full bg-white/5 border border-white/10 rounded-sm px-6 py-4 focus:outline-none focus:border-[#c9a84c] transition-colors resize-none"
                               value={formData.message}
                               onChange={(e) => setFormData({...formData, message: e.target.value})}
                             />
                          </div>

                          <button 
                            type="submit"
                            className="w-full lg:w-max bg-[#c9a84c] text-[#1a3a2a] font-bold tracking-[0.2em] px-12 py-5 rounded-sm flex items-center justify-center gap-3 hover:bg-white transition-all duration-300 text-xs"
                          >
                             SEND MESSAGE <Send size={16} />
                          </button>
                       </motion.form>
                     ) : (
                       <motion.div
                         key="success"
                         initial={{ opacity: 0, scale: 0.9 }}
                         animate={{ opacity: 1, scale: 1 }}
                         className="py-20 text-center flex flex-col items-center gap-6"
                       >
                          <CheckCircle2 size={64} className="text-[#c9a84c]" />
                          <h3 className="text-3xl lg:text-5xl font-serif">Message Received.</h3>
                          <p className="text-white/40">We&apos;ll get back to you within 24 hours.</p>
                          <button 
                            onClick={() => setSubmitted(false)}
                            className="mt-8 text-[#c9a84c] font-bold text-[10px] tracking-widest uppercase hover:underline"
                          >
                            SEND ANOTHER MESSAGE
                          </button>
                       </motion.div>
                     )}
                  </AnimatePresence>
               </motion.div>
            </div>
         </div>
      </section>

      {/* Mini FAQ Section */}
      <section id="faq" className="py-32 px-6">
         <div className="container mx-auto">
            <div className="text-center mb-20">
               <h2 className="text-4xl lg:text-6xl font-serif mb-6">Quick <span className="text-[#c9a84c]">Answers</span></h2>
               <p className="text-white/40 text-[10px] font-bold tracking-[0.2em] uppercase">FREQUENTLY ASKED QUESTIONS</p>
            </div>
            <FAQAccordion />
         </div>
      </section>
    </main>
  );
}
