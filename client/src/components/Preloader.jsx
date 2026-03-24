import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Animations finish around 1.8s. We wait a bit more for a smooth exit.
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2200); // Reduced from 4000ms to 2200ms for faster first paint
        return () => clearTimeout(timer);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    initial={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: "100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                    className="fixed inset-0 z-[100000] bg-[#050608] flex items-center justify-center overflow-hidden"
                >
                    {/* Background noise to match site */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-[1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
                    
                    {/* The drawing sequence */}
                    <motion.div className="flex flex-col items-center justify-center relative z-10 w-full max-w-sm">
                        
                        {/* THE ARROW CREATION */}
                        <div className="w-48 h-48 md:w-56 md:h-56 relative flex items-center justify-center overflow-visible">
                            
                            {/* The sweeping arc (Bow pointing Right) */}
                            <motion.svg 
                                viewBox="0 0 100 100" 
                                className="absolute inset-0 w-full h-full text-slate-600"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ duration: 0.5 }}
                            >
                                <motion.path 
                                    d="M 70 15 C 90 35 90 65 70 85"  
                                    stroke="currentColor" 
                                    strokeWidth="2" 
                                    fill="none" 
                                    strokeLinecap="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1, ease: "circOut", delay: 0.2 }}
                                />
                            </motion.svg>

                            {/* The Arrow (Line) intersecting Left to Right */}
                            <motion.svg 
                                viewBox="0 0 100 100" 
                                className="absolute inset-0 w-full h-full text-[#E6A700]"
                                style={{ transformOrigin: 'center' }}
                            >
                                <motion.path 
                                    d="M 10 50 L 90 50" 
                                    stroke="currentColor" 
                                    strokeWidth="3" 
                                    fill="none" 
                                    strokeLinecap="square"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                                />
                                {/* Arrow Head */}
                                <motion.polygon 
                                    points="98,50 82,42 82,58" 
                                    fill="#E6A700"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 1.5 }}
                                />
                            </motion.svg>

                            {/* Central Glow point */}
                            <motion.div 
                                className="absolute top-[50%] right-[0] -mt-1 -mr-1 w-2 h-2 bg-white rounded-full shadow-[0_0_15px_#ffffff]"
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: [0, 1, 0], scale: [0, 2, 0] }}
                                transition={{ duration: 0.5, delay: 1.5 }}
                            />
                        </div>

                        {/* Title text fade in */}
                        <motion.div 
                            className="mt-8 flex flex-col items-center gap-2"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 1.2 }}
                        >
                            <motion.span 
                                className="text-2xl md:text-3xl font-black text-white mb-2"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, delay: 0.8 }}
                            >
                                राधे राधे
                            </motion.span>
                            
                            <span className="text-[12px] md:text-sm font-light text-[#E6A700] tracking-widest font-serif text-center px-4 leading-relaxed">
                                कर्मण्येवाधिकारस्ते मा फलेषु कदाचन
                            </span>
                            <span className="text-[8px] md:text-[9px] font-mono text-slate-500 uppercase tracking-[0.3em] font-bold mt-1 text-center max-w-[250px]">
                                Your right is to work only, but never to its fruits.
                            </span>
                            <span className="text-[#E6A700] text-sm md:text-base font-black tracking-[0.2em] font-serif mt-4">
                                अमर साहनी
                            </span>
                            <motion.div 
                                className="w-[100px] h-[1px] bg-gradient-to-r from-transparent via-[#E6A700] to-transparent mt-4"
                                initial={{ scaleX: 0, opacity: 0 }}
                                animate={{ scaleX: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 1.4 }}
                            />
                        </motion.div>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
