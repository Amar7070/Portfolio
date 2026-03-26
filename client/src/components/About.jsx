import { motion } from 'framer-motion';
import { FaUser, FaCompass, FaLightbulb, FaRocket } from 'react-icons/fa';

const About = () => {
    return (
        <section id="about" className="py-20 md:py-32 bg-[#050608] relative overflow-hidden border-t border-white/5">
            {/* Background Accents */}
            <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#E6A700]/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
                    
                    {/* ── Left Side: Story ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/[0.02] border border-white/10 rounded-full mb-8 hover:border-[#E6A700]/30 transition-colors cursor-default">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6A700] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E6A700]"></span>
                            </span>
                            <span className="text-[10px] font-mono text-slate-300 tracking-[0.2em] uppercase">User.Profile_Initialize</span>
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-10">
                            The Architect <br />
                            Behind the <span className="text-gold-gradient">Machine.</span>
                        </h2>

                        <div className="space-y-6 text-slate-400 text-base md:text-lg leading-relaxed font-medium">
                            <p>
                                I’m Amar Sahani, a Full-Stack Engineer focused on building scalable web applications and solving real-world problems through code.
                            </p>
                            <p>
                                I work primarily with the <span className="text-white font-bold">MERN stack</span> and <span className="text-white font-bold">PHP</span>, developing robust backend systems and interactive, high-performance user interfaces. My focus is on writing clean, efficient code and designing systems that are reliable and easy to maintain.
                            </p>
                            <p>
                                I enjoy exploring system design and continuously improving my problem-solving skills, aiming to build applications that are both practical and impactful.
                            </p>
                        </div>
                    </motion.div>

                    {/* ── Right Side: Identity Card ── */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1 }}
                        className="relative"
                    >
                        {/* Decorative Frames */}
                        <div className="absolute -top-6 -right-6 w-32 h-32 border-t-2 border-r-2 border-[#E6A700]/20 rounded-tr-3xl pointer-events-none" />
                        <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-2 border-l-2 border-[#E6A700]/20 rounded-bl-3xl pointer-events-none" />

                        <div className="cyber-panel bg-white/[0.02] border border-white/10 rounded-sm p-8 md:p-12 relative overflow-hidden group hover:border-[#E6A700]/40 transition-all duration-700">
                            <div className="absolute inset-0 bg-gradient-to-br from-[#E6A700]/5 via-transparent to-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                            
                            <div className="grid grid-cols-2 gap-8 relative z-10">
                                {[
                                    { label: "Experience", value: "2+", suffix: "Years in Development", icon: <FaUser />, color: "#E6A700" },
                                    { label: "Projects", value: "15+", suffix: "Completed", icon: <FaRocket />, color: "#3B82F6" },
                                    { label: "Methodology", value: "Problem Solving", suffix: "Focused", icon: <FaCompass />, color: "#10B981" },
                                    { label: "LEARNING & BUILDING", value: "Growth Focus", suffix: "Continuous", icon: <FaLightbulb />, color: "#F59E0B" }
                                ].map((stat, i) => (
                                    <div key={i} className="flex flex-col">
                                        <div className={`w-10 h-10 flex items-center justify-center rounded-lg bg-white/[0.03] border border-white/5 mb-4 text-xl transition-all duration-500 group-hover:bg-white/[0.06] group-hover:border-white/10`} style={{ color: stat.color }}>
                                            {stat.icon}
                                        </div>
                                        <div className={`${stat.value.length > 4 ? 'text-xl font-bold' : 'text-3xl font-black'} text-white tracking-tighter mb-1 transition-all duration-300`}>
                                            {stat.value}
                                        </div>
                                        <div className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">{stat.label} // {stat.suffix}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 pt-8 border-t border-white/5 flex flex-col gap-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">System Efficiency</span>
                                    <span className="text-[10px] font-mono text-[#E6A700] font-bold">90.4%</span>
                                </div> 
                                <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div 
                                        initial={{ width: 0 }}
                                        whileInView={{ width: "98.4%" }}
                                        transition={{ duration: 1.5, ease: "easeOut" }}
                                        className="h-full bg-gradient-to-r from-[#E6A700] to-yellow-600 shadow-[0_0_10px_#E6A700]"
                                    />
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <div className="w-1.5 h-1.5 bg-[#E6A700] rounded-full animate-pulse" />
                                    <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest leading-none">All Systems Optimal // Kernel Online</span>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
