import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skills } from '../constants';
import {
    FaReact, FaNode, FaJava, FaDatabase, FaCode, FaServer, FaTerminal, FaHtml5, FaCss3Alt, FaJs, FaPhp, FaWrench, FaGitAlt, FaGithub
} from 'react-icons/fa';
import {
    SiTailwindcss, SiMysql, SiNextdotjs, SiCplusplus, SiExpress, SiMongodb, SiPostman, SiDocker, SiVercel
} from 'react-icons/si';
import { VscVscode } from 'react-icons/vsc';
import DivineArmoryBackground from './DivineArmoryBackground';

const getIcon = (iconName) => {
    switch (iconName) {
        case 'FaReact': return <FaReact />;
        case 'SiNextdotjs': return <SiNextdotjs />;
        case 'FaJs': return <FaJs />;
        case 'SiTailwindcss': return <SiTailwindcss />;
        case 'FaHtml5': return <FaHtml5 />;
        case 'FaCss3Alt': return <FaCss3Alt />;
        case 'FaNode': return <FaNode />;
        case 'SiExpress': return <SiExpress />;
        case 'FaJava': return <FaJava />;
        case 'FaPhp': return <FaPhp />;
        case 'SiMysql': return <SiMysql />;
        case 'FaDatabase': return <FaDatabase />;
        case 'SiCplusplus': return <SiCplusplus />;
        case 'FaCode': return <FaCode />;
        case 'FaTerminal': return <FaTerminal />;
        case 'FaGitAlt': return <FaGitAlt />;
        case 'FaGithub': return <FaGithub />;
        case 'VscVscode': return <VscVscode />;
        case 'SiPostman': return <SiPostman />;
        case 'SiDocker': return <SiDocker />;
        case 'SiVercel': return <SiVercel />;
        default: return <FaCode />;
    }
};

const categoryData = [
    {
        title: "Frontend Engineering",
        id: "ARCH-01",
        label: "Client Interface",
        icon: <FaCode />,
        items: skills.frontend || []
    },
    {
        title: "Backend Architecture",
        id: "ARCH-02",
        label: "Server Core",
        icon: <FaServer />,
        items: skills.backend || []
    },
    {
        title: "System Programming",
        id: "ARCH-03",
        label: "Logic & Algorithms",
        icon: <FaTerminal />,
        items: skills.programming || []
    },
    {
        title: "Deployment & Tools",
        id: "ARCH-04",
        label: "DevOps Pipeline",
        icon: <FaWrench />,
        items: skills.tools || []
    }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1]
        }
    }
};

const skillVariants = {
    hidden: { opacity: 0, x: -10 },
    visible: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.4
        }
    }
};

const Skills = () => {
    const [selectedAstra, setSelectedAstra] = useState(null);

    return (
        <section id="skills" className="py-24 relative overflow-hidden bg-[#0A0A0E] border-t border-white/5">

            <DivineArmoryBackground />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 lg:p-4">

                {/* Intro Block */}
                <div className="mb-24 grid lg:grid-cols-2 gap-12 items-end">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-[rgba(10,10,14,0.6)] backdrop-blur border border-white/10 rounded-full mb-6 relative cursor-default">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6A700] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E6A700]"></span>
                            </span>
                            <span className="text-[10px] font-mono text-slate-300 tracking-[0.2em] uppercase">The Armory</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                            Divine <br />
                            <span className="text-gold-gradient bg-clip-text text-transparent pb-2 block">Astras.</span>
                        </h2>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="pb-4"
                    >
                        <p className="text-sm font-medium text-slate-400 leading-relaxed border-l-2 border-[#E6A700]/50 pl-5 max-w-lg">
                            An advanced inventory of engineering tooling treated as "Astras" (divine weapons). I focus on building scalable systems through a rigorous selection of modern frameworks, high-performance languages, and automated DevOps protocols.
                        </p>
                    </motion.div>
                </div>

                {/* Sequentially Animated Tech Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 items-start"
                >
                    {categoryData.map((category, idx) => (
                        <motion.div
                            key={idx}
                            variants={itemVariants}
                            className="flex flex-col h-full group"
                        >
                            {/* Decorative ID & Tag */}
                            <div className="flex items-center justify-between mb-4 px-1">
                                <span className="text-[9px] font-mono font-bold text-[#E6A700] uppercase tracking-[0.3em]">{category.id}</span>
                                <span className="text-[8px] font-mono text-slate-600 uppercase tracking-widest">{category.label}</span>
                            </div>

                            {/* Header */}
                            <div className="flex items-center gap-4 mb-8 pb-6 border-b border-white/10 relative overflow-hidden">
                                {/* Glowing accent line */}
                                <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-[#E6A700] to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-left" />

                                <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-white/[0.03] border border-white/5 text-[#E6A700] text-xl group-hover:bg-[#E6A700]/10 group-hover:border-[#E6A700]/30 transition-all duration-500">
                                    {category.icon}
                                </div>
                                <h3 className="text-[14px] font-black font-mono text-white tracking-widest uppercase leading-tight group-hover:text-[#E6A700] transition-colors">{category.title}</h3>
                            </div>

                            {/* Sequential List Items */}
                            <div className="flex flex-col gap-1">
                                {category.items.map((skill, sIdx) => (
                                    <motion.div
                                        key={sIdx}
                                        variants={skillVariants}
                                        transition={{ delay: 0.1 * sIdx }}
                                        onClick={() => setSelectedAstra({ ...skill, category: category.title })}
                                        className="group/skill flex items-center justify-between py-3.5 border-b border-white/[0.03] hover:bg-white/[0.02] px-2 -mx-2 rounded-sm transition-all cursor-pointer"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="text-slate-500 group-hover/skill:text-[#E6A700] group-hover/skill:scale-110 transition-all text-lg duration-300">
                                                {getIcon(skill.icon)}
                                            </div>
                                            <div className="flex flex-col">
                                                <span className="text-[12px] font-mono font-bold tracking-wider text-slate-300 group-hover/skill:text-white uppercase transition-colors">
                                                    {skill.name}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="w-1 h-1 rounded-full bg-slate-800 group-hover/skill:bg-[#E6A700] group-hover/skill:shadow-[0_0_8px_#E6A700] transition-all" />
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Advanced Metrics Footer */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    className="mt-24 border-t border-white/5 pt-10 grid grid-cols-2 md:grid-cols-4 gap-8"
                >
                    <div className="flex flex-col gap-2">
                        <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Total Skill Vectors</span>
                        <span className="text-2xl font-black text-white">{skills.frontend.length + skills.backend.length + skills.programming.length + (skills.tools?.length || 0)}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Architecture Sync</span>
                        <span className="text-xs font-bold text-[#E6A700] flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#E6A700] animate-pulse" /> 100% OPERATIONAL
                        </span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Global Taxonomy</span>
                        <span className="text-xs font-bold text-white">INDUSTRY STANDARD</span>
                    </div>
                    <div className="flex flex-col gap-2 text-right md:text-left">
                        <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Last Indexing</span>
                        <span className="text-xs font-bold text-slate-400 font-mono">2024.03.22</span>
                    </div>
                </motion.div>

            </div>

            {/* Astra Description Panel */}
            <AnimatePresence>
                {selectedAstra && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100000] flex items-center justify-center px-4 py-8"
                    >
                        <div className="absolute inset-0 bg-[#050608]/90 backdrop-blur-md" onClick={() => setSelectedAstra(null)} />

                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="relative w-full max-w-lg bg-[#0A0A0E] border border-white/10 rounded-sm shadow-[0_0_50px_rgba(230,167,0,0.1)] flex flex-col overflow-hidden"
                        >
                            {/* Decorative Top Glow */}
                            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#E6A700] to-transparent opacity-50" />

                            <div className="flex justify-between items-center p-6 border-b border-white/10 relative">
                                <div className="absolute top-1/2 right-[10%] w-[150px] h-[150px] bg-[#E6A700]/10 rounded-full blur-[80px] pointer-events-none" />
                                <div className="flex items-center gap-4 z-10">
                                    <div className="w-12 h-12 flex items-center justify-center text-3xl text-[#E6A700] bg-white/[0.02] border border-white/5 rounded-lg shadow-[0_0_15px_rgba(230,167,0,0.2)]">
                                        {getIcon(selectedAstra.icon)}
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-black text-white uppercase tracking-wider">{selectedAstra.name}</h3>
                                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">{selectedAstra.category} Astra</span>
                                    </div>
                                </div>
                                <button className="text-slate-500 hover:text-white transition-colors z-10" onClick={() => setSelectedAstra(null)}>X</button>
                            </div>

                            <div className="p-8 relative">
                                <p className="text-slate-300 text-sm leading-relaxed font-sans mb-6">
                                    The <strong className="text-white font-mono">{selectedAstra.name}</strong> astra forms a critical part of my {selectedAstra.category.toLowerCase()} architecture.
                                    {selectedAstra.name === 'React' || selectedAstra.name === 'Next.js' ? " I invoke this to construct highly interactive, state-driven interfaces that feel seamless and fluid." :
                                        selectedAstra.name === 'Tailwind CSS' ? " I use this utility-first weapon to forge pixel-perfect, brutalist, and cosmic aesthetics efficiently." :
                                            selectedAstra.category.includes('Backend') ? " It empowers the server core to manage heavy loads, secure endpoints, and stream data asynchronously." :
                                                selectedAstra.category.includes('System') ? " Used for writing low-level optimizations, algorithmic problem solving, and rigorous data manipulation." :
                                                    " Utilized to ensure zero-downtime deployments, maintain strict version control, and orchestrate containerized environments."}
                                    <br /><br />
                                    Through rigorous training and real-world combat (projects), its invocation has become instinctual, allowing me to build faster and more resilient systems.
                                </p>

                                <div className="flex items-center justify-between border-t border-white/5 pt-4">
                                    <div className="flex items-center gap-2">
                                        <span className="w-2 h-2 rounded-full bg-[#E6A700] animate-pulse" />
                                        <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">Mastery Achieved</span>
                                    </div>
                                    <span className="text-[9px] font-mono font-bold text-[#E6A700] uppercase tracking-[0.2em] bg-[#E6A700]/10 px-2 py-1">DEPLOYABLE</span>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Skills;