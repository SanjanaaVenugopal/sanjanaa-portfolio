import React from "react";

interface SocialIconProps {
    href: string;
    Icon: React.ComponentType<{ size?: number; className?: string }>;
    size?: number;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, Icon, size = 28 }) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-80 transition"
        >
            <Icon size={size} className="text-purple-950 dark:text-white/80" />
        </a>
    );
};

export default SocialIcon;
