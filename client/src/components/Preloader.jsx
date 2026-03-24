import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// --- Static Configurations (Best Practice: Tool Tip #7) ---
const exitAnimation = {
    opacity: 0,
    scale: 1.1,
    filter: "blur(10px)",
    transition: { duration: 0.8 }
};

const preloaderVariants = {
    animate: { y: [0, -10, 0] },
    transition: { duration: 3, repeat: Infinity, ease: "easeInOut" }
};

const Preloader = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // --- Smart UX: Only show once per session (Tool Tip #10) ---
        const visited = sessionStorage.getItem("visited");
        if (visited) {
            setIsLoading(false);
            return;
        }

        // --- Real Loading State (Tool Tip #1) ---
        const handleLoad = () => {
            // We still give the beautiful drawing animation time to "breath"
            setTimeout(() => {
                sessionStorage.setItem("visited", "true");
                setIsLoading(false);
            }, 2200); 
        };

        if (document.readyState === "complete") {
            handleLoad();
        } else {
            window.addEventListener("load", handleLoad);
        }

        return () => window.removeEventListener("load", handleLoad);
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    key="preloader"
                    role="status"        // Accessibility (Tool Tip #6)
                    aria-live="polite"   // Accessibility (Tool Tip #6)
                    initial={{ opacity: 1 }}
                    exit={exitAnimation} // Smooth cinematic exit (Tool Tip #3)
                    className="fixed inset-0 z-[100000] bg-[#050608] flex items-center justify-center overflow-hidden"
                >
                    {/* Background noise to match site */}
                    <div className="absolute inset-0 pointer-events-none opacity-[0.03] z-[1] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

                    {/* Main Container with Floating Motion (Tool Tip #4) */}
                    <motion.div 
                        variants={preloaderVariants}
                        animate="animate"
                        className="flex flex-col items-center justify-center relative z-10 w-full max-w-sm"
                    >

                        {/* DRAWING SECTION */}
                        <div className="w-48 h-48 md:w-56 md:h-56 relative flex items-center justify-center overflow-visible">
                            
                            {/* Bow Part */}
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

                            {/* Arrow Part */}
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
                                <motion.polygon
                                    points="98,50 82,42 82,58"
                                    fill="#E6A700"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.3, delay: 1.5 }}
                                />
                            </motion.svg>

                            {/* Improved Glow realism (Tool Tip #5) */}
                            <motion.div
                                className="absolute top-[50%] right-[0] -mt-1 -mr-1 w-2 h-2 bg-white rounded-full"
                                style={{
                                    boxShadow: "0 0 10px #fff, 0 0 20px #E6A700, 0 0 40px #E6A700"
                                }}
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: [0, 1, 0], scale: [0, 2, 0] }}
                                transition={{ duration: 0.5, delay: 1.5 }}
                            />
                        </div>

                        {/* TEXT SECTION */}
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
                            <span className="text-[14px] md:text-sm font-mono text-slate-500 uppercase tracking-[0.3em] font-bold mt-1 text-center max-w-[250px]">
                                Amar Sahani
                            </span>

                            {/* Progress Indicator (Tool Tip #2) */}
                            <div className="w-40 h-[2.5px] bg-slate-800/50 rounded-full overflow-hidden mt-6 backdrop-blur-sm">
                                <motion.div
                                    className="h-full bg-gradient-to-r from-[#E6A700]/50 to-[#E6A700]"
                                    initial={{ width: "0%" }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 2, ease: "easeInOut" }}
                                />
                            </div>
                        </motion.div>

                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Preloader;
