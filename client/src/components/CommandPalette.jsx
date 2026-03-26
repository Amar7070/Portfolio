
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { FaHome, FaProjectDiagram, FaUser, FaFileAlt, FaEnvelope, FaSearch } from 'react-icons/fa';

const CommandPalette = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const [selectedIndex, setSelectedIndex] = useState(0);
    const navigate = useNavigate();

    const actions = [
        { id: 'home', title: 'Home', icon: <FaHome />, action: () => { navigate('/'); onClose(); } },
        { id: 'projects', title: 'Projects', icon: <FaProjectDiagram />, action: () => { navigate('/projects'); onClose(); } },
        { id: 'lab', title: 'The Lab (Experimental)', icon: <FaSearch />, action: () => { navigate('/lab'); onClose(); } }, // Added Lab
        { id: 'about', title: 'About', icon: <FaUser />, action: () => { navigate('/'); setTimeout(() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' }), 100); onClose(); } },
        { id: 'resume', title: 'View Resume', icon: <FaFileAlt />, action: () => { window.open('/Amar_Sahani_CV.pdf', '_blank'); onClose(); } },
        { id: 'contact', title: 'Contact', icon: <FaEnvelope />, action: () => { navigate('/'); setTimeout(() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }), 100); onClose(); } },
    ];

    const filteredActions = actions.filter(action =>
        action.title.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                setSelectedIndex(prev => (prev + 1) % filteredActions.length);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                setSelectedIndex(prev => (prev - 1 + filteredActions.length) % filteredActions.length);
            } else if (e.key === 'Enter') {
                e.preventDefault();
                if (filteredActions[selectedIndex]) {
                    filteredActions[selectedIndex].action();
                }
            } else if (e.key === 'Escape') {
                onClose();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        }
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isOpen, filteredActions, selectedIndex, onClose]);

    // Reset selection when query changes
    useEffect(() => {
        setSelectedIndex(0);
    }, [query]);

    // Focus input on open
    useEffect(() => {
        if (isOpen) {
            // setTimeout to ensure render
            setTimeout(() => document.getElementById('cmd-input')?.focus(), 50);
        }
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[9999] flex items-start justify-center pt-[20vh] px-4">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full max-w-lg bg-[#111111] border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                    >
                        {/* Search Input */}
                        <div className="flex items-center border-b border-white/10 px-4 py-4">
                            <FaSearch className="text-gray-500 mr-3" />
                            <input
                                id="cmd-input"
                                type="text"
                                placeholder="Type a command or search..."
                                className="w-full bg-transparent text-white placeholder-gray-500 focus:outline-none font-mono text-sm"
                                autoFocus
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                            />
                            <span className="text-xs text-gray-500 font-mono border border-white/10 px-2 py-1 rounded">ESC</span>
                        </div>

                        {/* Actions List */}
                        <div className="py-2 max-h-[60vh] overflow-y-auto">
                            {filteredActions.length > 0 ? (
                                filteredActions.map((action, index) => (
                                    <div
                                        key={action.id}
                                        onClick={action.action}
                                        onMouseEnter={() => setSelectedIndex(index)}
                                        className={`flex items-center gap-3 px-4 py-3 cursor-pointer transition-colors border-l-2 ${selectedIndex === index
                                            ? 'bg-[#0055FF]/10 border-[#0055FF] text-white'
                                            : 'border-transparent text-gray-400 hover:text-gray-200'
                                            }`}
                                    >
                                        <div className={`${selectedIndex === index ? 'text-[#0055FF]' : 'text-gray-500'}`}>
                                            {action.icon}
                                        </div>
                                        <span className="text-sm font-medium">{action.title}</span>
                                        {selectedIndex === index && (
                                            <span className="ml-auto text-xs text-[#0055FF] font-mono">↩</span>
                                        )}
                                    </div>
                                ))
                            ) : (
                                <div className="px-4 py-8 text-center text-gray-500 text-sm">
                                    No results found.
                                </div>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="bg-[#050608]/50 px-4 py-2 border-t border-white/5 flex justify-between items-center text-[10px] text-gray-600 font-mono">
                            <div className="flex gap-2">
                                <span>↑↓ to navigate</span>
                                <span>↵ to select</span>
                            </div>
                            <span>Command Palette</span>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default CommandPalette;
