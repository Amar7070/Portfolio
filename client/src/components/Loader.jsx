import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Loader = ({ onComplete }) => {
    const [progress, setProgress] = useState(0);
    const [textIndex, setTextIndex] = useState(0);
    const [showWelcome, setShowWelcome] = useState(false);
    const [isGlitching, setIsGlitching] = useState(false);

    const bootTexts = [
        "> INITIALIZING KERNEL...",
        "> LOADING ASSETS...",
        "> ESTABLISHING SECURE CONNECTION...",
        "> ACCESS GRANTED."
    ];

    // Progress bar simulation (0-100% in 4 seconds with random jumps)
    useEffect(() => {
        const startTime = Date.now();
        const duration = 4000; // 4 seconds

        const updateProgress = () => {
            const elapsed = Date.now() - startTime;
            const rawProgress = Math.min((elapsed / duration) * 100, 100);

            // Add some "jitter" to make it look like a real system load
            const jitter = Math.random() * 5 - 2.5;
            const clusteredProgress = Math.min(Math.max(rawProgress + jitter, 0), 100);

            setProgress(Math.floor(clusteredProgress));

            if (elapsed < duration) {
                requestAnimationFrame(updateProgress);
            } else {
                setProgress(100);
                setTimeout(() => {
                    setShowWelcome(true);
                }, 100);
            }
        };

        requestAnimationFrame(updateProgress);
    }, []);

    // Text cycling logic
    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex(prev => (prev + 1) % bootTexts.length);
        }, 800);
        return () => clearInterval(interval);
    }, []);

    // Glitch effect trigger
    useEffect(() => {
        const glitchInterval = setInterval(() => {
            setIsGlitching(true);
            setTimeout(() => setIsGlitching(false), 200);
        }, 1000);
        return () => clearInterval(glitchInterval);
    }, []);

    // Completion handler
    useEffect(() => {
        if (showWelcome) {
            const timer = setTimeout(() => {
                onComplete();
            }, 1000); // Wait 1s after welcome to finish (total ~5sish)
            return () => clearTimeout(timer);
        }
    }, [showWelcome, onComplete]);

    return (
        <motion.div
            className="fixed inset-0 z-[9999] bg-[#000000] flex flex-col items-center justify-center font-mono text-white overflow-hidden"
            initial={{ opacity: 1 }}
            exit={{
                opacity: 0,
                scale: 1.1, // Zoom out effect for the loader itself fading away
                transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } // Curtain reveal feel
            }}
        >
            {/* Glitch Overlay */}
            <AnimatePresence>
                {isGlitching && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 0.1, x: [-5, 5, -5, 0] }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-white pointer-events-none z-50 mix-blend-difference"
                    />
                )}
            </AnimatePresence>

            <div className={`relative z-10 w-full max-w-[80vw] md:max-w-md px-4 md:px-10 flex flex-col items-center gap-4 ${isGlitching ? 'translate-x-1' : ''}`}>
                {!showWelcome ? (
                    <>
                        {/* System Boot Text */}
                        <div className="h-6 text-xs text-[#0055FF] tracking-widest">
                            {bootTexts[textIndex]}
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full h-[1px] bg-[#111] relative overflow-hidden">
                            <motion.div
                                className="absolute top-0 left-0 h-full bg-[#0055FF] shadow-[0_0_10px_#0055FF]"
                                style={{ width: `${progress}%` }}
                                transition={{ ease: "linear" }} // Smooth updates from rAF
                            />
                        </div>
                    </>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-xl md:text-2xl font-bold tracking-[0.2em] text-white text-center"
                    >
                        WELCOME, AMAR.
                    </motion.div>
                )}
            </div>

            {/* Counter Bottom Right */}
            <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 text-right">
                <div className="text-[10px] text-[#0055FF] mb-1 opacity-70">SYSTEM_INTEGRITY</div>
                <div
                    className="text-4xl md:text-6xl font-bold tracking-tighter tabular-nums text-white/90"
                    style={{ fontFamily: '"Space Mono", "Courier New", monospace' }}
                >
                    {Math.min(progress, 99).toString().padStart(2, '0')}%
                </div>
            </div>

            <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&display=swap');
            `}</style>
        </motion.div>
    );
};

export default Loader;
