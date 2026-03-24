import React, { useRef, useEffect } from 'react';
import { ActivityCalendar } from 'react-activity-calendar';
import { Tooltip as ReactTooltip } from 'react-tooltip';
import { motion } from 'framer-motion';

import 'react-tooltip/dist/react-tooltip.css';

const ActivityHeatmap = ({ data }) => {
    const scrollRef = useRef(null);

    const explicitTheme = {
        light: ['#1c1c1e', '#7a6015', '#a37c15', '#cca315', '#f5c615'],
        dark: ['#1c1c1e', '#4d3a08', '#80610d', '#b38812', '#e6a700'], // LeetCode gold theme matching target graph background
    };

    // Auto-scroll to the right to show recent contributions
    useEffect(() => {
        const timer = setTimeout(() => {
            if (scrollRef.current) {
                scrollRef.current.scrollLeft = scrollRef.current.scrollWidth;
            }
        }, 500);
        return () => clearTimeout(timer);
    }, [data]);

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full relative"
        >
            <div ref={scrollRef} className="overflow-x-auto" style={{ scrollBehavior: 'smooth' }}>
                <div className="flex justify-center md:block min-w-fit pt-2">
                    {data && data.length > 0 ? (
                        <>
                            <ActivityCalendar
                                data={data}
                                colorScheme="dark"
                                theme={explicitTheme}
                                blockSize={14}
                                blockRadius={3}
                                blockMargin={5}
                                fontSize={10}
                                hideMonthLabels={false}
                                renderBlock={(block, activity) => React.cloneElement(block, {
                                    'data-tooltip-id': 'react-tooltip',
                                    'data-tooltip-html': `${activity.count} submissions on ${activity.date}`,
                                })}
                            />
                            <ReactTooltip id="react-tooltip" style={{ backgroundColor: '#222', color: '#fff', borderRadius: '4px', fontSize: '12px' }} />
                        </>
                    ) : (
                         <div className="h-[140px] flex items-center justify-center text-gray-500 font-mono text-sm leading-relaxed text-center">
                             Loading activity...
                         </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
};

export default ActivityHeatmap;
