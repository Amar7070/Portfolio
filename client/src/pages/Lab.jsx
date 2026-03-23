import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBug, FaTrophy, FaArrowLeft, FaPlay, FaRedo } from 'react-icons/fa';
import confetti from 'canvas-confetti';

const MAX_BUGS = 15;
const BASE_SPEED = 5;
const SPAWN_RATE = 1500;

const random = (min, max) => Math.random() * (max - min) + min;

const getRandomSpawn = () => {
    const edge = Math.floor(Math.random() * 4);
    let x, y, rotate;
    switch (edge) {
        case 0: x = random(0, 100); y = -10; rotate = 180; break;
        case 1: x = 110; y = random(0, 100); rotate = -90; break;
        case 2: x = random(0, 100); y = 110; rotate = 0; break;
        case 3: x = -10; y = random(0, 100); rotate = 90; break;
        default: x = 0; y = 0; rotate = 0;
    }
    return { x, y, rotate };
};

const Lab = () => {
    const [gameState, setGameState] = useState('idle');
    const [score, setScore] = useState(0);
    const [bugs, setBugs] = useState([]);

    const startGame = () => {
        setGameState('playing');
        setScore(0);
        setBugs([]);
    };

    useEffect(() => {
        if (gameState === 'playing') {
            const spawnBug = () => {
                if (bugs.length < MAX_BUGS) {
                    const { x, y, rotate } = getRandomSpawn();
                    const newBug = {
                        id: Date.now() + Math.random(),
                        x, y, rotate,
                        type: Math.random() > 0.8 ? 'boss' : 'normal',
                        speed: random(BASE_SPEED - 1, BASE_SPEED + 2)
                    };
                    setBugs(prev => [...prev, newBug]);
                }
            };
            const interval = setInterval(spawnBug, Math.max(500, SPAWN_RATE - (score * 50)));
            return () => clearInterval(interval);
        }
    }, [gameState, bugs.length, score]);

    useEffect(() => {
        if (score >= 50 && gameState !== 'won') {
            setGameState('won');
            confetti({ particleCount: 200, spread: 160, origin: { y: 0.6 }, colors: ['#E6A700', '#003E7E', '#ffffff'] });
        }
    }, [score, gameState]);

    const squashBug = (e, bugId, type) => {
        e.stopPropagation();
        const rect = e.target.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) / window.innerWidth;
        const y = (rect.top + rect.height / 2) / window.innerHeight;

        confetti({
            particleCount: 40, spread: 60, origin: { x, y },
            colors: type === 'boss' ? ['#DC2626', '#E6A700'] : ['#003E7E', '#E6A700', '#ffffff'],
            shapes: ['square'], scalar: 0.8, disableForReducedMotion: true, zIndex: 100
        });

        setBugs(prev => prev.filter(b => b.id !== bugId));
        setScore(prev => prev + (type === 'boss' ? 5 : 1));
    };

    return (
        <div className="relative w-full h-screen bg-[var(--bg-cosmic)] overflow-hidden font-mono text-white select-none cursor-crosshair">

            {/* Background Texture */}
            <div className="absolute inset-0 opacity-[0.02]"
                style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
            
            {/* Global dual-light */}
            <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[rgba(0,62,126,0.08)] rounded-full blur-[200px] pointer-events-none z-0" />

            {/* Header / Meta Info */}
            <div className="absolute top-0 left-0 w-full p-6 flex justify-between items-start z-50 pointer-events-none">
                <Link to="/" className="pointer-events-auto flex items-center gap-3 bg-[rgba(10,10,14,0.8)] backdrop-blur-md border border-white/10 hover:border-[#E6A700]/50 px-5 py-3 rounded-sm text-slate-400 hover:text-white transition-all text-[10px] font-bold uppercase tracking-widest shadow-lg">
                    <FaArrowLeft /> Exit Lab
                </Link>

                <div className="flex flex-col items-end gap-2 pointer-events-none">
                    <div className="bg-[rgba(10,10,14,0.8)] backdrop-blur-md border border-white/10 px-6 py-4 rounded-sm">
                        <div className="text-[9px] text-slate-500 uppercase tracking-[0.3em] font-bold mb-2">Bugs Resolved</div>
                        <div className="text-5xl font-black font-mono text-white text-right drop-shadow-[0_0_10px_rgba(255,255,255,0.1)]">
                            {score.toString().padStart(3, '0')}
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal Layer */}
            {(gameState === 'idle' || gameState === 'paused') && (
                <div className="absolute inset-0 flex items-center justify-center z-40 bg-[#050608]/90 backdrop-blur-md">
                    <motion.div
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="cyber-panel border border-white/10 p-12 rounded-sm max-w-lg text-center shadow-2xl relative"
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/[0.02] border border-white/5 rounded-sm mb-8 relative">
                            <span className="w-1.5 h-1.5 bg-[#E6A700] shadow-[0_0_8px_#E6A700] rounded-sm animate-pulse" />
                            <span className="text-[10px] text-slate-400 tracking-[0.3em] uppercase">Focus Simulation Phase</span>
                        </div>
                        
                        <h1 className="text-4xl lg:text-5xl font-black mb-6 uppercase tracking-tighter text-white">
                            Bug <span className="text-gold-gradient">Hunter.</span>
                        </h1>
                        <p className="text-slate-400 text-sm mb-10 leading-relaxed font-mono">
                            Engineering requires immense focus and reaction time. Use this lab simulation to verify your 
                            response speed. Locate and resolve <span className="text-white font-bold">50 anomalies</span> to clear the environment.
                        </p>

                        <button
                            onClick={startGame}
                            className="btn-primary w-full py-4 bg-white/[0.02] border font-bold rounded-sm transition-all overflow-hidden flex items-center justify-center gap-3 text-[#E6A700]"
                        >
                            {gameState === 'paused' ? <FaPlay /> : <FaBug />}
                            <span className="text-[11px] font-mono uppercase tracking-[0.2em]">{gameState === 'paused' ? 'RESUME SYSTEM' : 'INITIALIZE DEBUG'}</span>
                        </button>
                    </motion.div>
                </div>
            )}

            {gameState === 'won' && (
                <div className="absolute inset-0 flex items-center justify-center z-50 bg-[#050608]/90 backdrop-blur-lg">
                    <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} className="text-center cyber-panel border border-[#E6A700]/30 p-16 rounded-sm shadow-[0_0_60px_rgba(230,167,0,0.1)]">
                        <motion.div animate={{ rotate: [0, 5, -5, 0] }} transition={{ repeat: Infinity, duration: 3 }} className="text-[#E6A700] mb-8 flex justify-center drop-shadow-[0_0_15px_rgba(230,167,0,0.5)]">
                            <FaTrophy size={64} />
                        </motion.div>
                        <h2 className="text-3xl font-black mb-4 uppercase tracking-tighter text-white">SYSTEM <span className="text-[#E6A700]">CLEARED</span></h2>
                        <p className="text-slate-400 text-sm font-mono tracking-widest uppercase mb-12">Total Focus Achieved. Environment Stable.</p>
                        <button onClick={startGame} className="btn-primary px-8 py-4 text-[#E6A700] rounded-sm transition-all flex items-center gap-3 mx-auto text-[10px] font-mono font-bold uppercase tracking-[0.2em]">
                            <FaRedo /> REBOOT PROTOCOL
                        </button>
                    </motion.div>
                </div>
            )}

            {/* Bugs rendering */}
            <div className="absolute inset-0 overflow-hidden z-10">
                <AnimatePresence>
                    {bugs.map((bug) => (
                        <motion.div
                            key={bug.id}
                            initial={{ left: `${bug.x}%`, top: `${bug.y}%`, opacity: 1, scale: 0.5 }}
                            animate={{ left: '50%', top: '50%', opacity: 1, scale: 1 }}
                            exit={{ scale: 0, opacity: 0 }}
                            transition={{ duration: bug.speed, ease: "linear" }}
                            className="absolute cursor-crosshair transform -translate-x-1/2 -translate-y-1/2"
                            onMouseDown={(e) => squashBug(e, bug.id, bug.type)}
                        >
                            <div className={`p-4 transition-transform active:scale-90 hover:scale-[1.3] ${bug.type === 'boss' ? 'text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]' : 'text-slate-300 drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]'}`} style={{ transform: `rotate(${bug.rotate}deg)` }}>
                                <FaBug size={bug.type === 'boss' ? 42 : 24} />
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default Lab;
