import { motion } from 'framer-motion';

const InboundContactBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#0A0A0E] flex items-center justify-center">
      
      {/* 1. The Core Receptor (The Meeting Point) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#E6A700] rounded-full blur-[150px] opacity-[0.03]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-[#003E7E] rounded-full blur-[100px] opacity-[0.04]" />

      {/* 2. The "Sangam" (Inbound Converging Rings) 
          Notice the scale goes from Large (3) to Small (0.5) 
          This creates a "pulling in" or "gravity" effect toward the contact form.
      */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full flex items-center justify-center">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            initial={{ scale: 3, opacity: 0, borderWidth: "1px" }}
            animate={{ scale: 0.5, opacity: [0, 0.4, 0], borderWidth: "2px" }}
            transition={{ 
              duration: 8,           // Slow, calm inward pull
              repeat: Infinity, 
              delay: i * 2.6,        // Evenly spaced rhythm
              ease: "easeIn"         // Accelerates slightly as it gets closer to the center
            }}
            className="absolute w-[400px] h-[400px] rounded-full border border-[#cbd5e1] shadow-[inset_0_0_20px_rgba(203,213,225,0.05)]"
          />
        ))}
      </div>

      {/* 3. Inbound Data Streams (Faint lines pulling into the center) */}
      <svg className="absolute w-full h-full opacity-[0.05]" viewBox="0 0 100 100" preserveAspectRatio="none">
        <defs>
          <linearGradient id="inbound-grad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="#E6A700" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>
        <line x1="0" y1="0" x2="100" y2="100" stroke="url(#inbound-grad)" strokeWidth="0.2" />
        <line x1="100" y1="0" x2="0" y2="100" stroke="url(#inbound-grad)" strokeWidth="0.2" />
        <line x1="50" y1="0" x2="50" y2="100" stroke="url(#inbound-grad)" strokeWidth="0.2" />
      </svg>

      {/* Overlay to ensure the form on top is completely readable */}
      <div className="absolute inset-0 bg-[#0A0A0E]/50 z-10" />
    </div>
  );
};

export default InboundContactBackground;
