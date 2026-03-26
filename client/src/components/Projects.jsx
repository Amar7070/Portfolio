import { motion } from 'framer-motion';
import { FaGithub, FaGlobe } from 'react-icons/fa';
import { projects } from '../constants';
import ProjectArchitectureBackground from './ProjectArchitectureBackground';

const Projects = () => {
    return (
        <section id="projects" className="py-16 md:py-24 bg-[#0A0A0E] relative overflow-hidden border-t border-white/5">
            <ProjectArchitectureBackground />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
                {/* Section Header */}
                <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div>
                        <div className="inline-flex items-center gap-3 px-4 py-2 bg-white/[0.01] border border-white/10 rounded-full mb-8 relative self-start cursor-default hover:border-[#E6A700]/30 transition-colors shadow-2xl">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6A700] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E6A700]"></span>
                            </span>
                            <span className="text-[10px] font-mono text-slate-300 tracking-[0.2em] uppercase">Engineering Showcase</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.85]">
                            Featured <br/>
                            <span className="text-gold-gradient block">Innovations.</span>
                        </h2>
                    </div>
                    <div className="flex flex-col items-start md:items-end gap-6">
                        <p className="text-sm font-medium font-mono text-slate-400 max-w-sm md:text-right border-l-2 md:border-l-0 md:border-r-2 border-[#E6A700]/50 md:pr-5 pl-5 md:pl-0">
                            Practical implementations uniting system architecture with premium user interfaces.
                        </p>
                    </div>
                </div>

                {/* Vertical Project List */}
                <div className="flex flex-col gap-20 md:gap-32">
                    {projects.map((project, idx) => {
                        const isEven = idx % 2 === 0;
                        return (
                            <motion.div
                                key={project.title}
                                initial={{ opacity: 0, y: 100 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-24 items-center group`}
                            >
                                {/* Left Side: Large Visual Component */}
                                <div className="w-full lg:w-[58%] relative">
                                    <div className="relative aspect-[16/10] bg-[#0A0A0E] border border-white/5 rounded-sm overflow-hidden shadow-[0_30px_100px_rgba(0,0,0,0.5)] transition-all duration-700 p-2 md:p-6 flex items-center justify-center group-hover:border-[#E6A700]/20">
                                         {/* Corner accents */}
                                        <div className="absolute top-0 left-0 w-12 h-12 border-t border-l border-[#E6A700]/10 z-20 group-hover:border-[#E6A700]/30 transition-colors" />
                                        <div className="absolute bottom-0 right-0 w-12 h-12 border-b border-r border-[#E6A700]/10 z-20 group-hover:border-[#E6A700]/30 transition-colors" />
                                        
                                        <div className="relative w-full h-full overflow-hidden rounded-sm bg-black/40 flex items-center justify-center">
                                            <img 
                                                src={project.image_url} 
                                                alt={project.title} 
                                                className="w-full h-full object-contain transition-transform duration-1000 group-hover:scale-105" 
                                            />
                                            {/* Reflection sweep */}
                                            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-[1.5s]" />
                                        </div>
                                    </div>
                                    
                                    {/* Abstract background numbering */}
                                    <span className={`absolute -top-12 ${isEven ? '-left-8' : '-right-8'} text-[12rem] font-black text-white/[0.02] select-none pointer-events-none font-mono tracking-tighter`}>
                                        0{idx + 1}
                                    </span>
                                </div>

                                {/* Right Side: Technical Briefing */}
                                <div className="w-full lg:w-[42%] flex flex-col">
                                    <div className="flex items-center gap-4 mb-6">
                                        <span className="text-[10px] font-mono font-black text-[#E6A700] uppercase tracking-[0.4em] bg-[#E6A700]/10 px-4 py-1.5 rounded-sm border border-[#E6A700]/20">
                                            {project.category}
                                        </span>
                                        <div className="h-px flex-grow bg-white/5" />
                                    </div>

                                    <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-tighter leading-none group-hover:text-gold-gradient transition-all duration-500">
                                        {project.title}
                                    </h3>

                                    {/* Tech Stack Distribution */}
                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tech.map((t, i) => (
                                            <span key={i} className="text-[9px] font-mono font-bold text-slate-400 border border-white/5 bg-white/[0.01] px-4 py-1.5 rounded-sm shadow-sm hover:border-[#E6A700]/30 hover:text-white transition-all">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Architectural High-Points */}
                                    <div className="space-y-6 mb-10">
                                        {project.features.slice(0, 3).map((feature, i) => (
                                            <div key={i} className="flex items-start gap-5 group/feature">
                                                <div className="w-2 h-2 mt-1.5 rounded-sm bg-gradient-to-br from-[#E6A700] to-[#B8860B] rotate-45 shrink-0 group-hover/feature:rotate-180 transition-transform duration-500" />
                                                <p className="text-slate-300 text-sm font-medium leading-relaxed font-mono opacity-80 group-hover/feature:opacity-100 transition-opacity">
                                                    {feature}
                                                </p>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Production Vectors (Links) */}
                                    <div className="flex flex-col sm:flex-row gap-5">
                                        {project.project_link && project.project_link !== "#" && (
                                            <a 
                                                href={project.project_link} 
                                                target="_blank" 
                                                rel="noreferrer" 
                                                className="flex-1 flex items-center justify-center gap-3 px-8 py-4 bg-[#E6A700] hover:bg-white text-black rounded-sm text-[11px] font-mono font-black uppercase tracking-[0.2em] transition-all shadow-[0_10px_30px_rgba(230,167,0,0.15)] group/btn"
                                            >
                                                <FaGlobe size={14} className="group-hover/btn:rotate-12 transition-transform" /> Live Deployment
                                            </a>
                                        )}
                                        <a 
                                            href={project.github_link} 
                                            target="_blank" 
                                            rel="noreferrer" 
                                            className="flex-1 flex items-center justify-center gap-3 px-8 py-4 border border-white/10 hover:border-[#E6A700] bg-white/[0.02] hover:bg-white/[0.05] text-white rounded-sm text-[11px] font-mono font-black uppercase tracking-[0.2em] transition-all group/btn"
                                        >
                                            <FaGithub size={14} className="group-hover/btn:-rotate-12 transition-transform" /> Source Repository
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Projects;