import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { USERNAMES } from "../../services/statsService";
import { getLeetCode, getGithub, getCodeChef, getGFG, getHackerRank, getLeetCodeContests, getLeetCodeActivity } from "../../services/codingApi";
import { SiGithub, SiLeetcode } from 'react-icons/si';

import ProfileCards from "./ProfileCards";
import ActivityHeatmap from "./ActivityHeatmap";
import ContestGraph from "./ContestGraph";

/* ─────────────────────────────────────────────────────────
   THE CHAKRA WATERMARK
   Krishna's Sudarshana Chakra — Infinite Logic & Flawless Loops
───────────────────────────────────────────────────────── */
const CyberChakraWatermark = () => (
  <svg className="absolute left-[50%] top-[30%] -translate-x-1/2 -translate-y-1/2 pointer-events-none w-[1200px] opacity-[0.25] mix-blend-screen animate-spin-slow" viewBox="0 0 800 800" fill="none" aria-hidden="true">
    <circle cx="400" cy="400" r="390" stroke="#E6A700" strokeWidth="1" strokeDasharray="4 12" />
    <circle cx="400" cy="400" r="300" stroke="#E6A700" strokeWidth="2" strokeDasharray="20 40" className="animate-spin-reverse" style={{ transformOrigin: 'center' }} />
    <circle cx="400" cy="400" r="200" stroke="#E6A700" strokeWidth="0.5" />
    {Array.from({ length: 36 }).map((_, i) => {
      const angle = (i * 10 * Math.PI) / 180;
      return <line key={i} x1={400 + 40 * Math.cos(angle)} y1={400 + 40 * Math.sin(angle)} x2={400 + 390 * Math.cos(angle)} y2={400 + 390 * Math.sin(angle)} stroke="#E6A700" strokeWidth="0.5" opacity="0.3" />;
    })}
    <circle cx="400" cy="400" r="10" fill="#E6A700" />
  </svg>
);

const StatCard = ({ children, className = "", title, icon }) => (
  <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
    className={`cyber-panel p-6 md:p-8 flex flex-col h-full hover:border-[#E6A700]/40 transition-all duration-500 group relative overflow-hidden rounded-sm ${className}`}>
    <div className="absolute top-0 right-0 w-32 h-32 bg-[rgba(230,167,0,0.1)] blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

    {(title || icon) && (
      <div className="flex items-center gap-3 mb-8 border-b border-white/5 pb-4">
        {icon && <div className="text-[#E6A700]">{icon}</div>}
        {title && <h3 className="text-[10px] font-mono font-bold uppercase tracking-widest text-[#E6A700]">{title}</h3>}
      </div>
    )}
    <div className="flex-1 w-full relative z-10">
      {children}
    </div>
  </motion.div>
);

const CodingDashboard = () => {
  const [data, setData] = useState({ leetcode: null, github: null, codechef: null, gfg: null, hackerrank: null, contests: null, leetcodeActivity: null });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const [lc, gh, cc, gfg, hr, contests, lcActivity] = await Promise.allSettled([
          getLeetCode(USERNAMES.leetcode), getGithub(USERNAMES.github), getCodeChef(USERNAMES.codechef), getGFG(USERNAMES.gfg), getHackerRank(USERNAMES.hackerrank), getLeetCodeContests(USERNAMES.leetcode), getLeetCodeActivity(USERNAMES.leetcode)
        ]);
        setData({
          leetcode: lc.status === 'fulfilled' ? lc.value.data : null, github: gh.status === 'fulfilled' ? gh.value.data : null,
          codechef: cc.status === 'fulfilled' ? cc.value.data : null, gfg: gfg.status === 'fulfilled' ? gfg.value.data : null,
          hackerrank: hr.status === 'fulfilled' ? hr.value.data : null, contests: contests.status === 'fulfilled' ? contests.value.data : null,
          leetcodeActivity: lcActivity.status === 'fulfilled' ? lcActivity.value.data : null
        });
      } catch (err) { console.error("Dashboard error:", err); }
    };
    fetchStats();
  }, []);


  return (
    <section id="stats" className="py-12 md:py-16 bg-[var(--bg-cosmic)] relative overflow-hidden border-t border-white/5">

      {/* Structural matrix background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]"
        style={{ backgroundImage: 'linear-gradient(rgba(230,167,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(230,167,0,0.5) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <CyberChakraWatermark />
      <div className="absolute top-[20%] right-[-10%] w-[500px] h-[500px] bg-[rgba(230,167,0,0.03)] rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">

        {/* Header Section */}
        <div className="mb-12">
          <div className="inline-flex items-center gap-3 px-4 py-2 border border-white/10 rounded-full bg-white/[0.01] backdrop-blur-md mb-8 hover:border-[#E6A700]/30 transition-colors cursor-default">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#E6A700] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#E6A700]"></span>
            </span>
            <span className="text-[10px] font-mono text-slate-300 tracking-[0.2em] uppercase">Coding Stats</span>
          </div>

          <h2 className="text-5xl md:text-7xl font-black text-white mb-6 uppercase tracking-tighter leading-[0.95]">
            Data & <br />
            <span className="text-gold-gradient">Algorithms.</span>
          </h2>

          <p className="text-base font-medium text-slate-400 max-w-xl leading-relaxed border-l border-white/10 pl-5">
            Programming is an infinite cycle of logic — much like the Sudarshana Chakra rotating flawlessly.
            These statistics are pulled in real-time, verifying my algorithmic consistency.
          </p>
        </div>

        {/* Profile Grid */}
        <div className="mb-10">
          <ProfileCards data={data} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">

          {/* Activity Heatmap */}
          <StatCard title="LeetCode Activity" icon={<SiLeetcode />}>
            <div className="p-4 md:p-8 border border-white/5 rounded-sm bg-white/[0.01] mb-8 overflow-hidden relative">
              <ActivityHeatmap data={data.leetcodeActivity?.heatmapData} />
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { label: "Streak", val: `${data.leetcodeActivity?.streak || 0}d` },
                { label: "Active Days", val: data.leetcodeActivity?.activeDays || 0 },
                { label: "Solved", val: data.leetcode?.totalSolved || 0 },
                { label: "Submissions", val: data.leetcode?.totalSubmissions || 0 }
              ].map((stat, i) => (
                <div key={i} className="flex flex-col p-4 bg-white/[0.02] border border-white/5 rounded-sm relative overflow-hidden group hover:border-[#E6A700]/30 transition-colors hover:-translate-y-1">
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-white/10 group-hover:bg-[#E6A700] transition-colors" />
                  <span className="text-slate-500 text-[9px] font-mono uppercase tracking-[0.2em] mb-1 group-hover:text-[#E6A700] transition-colors">{stat.label}</span>
                  <span className="text-xl font-bold font-mono text-slate-200 tracking-tight transition-colors">{stat.val}</span>
                </div>
              ))}
            </div>
          </StatCard>

          {/* Contest History */}
          <StatCard title="Competitive History">
            <div className="w-full mb-8 p-4 border border-white/5 rounded-sm bg-white/[0.01]">
              <ContestGraph contestData={data.contests} />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/[0.02] border border-white/5 hover:border-[#E6A700]/30 transition-colors rounded-sm p-5 relative overflow-hidden group hover:-translate-y-1">
                <span className="text-slate-500 font-mono text-[9px] uppercase tracking-widest mb-2 block group-hover:text-[#E6A700]">Peak Rating</span>
                <div className="text-3xl font-mono font-black text-white group-hover:text-[#E6A700] transition-colors">
                  {data.contests?.peakRating || '1547'}
                </div>
              </div>
              <div className="bg-white/[0.02] border border-white/5 hover:border-[#E6A700]/30 transition-colors rounded-sm p-5 group hover:-translate-y-1">
                <span className="text-slate-500 font-mono text-[9px] uppercase tracking-widest mb-2 block group-hover:text-[#E6A700]">Global Rank</span>
                <div className="text-3xl font-mono font-black text-white tracking-tighter group-hover:text-[#E6A700] transition-colors">
                  {data.contests?.globalRanking || 'N/A'}
                </div>
              </div>
            </div>
          </StatCard>
        </div>
      </div>
    </section>
  );
};

export default CodingDashboard;