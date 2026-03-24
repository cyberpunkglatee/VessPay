'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import AppMockup from './AppMockup';

const frames = [
  {
    title: "Your Ghana wallet.",
    subtitle: "Always ready.",
    range: [0, 0.2]
  },
  {
    title: "Load dollars, pounds.",
    subtitle: "Instantly.",
    range: [0.25, 0.45]
  },
  {
    title: "Send MoMo to anyone.",
    subtitle: "No SIM card.",
    range: [0.5, 0.7]
  },
  {
    title: "Ghana Payments.",
    subtitle: "Without the Hassle.",
    range: [0.75, 1]
  }
];

export default function HeroSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scrollProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-[#1a3a2a]">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        {/* Background Geometric Shapes */}
        <div className="absolute inset-0 z-0">
          <motion.div 
            style={{ 
              rotate: useTransform(scrollProgress, [0, 1], [0, 180]),
              scale: useTransform(scrollProgress, [0, 0.5, 1], [1, 1.2, 1])
            }}
            className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#c9a84c]/5 rounded-full blur-[120px]" 
          />
          <motion.div 
             style={{ 
              rotate: useTransform(scrollProgress, [0, 1], [0, -90]),
              x: useTransform(scrollProgress, [0, 1], [0, 50])
            }}
            className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#f0f7f0]/5 rounded-full blur-[100px]" 
          />
        </div>

        <div className="container mx-auto px-6 pt-24 lg:pt-0 h-full flex flex-col lg:flex-row items-center justify-between relative z-10">
          {/* Text Overlays */}
          <div className="w-full lg:w-1/2 h-[300px] lg:h-auto relative">
            {frames.map((frame, i) => (
              <TextOverlay 
                key={i} 
                title={frame.title} 
                subtitle={frame.subtitle} 
                progress={scrollProgress} 
                range={frame.range} 
              />
            ))}
          </div>

          {/* App Mockup */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <AppMockup scrollProgress={scrollProgress} />
          </div>
        </div>
      </div>
    </div>
  );
}

function TextOverlay({ title, subtitle, progress, range }) {
  const opacity = useTransform(progress, [range[0] - 0.05, range[0], range[1], range[1] + 0.05], [0, 1, 1, 0]);
  const y = useTransform(progress, [range[0] - 0.05, range[0], range[1], range[1] + 0.05], [40, 0, 0, -40]);

  return (
    <motion.div 
      style={{ opacity, y }}
      className="absolute inset-x-0 top-0 bottom-0 flex flex-col justify-center pt-24 lg:pt-0"
    >
      <h1 className="text-4xl lg:text-7xl font-serif text-white mb-6 leading-[1.1]">
        {title.split(' ').map((word, i) => (
          <span key={i} className="inline-block mr-[0.3em]">
             {word === 'Ghana' ? <span className="text-[#c9a84c]">{word}</span> : word}
          </span>
        ))}
        <br />
        <span className="text-[#c9a84c]/60">{subtitle}</span>
      </h1>
      <p className="text-white/40 font-sans tracking-[0.2em] text-xs font-bold uppercase">
         SCROLL TO DISCOVER
      </p>
    </motion.div>
  );
}
