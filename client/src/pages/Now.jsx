import { motion } from 'framer-motion';
import { FaLaptopCode, FaBook, FaSpotify, FaArrowLeft, FaClock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

/* ─────────────────────────────────────────────────────────
   THE DAMARU WATERMARK
   Mahadev's Damaru / Hourglass
   Signifies the rhythm of time, continuous creation, and being in the 'Now'.
───────────────────────────────────────────────────────── */
const CyberDamaruWatermark = () => (
    <svg className="absolute left-[80%] top-[40%] -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.06] w-[500px] h-auto animate-breathe mix-blend-screen" viewBox="0 0 600 800" fill="none" aria-hidden="true">
        <g stroke="#9CA3AF" strokeWidth="0.5" strokeDasharray="3 9" opacity="0.3">
            <line x1="100" y1="0" x2="100" y2="800" /> <line x1="500" y1="0" x2="500" y2="800" /> <line x1="0" y1="400" x2="600" y2="400" />
        </g>
        <path d="M 150 200 L 450 200 L 300 400 Z" stroke="#9CA3AF" strokeWidth="1" opacity="0.8" fill="rgba(255,255,255,0.02)" />
        <path d="M 300 400 L 150 600 L 450 600 Z" stroke="#9CA3AF" strokeWidth="1" opacity="0.8" fill="rgba(255,255,255,0.02)" />
        
        <path d="M 300 400 C 200 450 100 350 150 300" stroke="#9CA3AF" strokeWidth="1" strokeDasharray="6 4" fill="none" />
        <circle cx="150" cy="300" r="10" fill="#E6A700" className="animate-pulse" opacity="0.8" />
        
        <path d="M 300 400 C 400 350 500 450 450 500" stroke="#9CA3AF" strokeWidth="1" strokeDasharray="6 4" fill="none" />
        <circle cx="450" cy="500" r="10" fill="#E6A700" className="animate-pulse" opacity="0.8" />
        
        <rect x="280" y="380" width="40" height="40" fill="#0A0A0E" stroke="#9CA3AF" strokeWidth="1" />
        <line x1="280" y1="400" x2="320" y2="400" stroke="#9CA3AF" strokeWidth="1" />
    </svg>
);

const Now = () => {
    return (
        <div className="min-h-screen bg-[var(--bg-cosmic)] relative overflow-hidden py-24">
            
            {/* Ambient Background matching global theme */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.02]" 
                 style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            <div className="absolute top-[20%] left-[-15%] w-[600px] h-[600px] bg-[rgba(230,167,0,0.03)] rounded-full blur-[150px] pointer-events-none" />
            
            <CyberDamaruWatermark />

            <div className="container mx-auto px-6 max-w-4xl relative z-10 border-l border-white/10 pl-6 md:pl-12">

                {/* Header */}
                <div className="mb-20">
                    <Link to="/" className="inline-flex items-center gap-3 bg-[rgba(10,10,14,0.8)] backdrop-blur-md border border-white/10 hover:border-[#E6A700]/50 px-5 py-3 rounded-sm text-slate-400 hover:text-white transition-all text-[10px] font-mono font-bold uppercase tracking-widest shadow-lg mb-12">
                        <FaArrowLeft /> Return Home
                    </Link>
                    
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.02] border border-white/5 rounded-sm mb-6 relative">
                        <span className="w-1.5 h-1.5 bg-[#E6A700] shadow-[0_0_8px_#E6A700] rounded-sm animate-pulse" />
                        <span className="text-[10px] font-mono text-slate-300 tracking-[0.3em] uppercase">Time / Flow State</span>
                    </div>

                    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex items-center gap-4 mb-4">
                        <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter">
                            Right <span className="text-gold-gradient">Now.</span>
                        </h1>
                    </motion.div>
                    
                    <p className="text-sm font-mono text-slate-400 max-w-xl leading-relaxed mt-2 border-l border-white/10 pl-5">
                       The Damaru represents the rhythm of continuous creation. This is a snapshot of my current professional focus, learning objectives, and environment.
                    </p>

                    <div className="flex items-center gap-2 text-slate-500 font-mono text-xs uppercase tracking-widest mt-8">
                        <FaClock size={10} /> Updated Feb 2026
                    </div>
                </div>

                <div className="grid gap-12 relative">

                    {/* 1. Building */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} className="relative">
                        <div className="absolute -left-[37px] md:-left-[61px] top-6 w-8 h-8 bg-[var(--bg-cosmic)] border border-white/10 rounded-sm flex items-center justify-center text-[#E6A700] z-10">
                            <FaLaptopCode size={14} />
                        </div>
                        <h2 className="text-sm font-mono font-bold text-slate-400 uppercase tracking-widest mb-6">Currently Building</h2>
                        <div className="cyber-panel p-8 rounded-sm hover:border-[#E6A700]/30 transition-all border border-white/5 group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-[rgba(230,167,0,0.1)] blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                            <div className="flex justify-between items-center mb-4 relative z-10">
                                <h3 className="font-bold text-2xl text-white group-hover:text-[#E6A700] transition-colors tracking-tight">AnarchyBay v2.0</h3>
                                <span className="text-[10px] font-mono font-bold text-[#E6A700] bg-white/[0.05] border border-white/10 px-3 py-1 rounded-sm uppercase tracking-widest">High Priority</span>
                            </div>
                            <p className="text-slate-400 text-sm font-mono mb-8 border-l border-white/10 pl-4 relative z-10">
                                Refactoring the core engine to use Microservices architecture, optimizing database endpoints for faster market ingestion.
                            </p>
                            
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-full bg-white/[0.05] border border-white/10 rounded-sm h-1.5 overflow-hidden">
                                    <div className="bg-[#E6A700] h-1.5 shadow-[0_0_10px_rgba(230,167,0,0.5)]" style={{ width: '45%' }} />
                                </div>
                                <span className="text-xs font-mono font-bold text-[#E6A700]">45%</span>
                            </div>
                        </div>
                    </motion.div>

                    {/* 2. Learning */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} className="relative">
                        <div className="absolute -left-[37px] md:-left-[61px] top-6 w-8 h-8 bg-[var(--bg-cosmic)] border border-white/10 rounded-sm flex items-center justify-center text-[#E6A700] z-10">
                            <FaBook size={12} />
                        </div>
                        <h2 className="text-sm font-mono font-bold text-slate-400 uppercase tracking-widest mb-6">Currently Learning</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="cyber-panel p-5 rounded-sm flex items-center gap-5 border border-white/5 hover:border-white/20 transition-colors group">
                                <div className="w-12 h-12 bg-white/[0.05] border border-white/10 rounded-sm flex items-center justify-center text-slate-300 font-bold group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:text-white transition-all">R</div>
                                <div>
                                    <h3 className="font-bold font-mono text-white text-sm mb-1 tracking-tight">Rust Programming</h3>
                                    <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-slate-300 transition-colors">Systems Programming</p>
                                </div>
                            </div>
                            <div className="cyber-panel p-5 rounded-sm flex items-center gap-5 border border-white/5 hover:border-white/20 transition-colors group">
                                <div className="w-12 h-12 bg-white/[0.05] border border-white/10 rounded-sm flex items-center justify-center text-slate-300 font-bold group-hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] group-hover:text-white transition-all">N</div>
                                <div>
                                    <h3 className="font-bold font-mono text-white text-sm mb-1 tracking-tight">Next.js 15</h3>
                                    <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 group-hover:text-slate-300 transition-colors">Server Actions</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* 3. Listening */}
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }} className="relative">
                        <div className="absolute -left-[37px] md:-left-[61px] top-6 w-8 h-8 bg-[var(--bg-cosmic)] border border-white/10 rounded-sm flex items-center justify-center text-[#E6A700] z-10">
                            <FaSpotify size={14} />
                        </div>
                        <h2 className="text-sm font-mono font-bold text-slate-400 uppercase tracking-widest mb-6">Currently Listening</h2>
                        <div className="cyber-panel border border-[#1DB954]/20 p-6 rounded-sm flex items-center gap-6 hover:border-[#1DB954]/50 transition-colors group">
                            <div className="relative w-16 h-16 rounded-sm overflow-hidden flex-shrink-0">
                                <div className="absolute inset-0 bg-[#1DB954]/10 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors" />
                                <div className="w-full h-full bg-[#0A0A0E] border border-[#1DB954]/40 flex items-center justify-center text-[#1DB954]">
                                    <FaSpotify size={28} />
                                </div>
                            </div>
                            <div>
                                <p className="text-[10px] text-[#1DB954] font-mono font-bold uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                                    <span className="w-1.5 h-1.5 rounded-sm bg-[#1DB954] animate-pulse" /> FOCUS ROTATION
                                </p>
                                <h3 className="font-bold font-mono text-white text-lg tracking-tight">Deep Work & Flow State</h3>
                                <p className="text-[10px] font-mono uppercase tracking-widest text-slate-500 mt-2">Programming Soundscapes</p>
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};

export default Now;
