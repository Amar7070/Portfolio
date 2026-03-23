import { motion } from 'framer-motion';

const BodhiGurukulBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none bg-[#0A0A0E]">
      
      {/* Sticky container ensures the tree stays in the screen while scrolling through the tall Education section */}
      <div className="sticky top-0 w-full h-screen flex justify-center items-end overflow-hidden">
        
        {/* 1. Subtle Ground Mist (Shanti / Calmness) */}
        <div className="absolute bottom-[-5%] w-full h-[300px] bg-gradient-to-t from-[#E6A700]/5 to-transparent blur-[100px]" />
        
        {/* 2. The Organic Bodhi Tree (SVG Silhouette) */}
        <svg 
          className="w-full h-full max-h-[85vh] opacity-[0.12]" 
          viewBox="0 0 1000 1000" 
          fill="none" 
          preserveAspectRatio="xMidYMax meet"
        >
          <g stroke="#E6A700" strokeWidth="2" strokeLinecap="round">
            
            {/* Main Trunk - Organic Curvy Path */}
            <motion.path 
              d="M500 1000 C 480 850, 520 750, 500 600" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 4, ease: "easeInOut" }}
            />

            {/* Major Branches - Flowing and Sprawling */}
            <motion.path 
              d="M500 650 C 450 600, 300 580, 200 450" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 1 }}
            />
            <motion.path 
              d="M500 680 C 550 620, 750 600, 850 480" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 1.2 }}
            />
            <motion.path 
              d="M500 600 C 500 500, 400 400, 450 250" 
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 3, delay: 1.5 }}
            />

            {/* Smaller Twigs (The Branching Knowledge) */}
            <motion.path d="M250 510 C 200 480, 150 480, 100 420" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.5 }} />
            <motion.path d="M780 520 C 850 480, 900 480, 950 400" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 2.8 }} />
            <motion.path d="M460 350 C 420 300, 400 280, 380 150" initial={{ pathLength: 0 }} animate={{ pathLength: 1 }} transition={{ delay: 3 }} />
          </g>
        </svg>

        {/* 3. The "Vidya" Fireflies (Jugnu) */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: (Math.random() * 100 - 50) + 'vw',
              y: '100vh', 
              opacity: 0,
              scale: Math.random() * 0.5 + 0.5 
            }}
            animate={{ 
              y: '-20vh', 
              opacity: [0, 0.6, 0],
              x: (Math.random() * 100 - 50) + 'vw'
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            style={{
              position: 'absolute',
              left: Math.random() * 100 + '%',
              width: '6px',
              height: '6px',
              backgroundColor: '#E6A700',
              borderRadius: '50%',
              filter: 'blur(4px)',
              boxShadow: '0 0 10px #E6A700'
            }}
          />
        ))}

        {/* Bottom shadow to ground the tree */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#0A0A0E] to-transparent z-10" />
      </div>
    </div>
  );
};

export default BodhiGurukulBackground;
