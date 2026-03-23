import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaCheck, FaArrowRight, FaCopy, FaUserShield } from 'react-icons/fa';
import confetti from 'canvas-confetti';
import InboundContactBackground from './InboundContactBackground';

const ContactInput = ({ label, type, name, value, onChange, placeholder, required = true }) => (
    <div className="relative mb-6 group">
        <label className="block text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-slate-400 mb-2 group-focus-within:text-[#E6A700] transition-colors">
            {label} {required && <span className="text-[#E6A700]">*</span>}
        </label>
        <div className="relative">
            {type === 'textarea' ? (
                <textarea
                    name={name} value={value} onChange={onChange} required={required} placeholder={placeholder}
                    className="w-full bg-[#050608] border border-white/10 rounded-sm px-4 py-3 text-white font-sans text-sm placeholder:text-slate-700 focus:outline-none focus:border-[#E6A700]/50 transition-all min-h-[140px] resize-none"
                />
            ) : (
                <input
                    type={type} name={name} value={value} onChange={onChange} required={required} placeholder={placeholder}
                    className="w-full bg-[#050608] border border-white/10 rounded-sm px-4 py-3 text-white font-sans text-sm placeholder:text-slate-700 focus:outline-none focus:border-[#E6A700]/50 transition-all"
                />
            )}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-[#E6A700] scale-x-0 group-focus-within:scale-x-100 transition-transform duration-700 origin-left" />
        </div>
    </div>
);

const RathIcon = ({ className }) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <circle cx="7" cy="17" r="3" />
        <circle cx="17" cy="17" r="3" />
        <path d="M4 14h16v-5l-4-4h-8l-4 4z" />
        <path d="M12 5V2" />
        <path d="M12 2l3 1.5L12 5" fill="currentColor" />
        <line x1="2" y1="17" x2="4" y2="17" />
    </svg>
);

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [copied, setCopied] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({ name: '', email: '', subject: '', message: '' });
            confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 }, colors: ['#E6A700', '#ffffff', '#0A0A0E'] });
            setTimeout(() => setSubmitStatus(null), 5000);
        }, 2500);
    };

    const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));

    const copyEmail = () => {
        navigator.clipboard.writeText("amarsahani0777@gmail.com");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <section id="contact" className="py-32 bg-[#050608] relative overflow-hidden border-t border-white/5 selection:bg-[#E6A700] selection:text-black min-h-screen">

            <InboundContactBackground />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 w-full">

                {/* ── HEADER ── */}
                <div className="mb-20">
                    <div className="inline-flex items-center gap-3 px-4 py-2 bg-[rgba(10,10,14,0.6)] backdrop-blur border border-white/10 rounded-full mb-6">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6A700] opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E6A700]"></span>
                        </span>
                        <span className="text-[10px] font-mono text-slate-300 tracking-[0.2em] uppercase">Establish Connection</span>
                    </div>
                    <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85]">
                        Initiate <br />
                        <span className="text-gold-gradient">Transmission.</span>
                    </h2>
                </div>

                <div className="grid lg:grid-cols-12 gap-12 items-start">

                    {/* ── LEFT: PROFESSIONAL IDENTITY ── */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                        className="lg:col-span-5 bg-[rgba(10,10,14,0.6)] backdrop-blur-md border border-white/10 p-10 rounded-sm relative overflow-hidden shadow-2xl group"
                    >
                        {/* Decorative scanline */}
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#E6A700]/30 to-transparent" />

                        <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                            <div className="w-32 h-32 rounded-sm border border-white/10 mb-8 p-1 relative overflow-hidden bg-white/5">
                                <img src="/images/ppp.jpg" alt="Amar Sahani" className="w-full h-full object-cover object-top origin-top group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 border border-[#E6A700]/20 pointer-events-none" />
                            </div>

                            <div className="mb-10 w-full">
                                <h3 className="text-3xl font-black text-white tracking-tight leading-none mb-3">Amar Sahani</h3>
                                <p className="text-[10px] font-mono text-[#E6A700] uppercase tracking-[0.3em] font-bold border-b border-white/5 pb-6">Full Stack Architecture // SE</p>
                            </div>

                            <div className="w-full space-y-6">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest pl-1">Direct Protocol</span>
                                    <div className="flex items-center justify-between bg-black/40 border border-white/5 p-4 rounded-sm">
                                        <span className="text-xs font-bold text-white pr-2">amarsahani0777@gmail.com</span>
                                        <button onClick={copyEmail} className="text-slate-500 hover:text-[#E6A700] transition-colors">{copied ? <FaCheck size={12} /> : <FaCopy size={12} />}</button>
                                    </div>
                                </div>

                                <div className="flex items-center gap-4 bg-black/40 border border-white/5 p-4 rounded-sm">
                                    <FaMapMarkerAlt className="text-[#E6A700]" size={14} />
                                    <span className="text-[11px] font-bold text-slate-300">India // Global Remote</span>
                                </div>

                                <div className="pt-6 flex gap-4">
                                    <a href="https://www.linkedin.com/in/amar-sahani07" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-sm bg-white/5 border border-white/5 hover:border-[#E6A700] hover:text-[#E6A700] transition-all"><FaLinkedin size={18} /></a>
                                    <a href="https://github.com/Amar7070" target="_blank" rel="noreferrer" className="w-12 h-12 flex items-center justify-center rounded-sm bg-white/5 border border-white/5 hover:border-[#E6A700] hover:text-[#E6A700] transition-all"><FaGithub size={18} /></a>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* ── RIGHT: TRANSMISSION FORM ── */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            className="bg-[rgba(10,10,14,0.6)] backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-sm relative shadow-2xl"
                        >
                            <div className="mb-10 flex items-center justify-between border-b border-white/5 pb-6">
                                <div className="flex items-center gap-3">
                                    <FaUserShield className="text-[#E6A700]" size={14} />
                                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-white">Encryption Locked</span>
                                </div>
                                <div className="flex gap-1.5 opacity-30">
                                    <div className="w-2 h-2 rounded-full border border-white" />
                                    <div className="w-2 h-2 rounded-full border border-white" />
                                    <div className="w-2 h-2 rounded-full bg-[#E6A700]" />
                                </div>
                            </div>

                            <form onSubmit={handleSubmit} className="relative z-10 w-full">
                                <div className="grid md:grid-cols-2 gap-8">
                                    <ContactInput label="Identity_ID" type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" />
                                    <ContactInput label="Return_Channel" type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@address.net" />
                                </div>
                                <ContactInput label="Message_Buffer" type="textarea" name="message" value={formData.message} onChange={handleChange} placeholder="Detail your project or proposal..." />

                                <button
                                    type="submit"
                                    disabled={isSubmitting || submitStatus === 'success'}
                                    className="w-full py-5 bg-white text-black font-black text-[11px] font-mono tracking-[0.2em] uppercase rounded-sm hover:bg-[#E6A700] hover:scale-[1.02] transition-all relative overflow-hidden group shadow-2xl"
                                >
                                    <AnimatePresence mode="wait">
                                        {isSubmitting ? (
                                            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center justify-center gap-4">
                                                <motion.div animate={{ x: [-20, 100] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}>
                                                    <RathIcon className="w-6 h-6 text-[#E6A700]" />
                                                </motion.div>
                                                <span className="relative z-10">Dispatching...</span>
                                            </motion.div>
                                        ) : submitStatus === 'success' ? (
                                            <motion.div key="success" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex items-center justify-center gap-2">
                                                <FaCheck /> Transmitted
                                            </motion.div>
                                        ) : (
                                            <motion.div key="idle" className="flex items-center justify-center gap-3">
                                                Commit Transmission <FaArrowRight size={10} className="group-hover:translate-x-1 transition-transform" />
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </button>
                            </form>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;