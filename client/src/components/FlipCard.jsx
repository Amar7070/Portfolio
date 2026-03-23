import { useState, useEffect } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { FaMapMarkerAlt, FaCode, FaDownload, FaQrcode } from 'react-icons/fa';

const FlipCard = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [time, setTime] = useState(new Date());

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x, { stiffness: 150, damping: 20 });
    const mouseYSpring = useSpring(y, { stiffness: 150, damping: 20 });

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [10, -10]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-10, 10]);

    useEffect(() => {
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const handleMouseMove = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        x.set((e.clientX - centerX) / rect.width);
        y.set((e.clientY - centerY) / rect.height);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <div 
            className="w-full max-w-[480px] aspect-[1.58/1] cursor-pointer perspective-1000 group mx-auto"
            onClick={() => setIsFlipped(!isFlipped)}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
        >
            <motion.div
                style={{ 
                    rotateX, 
                    rotateY, 
                    transformStyle: "preserve-3d",
                    rotateY: isFlipped ? 180 : rotateY.get() // Manual override for flip
                }}
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: "spring", stiffness: 260, damping: 20 }}
                className="relative w-full h-full"
            >
                {/* FRONT FACE */}
                <div className="absolute inset-0 bg-[#0a0a0c] border border-white/10 rounded-2xl p-6 flex flex-col justify-between overflow-hidden backface-hidden shadow-2xl">
                    <div className="absolute inset-0 bg-blue-600/5 pointer-events-none" />
                    
                    <div className="flex justify-between items-start z-10">
                        <div className="flex items-center gap-4">
                            <div className="w-14 h-14 rounded-2xl overflow-hidden border border-white/10 bg-white/5 p-1 group-hover:border-blue-500/50 transition-colors">
                                <img src="/images/Profile.jpg" alt="Amar Sahani" className="w-full h-full object-cover object-top rounded-xl" />
                            </div>
                            <div>
                                <h3 className="text-lg font-black text-white leading-none mb-1">Amar Sahani</h3>
                                <div className="flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></span>
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-slate-500">Developer ID: 092</span>
                                </div>
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-[10px] font-bold text-blue-500 uppercase tracking-widest mb-1">Status: Online</div>
                            <div className="flex items-center justify-end gap-1 text-[9px] text-slate-500 font-bold uppercase tracking-widest">
                                <FaMapMarkerAlt size={8} /> PB, India
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 z-10">
                        <div className="flex items-center gap-2 mb-2">
                            <span className="h-px w-6 bg-blue-600"></span>
                            <span className="text-[10px] font-bold text-white uppercase tracking-[0.2em]">Full Stack Engineer</span>
                        </div>
                        <div className="flex gap-4">

                            <div className="flex flex-col">
                                <span className="text-xs font-bold text-white uppercase tracking-widest">15+ Apps</span>
                                <span className="text-[8px] font-bold text-slate-500 uppercase tracking-widest leading-none mt-1">Delivered</span>
                            </div>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-between items-end z-10 border-t border-white/5 pt-4">
                        <div className="flex items-center gap-2">
                            <FaCode size={14} className="text-slate-600" />
                            <span className="text-[8px] font-bold text-slate-600 uppercase tracking-widest">Secure Access Protocol</span>
                        </div>
                        <div className="text-[10px] font-bold text-white tracking-widest">
                            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                    </div>
                </div>

                {/* BACK FACE */}
                <div 
                    className="absolute inset-0 bg-blue-600 border border-white/20 rounded-2xl p-6 flex flex-col items-center justify-center backface-hidden shadow-2xl"
                    style={{ transform: "rotateY(180deg)" }}
                >
                    <div className="w-24 h-24 bg-white p-2 rounded-2xl shadow-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <FaQrcode size={64} className="text-slate-900" />
                    </div>
                    
                    <h4 className="text-white font-black text-xl mb-2 tracking-tighter">DOWNLOAD RESUME</h4>
                    <p className="text-blue-100 text-[10px] font-bold uppercase tracking-widest mb-8">Scan to verify credentials</p>
                    
                    <a 
                        href="/Amar_Sahani_CV.pdf" 
                        download 
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 px-6 py-3 bg-white text-blue-600 rounded-xl font-bold text-[10px] uppercase tracking-widest hover:bg-blue-50 transition-all shadow-lg"
                    >
                        <FaDownload size={12} />
                        Get PDF Copy
                    </a>

                    <div className="absolute bottom-4 text-[8px] font-bold text-blue-200 uppercase tracking-widest opacity-60">
                        V.2.0.26 // ENCRYPTED_FILE
                    </div>
                </div>
            </motion.div>
        </div>
    );
};

export default FlipCard;
