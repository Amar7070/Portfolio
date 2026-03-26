import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaTimes, FaGlobe, FaCodeBranch } from 'react-icons/fa';
import { projects } from '../constants';
import { Link } from 'react-router-dom';
import ProjectArchitectureBackground from './ProjectArchitectureBackground';



const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);
    const displayedProjects = projects.slice(0, 3); // Restrict to top 3

    return (
        <section id="projects" className="py-12 md:py-16 bg-[#0A0A0E] relative overflow-hidden border-t border-white/5">
            <ProjectArchitectureBackground />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
                <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/[0.01] border border-white/10 rounded-full mb-8 relative self-start cursor-default hover:border-[#E6A700]/30 transition-colors">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6A700] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E6A700]"></span>
                            </span>
                            <span className="text-[10px] font-mono text-slate-300 tracking-[0.2em] uppercase">Engineering Showcase</span>
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.95]">
                            Featured <br/>
                            <span className="text-gold-gradient bg-clip-text text-transparent pb-2 block">Projects.</span>
                        </h2>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-6">
                        <p className="text-sm font-medium font-mono text-slate-400 max-w-sm md:text-right border-l-2 md:border-l-0 md:border-r-2 border-[#E6A700]/50 md:pr-5 pl-5 md:pl-0">
                            Practical implementations uniting frontend interfaces, backend APIs, and database architecture into production-ready deployments.
                        </p>
                        <Link to="/projects" className="btn-primary px-8 py-3 bg-[rgba(10,10,14,0.9)] backdrop-blur-md border border-white/10 hover:border-[#E6A700]/50 text-white rounded-sm font-bold text-[10px] uppercase tracking-widest shadow-2xl transition-all">
                            VIEW ALL PROJECTS
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {displayedProjects.map((project, idx) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.15 }}
                            onClick={() => setSelectedProject(project)}
                            className="group cyber-panel border border-white/5 rounded-sm overflow-hidden cursor-pointer hover:border-[#E6A700]/40 hover:-translate-y-2 transition-all duration-500 flex flex-col h-full bg-[#0A0A0E] shadow-2xl"
                        >
                            <div className="relative aspect-[16/10] overflow-hidden border-b border-white/5 bg-black/40 flex items-center justify-center p-4">
                                <img src={project.image_url} alt={project.title} className="w-full h-full object-contain transition-transform duration-[1.5s] ease-out group-hover:scale-105" />
                                <div className="absolute inset-0 bg-[#E6A700]/5 group-hover:bg-transparent transition-colors z-10 pointer-events-none" />
                            </div>
                            <div className="p-8 flex-grow flex flex-col relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-[rgba(230,167,0,0.1)] blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                
                                <div className="flex items-center gap-3 mb-4 relative z-10">
                                    <span className="text-[9px] font-bold text-[#E6A700] uppercase tracking-widest bg-white/[0.05] border border-white/10 px-2 py-0.5 rounded-sm">
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-black text-white mb-3 group-hover:text-[#E6A700] transition-colors tracking-tight relative z-10">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2 relative z-10">{project.description}</p>
                                
                                <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between relative z-10">
                                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E6A700]">See Deployment Details →</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* 🔥 BREATHTAKING MODAL 🔥 */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        onClick={() => setSelectedProject(null)}
                        className="fixed inset-0 z-[100] flex items-center justify-center bg-[#07070B]/95 backdrop-blur-lg p-2 md:p-6 cursor-pointer"
                    >
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }} animate={{ scale: 1, opacity: 1, y: 0 }} exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            onClick={e => e.stopPropagation()}
                            className="relative w-full max-w-6xl max-h-[95vh] overflow-y-auto cyber-panel bg-[#0A0A0E] border border-[#E6A700]/30 rounded-sm cursor-default shadow-[0_30px_100px_rgba(0,0,0,1),0_0_40px_rgba(230,167,0,0.15)] no-scrollbar"
                        >
                            <button onClick={() => setSelectedProject(null)} className="absolute top-6 right-6 z-50 w-10 h-10 bg-white/[0.05] hover:bg-[#E6A700]/20 border border-white/10 hover:border-[#E6A700]/50 text-slate-400 hover:text-white rounded-sm flex items-center justify-center transition-all">
                                <FaTimes size={16} />
                            </button>
                            
                            <div className="grid lg:grid-cols-2 gap-0">
                                {/* Left Side: Clear Photo & Links */}
                                <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-white/10 bg-white/[0.01]">
                                    <div className="w-full relative overflow-hidden border-b border-white/10 p-2 md:p-4 pb-0">
                                    <div className="w-full min-h-[300px] rounded-t-lg overflow-hidden border border-white/10 border-b-0 shadow-2xl relative flex items-center justify-center bg-black/40">
                                       {/* Crystal clear image, NO grayscale or harsh contrasts added */}
                                        <img src={selectedProject.image_url} alt={selectedProject.title} className="w-full h-auto object-contain" />
                                            {/* Top browser bar decoration */}
                                            <div className="absolute top-0 left-0 right-0 h-6 bg-[#0A0A0E]/80 backdrop-blur-md border-b border-white/10 flex items-center px-3 gap-1.5 pointer-events-none">
                                                <div className="w-2 h-2 rounded-full border border-white/20 bg-red-500/20" />
                                                <div className="w-2 h-2 rounded-full border border-white/20 bg-yellow-500/20" />
                                                <div className="w-2 h-2 rounded-full border border-white/20 bg-green-500/20" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Links under photo */}
                                    <div className="p-8 flex flex-col gap-4">
                                        <div className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-1 flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-sm bg-[#E6A700] animate-pulse" /> Access Vectors
                                        </div>
                                        {selectedProject.project_link && (
                                            <a href={selectedProject.project_link} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-3 bg-[#E6A700] hover:bg-[#FCD34D] text-black py-4 px-6 rounded-sm text-[11px] font-mono font-black uppercase tracking-widest transition-all shadow-lg hover:shadow-[0_0_20px_rgba(230,167,0,0.4)]">
                                                <FaGlobe size={16} /> Launch Live Application
                                            </a>
                                        )}
                                        <a href={selectedProject.github_link} target="_blank" rel="noreferrer" className="w-full flex items-center justify-center gap-3 border border-white/20 hover:border-white/50 bg-white/[0.02] hover:bg-white/[0.05] text-white py-4 px-6 rounded-sm text-[11px] font-mono font-bold uppercase tracking-widest transition-all">
                                            <FaCodeBranch size={16} /> View Source Code
                                        </a>
                                    </div>
                                </div>

                                {/* Right Side: Title, Tech & Point-by-Point Features */}
                                <div className="p-8 md:p-12 flex flex-col">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="text-[9px] font-bold text-[#0A0A0E] bg-[#E6A700] uppercase tracking-widest px-3 py-1 rounded-sm shadow-[0_0_10px_rgba(230,167,0,0.3)] border border-[#E6A700]">
                                            {selectedProject.category}
                                        </span>
                                        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-[0.2em] font-bold border border-white/10 bg-white/[0.02] px-3 py-1 rounded-sm">
                                            ID: {selectedProject.id}
                                        </span>
                                    </div>
                                    
                                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6 uppercase tracking-tighter leading-none">{selectedProject.title}</h2>
                                    
                                    {/* Tech Stack Boxes */}
                                    <div className="mb-10">
                                        <h4 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-4">Implementation Stack</h4>
                                        <div className="flex flex-wrap gap-2">
                                            {selectedProject.tech.map((t, i) => (
                                                <span key={i} className="px-3 py-1.5 bg-white/[0.05] border border-white/10 hover:border-[#E6A700]/40 hover:text-[#E6A700] text-slate-300 text-[10px] font-mono font-bold uppercase tracking-widest rounded-sm transition-colors cursor-default">
                                                    {t}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Features Point by Point */}
                                    <div className="flex-1">
                                        <h4 className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-4 border-b border-white/10 pb-2">Core Features & Architecture</h4>
                                        {selectedProject.features && selectedProject.features.length > 0 ? (
                                            <ul className="flex flex-col gap-4">
                                                {selectedProject.features.map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-4">
                                                        <div className="w-1.5 h-1.5 mt-2 rounded-sm bg-[#E6A700] shrink-0" />
                                                        <span className="text-slate-300 text-sm font-mono leading-relaxed">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        ) : (
                                            <p className="text-slate-300 text-sm font-mono leading-relaxed border-l-2 border-[#E6A700]/50 pl-4">{selectedProject.description}</p>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Projects;