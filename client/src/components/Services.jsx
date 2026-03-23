import { motion } from 'framer-motion';
import { FaServer, FaCode, FaDatabase } from 'react-icons/fa';

/* ─────────────────────────────────────────────────────────
   THE TRISHUL WATERMARK
   Goddess Durga's Trishul — Power of The Three Pillars
   Represents Frontend + Backend + Database architecture.
───────────────────────────────────────────────────────── */
const CyberTrishulWatermark = () => (
  <svg className="absolute left-1/2 top-[40%] -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[800px] h-[800px] mix-blend-screen opacity-[0.06]" viewBox="0 0 1000 1000" fill="none" aria-hidden="true">
    {/* Grid halo */}
    <circle cx="500" cy="500" r="400" stroke="#9CA3AF" strokeWidth="0.5" strokeDasharray="5 15" opacity="0.3" />
    <circle cx="500" cy="500" r="300" stroke="#9CA3AF" strokeWidth="1" strokeDasharray="2 8" opacity="0.5" />
    
    {/* ── Main Shaft (Backend / Core Power) ── */}
    <line x1="500" y1="200" x2="500" y2="850" stroke="#9CA3AF" strokeWidth="3" />
    <line x1="495" y1="250" x2="495" y2="850" stroke="#9CA3AF" strokeWidth="0.5" opacity="0.5" />
    <line x1="505" y1="250" x2="505" y2="850" stroke="#9CA3AF" strokeWidth="0.5" opacity="0.5" />
    {/* Center Spearhead */}
    <polygon points="500,100 480,220 520,220" fill="#E6A700" opacity="0.7" />

    {/* ── Left Arc (Frontend / UI) ── */}
    <path d="M 500 450 C 350 450 320 250 320 180" stroke="#9CA3AF" strokeWidth="2" fill="none" />
    <polygon points="320,150 305,200 335,200" fill="#9CA3AF" opacity="0.5" />

    {/* ── Right Arc (Database / State) ── */}
    <path d="M 500 450 C 650 450 680 250 680 180" stroke="#9CA3AF" strokeWidth="2" fill="none" />
    <polygon points="680,150 665,200 695,200" fill="#9CA3AF" opacity="0.5" />

    {/* ── Damaru Cross-Tie (Rhythm/Scale) ── */}
    <polygon points="460,500 540,500 460,580 540,580" stroke="#9CA3AF" strokeWidth="1.5" fill="none" opacity="0.6" />
    <circle cx="500" cy="540" r="10" fill="#003E7E" opacity="0.8" />
  </svg>
);

const ServiceCard = ({ icon, title, description, benefits, isActive, idx }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: idx * 0.15 }}
        className="group relative cyber-panel border border-white/5 rounded-sm p-8 hover:border-[#E6A700]/30 transition-all duration-500 overflow-hidden"
    >
        <div className="absolute top-0 right-0 w-40 h-40 bg-[rgba(230,167,0,0.08)] blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
        
        <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-5">
            <div className="w-12 h-12 flex items-center justify-center bg-white/[0.02] border border-white/5 rounded-sm text-[#9CA3AF] group-hover:border-[#E6A700]/40 group-hover:text-[#E6A700] transition-colors relative">
                {icon}
                <div className={`absolute -right-1 -top-1 w-2 h-2 rounded-sm ${isActive ? 'bg-[#06B6D4] shadow-[0_0_8px_#06B6D4] animate-pulse' : 'bg-slate-600'}`} />
            </div>
            <div>
                <span className="text-[8px] font-mono text-slate-500 uppercase tracking-[0.2em] block mb-1">Architecture Node</span>
                <h3 className="text-xl font-black font-mono tracking-tight text-white group-hover:text-white transition-colors leading-none">
                    {title}
                </h3>
            </div>
        </div>

        <p className="text-sm font-mono text-slate-400 leading-relaxed mb-8 h-20">
            {description}
        </p>

        <div className="space-y-3">
            <h4 className="text-[9px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-4">Core Focus</h4>
            {benefits.map((benefit, i) => (
                <div key={i} className="flex items-start gap-3">
                    <span className="text-[#E6A700] mt-1 text-[10px]">+</span>
                    <span className="text-xs font-mono font-medium text-slate-300 tracking-[0.05em]">{benefit}</span>
                </div>
            ))}
        </div>
    </motion.div>
);

const Services = () => {
    return (
        <section id="services" className="py-24 bg-[var(--bg-cosmic)] relative overflow-hidden">
            <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.015]" 
                 style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #E6A700 10px, #E6A700 11px)' }} />
                 
            <CyberTrishulWatermark />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-white/5 pb-8">
                    <div>
                        <div className="inline-flex items-center gap-3 px-3 py-1 bg-white/[0.02] border border-white/5 rounded-sm mb-6 relative">
                            <span className="w-1.5 h-1.5 bg-[#E6A700] shadow-[0_0_8px_#E6A700] rounded-sm animate-pulse" />
                            <span className="text-[10px] font-mono text-slate-300 tracking-[0.2em] uppercase">Core Capabilities</span>
                        </div>
                        <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-widest">
                            What I <span className="text-gold-gradient">Do.</span>
                        </h2>
                    </div>
                    <p className="text-sm font-mono text-slate-400 max-w-sm leading-relaxed md:text-right border-l md:border-l-0 md:border-r border-[#E6A700]/30 px-4">
                        The three-pronged approach to full-stack engineering: User Experience, Backend Logic, and Data Integrity.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <ServiceCard 
                        idx={0}
                        isActive={true}
                        icon={<FaCode size={20} />}
                        title="FRONTEND"
                        description="Developing responsive, high-performance interfaces using modern frameworks like React and Next.js."
                        benefits={["Responsive Layouts", "State Management", "Animation & Transitions"]}
                    />
                    <ServiceCard 
                        idx={1}
                        isActive={true}
                        icon={<FaServer size={20} />}
                        title="BACKEND"
                        description="Architecting scalable APIs, secure authentication, and robust server logic with Node.js and Spring."
                        benefits={["RESTful API Design", "Authentication & Security", "Server Optimization"]}
                    />
                    <ServiceCard 
                        idx={2}
                        isActive={true}
                        icon={<FaDatabase size={20} />}
                        title="DATABASES"
                        description="Designing structured SQL schemas and flexible NoSQL documents for secure, fast data retrieval."
                        benefits={["SQL / NoSQL Modeling", "Data Integrity", "Query Optimization"]}
                    />
                </div>
            </div>
        </section>
    );
};

export default Services;