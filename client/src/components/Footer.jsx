import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import PranaSpark from './PranaSpark';

/* The exact same Unified Logo from Navbar */
const UnifiedLogo = () => (
    <div className="relative w-10 h-10 flex items-center justify-center border border-white/10 rounded-sm bg-white/[0.02] group-hover:border-[#E6A700]/40 group-hover:bg-[rgba(230,167,0,0.05)] transition-all duration-300 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#E6A700]/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
        <svg viewBox="0 0 64 64" fill="none" className="w-6 h-6 text-slate-300 group-hover:text-[#E6A700] transition-colors relative z-10 block">
            <path d="M 20 12 C 40 12 56 28 56 48" stroke="currentColor" strokeWidth="6" strokeLinecap="square" />
            <path d="M 12 52 L 36 52 M 12 52 L 12 28" stroke="currentColor" strokeWidth="6" strokeLinecap="square" />
            <rect x="22" y="32" width="10" height="10" fill="currentColor" />
        </svg>
    </div>
);

const Footer = () => {
    return (
        <footer className="relative bg-[var(--bg-cosmic)] border-t border-white/5 pt-16 pb-8 overflow-hidden">
            {/* Ambient dual-lighting echoes */}
            <div className="absolute top-1/2 right-[10%] w-[400px] h-[400px] bg-[rgba(230,167,0,0.03)] rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute top-1/2 left-[10%] w-[400px] h-[400px] bg-[rgba(0,62,126,0.03)] rounded-full blur-[160px] pointer-events-none" />
            <div className="absolute inset-0 pointer-events-none opacity-[0.015]" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #E6A700 10px, #E6A700 11px)' }} />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row justify-between items-center md:items-start gap-12">
                
                {/* Brand / Logo */}
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                    <a href="#" className="flex items-center gap-4 group mb-6">
                        <UnifiedLogo />
                        <div>
                            <span className="font-bold font-mono text-xl tracking-tight text-white group-hover:text-[#E6A700] transition-colors block leading-none">Amar.</span>
                            <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mt-1 block">Full-Stack Developer</span>
                        </div>
                    </a>
                    <p className="text-slate-500 text-xs font-mono max-w-xs leading-relaxed border-l border-white/10 pl-4 ml-2">
                        Building the foundations of modern web architecture through precision and continuous iteration.
                    </p>
                </div>

                {/* Sub Navigation */}
                <div className="flex flex-col md:flex-row gap-12 text-center md:text-left">
                    <div className="flex flex-col gap-4">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white">Sitemap</span>
                        <a href="#skills" className="text-sm font-mono text-slate-500 hover:text-[#E6A700] transition-colors">Skills & Tech</a>
                        <a href="#projects" className="text-sm font-mono text-slate-500 hover:text-[#E6A700] transition-colors">Featured Projects</a>
                        <Link to="/resume" className="text-sm font-mono text-slate-500 hover:text-[#E6A700] transition-colors">Resume Download</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-white">External Nodes</span>
                        <Link to="/now" className="text-sm font-mono text-slate-500 hover:text-[#E6A700] transition-colors">/now - Flow State</Link>
                        <Link to="/lab" className="text-sm font-mono text-slate-500 hover:text-[#E6A700] transition-colors">/lab - Simulation</Link>
                        <a href="https://github.com/Amar7070" target="_blank" rel="noreferrer" className="text-sm font-mono text-slate-500 hover:text-[#E6A700] transition-colors">GitHub Repository</a>
                    </div>
                </div>

                {/* Socials & Status */}
                <div className="flex flex-col items-center md:items-end gap-6 border-t md:border-t-0 border-white/5 pt-8 md:pt-0 w-full md:w-auto">
                    <div className="flex items-center gap-4">
                        {[
                            { href: "https://github.com/Amar7070", Icon: FaGithub },
                            { href: "https://www.linkedin.com/in/amar-sahani07", Icon: FaLinkedin },
                            { href: "mailto:amarsahani0777@gmail.com", Icon: FaEnvelope }
                        ].map(({ href, Icon }, idx) => (
                            <a key={idx} href={href} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center rounded-sm border border-white/5 bg-white/[0.02] text-slate-400 hover:text-[#E6A700] hover:border-[#E6A700]/30 transition-all duration-300">
                                <Icon size={16} />
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <PranaSpark />
                        <span className="text-[8px] font-mono text-slate-500 uppercase tracking-widest">Leave Prana</span>
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 border border-white/5 bg-white/[0.01] rounded-sm backdrop-blur-md">
                        <span className="w-1.5 h-1.5 bg-[#E6A700] shadow-[0_0_8px_#E6A700] rounded-sm animate-pulse" />
                        <span className="text-[9px] font-mono text-slate-400 uppercase tracking-widest">SYSTEM ONLINE</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10">
                <span className="text-[10px] font-mono font-bold text-slate-600 uppercase tracking-widest">&copy; {new Date().getFullYear()} AMAR SAHANI</span>
                <span className="text-[10px] font-mono text-slate-600 uppercase tracking-widest">Engineered with Purpose</span>
            </div>
        </footer>
    );
};

export default Footer;
