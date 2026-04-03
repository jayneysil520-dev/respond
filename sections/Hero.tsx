
import React, { useRef, useState, useMemo } from 'react';
import { motion, useTransform, useMotionValue, useSpring, useScroll } from 'framer-motion';
import Spotlight3D from '../components/Spotlight3D';
import PatternPlaceholder from '../components/PatternPlaceholder';
import Magnetic from '../components/Magnetic';
import { useMediaQuery } from '../hooks/useMediaQuery';

// ==========================================
// 🟢 CONFIGURATION: GLOBAL ZOOM & LAYOUT
// ==========================================

// 🟢 1. GLOBAL SCALE: Adjusts the zoom level of the entire section
const HERO_SCALE_DESKTOP = 0.8; 
const HERO_SCALE_MOBILE = 0.5;

// 🟢 2. CARD SIZE: Base dimensions
const CARD_SIZE_CLASSES = "w-[200px] md:w-[300px]"; 

// 🟢 3. SCATTERED LAYOUT CONFIGURATION (随机洒落布局)
const CARD_LAYOUT_CONFIG_DESKTOP = [
    { left: '39%',  top: '77%', zIndex: 32 }, 
    { left: '19%',  top: '76%', zIndex: 35 }, 
    { left: '72%',  top: '77%', zIndex: 30 }, 
    { left: '58%',  top: '75%', zIndex: 25 }, 
    { left: '8%',   top: '78%', zIndex: 37 }, 
    { left: '89%',  top: '72%', zIndex: 36 }, 
    { left: '-7%',  top: '82%', zIndex: 36 }, 
    { left: '79%',  top: '88%', zIndex: 10 }, 
];

const CARD_LAYOUT_CONFIG_MOBILE = [
    { left: '35%',  top: '65%', zIndex: 32 }, 
    { left: '10%',  top: '75%', zIndex: 35 }, 
    { left: '65%',  top: '70%', zIndex: 30 }, 
    { left: '45%',  top: '85%', zIndex: 25 }, 
    { left: '-5%',  top: '60%', zIndex: 37 }, 
    { left: '85%',  top: '80%', zIndex: 36 }, 
    { left: '-10%', top: '90%', zIndex: 36 }, 
    { left: '75%',  top: '95%', zIndex: 10 }, 
];

// --- DATA: Defined with RANDOMIZED SCALES (大小错落) & ROTATIONS (随机旋转) ---
const heroCards = [
  { 
      id: 1, 
      color: '#FF7F27', 
      rotate: -2,      // 🟢 Strong tilt left
      scale: 1.4,       // 🟢 Biggest
      img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/1.png'
  }, 
  { 
      id: 2, 
      color: '#00A2E8', 
      rotate: 8,        // 🟢 Tilt right
      scale: 1.2,      // 🟢 Large
      img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/2.png'
  }, 
  { 
      id: 3, 
      color: '#55FFFF', 
      rotate: 24,       // 🟢 Strong tilt right
      scale: 1.15,       // 🟢 Medium-Large
      img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E7%8C%BF%E8%BE%85%E5%AF%BC%E5%B0%81%E9%9D%A2.png'
  }, 
  {   id: 4, 
      color: '#E0221E', 
      rotate: 12,       // 🟢 Almost straight
      scale: 1.1,      // 🟢 Medium
      img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E5%8D%AB%E5%B2%97/%E5%B0%81%E9%9D%A2%E5%9B%BE.png'
  }, 
  { 
      id: 5, 
      color: '#E0221E', 
      rotate: 2,      // 🟢 Extreme tilt left
      scale: 1.0,      // 🟢 Medium
      img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/nezha/%E5%93%AA%E5%90%92%E6%B5%B7%E8%B4%BC%E7%8E%8B.png' 
  }, 
  { 
      id: 6, 
      color: '#0044BA', 
      rotate: 15,       // 🟢 Moderate tilt right
      scale: 0.9,       // 🟢 Small
      img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/animation/%E8%A7%86%E9%A2%91%E5%B0%81%E9%9D%A2.png'
  },
  { 
      id: 7, 
      color: '#AA88EE', 
      rotate: -15,       // 🟢 Extreme tilt right
      scale: 0.95,      // 🟢 Smallest
      img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/animation/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_2026-02-02_223917_470.jpg'
  },
  { 
      id: 8, 
      color: '#4ECDC4', 
      rotate: -15,      // 🟢 Background tilt
      scale: 0.01,       // 🟢 Small
      img: 'https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/animation/Group%20951.png'
  }
];

// --- DEPTH CONFIG ---
const DEPTHS = {
    FLOOR: -300,
    PROPS: -290,
    CARDS: -50,
    TEXT: 10, 
};

const ImageRevealHeroTitle: React.FC = () => {
    const [isHovered, setIsHovered] = useState(false);
    const REVEAL_IMAGE = "https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E6%88%91%E8%87%AA%E5%B7%B1.png";

    return (
        <div 
            className="relative flex items-center justify-center cursor-pointer select-none group h-[1.2em] w-full"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.h1 
                className="font-albert-black text-[6vw] md:text-[8vw] leading-none tracking-tighter whitespace-nowrap transform -skew-x-6 origin-right z-20 relative"
                animate={{ 
                    x: isHovered ? '-22%' : '0%',
                    color: isHovered ? '#D40411' : '#000000',
                }}
                transition={{ type: "spring", stiffness: 150, damping: 16 }}
            >
                zhanG
            </motion.h1>

            <motion.div
                className="absolute z-10 pointer-events-none rounded-[2rem] overflow-hidden border-4 border-white shadow-2xl"
                style={{
                    width: '12vw',
                    height: '16vw', 
                    top: '50%',
                    left: '50%',
                    marginTop: '-8vw',
                    marginLeft: '-6vw' 
                }}
                initial={{ scale: 0, rotate: -15, opacity: 0 }}
                animate={{
                    scale: isHovered ? 1 : 0,
                    rotate: isHovered ? 6 : -15,
                    opacity: isHovered ? 1 : 0
                }}
                transition={{ 
                    type: "spring", 
                    stiffness: 180, 
                    damping: 14,
                    delay: isHovered ? 0.05 : 0 
                }}
            >
                <img 
                    src={REVEAL_IMAGE} 
                    alt="Magic Reveal" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                />
            </motion.div>

            <motion.h1 
                className="font-albert-black text-[6vw] md:text-[8vw] leading-none tracking-tighter whitespace-nowrap transform -skew-x-6 origin-left z-20 relative ml-[2vw]"
                animate={{ 
                    x: isHovered ? '22%' : '0%',
                    color: isHovered ? '#D40411' : '#000000',
                }}
                transition={{ type: "spring", stiffness: 150, damping: 16 }}
            >
                minGlei
            </motion.h1>
        </div>
    );
};

const FloatingHeroCard: React.FC<{ card: any, index: number, hasEntered: boolean, isMobile: boolean }> = ({ card, index, hasEntered, isMobile }) => {
    const layoutConfig = isMobile ? CARD_LAYOUT_CONFIG_MOBILE : CARD_LAYOUT_CONFIG_DESKTOP;
    const layout = layoutConfig[index] || { left: '50%', top: '50%', zIndex: 1 };
    const [isHovered, setIsHovered] = useState(false);

    // Random floating params
    const randomDuration = useMemo(() => 3 + Math.random() * 2, []);
    const randomOffset = useMemo(() => 5 + Math.random() * 5, []);
    const randomHoverRotate = useMemo(() => (Math.random() * 8 - 4), []); 

    return (
        <motion.div
            className={`absolute cursor-pointer ${CARD_SIZE_CLASSES} will-change-transform`}
            style={{
                top: layout.top,
                left: layout.left,
                aspectRatio: '1/1',
                zIndex: layout.zIndex, 
                transformStyle: "preserve-3d",
                z: DEPTHS.CARDS,
            }}
            // 🟢 UPDATED ENTRY: More random Y start to feel like a shuffle
            initial={{ opacity: 0, y: 1000 + Math.random() * 400, rotate: card.rotate + (Math.random() * 40 - 20) }}
            animate={hasEntered ? { opacity: 1, y: 0, rotate: card.rotate } : {}}
            transition={{ 
                duration: 1.5, 
                // Randomize delay slightly to break the "wave" pattern
                delay: 0.1 + (Math.random() * 0.4), 
                type: "spring", 
                stiffness: 45, 
                damping: 16,
                mass: 1.1
            }} 
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <motion.div
                animate={{
                    y: isHovered ? -60 : [0, -randomOffset, 0],
                    scale: isHovered ? (card.scale || 1) * 1.1 : (card.scale || 1),
                    rotate: isHovered ? card.rotate + randomHoverRotate : card.rotate, 
                }}
                transition={{
                    y: {
                        duration: isHovered ? 0.3 : randomDuration,
                        repeat: isHovered ? 0 : Infinity,
                        repeatType: "mirror", 
                        ease: "easeInOut"
                    },
                    scale: { 
                        type: "spring", 
                        stiffness: 200,
                        damping: 15
                    },
                    rotate: { 
                        type: "spring", 
                        stiffness: 150, 
                        damping: 20 
                    }
                }}
                className="w-full h-full relative origin-bottom"
            >
                <Magnetic strength={40}>
                    <Spotlight3D 
                        className="w-full h-full rounded-[2.5rem] bg-white/10 backdrop-blur-md border border-white/30 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.15)]" 
                        color={card.color}
                        enableElasticScale={false} 
                        spotlightColor="rgba(255,255,255,0.5)"
                    >
                         <motion.div 
                            className="absolute inset-4 rounded-[2rem] blur-2xl opacity-0 transition-opacity duration-500 z-0"
                            animate={{ opacity: isHovered ? 0.6 : 0 }}
                            style={{ backgroundColor: card.color }}
                        />

                        <div className="w-full h-full relative p-3">
                            <div className="w-full h-full rounded-[2rem] overflow-hidden relative shadow-inner bg-white">
                                {card.img ? (
                                    <div className="w-full h-full relative group">
                                            <img 
                                            src={card.img} 
                                            alt={`Card ${card.id}`} 
                                            className="w-full h-full object-cover"
                                            decoding="async"
                                            referrerPolicy="no-referrer"
                                            />
                                            <motion.div 
                                                className="absolute inset-0 pointer-events-none mix-blend-overlay z-10"
                                                animate={{ opacity: isHovered ? 0.4 : 0 }}
                                                transition={{ duration: 0.3 }}
                                                style={{ backgroundColor: card.color }}
                                            />
                                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300" />
                                    </div>
                                ) : (
                                    <PatternPlaceholder color={card.color} number={card.id} />
                                )}
                            </div>
                        </div>
                    </Spotlight3D>
                </Magnetic>
            </motion.div>
        </motion.div>
    );
};

const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [hasEntered, setHasEntered] = useState(false);
    const isMobile = useMediaQuery('(max-width: 768px), (max-height: 500px)');
    const HERO_SCALE = isMobile ? HERO_SCALE_MOBILE : HERO_SCALE_DESKTOP;

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    const floorY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
    
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const mouseXSpring = useSpring(x, { stiffness: 40, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 40, damping: 20 });

    const handleMouseMove = (e: React.MouseEvent) => {
        const { clientX, clientY } = e;
        const w = window.innerWidth;
        const h = window.innerHeight;
        x.set(clientX / w - 0.5);
        y.set(clientY / h - 0.5);
    };

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["30deg", "25deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);
    const translateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-2%", "2%"]);

    return (
        <section 
            ref={containerRef}
            className="relative w-full bg-white overflow-hidden z-10"
            onMouseMove={handleMouseMove}
            style={{ height: '140vh' }}
        >
             <motion.div 
                className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center will-change-transform"
                onViewportEnter={() => setHasEntered(true)}
             >
                <div className="absolute inset-0 flex items-center justify-center perspective-2000">
                    <motion.div
                        className="relative w-full max-w-[1400px] will-change-transform transform-gpu"
                        style={{
                            scale: HERO_SCALE, 
                            rotateX,
                            rotateY,
                            x: translateX,
                            y: floorY,
                            aspectRatio: '16/9',
                            transformStyle: "preserve-3d",
                        }}
                    >
                        {/* Floor */}
                        <div className="absolute inset-[-50%] bg-white transform-preserve-3d" style={{ transform: `translateZ(${DEPTHS.FLOOR}px)` }} />
                        
                        {/* 1. Main Title - Moved UP slightly to 28% to balance the bottom card pile */}
                        <div className="absolute top-[28%] left-0 w-full text-center pointer-events-none" style={{ transform: `translateZ(${DEPTHS.TEXT}px) rotateX(-10deg)` }}>
                             <motion.div 
                                className="pointer-events-auto inline-block" 
                                initial={{ opacity: 0, y: 150 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
                                viewport={{ once: true }}
                             >
                                <ImageRevealHeroTitle />
                            </motion.div>

                            <motion.div 
                                className="mt-12 md:mt-16 flex flex-col items-center gap-2 md:gap-3"
                                initial={{ opacity: 0, y: 80 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 1.2, ease: "easeOut", delay: 0.4 }}
                                viewport={{ once: true }}
                            >
                                <div className="font-albert-light text-lg md:text-3xl text-gray-500 tracking-widest uppercase">Visual Designer</div>
                                <div className="w-8 md:w-12 h-[1px] bg-gray-300 my-1" />
                                <div className="font-albert-light text-base md:text-2xl text-gray-400 tracking-widest uppercase">Illustrator & Animator</div>
                            </motion.div>
                        </div>

                        {/* 2. Scattered Card Deck */}
                        {heroCards.map((card, idx) => (
                            <FloatingHeroCard key={card.id} card={card} index={idx} hasEntered={hasEntered} isMobile={isMobile} />
                        ))}

                    </motion.div>
                </div>
             </motion.div>
        </section>
    );
};

export default Hero;
