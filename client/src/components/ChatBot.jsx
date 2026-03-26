import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes, FaTerminal, FaMicrochip, FaUserAstronaut, FaSignal } from 'react-icons/fa';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import ChatbotBackground from './ChatbotBackground';

// Trinetra (Third Eye) Icon
const TrinetraIcon = ({ className }) => (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
        <ellipse cx="50" cy="50" rx="20" ry="35" stroke="currentColor" strokeWidth="5" />
        <circle cx="50" cy="50" r="10" fill="currentColor" className="animate-pulse shadow-[0_0_15px_currentColor]" />
    </svg>
);

const BACKEND_URL = window.location.hostname === 'localhost'
    ? 'http://localhost:5000'
    : 'https://portfolio-0fu6.onrender.com';

// --- Markdown Formatter (Gold/Cyber Theme) ---
const MarkdownContent = ({ content }) => (
    <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
            p: ({ node, ...props }) => <p className="mb-3 last:mb-0 leading-relaxed font-mono text-[11px]" {...props} />,
            ul: ({ node, ...props }) => <ul className="list-none ml-2 mb-3 space-y-2 border-l border-white/10 pl-3" {...props} />,
            ol: ({ node, ...props }) => <ol className="list-decimal ml-5 mb-3 space-y-1.5 text-[#E6A700] font-mono text-[11px]" {...props} />,
            li: ({ node, ...props }) => (
                <li className="text-slate-300 font-mono text-[11px] relative" {...props}>
                    <span className="absolute -left-3 top-[5px] w-1 h-1 bg-[#E6A700] rounded-full shadow-[0_0_5px_#E6A700]" />
                    {props.children}
                </li>
            ),
            strong: ({ node, ...props }) => <strong className="font-bold text-[#E6A700] tracking-wide" {...props} />,
            code: ({ node, inline, ...props }) =>
                inline ? (
                    <code className="bg-white/[0.05] text-[#E6A700] px-1.5 py-0.5 rounded-sm text-[10px] font-mono border border-[#E6A700]/20" {...props} />
                ) : (
                    <div className="bg-[#050608] border border-white/10 rounded-sm p-3 my-3 overflow-x-auto">
                        <code className="text-[#E6A700] text-[10px] font-mono" {...props} />
                    </div>
                )
        }}
    >
        {content}
    </ReactMarkdown>
);

const TypingIndicator = () => (
    <div className="flex items-end gap-3 w-full relative z-10">
        <div className="flex-shrink-0 w-8 h-8 bg-white/[0.02] border border-[#E6A700]/30 rounded-sm flex items-center justify-center">
            <TrinetraIcon className="w-4 h-4 text-[#E6A700] animate-pulse" />
        </div>
        <div className="bg-[rgba(10,10,14,0.95)] border border-[#E6A700]/20 px-4 py-3 rounded-sm">
            <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-[#E6A700] rounded-sm animate-bounce shadow-[0_0_5px_#E6A700]" style={{ animationDelay: '0ms' }} />
                <span className="w-1.5 h-1.5 bg-[#E6A700] rounded-sm animate-bounce shadow-[0_0_5px_#E6A700]" style={{ animationDelay: '150ms' }} />
                <span className="w-1.5 h-1.5 bg-[#E6A700] rounded-sm animate-bounce shadow-[0_0_5px_#E6A700]" style={{ animationDelay: '300ms' }} />
            </div>
        </div>
    </div>
);

const Message = ({ msg }) => {
    const isBot = msg.role === 'bot';
    return (
        <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: "spring", stiffness: 250, damping: 25 }}
            className={`flex items-end gap-3 w-full relative z-10 ${isBot ? '' : 'flex-row-reverse'}`}
        >
            {/* Avatar */}
            <div className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-sm
                ${isBot
                    ? 'bg-[#0A0A0E] border border-[#E6A700]/40 text-[#E6A700] shadow-[0_0_10px_rgba(230,167,0,0.2)]'
                    : 'bg-white/[0.05] border border-white/20 text-white'
                }`}
            >
                {isBot ? <TrinetraIcon className="w-4 h-4" /> : <FaUserAstronaut size={12} />}
            </div>

            {/* Bubble */}
            <div className={`relative max-w-[85%] px-4 py-3
                ${isBot
                    ? 'bg-[#0A0A0E] border border-white/10 text-slate-300 rounded-sm'
                    : 'bg-[rgba(230,167,0,0.08)] border border-[#E6A700]/30 text-[#E6A700] rounded-sm'
                }`}
            >
                {isBot && <div className="absolute top-0 right-0 w-8 h-8 bg-[#E6A700]/5 blur-[10px] pointer-events-none" />}
                {isBot ? <MarkdownContent content={msg.text} /> : <p className="leading-relaxed font-mono text-[11px] font-bold">{msg.text}</p>}
            </div>
        </motion.div>
    );
};

const SUGGESTIONS = [
    "What is your core tech stack?",
    "Explain your latest project.",
    "Are you open to remote work?",
    "Show me your database skills.",
];

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([
        {
            role: 'bot',
            text: "### SYS.AI INITIALIZED\nI am the architectural interface for Amar Sahani. Query my systems for **skills**, **projects**, or **availability**.",
        },
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    useEffect(() => {
        if (isOpen) {
            setTimeout(() => inputRef.current?.focus(), 300);
        }
    }, [isOpen]);

    const sendMessage = async (text) => {
        const userText = text || input.trim();
        if (!userText || isLoading) return;

        setInput('');
        setMessages(prev => [...prev, { role: 'user', text: userText }]);
        setIsLoading(true);

        try {
            const history = messages.map(m => ({
                role: m.role === 'bot' ? 'model' : 'user',
                parts: [{ text: m.text }]
            }));

            const res = await fetch(`${BACKEND_URL}/api/chat`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: userText, history }),
            });

            if (!res.ok) {
                const errorData = await res.json().catch(() => ({}));
                if (errorData.reply) {
                    setMessages(prev => [...prev, { role: 'bot', text: errorData.reply }]);
                    return;
                }
                throw new Error('API error');
            }
            const data = await res.json();
            setMessages(prev => [...prev, { role: 'bot', text: data.reply }]);
        } catch (err) {
            console.error("Chat Error:", err);
            setMessages(prev => [
                ...prev,
                { role: 'bot', text: '**ERROR 503:** Transmission link compromised. Verify backend connectivity.' },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            {/* Floating Action Button - Neo-Brutalist Trigger */}
            <div className="fixed bottom-8 right-8 z-[9998]">
                <AnimatePresence>
                    {!isOpen && (
                        <motion.div
                            initial={{ scale: 0, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            className="relative group"
                        >
                            <span className="absolute -inset-2 rounded-full border border-[#E6A700]/30 animate-ping duration-[3000ms] pointer-events-none" />
                            <motion.button
                                onClick={() => setIsOpen(true)}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                className="relative w-14 h-14 bg-[#0A0A0E] border border-white/20 group-hover:border-[#E6A700] text-slate-400 group-hover:text-[#E6A700] flex items-center justify-center rounded-sm transition-all shadow-[0_0_20px_rgba(230,167,0,0.1)] outline-none"
                            >
                                <TrinetraIcon className="w-6 h-6" />
                                <div className="absolute top-2 right-2 w-1.5 h-1.5 bg-[#E6A700] shadow-[0_0_8px_#E6A700] rounded-sm animate-pulse" />
                            </motion.button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* Chat Terminal Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        key="chat-window"
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20, transition: { duration: 0.2 } }}
                        className="fixed bottom-6 right-6 lg:bottom-8 lg:right-8 z-[10001] w-[90vw] max-w-[400px] flex flex-col shadow-[0_30px_60px_rgba(0,0,0,0.8),0_0_20px_rgba(230,167,0,0.1)] rounded-sm overflow-hidden border border-white/10 bg-[#0A0A0E]"
                        style={{ maxHeight: 'calc(100vh - 120px)' }}
                    >
                        {/* ── Title bar ── */}
                        <div className="bg-[#0A0A0E] border-b border-white/10 flex items-center justify-between px-4 py-3 relative overflow-hidden shrink-0">
                            <div className="absolute inset-0 bg-[rgba(230,167,0,0.03)] pointer-events-none" />

                            <div className="flex items-center gap-3 relative z-10">
                                <div className="flex gap-1.5">
                                    <span className="w-2 h-2 rounded-full border border-white/20 bg-red-500/20" />
                                    <span className="w-2 h-2 rounded-full border border-white/20 bg-yellow-500/20" />
                                    <span className="w-2 h-2 rounded-full border border-white/20 bg-green-500/20" />
                                </div>
                                <div className="flex items-center gap-2 border-l border-white/10 pl-3">
                                    <FaSignal size={10} className="text-[#E6A700] animate-pulse" />
                                    <span className="font-mono text-[10px] text-slate-300 font-bold uppercase tracking-widest mt-0.5">
                                        Terminal.Link
                                    </span>
                                </div>
                            </div>
                            <motion.button
                                onClick={() => setIsOpen(false)}
                                className="text-slate-500 hover:text-[#E6A700] transition-colors relative z-10 p-1"
                            >
                                <FaTimes size={14} />
                            </motion.button>
                        </div>

                        {/* ── Output Buffer (Messages) ── */}
                        <div className="flex-1 overflow-y-auto relative px-4 py-6 space-y-6 no-scrollbar bg-[#0A0A0E]"
                            style={{ maxHeight: '450px' }}>
                            <ChatbotBackground />
                            {messages.map((msg, i) => (
                                <Message key={i} msg={msg} />
                            ))}

                            {/* Suggestions - Moved inside scroll area for stability */}
                            <AnimatePresence>
                                {messages.length <= 1 && !isLoading && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        className="flex flex-wrap gap-2 relative z-10 pt-2"
                                    >
                                        {SUGGESTIONS.map((s, i) => (
                                            <button
                                                key={i}
                                                onClick={() => sendMessage(s)}
                                                className="text-[9px] font-mono font-bold uppercase tracking-widest text-slate-400 bg-white/[0.02] hover:bg-white/[0.05] border border-white/10 hover:border-[#E6A700]/50 hover:text-[#E6A700] px-3 py-1.5 rounded-sm transition-all"
                                            >
                                                {s}
                                            </button>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {isLoading && <TypingIndicator />}
                            <div ref={messagesEndRef} className="relative z-10" />
                        </div>

                        {/* ── Input Console ── */}
                        <div className="bg-[#0A0A0E] border-t border-white/10 p-4 flex flex-col relative z-20 shrink-0">
                            <div className="relative flex items-center w-full">
                                <span className="absolute left-3 text-[#E6A700] font-mono text-[12px] font-black pb-0.5 pointer-events-none">
                                    &gt;
                                </span>
                                <input
                                    ref={inputRef}
                                    value={input}
                                    onChange={e => setInput(e.target.value)}
                                    onKeyDown={e => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                                    placeholder="Execute query..."
                                    disabled={isLoading}
                                    className="w-full bg-[#050608] border border-white/10 focus:border-[#E6A700]/50 text-white font-mono text-[11px] pl-8 pr-12 py-3.5 outline-none transition-all placeholder-slate-600 disabled:opacity-50 rounded-sm shadow-inner"
                                />
                                <motion.button
                                    onClick={() => sendMessage()}
                                    disabled={!input.trim() || isLoading}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 flex items-center justify-center bg-white/[0.05] hover:bg-[#E6A700]/20 border border-white/10 hover:border-[#E6A700]/50 text-slate-400 hover:text-[#E6A700] transition-all disabled:opacity-30 disabled:cursor-not-allowed rounded-sm"
                                >
                                    <div className="w-1.5 h-1.5 bg-current rounded-sm" />
                                </motion.button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default ChatBot;