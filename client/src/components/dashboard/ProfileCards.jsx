import { motion } from 'framer-motion';
import { SiLeetcode, SiGithub, SiCodechef, SiGeeksforgeeks, SiHackerrank } from 'react-icons/si';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { USERNAMES } from '../../services/statsService';

const PlatformCard = ({ platform, username, data, icon: Icon, color, link, delay }) => {
    return (
        <motion.a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="group relative bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-3xl p-6 md:p-8 flex flex-col h-full overflow-hidden hover:bg-slate-800/50 hover:border-blue-500/30 transition-all duration-500 hover:-translate-y-2 shadow-lg"
        >
            {/* Soft Background Glow on Hover */}
            <div 
                className="absolute -right-12 -top-12 w-40 h-40 blur-[80px] opacity-10 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none" 
                style={{ backgroundColor: color }}
            />
            
            {/* Header Area */}
            <div className="flex items-center gap-5 mb-8 relative z-10">
                <div className="w-14 h-14 rounded-2xl flex items-center justify-center bg-slate-800 border border-slate-700 group-hover:scale-110 transition-transform duration-500 shadow-md">
                    <Icon size={28} style={{ color }} />
                </div>
                <div>
                    <h4 className="text-white font-bold text-xl group-hover:text-blue-400 transition-colors tracking-wide">
                        {platform}
                    </h4>
                    <p className="text-slate-400 text-xs font-semibold tracking-wider mt-1">
                        @{username}
                    </p>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4 relative z-10 flex-grow mb-6">
                {data.map((item, idx) => (
                    <div 
                        key={idx} 
                        className="bg-slate-800/40 border border-slate-700/50 rounded-2xl p-4 flex flex-col justify-center group-hover:border-slate-600 transition-colors"
                    >
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2">
                            {item.label}
                        </span>
                        <div className="flex items-baseline gap-1.5">
                            <span className="text-2xl font-black text-white tracking-tight">{item.value}</span>
                            {item.suffix && <span className="text-xs font-bold text-slate-500">{item.suffix}</span>}
                        </div>
                    </div>
                ))}
            </div>

            {/* LeetCode Progress Bar (Renders only for LeetCode) */}
            {platform === "LeetCode" && (
                <div className="mb-8 relative z-10">
                    <div className="flex justify-between items-center mb-2 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                        <span>Difficulty Split</span>
                        <span className="text-blue-500">{((data.find(s => s.label === "Solved")?.value / 500) * 100).toFixed(0)}% to Goal</span>
                    </div>
                    <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden flex">
                        {/* Dynamic widths based on real data if available, else standard split */}
                        <div className="h-full bg-emerald-500" style={{ width: `${(data.find(s => s.label === "Easy")?.value / data.find(s => s.label === "Solved")?.value) * 100 || 40}%` }}></div>
                        <div className="h-full bg-amber-500" style={{ width: `${(data.find(s => s.label === "Med/Hard")?.value / data.find(s => s.label === "Solved")?.value) * 100 || 60}%` }}></div>
                    </div>
                </div>
            )}
            
            {/* Visit Profile Footer */}
            <div className="mt-auto pt-6 border-t border-slate-800/80 flex items-center justify-between relative z-10">
                <span className="text-sm font-semibold text-slate-300 group-hover:text-white transition-colors">
                    Visit Profile
                </span>
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                    <FaExternalLinkAlt size={12} />
                </div>
            </div>
        </motion.a>
    );
};

const ProfileCards = ({ data }) => {
    // Fallback data structure to prevent crashes if 'data' is undefined initially
    const safeData = data || {};

    const platforms = [
        {
            platform: "GitHub",
            username: USERNAMES.github,
            icon: SiGithub,
            color: "#ffffff",
            link: `https://github.com/${USERNAMES.github}`,
            delay: 0.1,
            stats: [
                { label: "Repos", value: safeData.github?.public_repos || 22 },
                { label: "Commits", value: safeData.github?.totalContributions || 153 },
                { label: "Followers", value: safeData.github?.followers || 1 },
                { label: "Active Days", value: safeData.github?.activeDays || 36 }
            ]
        },
        {
            platform: "LeetCode",
            username: USERNAMES.leetcode,
            icon: SiLeetcode,
            color: "#ffa116",
            link: `https://leetcode.com/${USERNAMES.leetcode}/`,
            delay: 0.2,
            stats: [
                { label: "Solved", value: safeData.leetcode?.totalSolved || 104 },
                { label: "Easy", value: safeData.leetcode?.easySolved || 58 },
                { label: "Global Rank", value: safeData.leetcode?.ranking || 'N/A' },
                { label: "Med/Hard", value: (safeData.leetcode?.mediumSolved || 0) + (safeData.leetcode?.hardSolved || 0) || 46 }
            ]
        },
        {
            platform: "CodeChef",
            username: USERNAMES.codechef,
            icon: SiCodechef,
            color: "#5B4638",
            link: `https://www.codechef.com/users/${USERNAMES.codechef}`,
            delay: 0.3,
            stats: [
                { label: "Rating", value: safeData.codechef?.currentRating || 1226 },
                { label: "Stars", value: safeData.codechef?.stars || '1', suffix: "★" },
                { label: "Global", value: safeData.codechef?.globalRank || 80702 },
                { label: "Country", value: safeData.codechef?.countryRank || 76404 }
            ]
        },
        {
            platform: "GFG",
            username: USERNAMES.gfg,
            icon: SiGeeksforgeeks,
            color: "#2f8D46",
            link: `https://www.geeksforgeeks.org/user/${USERNAMES.gfg}/`,
            delay: 0.4,
            stats: [
                { label: "Score", value: safeData.gfg?.overall_coding_score || 239 },
                { label: "Solved", value: safeData.gfg?.total_problems_solved || 80 },
                { label: "Inst. Rank", value: safeData.gfg?.institute_rank || 6739 },
                { label: "Articles", value: safeData.gfg?.articles_published || 0 }
            ]
        },
        {
            platform: "HackerRank",
            username: USERNAMES.hackerrank,
            icon: SiHackerrank,
            color: "#00EA64",
            link: `https://www.hackerrank.com/${USERNAMES.hackerrank}`,
            delay: 0.5,
            stats: [
                { label: "Badges", value: safeData.hackerrank?.badges?.length || 8 },
                { label: "Certificates", value: 3 },
                { label: "Verified", value: "YES" },
                { label: "Accuracy", value: "85%" }
            ]
        }
    ];

    return (
        /* Changed xl:grid-cols-5 to xl:grid-cols-3 and added a wrapper 
           so the 5 cards wrap nicely instead of getting squished */
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
            {platforms.map((p, idx) => (
                <PlatformCard 
                    key={idx}
                    platform={p.platform}
                    username={p.username}
                    data={p.stats}
                    icon={p.icon}
                    color={p.color}
                    link={p.link}
                    delay={p.delay}
                />
            ))}
        </div>
    );
};

export default ProfileCards;