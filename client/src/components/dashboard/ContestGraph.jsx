import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const ContestGraph = ({ contestData }) => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    // Use real contest data if available, otherwise fallback to sample data
    const data = contestData?.contestHistory || [
        { date: 'Jan 2023', rating: 1200 },
        { date: 'Feb 2023', rating: 1350 },
        { date: 'Mar 2023', rating: 1400 },
        { date: 'Apr 2023', rating: 1550 },
        { date: 'May 2023', rating: 1520 },
        { date: 'Jun 2023', rating: 1680 },
    ];

    // Compute Y-axis ticks to start at 1400 and increment by 20
    const maxRating = Math.max(...data.map(d => d.rating), 1400);
    const maxTick = Math.ceil(maxRating / 20) * 20;
    const yTicks = [];
    for (let i = 1400; i <= maxTick; i += 20) {
        yTicks.push(i);
    }

    if (!isMounted) {
        return (
            <div className="bg-[#0a0a0c] p-6 rounded-xl border border-white/10 flex items-center justify-center" style={{ height: '300px' }}>
                <div className="flex flex-col items-center gap-4">
                    <div className="w-8 h-8 border-2 border-[#E6A700]/30 border-t-[#E6A700] animate-spin rounded-full" />
                    <p className="text-[10px] font-mono tracking-widest text-[#E6A700]/60 uppercase">Calibrating Chart Vector...</p>
                </div>
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-[#0a0a0c] p-6 rounded-xl border border-white/10 group hover:border-white/20 transition-colors relative overflow-hidden"
        >
            <div className="flex justify-between items-center mb-6 border-b border-white/5 pb-4">
                <h4 className="text-sm font-bold text-gray-400 uppercase tracking-widest">Contest Performance</h4>
                {contestData?.currentRating && (
                    <div className="text-right">
                        <div className="text-xs text-gray-500">Current Rating</div>
                        <div className="text-lg font-bold text-[#E6A700]">{contestData.currentRating}</div>
                    </div>
                )}
            </div>
            <div className="w-full" style={{ height: '192px', minHeight: '192px' }}>
                {isMounted && data && data.length > 0 ? (
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data} margin={{ top: 5, right: 20, bottom: 5, left: 0 }}>
                            <XAxis dataKey="date" stroke="#666" fontSize={10} tickLine={false} axisLine={false} />
                            <YAxis 
                                stroke="#666" 
                                fontSize={10} 
                                tickLine={false} 
                                axisLine={false} 
                                width={40} 
                                domain={[1400, maxTick]} 
                                ticks={yTicks}
                            />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#111', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '8px' }}
                                itemStyle={{ color: '#E6A700', fontWeight: 'bold' }}
                            />
                            <Line type="monotone" dataKey="rating" stroke="#E6A700" strokeWidth={3} dot={{ r: 4, fill: '#E6A700' }} activeDot={{ r: 6 }} />
                        </LineChart>
                    </ResponsiveContainer>
                ) : (
                    <div className="flex items-center justify-center h-full text-gray-500">
                        Initializing graph engine...
                    </div>
                )}
            </div>

            {/* Decorative Glare */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E6A700]/10 blur-3xl pointer-events-none"></div>
        </motion.div>
    );
};

export default ContestGraph;
