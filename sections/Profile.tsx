
import React, { useState, useRef, useMemo } from 'react';
import { motion, AnimatePresence, useTransform, useMotionValue, useSpring, useScroll, useMotionTemplate } from 'framer-motion';
import { createPortal } from 'react-dom';
import ExperienceModal from '../components/ExperienceModal';
import Magnetic from '../components/Magnetic';
import { useMediaQuery } from '../hooks/useMediaQuery';

// ==========================================
// 🟢 CONFIGURATION: GLOBAL ZOOM & LAYOUT
// ==========================================

// 🟢 1. GLOBAL SCALE: Adjusts the zoom level of the entire section
const PROFILE_SCALE_DESKTOP = 0.7;
const PROFILE_SCALE_MOBILE = 1;

// 🟢 2. CARD DIMENSIONS: Standard dimensions before scaling
const CARD_WIDTH_DESKTOP = '550px';
const CARD_WIDTH_MOBILE = '90%';
const CARD_HEIGHT = '180px';

// 🟢 3. CARD POSITIONS: Adjust each timeline card's Top, Left, and Rotation
const CARD_POSITIONS_DESKTOP = [
    { top: '0%',  left: '55%', rotate: '-2deg' }, 
    { top: '23%', left: '60%', rotate: '1deg' },  
    { top: '46%', left: '56%', rotate: '-1deg' }, 
    { top: '69%', left: '59%', rotate: '2deg' },  
];

const CARD_POSITIONS_MOBILE = [
    { top: '800px',  left: '5%', rotate: '-2deg' }, 
    { top: '1050px',  left: '5%', rotate: '1deg' },  
    { top: '1300px',  left: '5%', rotate: '-1deg' }, 
    { top: '1550px',  left: '5%', rotate: '2deg' },  
];

// --- DATA ---
const experienceData = [
  { 
      id: '1', 
      year: '2024 - 2025', 
      role: '平面视觉设计师', 
      company: '宁波得力集团', 
      color: '#FF7F27', 
      desc: '1.负责运营类营销视觉策略制定与落地，通过用户路径拆解与主视觉系统化构建，活动顺利开展，线下门店活动期销量提升12%；\n2.主导欧美市场IP形象体系搭建，根据欧美属地文化与用户画像制定角色策略及对应的视觉风格，并完成文具产品、包装及物料的延展应用；\n3.根据具体项目完成还包括海报、KV、PPT美化和动态设计；',
      tags: ['VISUAL DESIGN', 'BRANDING', 'GRAPHIC DESIGN']
  },
  { 
      id: '2', 
      year: '2021 - 2024', 
      role: '视觉传达设计硕士学位', 
      company: '南京师范大学', 
      color: '#005C4B', 
      desc: '获得学业奖学金，学习设计理论并积极参加各类国内外设计大赛',
      tags: ['MASTER DEGREE', 'THEORY', 'COMPETITION'] 
  },
  { 
      id: '3', 
      year: '2021 - 2022', 
      role: '插画师', 
      company: 'LiMi Ltd', 
      color: '#FFCC00',
      desc: '绘制各种主题的插画，包括不限于标志、海报、KV和插画的制作',
      tags: ['ILLUSTRATION', 'ART DIRECTION', 'KV DESIGN'] 
  },
  { 
      id: '4', 
      year: '2017 - 2021', 
      role: '平面视觉设计师', 
      company: '豌豆苗设计公司', 
      color: '#55FF55',
      desc: '1.负责猿编程业务线营销视觉体系搭建，建立标准化组件库与视觉规范体系，优化跨活动复用效率，使设计响应速度提升30%；\n2.推进动画资产组件化建设，沉淀角色和场景模块，实现组件复用率提升40%，缩短动画制作周期并降低重复设计成本；',
      tags: ['VISUAL DESIGN', 'GRAPHIC DESIGN']
  },
];

// --- DEPTH CONFIG ---
const DEPTHS = {
    FLOOR: -300,
    PROPS: -290,
    MAIN: -50,
};

// --- COMPONENTS ---

const FloorMarquee: React.FC<{ direction: 'left' | 'right', text: string, className?: string, rotate?: number, style?: React.CSSProperties }> = React.memo(({ direction, text, className, rotate = 0, style }) => {
    return (
        <div 
            className="absolute left-[-20%] w-[140%] pointer-events-auto overflow-visible flex will-change-transform"
            style={{ 
                transform: `translateZ(${DEPTHS.PROPS - 10}px) rotate(${rotate}deg)`, 
                zIndex: 0,
                ...style,
            }}
        >
            <motion.div
                className={`flex whitespace-nowrap ${className}`}
                initial={{ x: direction === 'left' ? '0%' : '-50%' }}
                animate={{ x: direction === 'left' ? '-50%' : '0%' }}
                transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            >
                {[...Array(6)].map((_, i) => (
                    <span key={i} className="mx-4 transition-colors duration-300">
                        {text} <span className="mx-4 opacity-30">•</span>
                    </span>
                ))}
            </motion.div>
        </div>
    );
});

const ProfileTimelineCard: React.FC<{ 
    item: any, 
    onClick: () => void, 
    index: number, 
    style: React.CSSProperties,
    isMobile: boolean
}> = React.memo(({ item, onClick, index, style, isMobile }) => {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);
    const [isHovered, setIsHovered] = useState(false);
    const cardWidth = isMobile ? CARD_WIDTH_MOBILE : CARD_WIDTH_DESKTOP;

    const randomDuration = useMemo(() => 4 + Math.random() * 2, []);
    const randomDelay = useMemo(() => Math.random() * 2, []);

    const handleMouseMove = ({ clientX, clientY }: React.MouseEvent) => {
        if (!ref.current) return;
        const { left, top } = ref.current.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <motion.div
            ref={ref}
            onClick={onClick}
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            // 🟢 UPDATED: Spring physics adjusted for overshoot/recoil
            initial={{ opacity: 0, x: 400, scale: 0.9 }} 
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ margin: "-10%" }} // Removed once: true to allow replay
            transition={{ 
                delay: index * 0.15, 
                type: "spring", 
                stiffness: 50,    
                damping: 9,       
                mass: 1,          
                
                // Specific overrides for the continuous floating/hover animations
                y: {
                    duration: isHovered ? 0.3 : randomDuration,
                    repeat: isHovered ? 0 : Infinity,
                    repeatType: "mirror",
                    ease: "easeInOut",
                    delay: isHovered ? 0 : randomDelay
                },
                rotateZ: {
                    duration: 5,
                    repeat: Infinity,
                    repeatType: "mirror"
                }
            }}
            className="absolute rounded-[2rem] cursor-pointer group perspective-1000 transform-gpu will-change-transform"
            style={{ 
                ...style, 
                width: cardWidth,
                height: isMobile ? '220px' : CARD_HEIGHT,
                transformStyle: "preserve-3d" 
            }}
            animate={{
                y: isHovered ? -10 : [0, -10, 0], 
                rotateZ: isHovered ? 0 : [0, 0.5, -0.5, 0]
            }}
        >
            <div 
                className="absolute -left-16 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center pointer-events-none"
                style={{ transform: 'translateZ(10px)' }}
            >
                <div className="absolute left-full top-1/2 w-8 h-[1px] bg-white/20 group-hover:w-12 transition-all duration-300" />
                <div className="w-3 h-3 rounded-full bg-gray-300 group-hover:bg-white transition-colors duration-300 z-10" />
                <div 
                    className="absolute inset-0 rounded-full border border-gray-400 opacity-0 scale-0 group-hover:opacity-100 group-hover:scale-125 transition-all duration-500" 
                    style={{ borderColor: item.color }}
                />
                 <div 
                    className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-60 transition-all duration-500" 
                    style={{ backgroundColor: item.color }}
                />
            </div>

            <motion.div 
                className="absolute inset-0 rounded-[2rem] shadow-sm" 
                style={{ transformStyle: 'preserve-3d' }}
                whileHover={{ z: 20, scale: 1.02 }} 
            >
                <motion.div
                    className="absolute -inset-[1px] rounded-[2rem] z-0 opacity-0 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none"
                    style={{
                        background: item.color,
                        maskImage: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
                        WebkitMaskImage: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
                    }}
                />
                
                <div className="absolute inset-0 bg-white/60 backdrop-blur-md border border-white/60 rounded-[2rem] overflow-hidden z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-transparent opacity-60 pointer-events-none" />

                     {/* Reverted Content Sizes */}
                    <div className="relative p-6 flex flex-col justify-center h-full z-20">
                        <div className="flex justify-between items-start mb-2">
                             <div className="flex items-center gap-3">
                                 <span className={`font-albert-black ${isMobile ? 'text-2xl' : 'text-3xl'} text-black/90 group-hover:text-black transition-colors`}>
                                    {item.company}
                                 </span>
                                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-black">
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                    <polyline points="12 5 19 12 12 19"></polyline>
                                 </svg>
                             </div>

                             <span 
                                className={`${isMobile ? 'px-3 py-1 text-[10px]' : 'px-4 py-1.5 text-xs'} rounded-full font-bold border backdrop-blur-md`}
                                style={{ 
                                    backgroundColor: 'rgba(255,255,255,0.4)', 
                                    borderColor: 'rgba(255,255,255,0.6)',
                                    color: '#555' 
                                }}
                             >
                                {item.year}
                             </span>
                        </div>
                        
                        <div className={`text-gray-600 font-albert-light ${isMobile ? 'text-sm' : 'text-lg'} flex items-center gap-2 mb-2`}>
                             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`text-gray-400 ${isMobile ? 'w-3 h-3' : 'w-4 h-4'}`}>
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                             </svg>
                             {item.role}
                        </div>

                        <p className={`${isMobile ? 'text-xs line-clamp-3' : 'text-sm line-clamp-2'} text-gray-500 font-albert-light leading-snug whitespace-pre-line`}>
                            {item.desc}
                        </p>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
});

const ExperienceModalCard: React.FC<{ selectedExp: any, onClose: () => void }> = ({ selectedExp, onClose }) => {
    const ref = useRef<HTMLDivElement>(null);
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ clientX, clientY }: React.MouseEvent) => {
        if (!ref.current) return;
        const { left, top } = ref.current.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };

    return (
        <motion.div
            layoutId={`card-${selectedExp.id}`}
            ref={ref}
            onMouseMove={handleMouseMove}
            initial={{ rotateY: 90, opacity: 0, scale: 0.9 }}
            animate={{ rotateY: 0, opacity: 1, scale: 1 }}
            exit={{ rotateY: -90, opacity: 0, scale: 0.9 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="relative w-full max-w-2xl transform-gpu overflow-hidden group"
            style={{ 
                transformStyle: "preserve-3d",
                borderRadius: '2.5rem',
            }}
            onClick={(e) => e.stopPropagation()}
        >
            <div 
                className="absolute inset-4 rounded-[2.5rem] transition-opacity duration-300 pointer-events-none"
                style={{ 
                    boxShadow: `0 0 100px -10px ${selectedExp.color}`,
                    opacity: 0.04,
                    zIndex: -1
                }}
            />
            <motion.div
                className="absolute inset-0 z-20 pointer-events-none rounded-[2.5rem]"
                style={{
                    border: '1.5px solid transparent',
                    background: selectedExp.color,
                    opacity: 0.15,
                    maskImage: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
                    WebkitMaskImage: useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, black, transparent)`,
                    maskComposite: 'exclude', 
                    WebkitMaskComposite: 'xor',
                    padding: '1.5px', 
                    backgroundClip: 'content-box',
                }}
            >
                 <div className="absolute inset-0 bg-transparent" /> 
            </motion.div>
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/50 pointer-events-none z-20 mix-blend-overlay" />
             <div 
                className="absolute inset-0 rounded-[2.5rem] blur-md mix-blend-multiply transition-all duration-500"
                style={{ 
                    backgroundColor: selectedExp.color, 
                    transform: 'translate(4px, 4px) scale(0.99)', 
                    opacity: 0.015, 
                    zIndex: -1 
                }} 
            />
            <div 
                className="absolute inset-0 rounded-[2.5rem] blur-md mix-blend-screen transition-all duration-500"
                style={{ 
                    backgroundColor: '#ffffff', 
                    transform: 'translate(-4px, -4px) scale(0.99)', 
                    opacity: 0.01,
                    zIndex: -2 
                }} 
            />
            <div className="absolute inset-0 bg-white/40 backdrop-blur-[60px] saturate-150 rounded-[2.5rem] shadow-2xl" />
            <div className="relative z-20 p-10 md:p-14">
                <button 
                    onClick={onClose}
                    className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-black/5 hover:bg-black/10 transition-colors border border-black/5 backdrop-blur-sm text-black/60"
                >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                </button>
                <div className="flex items-center gap-4 mb-8">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg border border-white/20" style={{ backgroundColor: selectedExp.color }}>
                        {selectedExp.company.charAt(0)}
                    </div>
                    <div>
                        <h2 className="text-3xl font-albert-black text-black">{selectedExp.company}</h2>
                        <span className="text-gray-500 font-mono">{selectedExp.year}</span>
                    </div>
                </div>
                <div className="mb-8">
                    <h3 className="text-xl font-bold text-black mb-2">{selectedExp.role}</h3>
                    <p className="text-lg text-gray-800 leading-relaxed font-albert-regular whitespace-pre-line">
                        {selectedExp.desc}
                    </p>
                </div>
                <div className="flex gap-2 flex-wrap">
                    {selectedExp.tags && selectedExp.tags.map((tag: string, i: number) => (
                         <span key={i} className="px-3 py-1 bg-white/60 border border-white/60 rounded-lg text-xs text-gray-600 font-bold uppercase backdrop-blur-md shadow-sm">
                            {tag}
                         </span>
                    ))}
                </div>
                <div 
                    className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full blur-[80px] pointer-events-none"
                    style={{ backgroundColor: selectedExp.color, opacity: 0.02 }} 
                />
            </div>
        </motion.div>
    );
};

const StablePhoto: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 100, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 100, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        x.set(mouseX / width - 0.5);
        y.set(mouseY / height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            className="absolute"
            style={{
                width: isMobile ? '280px' : '400px',
                height: isMobile ? '380px' : '550px',
                top: isMobile ? '160px' : '-6%',
                left: isMobile ? '50%' : '15%',
                x: isMobile ? '-50%' : '0%',
                zIndex: 20,
                transformStyle: "preserve-3d",
                z: DEPTHS.MAIN,
            }}
            initial={{ x: -1000, rotate: -45, opacity: 0 }}
            whileInView={{ 
                x: 0, 
                rotate: 2, 
                opacity: 1,
                y: [0, -10, 0]
            }}
            viewport={{ once: false }}
            transition={{ 
                x: { duration: 1.2, type: "spring", stiffness: 50, damping: 12 },
                y: { duration: 6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                className="w-full h-full rounded-[2rem] bg-white p-3 shadow-2xl group cursor-pointer"
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
            >
                <div className="w-full h-full relative overflow-hidden rounded-[1.5rem] bg-gray-100 transform-style-3d">
                    <img 
                        // 🟢 Updated to China CDN
                        src="https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E6%88%91%E8%87%AA%E5%B7%B11.webp" 
                        alt="Profile" 
                        className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 ease-out will-change-filter"
                        decoding="async"
                        loading="lazy"
                        referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-white/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none mix-blend-overlay" />
                    <div className="absolute inset-0 shadow-[inset_0_0_40px_rgba(0,0,0,0.1)] rounded-[1.5rem] pointer-events-none" />
                </div>
            </motion.div>
        </motion.div>
    );
};

const NameTilt: React.FC<{ isMobile: boolean }> = ({ isMobile }) => {
    const ref = useRef<HTMLDivElement>(null);
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 200, damping: 10 });
    const mouseYSpring = useSpring(y, { stiffness: 200, damping: 10 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], isMobile ? ["0deg", "0deg"] : ["15deg", "-15deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], isMobile ? ["0deg", "0deg"] : ["-15deg", "15deg"]);

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        x.set((e.clientX - rect.left) / rect.width - 0.5);
        y.set((e.clientY - rect.top) / rect.height - 0.5);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ 
                rotateX, 
                rotateY, 
                transformStyle: "preserve-3d" 
            }}
            className="inline-block"
        >
            <h2 className={`${isMobile ? 'text-5xl' : 'text-7xl'} font-albert-black text-black leading-none mb-4 mix-blend-multiply tracking-tighter transform -skew-x-6 hover:text-black/70 transition-colors duration-300 pointer-events-none`}>
                zhanG<br/>minGlei
            </h2>
        </motion.div>
    );
};


const MobileProfile: React.FC<{ experienceData: any[] }> = ({ experienceData }) => {
    const [selectedExp, setSelectedExp] = useState<any>(null);
    return (
        <section className="w-full bg-white px-6 py-16 flex flex-col gap-12 relative z-20 overflow-hidden">
            {/* Header */}
            <div className="flex flex-col items-center gap-6 mt-8">
                <div className="w-48 h-64 rounded-[2rem] overflow-hidden shadow-2xl relative">
                    <img 
                        src="https://cdn.jsdmirror.com/gh/jayneysil520-dev/jayneysil@main/%E6%88%91%E8%87%AA%E5%B7%B11.webp" 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                    />
                </div>
                <div className="text-center">
                    <h2 className="text-5xl font-albert-black text-black leading-none mb-2 tracking-tighter">
                        zhanG<br/>minGlei
                    </h2>
                    <div className="flex flex-wrap justify-center gap-2 text-xs font-mono text-gray-500 mt-4">
                        <span>EST. 1995</span>
                        <span>·</span>
                        <span>SHANGHAI</span>
                        <span>·</span>
                        <span>VISUAL DESIGNER</span>
                    </div>
                </div>
            </div>

            {/* Experience List */}
            <div className="flex flex-col gap-6 mt-8">
                <h3 className="text-3xl font-albert-black text-gray-200 tracking-tighter text-center mb-4">Experience</h3>
                {experienceData.map((item, idx) => (
                    <motion.div 
                        key={item.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        onClick={() => setSelectedExp(item)}
                        className="bg-white rounded-[2rem] p-6 shadow-xl border border-gray-100 flex flex-col gap-3 relative overflow-hidden"
                    >
                        <div className="absolute top-0 left-0 w-2 h-full" style={{ backgroundColor: item.color }} />
                        <div className="flex justify-between items-start pl-4">
                            <h4 className="text-xl font-albert-black text-black">{item.company}</h4>
                            <span className="text-[10px] font-bold text-gray-500 bg-gray-100 px-2 py-1 rounded-full">{item.year}</span>
                        </div>
                        <div className="text-sm font-albert-light text-gray-600 pl-4 flex items-center gap-2">
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-gray-400">
                                <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                            </svg>
                            {item.role}
                        </div>
                        <p className="text-xs text-gray-500 font-albert-light leading-snug line-clamp-3 pl-4 mt-2">
                            {item.desc}
                        </p>
                    </motion.div>
                ))}
            </div>

            {/* Modal */}
            {createPortal(
                <AnimatePresence>
                    {selectedExp && (
                        <div className="fixed inset-0 z-[100] flex items-center justify-center px-4">
                            <motion.div 
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }} 
                                exit={{ opacity: 0 }} 
                                className="absolute inset-0 bg-white/80 backdrop-blur-md"
                                onClick={() => setSelectedExp(null)}
                            />
                            <ExperienceModalCard 
                                selectedExp={selectedExp} 
                                onClose={() => setSelectedExp(null)} 
                            />
                        </div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </section>
    );
};

const DesktopProfile: React.FC = () => {
  const [selectedExp, setSelectedExp] = useState<any>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const PROFILE_SCALE = PROFILE_SCALE_DESKTOP;
  const cardPositions = CARD_POSITIONS_DESKTOP;

  const { scrollYProgress } = useScroll({
      target: containerRef,
      offset: ["start start", "end end"]
  });
  const floorY = useTransform(scrollYProgress, [0, 1], ["-10%", "-30%"]);
  const mobileFloorY = useTransform(scrollYProgress, [0, 1], ["0px", "calc(-1900px + 100vh)"]);

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const mouseXSpring = useSpring(x, { stiffness: 30, damping: 25 });
  const mouseYSpring = useSpring(y, { stiffness: 30, damping: 25 });

  const handleMouseMove = (e: React.MouseEvent) => {
      const { clientX, clientY } = e;
      const w = window.innerWidth;
      const h = window.innerHeight;
      x.set(clientX / w - 0.5);
      y.set(clientY / h - 0.5);
  };

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["35deg", "25deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-5deg", "5deg"]);
  const translateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-1%", "1%"]);

  return (
    <section 
        ref={containerRef}
        className="relative w-full bg-white overflow-hidden" 
        onMouseMove={handleMouseMove}
        style={{ height: '140vh' }}
    >
      <motion.div 
         className="sticky top-0 w-full h-screen overflow-hidden flex items-center justify-center will-change-transform"
      >
        <div className={`absolute inset-0 flex justify-center perspective-2000 items-center`}>
            <motion.div
                className="relative will-change-transform transform-gpu"
                style={{
                    width: '100%',
                    maxWidth: '1600px',
                    height: 'auto',
                    scale: PROFILE_SCALE, // 🟢 APPLIED GLOBAL SCALE
                    rotateX,
                    rotateY,
                    x: translateX,
                    y: floorY,
                    aspectRatio: '16/9',
                    transformStyle: "preserve-3d",
                }}
            >
                <div className="absolute inset-[-50%] bg-white transform-preserve-3d" style={{ transform: `translateZ(${DEPTHS.FLOOR}px)` }} />
                
                {/* Scaled Text (Reverted) */}
                <FloorMarquee 
                    direction="right" 
                    text="About Me" 
                    rotate={-5} 
                    className={`text-[160px] font-albert-black text-gray-100 leading-none`} 
                    style={{ top: '15%', zIndex: 1 }}
                />

                <div 
                    className="absolute pointer-events-none text-center w-[400px]"
                    style={{
                         top: '5%',
                         left: '15%',
                         x: '0%',
                         transform: `translateZ(${DEPTHS.PROPS}px) rotateX(-5deg)`,
                         zIndex: 5
                    }}
                >
                    {/* Reverted Text */}
                    <h2 className="text-6xl font-albert-black text-gray-200 tracking-tighter">About Me</h2>
                </div>

                <StablePhoto isMobile={false} />

                <motion.div 
                    className="absolute text-left pointer-events-auto"
                    style={{ 
                        top: '70%', 
                        left: '22%', 
                        transform: `translateZ(${DEPTHS.MAIN}px) rotateX(-10deg) rotateZ(-5deg)`,
                        width: '450px',
                        zIndex: 25
                    }}
                    initial={{ opacity: 0, y: 50, rotate: 10 }}
                    whileInView={{ opacity: 1, y: 0, rotate: -5 }}
                    viewport={{ once: false }}
                    transition={{ delay: 0.5, duration: 1, type: "spring" }}
                >
                    <Magnetic strength={40}>
                        <motion.div
                            className="cursor-pointer"
                            whileHover={{ scale: 1.15 }}
                            transition={{ type: "spring", stiffness: 300, damping: 15 }}
                        >
                            <NameTilt isMobile={false} />
                            <div className="flex flex-wrap gap-4 text-sm font-mono text-gray-500 pl-4 border-l-2 border-gray-300 pointer-events-none">
                                <span>EST. 1995</span>
                                <span>·</span>
                                <span>SHANGHAI</span>
                                <span>·</span>
                                <span>VISUAL DESIGNER</span>
                            </div>
                        </motion.div>
                    </Magnetic>
                </motion.div>

                {/* Timeline Cards */}
                <div 
                    className="absolute w-full h-full pointer-events-auto"
                    style={{
                        zIndex: 30,
                        transformStyle: "preserve-3d",
                        transform: `translateZ(${DEPTHS.MAIN}px) rotateX(-5deg)`,
                    }}
                >
                    {experienceData.map((item, idx) => (
                        <ProfileTimelineCard 
                            key={item.id} 
                            item={item} 
                            index={idx}
                            style={cardPositions[idx] as React.CSSProperties}
                            onClick={() => setSelectedExp(item)}
                            isMobile={false}
                        />
                    ))}
                </div>

            </motion.div>
        </div>
      </motion.div>

      {/* FLIP MODAL OVERLAY */}
      {createPortal(
        <AnimatePresence>
            {selectedExp && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center perspective-2000 px-4">
                     <motion.div 
                        initial={{ opacity: 0 }} 
                        animate={{ opacity: 1 }} 
                        exit={{ opacity: 0 }} 
                        className="absolute inset-0 bg-white/40 backdrop-blur-md"
                        onClick={() => setSelectedExp(null)}
                     />
                     
                     <ExperienceModalCard 
                        selectedExp={selectedExp} 
                        onClose={() => setSelectedExp(null)} 
                     />
                </div>
            )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

const Profile: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px), (max-height: 500px)');
  
  if (isMobile) {
      return <MobileProfile experienceData={experienceData} />;
  }

  return <DesktopProfile />;
};

export default Profile;
