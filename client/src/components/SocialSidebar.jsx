import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const SocialSidebar = () => {
    const socialLinks = [
        { Icon: FaGithub, url: "https://github.com/Amar7070", label: "GitHub" },
        { Icon: FaLinkedin, url: "https://www.linkedin.com/in/amar-sahani07", label: "LinkedIn" },
        { Icon: FaTwitter, url: "#", label: "Twitter" },
        { Icon: FaEnvelope, url: "mailto:amarsahani0777@gmail.com", label: "Email" },
    ];

    return (
        <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="fixed left-6 bottom-0 z-[90] hidden md:flex flex-col items-center gap-6"
        >
            <div className="flex flex-col gap-4">
                {socialLinks.map(({ Icon, url, label }, i) => (
                    <motion.a
                        key={i}
                        href={url}
                        target={url.startsWith('mailto') ? '_self' : '_blank'}
                        rel="noopener noreferrer"
                        whileHover={{ y: -4 }}
                        className="text-wash hover:text-ink transition-colors relative group p-2"
                        title={label}
                    >
                        <Icon size={20} className="relative z-10" />
                        <div className="absolute left-[120%] top-1/2 -translate-y-1/2 px-3 py-1 bg-surface border border-border text-xs font-medium text-ink opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none rounded-md shadow-sm">
                            {label}
                        </div>
                    </motion.a>
                ))}
            </div>
            
            {/* Minimalist Line Connector */}
            <div className="w-px h-24 bg-border mt-2" />
        </motion.div>
    );
};

export default SocialSidebar;
