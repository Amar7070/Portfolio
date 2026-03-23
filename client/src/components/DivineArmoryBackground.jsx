import { motion } from 'framer-motion';

// 1. CHAKRA (Frontend) - Continuous React/UI Loops
const ChakraIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <circle cx="50" cy="50" r="40" strokeDasharray="4 6" opacity="0.5" />
    <circle cx="50" cy="50" r="30" />
    <circle cx="50" cy="50" r="10" />
    <path d="M50 10 L50 90 M10 50 L90 50 M22 22 L78 78 M22 78 L78 22" opacity="0.7" />
  </svg>
);

// 2. TRISHUL (Backend) - 3 Pillars (Server, API, Database)
const TrishulIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <line x1="50" y1="10" x2="50" y2="90" />
    <polygon points="50,10 45,25 55,25" fill="currentColor" opacity="0.2" />
    <path d="M 25 35 C 25 55, 75 55, 75 35" />
    <line x1="25" y1="35" x2="25" y2="45" />
    <line x1="75" y1="35" x2="75" y2="45" />
    <line x1="40" y1="65" x2="60" y2="65" />
    <circle cx="50" cy="75" r="3" />
  </svg>
);

// 3. VAJRA (System Logic) - Indestructible Algorithms
const VajraIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <circle cx="50" cy="50" r="8" />
    <polygon points="50,10 35,40 65,40" />
    <line x1="50" y1="10" x2="50" y2="40" />
    <polygon points="50,90 35,60 65,60" />
    <line x1="50" y1="90" x2="50" y2="60" />
    <circle cx="25" cy="50" r="4" />
    <circle cx="75" cy="50" r="4" />
    <line x1="29" y1="50" x2="42" y2="50" />
    <line x1="58" y1="50" x2="71" y2="50" />
  </svg>
);

// 4. DHANUSH (DevOps/Deployment) - Precision & Hitting the Target
const DhanushIcon = ({ className }) => (
  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1" className={className}>
    <path d="M 25 85 Q 85 50 25 15" strokeDasharray="3 3" opacity="0.8" />
    <line x1="25" y1="15" x2="25" y2="85" />
    <line x1="10" y1="50" x2="80" y2="50" strokeWidth="1.5" />
    <polygon points="80,50 70,45 70,55" fill="currentColor" opacity="0.5" />
    <circle cx="85" cy="50" r="12" strokeDasharray="2 4" opacity="0.6" />
  </svg>
);

const DivineArmoryBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#0A0A0E] flex items-center justify-center">
      
      {/* Grid that matches your 4-column text layout. 
        Opacity is kept very low (0.05) so it looks like a subtle watermark/blueprint behind the text.
      */}
      <div className="w-full h-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 opacity-[0.05] mix-blend-screen items-center">
        
        {/* Column 1 Background: CHAKRA */}
        <div className="flex justify-center items-center w-full h-full lg:pt-[40%]">
          <motion.div 
            animate={{ rotate: 360 }} 
            transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            className="w-full max-w-[200px] text-[#00b4d8]" // Peacock Blue
          >
            <ChakraIcon className="w-full h-auto drop-shadow-[0_0_15px_#00b4d8]" />
          </motion.div>
        </div>

        {/* Column 2 Background: TRISHUL */}
        <div className="flex justify-center items-center w-full h-full lg:pt-[40%]">
          <motion.div 
            animate={{ y: [-8, 8, -8] }} 
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-[200px] text-[#E6A700]" // Saffron Gold
          >
            <TrishulIcon className="w-full h-auto drop-shadow-[0_0_15px_#E6A700]" />
          </motion.div>
        </div>

        {/* Column 3 Background: VAJRA */}
        <div className="flex justify-center items-center w-full h-full lg:pt-[40%]">
          <motion.div 
            animate={{ scale: [0.95, 1.05, 0.95] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-[200px] text-[#cbd5e1]" // Silver/Ash
          >
            <VajraIcon className="w-full h-auto drop-shadow-[0_0_15px_#cbd5e1]" />
          </motion.div>
        </div>

        {/* Column 4 Background: DHANUSH */}
        <div className="flex justify-center items-center w-full h-full lg:pt-[40%]">
          <motion.div 
            animate={{ x: [-5, 5, -5] }} 
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-full max-w-[200px] text-[#E6A700]" // Saffron Gold
          >
            <DhanushIcon className="w-full h-auto drop-shadow-[0_0_15px_#E6A700]" />
          </motion.div>
        </div>

      </div>

      {/* Subtle fade effect at the bottom */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#050608] to-transparent z-10" />
    </div>
  );
};

export default DivineArmoryBackground;
