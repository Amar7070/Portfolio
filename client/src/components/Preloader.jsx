import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2200);
        return () => clearTimeout(timer);
    }, []);

    // Particle background generation
    const particles = Array.from({ length: 20 }).map((_, i) => ({
        id: i,
        size: Math.random() * 2 + 1,
        initialX: Math.random() * 100,
        initialY: Math.random() * 100,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 2
    }));

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1, x: 0 }}
                    exit={{ 
                        opacity: 0, 
                        scale: 1.1,
                        transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } 
                    }}
                    className="fixed inset-0 z-[100000] bg-[#050608] flex items-center justify-center overflow-hidden"
                >
                    {/* ── Background Layer 1: Moving Particles ── */}
                    <div className="absolute inset-0 z-0 pointer-events-none">
                        {particles.map((p) => (
                            <motion.div
                                key={p.id}
                                className="absolute bg-[#E6A700]/40 rounded-full"
                                style={{
                                    width: p.size,
                                    height: p.size,
                                    left: `${p.initialX}%`,
                                    top: `${p.initialY}%`,
                                }}
                                animate={{
                                    y: [-20, 20],
                                    opacity: [0, 0.5, 0],
                                    scale: [0.5, 1.2, 0.5]
                                }}
                                transition={{
                                    duration: p.duration,
                                    repeat: Infinity,
                                    delay: p.delay,
                                    ease: "easeInOut"
                                }}
                            />
                        ))}
                    </div>

                    {/* ── Background Layer 2: HUD Scanning Line ── */}
                    <motion.div 
                        className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E6A700]/30 to-transparent z-[1]"
                        initial={{ top: "-10%" }}
                        animate={{ top: "110%" }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />

                    {/* ── Main Loading Core ── */}
                    <motion.div className="relative z-10 flex flex-col items-center justify-center scale-90 md:scale-100">
                        
                        {/* Energy Core / Aura */}
                        <motion.div 
                            className="absolute w-64 h-64 bg-[#E6A700]/5 blur-[60px] rounded-full"
                            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                        />

                        {/* Rotating Outer Ring (Sanskrit Characters) */}
                        <motion.div 
                            className="absolute w-72 h-72 border border-[#E6A700]/5 rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                        >
                            <span className="absolute -top-1 left-1/2 -translate-x-1/2 text-[8px] font-mono text-[#E6A700]/30 uppercase tracking-[0.5em] whitespace-nowrap">
                                ● विद्या ददाति विनयं ● विद्या ददाति विनयं
                            </span>
                        </motion.div>

                        {/* Middle Ring (Dotted) */}
                        <motion.div 
                            className="absolute w-60 h-60 border-t border-b border-[#E6A700]/10 rounded-full"
                            animate={{ rotate: -360 }}
                            transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                        />

                        {/* THE ARROW (The Hero Element) */}
                        <div className="w-56 h-56 relative flex items-center justify-center">
                            
                            {/* The Sweeping Arc */}
                            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-slate-700/50">
                                <motion.path 
                                    d="M 72 15 C 92 35 92 65 72 85"  
                                    stroke="currentColor" 
                                    strokeWidth="1.5" 
                                    fill="none" 
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
                                />
                            </svg>

                            {/* The Golden Shaft */}
                            <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full text-[#E6A700]">
                                <motion.path 
                                    d="M 8 50 L 92 50" 
                                    stroke="currentColor" 
                                    strokeWidth="2.5" 
                                    fill="none" 
                                    strokeLinecap="square"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                                />
                                {/* Arrow Head */}
                                <motion.polygon 
                                    points="98,50 82,42 82,58" 
                                    fill="currentColor"
                                    initial={{ opacity: 0, scale: 0, x: -10 }}
                                    animate={{ opacity: 1, scale: 1, x: 0 }}
                                    transition={{ duration: 0.3, delay: 1.4 }}
                                />
                            </svg>

                            {/* Point of Impact Spark */}
                            <motion.div 
                                className="absolute top-[50%] right-[0] -mt-1 -mr-1 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_#ffffff]"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: [0, 1, 0], scale: [0, 3, 0] }}
                                transition={{ duration: 0.4, delay: 1.6 }}
                            />
                        </div>

                        {/* Title & Philosophy Section */}
                        <motion.div 
                            className="mt-6 flex flex-col items-center text-center px-4"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 1 }}
                        >
                            <div className="overflow-hidden mb-1">
                                <motion.span 
                                    className="block text-3xl md:text-4xl font-black text-white"
                                    initial={{ y: "100%" }}
                                    animate={{ y: 0 }}
                                    transition={{ duration: 0.6, delay: 1.1, ease: "circOut" }}
                                >
                                    राधे राधे
                                </motion.span>
                            </div>

                            <motion.span 
                                className="text-[14px] md:text-base font-medium text-[#E6A700] tracking-[0.2em] font-serif mb-2"
                                animate={{ opacity: [0.6, 1, 0.6] }}
                                transition={{ duration: 3, repeat: Infinity }}
                            >
                                अमर साहनी
                            </motion.span>

                            <div className="w-[180px] h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent my-3" />
                            
                            <p className="text-[11px] md:text-xs font-serif italic text-slate-400 max-w-[280px] leading-relaxed select-none">
                                "कर्मण्येवाधिकारस्ते मा फलेषु कदाचन"
                            </p>
                            <p className="text-[8px] font-mono text-slate-600 uppercase tracking-[0.25em] mt-2 font-bold select-none">
                                Mastery via Duty, Not via Outcome
                            </p>

                            {/* Dynamic Percentage (Cosmetic only) */}
                            <motion.div className="mt-8 flex flex-col items-center">
                                <span className="text-[8px] font-mono text-[#E6A700]/40 tracking-widest uppercase mb-1">Constructing Interface</span>
                                <div className="w-32 h-[2px] bg-white/5 rounded-full overflow-hidden">
                                    <motion.div 
                                        className="h-full bg-[#E6A700]"
                                        initial={{ width: 0 }}
                                        animate={{ width: "100%" }}
                                        transition={{ duration: 2, ease: "easeInOut" }}
                                    />
                                </div>
                            </motion.div>
                        </motion.div>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
