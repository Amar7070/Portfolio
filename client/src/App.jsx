import { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

import { lazy, Suspense } from 'react';

// Main Sections
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CodingDashboard from './components/dashboard/CodingDashboard';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Services from './components/Services';
import Contact from './components/Contact';
import CommandPalette from './components/CommandPalette';
import ChatBot from './components/ChatBot';
import Preloader from './components/Preloader';

// Lazy Loaded Secondary Pages for Performance
const AllProjects = lazy(() => import('./pages/AllProjects'));
const Now = lazy(() => import('./pages/Now'));
const Lab = lazy(() => import('./pages/Lab'));
const Resume = lazy(() => import('./pages/Resume'));

// Sequential Reveal Wrapper
const SectionReveal = ({ children, delay = 0 }) => (
  <motion.section
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay, ease: [0.16, 1, 0.3, 1] }}
  >
    {children}
  </motion.section>
);

function App() {
  const [isCmdOpen, setIsCmdOpen] = useState(false);
  const location = useLocation();

  // Handle scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  // Command Palette Handlers
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsCmdOpen(prev => !prev);
      }
    };

    const handleCustomToggle = () => setIsCmdOpen(prev => !prev);

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('toggleCmdPalette', handleCustomToggle);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('toggleCmdPalette', handleCustomToggle);
    };
  }, []);

  return (
    <div className="bg-[#050608] min-h-screen text-gray-300 font-sans selection:bg-[#E6A700] selection:text-black relative overflow-x-hidden">

      <Preloader />

      {/* Cursor removed for performance */}

      {location.pathname !== '/resume' && <Navbar />}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <main className="relative flex-grow">
                <SectionReveal><Hero /></SectionReveal>
                
                <SectionReveal delay={0.1}>
                    <div id="problem-solving">
                      <CodingDashboard />
                    </div>
                </SectionReveal>

                <SectionReveal delay={0.2}><Skills /></SectionReveal>
                <SectionReveal delay={0.2}><Services /></SectionReveal>
                <SectionReveal delay={0.2}><Projects /></SectionReveal>
                <SectionReveal delay={0.2}><Education /></SectionReveal>
                <SectionReveal delay={0.2}><Contact /></SectionReveal>
              </main>
            </motion.div>
          } />

          <Route path="/projects" element={<Suspense fallback={<Preloader />}><AllProjects /></Suspense>} />
          <Route path="/now" element={<Suspense fallback={<Preloader />}><Now /></Suspense>} />
          <Route path="/lab" element={<Suspense fallback={<Preloader />}><Lab /></Suspense>} />
          <Route path="/resume" element={<Suspense fallback={<Preloader />}><Resume /></Suspense>} />
        </Routes>
      </AnimatePresence>

      <CommandPalette isOpen={isCmdOpen} onClose={() => setIsCmdOpen(false)} />
      {location.pathname !== '/resume' && <ChatBot />}

      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[9999] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
    </div>
  );
}

export default App;