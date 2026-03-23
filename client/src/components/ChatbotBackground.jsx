import { motion } from 'framer-motion';

const ChatbotBackground = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#0A0A0E]">
      
      {/* 1. Subtle Neural Glow (Thinking Aura) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#E6A700] rounded-full blur-[180px] opacity-[0.02]" />

      {/* 2. The Neural Web (Akasha / Ether) */}
      <svg className="absolute w-full h-full opacity-[0.06]" viewBox="0 0 100 100" preserveAspectRatio="none">
        {[...Array(10)].map((_, i) => (
          <motion.path
            key={i}
            d={`M ${Math.random() * 100} ${Math.random() * 100} Q ${Math.random() * 100} ${Math.random() * 100} ${Math.random() * 100} ${Math.random() * 100}`}
            stroke="#E6A700"
            strokeWidth="0.1"
            fill="none"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: [0, 1, 0] }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>

      {/* 3. Floating Consciousness Particles (Data Points) */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ x: Math.random() * 100 + "%", y: Math.random() * 100 + "%", opacity: 0 }}
          animate={{ 
            opacity: [0, 0.5, 0],
            scale: [1, 1.5, 1] 
          }}
          transition={{
            duration: Math.random() * 4 + 4,
            repeat: Infinity,
            delay: i * 0.5
          }}
          className="absolute w-1 h-1 bg-white rounded-full blur-[1px]"
        />
      ))}
    </div>
  );
};

export default ChatbotBackground;
