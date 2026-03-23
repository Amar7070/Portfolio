import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronRight } from 'react-icons/fa';
import OriginBackground from './OriginBackground';

/* ─────────────────────────────────────────────────────────
   THE DHANUSH (BOW) & ARROWHEAD WATERMARK
   Minimalist, extremely faint backdrop representing momentum
   and absolute focus.
───────────────────────────────────────────────────────── */
const BackgroundWatermark = () => (
  <svg className="absolute top-0 right-[0%] w-[120vw] max-w-[1600px] h-full pointer-events-none mix-blend-screen opacity-[0.03] select-none z-0" viewBox="0 0 1600 1000" fill="none" aria-hidden="true">
    <defs>
      <linearGradient id="bow-edge" x1="0" y1="0" x2="1600" y2="1000" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stopColor="#E6A700" stopOpacity="0" />
        <stop offset="50%" stopColor="#E6A700" stopOpacity="1" />
        <stop offset="100%" stopColor="#E6A700" stopOpacity="0" />
      </linearGradient>
    </defs>

    {/* Grid System */}
    <g stroke="#ffffff" strokeWidth="0.5" strokeDasharray="3 20" opacity="0.3">
      {Array.from({ length: 10 }).map((_, i) => (
        <line key={`h-${i}`} x1="0" y1={i * 100} x2="1600" y2={i * 100} />
      ))}
      {Array.from({ length: 16 }).map((_, i) => (
        <line key={`v-${i}`} x1={i * 100} y1="0" x2={i * 100} y2="1000" />
      ))}
    </g>

    {/* The Tense Bow (Sweeping Arc) */}
    <path d="M 600 -200 C 1400 300 1400 700 600 1200" stroke="url(#bow-edge)" strokeWidth="1" opacity="0.8" />
    <path d="M 620 -200 C 1410 300 1410 700 620 1200" stroke="#ffffff" strokeWidth="0.5" strokeDasharray="10 5" opacity="0.5" />

    {/* The Arrow / Line of Trajectory */}
    <line x1="-200" y1="500" x2="1150" y2="500" stroke="url(#bow-edge)" strokeWidth="2" />
    <polygon points="1170,500 1130,490 1135,500 1130,510" fill="#E6A700" opacity="0.8" />

    {/* Focal point pulse */}
    <circle cx="1150" cy="500" r="40" stroke="#E6A700" strokeWidth="0.5" opacity="0.4" />
    <circle cx="1150" cy="500" r="80" stroke="#E6A700" strokeWidth="0.5" strokeDasharray="4 8" opacity="0.2" />
  </svg>
);

const Hero = () => {
  return (
    <section id="home" className="relative w-full pt-28 md:pt-32 pb-16 overflow-hidden bg-[var(--bg-cosmic)] border-b border-white/5">

      {/* ── Background Glows ── */}
      <div className="absolute top-[10%] right-[10%] w-[600px] h-[600px] bg-[rgba(230,167,0,0.03)] rounded-full blur-[160px] pointer-events-none z-0" />
      <div className="absolute bottom-[0%] left-[-10%] w-[800px] h-[800px] bg-[rgba(0,62,126,0.04)] rounded-full blur-[180px] pointer-events-none z-0" />

      {/* Texture mask */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.012] z-0" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #E6A700 10px, #E6A700 11px)' }} />

      <OriginBackground />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">
        {/* Modern, Vercel/Linear style asymmetrical grid */}
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          {/* ─── LEFT COLUMN: Massive Typography & Actions ─── */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }} className="lg:col-span-7 flex flex-col items-start">

            {/* Minimalist Status Badge */}
            <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 rounded-full bg-white/[0.01] backdrop-blur-md mb-8 hover:border-[#E6A700]/30 transition-colors cursor-default">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6A700] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E6A700]"></span>
              </span>
              <span className="text-[10px] font-mono text-slate-300 tracking-[0.2em] uppercase">Status: Available for opportunities</span>
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-[6rem] font-black tracking-tighter leading-[0.95] text-white mb-8">
              Digital <br />
              Precision & <br />
              <span className="text-gold-gradient bg-clip-text text-transparent drop-shadow-[0_0_20px_rgba(230,167,0,0.15)] pb-2 block">
                Engineering.
              </span>
            </h1>

            <p className="text-base md:text-lg text-slate-400 font-medium leading-relaxed max-w-xl mb-12 border-l-2 border-white/10 pl-6">
              I'm Amar Sahani, a full-stack engineer blending modern architectures with robust logic. I build high-performance web applications designed for scale, precision, and immersive user experiences.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full md:w-auto">
              {/* Primary Action */}
              <button
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="w-full sm:w-auto overflow-hidden relative group bg-white text-black px-8 py-4 rounded-sm flex items-center justify-center gap-3 transition-transform hover:scale-[1.02]"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-slate-300/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />
                <span className="font-bold text-[12px] tracking-widest relative z-10">VIEW PROJECTS</span>
                <FaChevronRight className="text-black group-hover:translate-x-1 transition-transform duration-300 relative z-10" size={10} />
              </button>

              {/* Secondary Actions / Socials */}
              <div className="flex items-center gap-3 w-full sm:w-auto h-full">
                {[
                  { href: 'https://github.com/Amar7070', Icon: FaGithub },
                  { href: 'https://www.linkedin.com/in/amar-sahani07', Icon: FaLinkedin },
                  { href: 'mailto:amarsahani0777@gmail.com', Icon: FaEnvelope }
                ].map(({ href, Icon }, idx) => (
                  <a
                    key={idx}
                    href={href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 sm:flex-none h-14 w-14 sm:h-[50px] sm:w-[50px] flex items-center justify-center rounded-sm border border-white/10 bg-white/[0.02] text-slate-400 hover:text-[#E6A700] hover:border-[#E6A700]/40 transition-all duration-300 hover:shadow-[0_0_15px_rgba(230,167,0,0.1)]"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>

            <div className="mt-16 flex items-center gap-6">
              <div className="flex -space-x-3">
                <div className="w-8 h-8 rounded-full border-2 border-[#0A0A0E] bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white">Re</div>
                <div className="w-8 h-8 rounded-full border-2 border-[#0A0A0E] bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white">Nx</div>
                <div className="w-8 h-8 rounded-full border-2 border-[#0A0A0E] bg-slate-800 flex items-center justify-center text-[10px] font-bold text-white">Ts</div>
              </div>
              <p className="text-[10px] font-mono tracking-[0.1em] text-slate-500 uppercase">
                Specialized in the modern <br />React ecosystem.
              </p>
            </div>
          </motion.div>

          {/* ─── RIGHT COLUMN: Sleek Architectural Integration ─── */}
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1.2, delay: 0.2 }} className="lg:col-span-5 relative hidden lg:block h-[700px]">

            {/* The Monolith Container */}
            <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[400px] h-[600px] cyber-panel border border-white/5 rounded-sm p-[1px] overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-b from-[#E6A700]/5 to-transparent pointer-events-none z-10" />

              <div className="w-full h-full relative bg-[#0A0A0E] rounded-sm overflow-hidden">

                {/* Embedded Image fading to black */}
                <div className="absolute inset-0 h-[70%] overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0E]/50 to-[#0A0A0E] pointer-events-none z-10" />
                  <img src="/images/ppp.jpg" alt="Amar Sahani" className="w-full h-full object-cover object-top origin-top filter grayscale-[20%] contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-out" />
                </div>

                {/* Abstract Data Overlay inside monolithic block */}
                <div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col gap-6 ">
                  <div className="w-full bg-white/[0.02] border border-white/5 p-4 rounded-sm">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest">Architectural Node</span>
                      <span className="w-2 h-2 bg-[#E6A700] rounded-full animate-pulse shadow-[0_0_8px_#E6A700]" />
                    </div>
                    <div className="text-white font-mono font-bold tracking-tight text-sm">Amar Sahani</div>
                    <div className="text-slate-400 font-mono text-[10px] uppercase tracking-widest mt-1">Full-Stack Engineer</div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="border border-white/5 bg-white/[0.01] p-4 rounded-sm text-center group-hover:border-white/10 transition-colors">
                      <div className="text-[20px] font-black text-white font-mono mb-1 group-hover:text-[#E6A700] transition-colors">04+</div>
                      <div className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Core Tech Stacks</div>
                    </div>
                    <div className="border border-white/5 bg-white/[0.01] p-4 rounded-sm text-center group-hover:border-white/10 transition-colors">
                      <div className="text-[20px] font-black text-white font-mono mb-1 group-hover:text-[#E6A700] transition-colors">24/7</div>
                      <div className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Continuous Deploy</div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Edge accent line */}
            <div className="absolute -right-4 top-[20%] bottom-[20%] w-[1px] bg-gradient-to-b from-transparent via-[#E6A700]/30 to-transparent" />

          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;