import { motion } from 'framer-motion';

const ProjectArchitectureBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#0A0A0E]">
      
      {/* 1. The Blueprint Grid (Architectural Lines) */}
      <div 
        className="absolute inset-0 opacity-[0.03]" 
        style={{ 
          backgroundImage: `linear-gradient(#E6A700 1px, transparent 1px), linear-gradient(90deg, #E6A700 1px, transparent 1px)`,
          backgroundSize: '100px 100px' 
        }} 
      />

      {/* 2. The Central Trishul (Architecture Pillars) 
          Placed behind the project cards as a watermark
      */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.04]">
        <svg viewBox="0 0 200 200" className="w-[800px] h-[800px] text-[#E6A700]">
          {/* Main Shaft */}
          <line x1="100" y1="20" x2="100" y2="180" stroke="currentColor" strokeWidth="1" />
          {/* Curved Prongs */}
          <path d="M 60 60 C 60 110, 140 110, 140 60" fill="none" stroke="currentColor" strokeWidth="1" />
          {/* Tips */}
          <polygon points="100,20 95,35 105,35" fill="currentColor" />
          <line x1="60" y1="60" x2="60" y2="75" stroke="currentColor" strokeWidth="1" />
          <line x1="140" y1="60" x2="140" y2="75" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      {/* 3. Floating "Commit" Nodes 
          Small square particles that move along the grid lines 
      */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: Math.random() * 100 + "%", y: "0%", opacity: 0 }}
          animate={{ y: "100%", opacity: [0, 1, 0] }}
          transition={{
            duration: Math.random() * 10 + 15,
            repeat: Infinity,
            ease: "linear",
            delay: i * 2
          }}
          className="absolute w-1 h-1 bg-[#E6A700] shadow-[0_0_10px_#E6A700]"
        />
      ))}

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0A0A0E] to-transparent z-10" />
    </div>
  );
};

export default ProjectArchitectureBackground;
