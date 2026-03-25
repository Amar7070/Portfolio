import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { education, certifications } from '../constants';
import { FaGraduationCap, FaAward, FaBuilding, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import BodhiGurukulBackground from './BodhiGurukulBackground';

const Education = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const pathHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    document.body.style.overflow = selectedItem ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [selectedItem]);

  return (
    <section id="education" className="py-12 md:py-16 bg-[var(--bg-cosmic)] relative overflow-hidden border-t border-white/5">

      {/* Background Ambience */}
      <BodhiGurukulBackground />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">

        {/* ── Header ── */}
        <div className="mb-12 grid lg:grid-cols-2 gap-12 items-end">
          <div>
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-[rgba(10,10,14,0.6)] backdrop-blur border border-white/10 rounded-full mb-6 relative cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6A700] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E6A700]"></span>
              </span>
              <span className="text-[10px] font-mono text-slate-300 tracking-[0.2em] uppercase">Path of Action</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.9]">
              The <br />
              <span className="text-gold-gradient bg-clip-text text-transparent pb-2 block">Karma.</span>
            </h2>
          </div>
          <div className="pb-4">
            <p className="text-sm font-medium text-slate-400 leading-relaxed border-l-2 border-[#E6A700]/50 pl-5">
              An unfolding story of continuous learning, duty, and milestone actions—from foundational knowledge to full-stack execution.
            </p>
          </div>
        </div>

        {/* ── Vertical Timeline Registry ── */}
        <div ref={containerRef} className="relative mb-16 max-w-4xl mx-auto lg:mx-0">

          {/* Static Background Spine */}
          <div className="absolute left-[20px] md:left-[24px] top-4 bottom-4 w-px bg-white/[0.05]" />

          {/* Animated Glowing Karma Thread */}
          <motion.div
            style={{ height: pathHeight }}
            className="absolute left-[19px] md:left-[23px] top-4 w-[3px] bg-gradient-to-b from-[#E6A700] via-[#E6A700]/80 to-transparent shadow-[0_0_15px_#E6A700] origin-top z-0 rounded-full"
          />

          <div className="flex flex-col gap-12 relative z-10 w-full">
            {education.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="relative flex items-start pl-[60px] md:pl-[80px] group"
              >
                {/* Glowing Node */}
                <div className="absolute left-[13px] md:left-[17px] top-1 w-4 h-4 rounded-full bg-[#0A0A0E] border-2 border-[#E6A700] flex items-center justify-center transition-transform group-hover:scale-125 z-10">
                  <div className="w-1.5 h-1.5 bg-[#E6A700] rounded-full animate-pulse group-hover:shadow-[0_0_10px_#E6A700]" />
                </div>

                <div className="flex flex-col lg:flex-row gap-4 lg:gap-12 w-full">
                  {/* Timestamp Block */}
                  <div className="lg:w-1/4 shrink-0 pt-0.5">
                    <span className="text-[11px] font-mono font-bold uppercase tracking-[0.2em] text-[#E6A700] bg-[#E6A700]/5 border border-[#E6A700]/20 px-3 py-1 rounded-sm block w-max">
                      {edu.year}
                    </span>
                  </div>

                  {/* Content Block */}
                  <div className="lg:w-3/4 flex flex-col pt-0 lg:-mt-2">
                    <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight group-hover:text-[#E6A700] transition-colors">{edu.degree}</h3>
                    <div className="flex items-center gap-2 mb-4 text-slate-400 border-b border-white/5 pb-4">
                      <FaBuilding size={12} className="text-slate-500" />
                      <span className="text-sm font-semibold tracking-wide uppercase">{edu.institution}</span>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed font-sans max-w-2xl">{edu.description}</p>
                  </div>
                </div>

              </motion.div>
            ))}
          </div>
        </div>

        {/* ── Verified Credentials Slider ── */}
        <div className="pt-20 border-t border-white/5 relative">
          <div className="absolute top-0 right-[20%] w-[300px] h-[300px] bg-[#E6A700]/5 blur-[100px] pointer-events-none" />

          <h3 className="text-3xl md:text-4xl font-black text-white mb-10 uppercase tracking-tighter">
            Verified <span className="text-[#E6A700]">Credentials.</span>
          </h3>

          <div className="relative">
            <div 
              className="flex gap-6 overflow-x-auto pb-10 no-scrollbar snap-x snap-mandatory px-2"
            >
              {certifications.map((cert, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex-shrink-0 w-[240px] md:w-[320px] bg-[#0f0f11] rounded-2xl overflow-hidden border border-white/5 hover:border-[#E6A700]/30 transition-all duration-300 shadow-xl group snap-start"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                    <img 
                      src={cert.image} 
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                      onError={(e) => {
                        e.target.src = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=800&auto=format&fit=crop";
                        e.target.className = "w-full h-full object-cover opacity-20 grayscale";
                      }}
                    />
                    <div className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <a 
                        href={cert.link}
                        target="_blank"
                        rel="noreferrer"
                        className="bg-white text-black px-5 py-2 rounded-full font-bold text-xs transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 hover:bg-slate-200 shadow-xl"
                      >
                        View PDF
                      </a>
                    </div>
                  </div>

                  <div className="p-5 flex flex-col bg-[#0f0f11] min-h-[120px] justify-between">
                    <h4 className="text-[14px] font-bold text-white mb-2 leading-tight group-hover:text-[#E6A700] transition-colors">
                      {cert.title}
                    </h4>
                    <div className="flex items-center justify-between mt-auto">
                      <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest">
                        {cert.issuer}
                      </span>
                      <span className="text-[10px] font-mono text-slate-500 font-bold uppercase">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                  <div className="h-1 w-full bg-gradient-to-r from-transparent via-[#E6A700]/20 to-transparent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </motion.div>
              ))}
            </div>

            <div className="flex flex-col items-center gap-2 mt-4 pointer-events-none">
              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
              <span className="text-[8px] font-mono uppercase tracking-[0.5em] text-slate-500 animate-pulse">
                Swipe Horizontal ⟷
              </span>
            </div>
          </div>
        </div>

      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && selectedItem.type === 'cert' && (
          <motion.div
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100000] flex items-center justify-center px-4 py-8"
          >
            <div className="absolute inset-0 bg-[#050608]/90 backdrop-blur-md" onClick={() => setSelectedItem(null)} />
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="relative w-full max-w-2xl bg-[#0A0A0E] border border-white/10 rounded-sm shadow-2xl flex flex-col max-h-full"
            >
              <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
                <div className="flex items-center gap-3 text-white">
                  <FaAward className="text-[#E6A700]" size={16} />
                  <span className="text-xs font-mono font-bold tracking-widest uppercase">{selectedItem.title}</span>
                </div>
                <button onClick={() => setSelectedItem(null)} className="text-slate-500 hover:text-[#E6A700] transition-colors">
                  <FaTimes size={16} />
                </button>
              </div>
              <div className="p-6 md:p-8 overflow-y-auto no-scrollbar">
                <div className="w-full h-32 md:h-48 bg-[rgba(230,167,0,0.05)] border border-[#E6A700]/20 flex flex-col items-center justify-center mb-8 relative overflow-hidden">
                  <FaAward size={64} className="text-[#E6A700] opacity-30 animate-pulse absolute" />
                  <span className="text-[10px] font-mono tracking-[0.3em] font-bold text-[#E6A700] uppercase relative z-10">VERIFIED DOMAIN IDENTIFIER</span>
                  <h2 className="text-2xl font-black text-white uppercase tracking-tighter mt-2 relative z-10 text-center px-4">{selectedItem.title}</h2>
                </div>
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-2">Issuing Authority</span>
                    <span className="text-base text-white font-medium">{selectedItem.issuer}</span>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-2">Description</span>
                    <p className="text-slate-400 text-sm leading-relaxed">{selectedItem.description}</p>
                  </div>
                  {selectedItem.skills && selectedItem.skills.length > 0 && (
                    <div>
                      <span className="text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest block mb-3">Skills Verified</span>
                      <div className="flex flex-wrap gap-2">
                        {selectedItem.skills.map((skill, sIdx) => (
                          <span key={sIdx} className="px-3 py-1 bg-white/[0.05] border border-white/10 rounded-sm text-[10px] font-mono font-bold text-slate-300 tracking-wider">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  {selectedItem.link && (
                    <div className="pt-4 mt-2 border-t border-white/5">
                      <a href={selectedItem.link} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center w-full gap-3 px-6 py-4 bg-[#E6A700] hover:bg-[#FCD34D] text-black text-[11px] font-mono font-black uppercase tracking-widest rounded-sm transition-colors shadow-[0_0_20px_rgba(230,167,0,0.2)] hover:shadow-[0_0_30px_rgba(230,167,0,0.4)]">
                        Access Original Certificate Document <FaExternalLinkAlt size={12} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default Education;