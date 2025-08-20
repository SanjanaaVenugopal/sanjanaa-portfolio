import React from "react";

type IconProps = {
    src: string;   // path to your PNG/SVG
    alt?: string;  // optional alt text
    size?: number; // default size
}


export const Icon: React.FC<IconProps> = ({ src, alt = "", size = 24 }) => (
    <img
        src={src}
        alt={alt}
        style={{
            width: size,
            height: size,
            objectFit: "contain",
            display: "inline-block",
        }}
        className="invert dark:invert-0"
    />
);

