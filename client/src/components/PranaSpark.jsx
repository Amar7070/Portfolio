import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PranaSpark = () => {
    const [sparks, setSparks] = useState([]);
    const [pranaLevel, setPranaLevel] = useState(0);

    // Initialize prana level from local storage
    useEffect(() => {
        const storedPrana = localStorage.getItem('prana_count') || 0;
        setPranaLevel(parseInt(storedPrana));
    }, []);

    const handleClick = (e) => {
        // Increment and save
        const newLevel = pranaLevel + 1;
        setPranaLevel(newLevel);
        localStorage.setItem('prana_count', newLevel);

        // Calculate positions
        const rect = e.currentTarget.getBoundingClientRect();
        const originX = rect.left + rect.width / 2;
        const originY = rect.top + rect.height / 2;

        // Generate 12-15 sparks
        const newSparks = Array.from({ length: Math.floor(Math.random() * 4) + 12 }).map(() => ({
            id: Date.now() + Math.random(),
            x: originX,
            y: originY,
            angle: Math.random() * Math.PI * 2,
            distance: Math.random() * 80 + 40,
            duration: Math.random() * 0.8 + 0.6,
            size: Math.random() * 4 + 2
        }));

        setSparks(prev => [...prev, ...newSparks]);

        // Cleanup old sparks
        setTimeout(() => {
            setSparks(prev => prev.filter(s => !newSparks.find(n => n.id === s.id)));
        }, 1500);
    };

    // calculate glow intensity based on clicks
    const glowIntensity = Math.min(pranaLevel * 0.05, 1);
    const glowColor = `rgba(230, 167, 0, ${0.2 + glowIntensity * 0.8})`;

    return (
        <div className="relative inline-flex items-center justify-center Group">
            {/* Ambient Background Glow */}
            <motion.div 
                className="absolute w-12 h-12 rounded-full pointer-events-none"
                animate={{
                    boxShadow: `0 0 ${20 + glowIntensity * 40}px ${glowColor}`
                }}
                transition={{ duration: 0.5 }}
            />
            
            {/* The Diya / Ember Button */}
            <button 
                onClick={handleClick}
                className="relative z-10 w-10 h-10 flex items-center justify-center rounded-sm bg-[rgba(10,10,14,0.6)] border border-[#E6A700]/30 hover:border-[#E6A700] hover:bg-[#E6A700]/10 transition-all duration-300 group overflow-hidden"
                aria-label="Leave Prana"
            >
                {/* Ember Core */}
                <motion.div 
                    className="w-3 h-3 bg-[#E6A700] rotate-45 transform origin-center"
                    animate={{ 
                        scale: [1, 1.2, 1],
                        filter: ['brightness(1)', 'brightness(1.5)', 'brightness(1)']
                    }}
                    transition={{ 
                        duration: 2, 
                        repeat: Infinity, 
                        ease: "easeInOut" 
                    }}
                    style={{
                        boxShadow: `0 0 ${10 + glowIntensity * 20}px ${glowColor}`
                    }}
                />
            </button>

            {/* Spark Particles */}
            {sparks.map(spark => (
                <Particle key={spark.id} spark={spark} />
            ))}
        </div>
    );
};

const Particle = ({ spark }) => {
    return (
        <motion.div
            className="fixed z-50 rounded-full bg-gradient-to-t from-[#E6A700] to-yellow-200 pointer-events-none"
            initial={{ 
                x: spark.x, 
                y: spark.y,
                opacity: 1, 
                scale: 1 
            }}
            animate={{ 
                x: spark.x + Math.cos(spark.angle) * spark.distance, 
                y: spark.y - Math.sin(spark.angle) * spark.distance - 60, // Fly up and out
                opacity: 0,
                scale: 0
            }}
            transition={{ 
                duration: spark.duration,
                ease: "easeOut" 
            }}
            style={{ 
                width: spark.size, 
                height: spark.size,
                boxShadow: '0 0 10px rgba(230, 167, 0, 0.8)'
            }}
        />
    );
};

export default PranaSpark;
