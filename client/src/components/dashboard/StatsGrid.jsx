import React from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { SiLeetcode, SiGithub, SiCodechef, SiGeeksforgeeks } from 'react-icons/si';

const StatBox = ({ title, value, icon: Icon, color, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay }}
        className="bg-[#0a0a0c] p-5 rounded-xl border border-white/10 relative overflow-hidden group hover:border-white/30 transition-colors"
    >
        <div className="absolute -right-4 -top-4 w-16 h-16 rounded-full blur-2xl opacity-20 group-hover:opacity-40 transition-opacity" style={{ backgroundColor: color }}></div>
        <div className="flex justify-between items-start mb-2 relative z-10">
            <div className="text-gray-500 text-[10px] uppercase tracking-widest">{title}</div>
            <Icon className="text-xl" style={{ color }} />
        </div>
        <div className="text-3xl font-black text-white relative z-10">
            <CountUp end={value} duration={2.5} separator="," />
        </div>
    </motion.div>
);

const StatsGrid = ({ lcData, ghData, ccData, gfgData }) => {
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <StatBox title="LeetCode Solved" value={lcData?.totalSolved || 0} icon={SiLeetcode} color="#ffa116" delay={0.1} />
            <StatBox title="LC Global Rank" value={lcData?.ranking || 0} icon={SiLeetcode} color="#00b8a3" delay={0.2} />
            <StatBox title="GitHub Repos" value={ghData?.public_repos || 0} icon={SiGithub} color="#ffffff" delay={0.3} />
            <StatBox title="GitHub Contributions" value={ghData?.totalContributions || 0} icon={SiGithub} color="#238636" delay={0.4} />
            <StatBox title="CodeChef Rating" value={ccData?.currentRating || 0} icon={SiCodechef} color="#5B4638" delay={0.5} />
            <StatBox title="GFG Score" value={gfgData?.overall_coding_score || 0} icon={SiGeeksforgeeks} color="#2f8D46" delay={0.6} />
            <StatBox title="LC Easy" value={lcData?.easySolved || 0} icon={SiLeetcode} color="#00b8a3" delay={0.7} />
            <StatBox title="LC Medium" value={lcData?.mediumSolved || 0} icon={SiLeetcode} color="#ffc01e" delay={0.8} />
            <StatBox title="LC Hard" value={lcData?.hardSolved || 0} icon={SiLeetcode} color="#ff375f" delay={0.9} />
        </div>
    );
};

export default StatsGrid;
