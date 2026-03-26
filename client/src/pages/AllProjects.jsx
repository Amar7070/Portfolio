import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../constants';
import { FaGithub, FaExternalLinkAlt, FaArrowLeft, FaCode, FaTimes, FaGlobe, FaCodeBranch } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const AllProjects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const categories = ['All', 'Full Stack', 'Web App', 'DevOps', 'UI/UX'];

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      if (filter === 'All') return true;
      const pCat = p.category ? p.category.toLowerCase() : '';
      const fCat = filter.toLowerCase();
      return pCat.includes(fCat) || p.tech.some(t => t.toLowerCase().includes(fCat));
    });
  }, [filter]);

  return (
    <div className="min-h-screen bg-[var(--bg-cosmic)] font-mono text-slate-300 pb-32">
      
      {/* Background Matrix */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.02]" style={{ backgroundImage: 'linear-gradient(rgba(230,167,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(230,167,0,0.5) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      <div className="fixed top-0 right-0 w-[600px] h-[600px] bg-[rgba(230,167,0,0.03)] rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <header className="relative pt-32 pb-20 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-4xl border-l-[3px] border-[#E6A700] pl-6 md:pl-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-white/[0.02] border border-white/10 mb-8">
              <span className="w-1.5 h-1.5 rounded-sm bg-[#E6A700] animate-pulse"></span>
              <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">Complete Works</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter mb-8 leading-none uppercase">
              My <span className="text-gold-gradient">Portfolio.</span>
            </h1>
            <p className="text-sm font-medium text-slate-400 max-w-2xl leading-relaxed">
              A showcase of all my engineered systems, applications, and technical experiments organized by architectural stack.
            </p>

            <div className="flex gap-12 mt-12 border-t border-white/5 pt-8">
              <div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Total Deploys</div>
                <div className="text-3xl font-black text-white">{projects.length}</div>
              </div>
              <div>
                <div className="text-[10px] text-slate-500 font-bold uppercase tracking-widest mb-1">Currently Viewing</div>
                <div className="text-3xl font-black text-[#E6A700]">{filteredProjects.length}</div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Filter Bar */}
      <nav className="sticky top-0 z-40 bg-[rgba(10,10,14,0.95)] backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-3 text-[10px] font-bold uppercase tracking-widest transition-all rounded-sm border ${filter === cat ? 'bg-white/[0.05] text-[#E6A700] border-[#E6A700]/50' : 'bg-transparent text-slate-500 border-white/5 hover:text-white hover:bg-white/[0.02]'}`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Grid */}
      <main className="max-w-7xl mx-auto px-6 md:px-12 py-16 relative z-10">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, idx) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                onClick={() => setSelectedProject(project)}
                key={project.id}
                className="group cyber-panel bg-[rgba(15,23,42,0.4)] border border-white/5 rounded-sm overflow-hidden hover:border-[#E6A700]/40 cursor-pointer hover:-translate-y-1 transition-all duration-500 flex flex-col"
              >
                <div className="relative aspect-video overflow-hidden border-b border-white/5">
                  <img src={project.image_url} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale-[20%] group-hover:grayscale-0" />
                  <div className="absolute inset-0 bg-[#E6A700]/5 group-hover:bg-transparent transition-colors pointer-events-none" />
                </div>

                <div className="p-8 flex-grow flex flex-col relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[rgba(230,167,0,0.1)] blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                  
                  <div className="flex items-center gap-2 mb-4 relative z-10">
                    <span className="text-[9px] font-bold text-[#E6A700] uppercase tracking-widest bg-white/[0.05] border border-white/10 px-2 py-0.5 rounded-sm">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 tracking-tight group-hover:text-[#E6A700] transition-colors relative z-10">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-xs leading-relaxed mb-6 line-clamp-3 relative z-10">
                    {project.description}
                  </p>

                  <div className="mt-auto pt-6 border-t border-white/5 flex items-center justify-between relative z-10">
                     <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E6A700]">See Deployment Details →</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </main>

      {/* 🔥 BREATHTAKING MODAL CORE INTEGRATION 🔥 */}
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
                                  <div className="w-full min-h-[300px] lg:min-h-[450px] rounded-t-lg overflow-hidden border border-white/10 border-b-0 shadow-2xl relative flex items-center justify-center bg-black/40">
                                     {/* Crystal clear image, NO grayscale or harsh contrasts added */}
                                      <img src={selectedProject.image_url} alt={selectedProject.title} className="w-full h-full object-contain" />
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

      {/* Back to Home Button */}
      <div className="fixed bottom-10 left-1/2 -translate-x-1/2 z-40">
         <Link to="/">
           <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.95 }} className="flex items-center gap-3 px-6 py-3 bg-[rgba(10,10,14,0.9)] backdrop-blur-md border border-white/10 hover:border-[#E6A700]/50 text-slate-300 hover:text-white rounded-sm font-bold text-[10px] uppercase tracking-widest shadow-2xl transition-all">
             <FaArrowLeft /> Return Home
           </motion.div>
         </Link>
      </div>
    </div>
  );
};

export default AllProjects;