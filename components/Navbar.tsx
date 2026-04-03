
import React, { useRef, useState } from 'react';
import { motion, useScroll, useMotionValueEvent, useMotionValue, useMotionTemplate, AnimatePresence } from 'framer-motion';
import Magnetic from './Magnetic';
import VinylLogo from './VinylLogo';
import { useMediaQuery } from '../hooks/useMediaQuery';

// Optimized Spotlight Link
const SpotlightLink: React.FC<{ text: string; href: string; onClick?: (e: React.MouseEvent) => void }> = ({ text, href, onClick }) => {
    const ref = useRef<HTMLAnchorElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    
    // Create gradient string directly
    const gradientBg = useMotionTemplate`radial-gradient(100px circle at ${mouseX}px ${mouseY}px, rgba(0,0,0,0.05), transparent 40%)`;

    const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
    };

    return (
        <Magnetic>
            <motion.a
                ref={ref}
                href={href}
                onClick={onClick}
                onMouseMove={handleMouseMove}
                className="relative px-4 py-2 text-[10px] font-bold tracking-widest cursor-pointer block group overflow-hidden rounded-lg text-gray-600"
                whileHover={{ opacity: 1, color: "#000000" }} 
            >
                <motion.div 
                    className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 group-hover:opacity-100"
                    style={{ background: gradientBg }}
                />
                <span className="relative z-10 block">{text}</span>
            </motion.a>
        </Magnetic>
    );
};

const Navbar: React.FC = () => {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useMotionValueEvent(scrollY, "change", (latest) => {
    const shouldBeScrolled = latest > 100;
    if (isScrolled !== shouldBeScrolled) {
        setIsScrolled(shouldBeScrolled);
    }
  });

  const navLinks = [
      { name: "ABOUT ME", id: "#experience" },
      { name: "CAPABILITIES", id: "#capabilities" },
      { name: "PROJECTS", id: "#projects" }
  ];

  const handleScroll = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    const element = document.querySelector(id);
    if (element) {
        const offset = 80;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;

        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    }
  };

  return (
    <>
      <motion.nav
        className="fixed top-0 left-0 w-full z-50 px-6 md:px-8 py-4 md:py-6 flex justify-between items-center transition-all duration-500 pointer-events-none"
        initial={{ opacity: 1 }}
        animate={{ 
          backgroundColor: isScrolled ? "rgba(255,255,255,0.01)" : "transparent",
        }}
      >
        <div 
          className="absolute inset-0 z-[-1] transition-all duration-500 pointer-events-none"
          style={{
              opacity: isScrolled ? 0.2 : 1,
              backdropFilter: isScrolled ? "blur(8px)" : "blur(0px)",
          }}
        />

        <div 
          className="w-full flex justify-between items-center transition-all duration-500 pointer-events-auto"
          style={{ opacity: isScrolled ? 0.2 : 1 }}
          onMouseEnter={(e) => { e.currentTarget.style.opacity = "1"; }}
          onMouseLeave={(e) => { if(isScrolled) e.currentTarget.style.opacity = "0.2"; }}
        >
            <div className="flex items-center">
               <Magnetic strength={20}>
                  <VinylLogo />
               </Magnetic>
            </div>

            {/* Desktop Menu */}
            {!isMobile && (
              <div className="flex items-center space-x-4">
                {navLinks.map((link) => (
                    <SpotlightLink 
                        key={link.name} 
                        text={link.name} 
                        href={link.id}
                        onClick={(e) => handleScroll(e, link.id)}
                    />
                ))}

                <Magnetic>
                    <motion.a
                        href="#contact"
                        onClick={(e) => handleScroll(e, "#contact")}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="ml-4 px-6 py-2 text-[10px] font-bold tracking-widest text-gray-600 border border-black/10 rounded-full backdrop-blur-md bg-white/30 shadow-sm hover:bg-white/50 transition-all block hover:text-black"
                    >
                        <span>CONTACT</span>
                    </motion.a>
                </Magnetic>
              </div>
            )}

            {/* Mobile Toggle */}
            {isMobile && (
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="w-10 h-10 flex flex-col items-center justify-center gap-1.5 relative z-[60]"
              >
                <motion.span 
                  animate={{ rotate: isMenuOpen ? 45 : 0, y: isMenuOpen ? 8 : 0 }}
                  className="w-6 h-0.5 bg-black block transition-all"
                />
                <motion.span 
                  animate={{ opacity: isMenuOpen ? 0 : 1 }}
                  className="w-6 h-0.5 bg-black block transition-all"
                />
                <motion.span 
                  animate={{ rotate: isMenuOpen ? -45 : 0, y: isMenuOpen ? -8 : 0 }}
                  className="w-6 h-0.5 bg-black block transition-all"
                />
              </button>
            )}
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 z-[55] bg-white flex flex-col items-center justify-center gap-8"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-6 left-6 flex items-center gap-2 text-gray-500 hover:text-black transition-colors"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="19" y1="12" x2="5" y2="12"></line>
                <polyline points="12 19 5 12 12 5"></polyline>
              </svg>
              <span className="font-albert-black tracking-widest text-sm uppercase">Back</span>
            </button>

            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                onClick={(e) => handleScroll(e, link.id)}
                className="text-2xl font-albert-black tracking-tighter"
              >
                {link.name}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.1 }}
              onClick={(e) => handleScroll(e, "#contact")}
              className="px-10 py-4 text-xl font-albert-black tracking-tighter bg-black text-white rounded-full"
            >
              CONTACT
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
