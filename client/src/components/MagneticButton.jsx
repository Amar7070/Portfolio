
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';

const MagneticButton = ({ children, className = '', onClick }) => {
    const ref = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouse = (e) => {
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const middleX = clientX - (left + width / 2);
        const middleY = clientY - (top + height / 2);
        setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
    };

    const reset = () => {
        setPosition({ x: 0, y: 0 });
    };

    const { x, y } = position;
    return (
        <motion.button
            ref={ref}
            animate={{ x, y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            onMouseMove={handleMouse}
            onMouseLeave={reset}
            onClick={onClick}
            className={`relative overflow-hidden group ${className}`}
        >
            <span className="relative z-10 transition-transform duration-300 group-hover:scale-105 inline-block">
                {children}
            </span>

            {/* Glow Effect Following Mouse inside button */}
            <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#0055FF]/0 via-[#0055FF]/10 to-[#0055FF]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-in-out pointer-events-none"></div>
        </motion.button>
    );
};

export default MagneticButton;
