import { motion } from 'framer-motion';

const OriginBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center lg:justify-start lg:pl-[20%]">

      {/* The Core Singularity (Soft, Gentle Glow) */}
      <div className="absolute w-[400px] h-[400px] bg-[#E6A700] rounded-full blur-[160px] opacity-[0.12]" />
      <div className="absolute w-[150px] h-[150px] bg-white rounded-full blur-[90px] opacity-[0.2]" />

      {/* Cyberpunk Axis Lines (Very faint radar crosshair) */}
      <div className="absolute w-[200vw] h-[1px] bg-gradient-to-r from-transparent via-[#E6A700]/20 to-transparent opacity-30" />
      <div className="absolute h-[200vh] w-[1px] bg-gradient-to-b from-transparent via-[#E6A700]/20 to-transparent opacity-30" />
      
      {/* Inner Slow Pulse (Soft expansion) */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0.4 }}
        animate={{ scale: 4.5, opacity: 0 }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
        className="absolute w-[200px] h-[200px] rounded-full border border-[#E6A700] mix-blend-screen shadow-[0_0_20px_rgba(230,167,0,0.15)]"
      />
      
      {/* Dashed Expanding Ring (Very Slow, Gentle Twist) */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0.3, rotate: 0 }}
        animate={{ scale: 5.5, opacity: 0, rotate: 90 }}
        transition={{ 
          duration: 12, 
          repeat: Infinity, 
          ease: "linear", 
          delay: 2 
        }}
        className="absolute w-[250px] h-[250px] rounded-full border-[1.5px] border-dashed border-[#E6A700] mix-blend-screen opacity-20 shadow-[0_0_15px_rgba(230,167,0,0.1)]"
      />

      {/* Dotted Expanding Ring (Counter-Clockwise Soft Twist) */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0.25, rotate: 0 }}
        animate={{ scale: 6.5, opacity: 0, rotate: -90 }}
        transition={{ 
          duration: 15, 
          repeat: Infinity, 
          ease: "linear", 
          delay: 4 
        }}
        className="absolute w-[300px] h-[300px] rounded-full border-[1.5px] border-dotted border-white/40 mix-blend-screen"
      />

      {/* Extreme Outer Ripple (Very Faint, Glacial Speed) */}
      <motion.div
        initial={{ scale: 1, opacity: 0.15 }}
        animate={{ scale: 7, opacity: 0 }}
        transition={{ 
          duration: 18, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 3 
        }}
        className="absolute w-[350px] h-[350px] rounded-full border-[0.5px] border-[#E6A700]/10"
      />

    </div>
  );
};

export default OriginBackground;
