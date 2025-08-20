import React from "react";

type ImageIconProps = {
    src: string;   // path to your PNG/SVG
    alt?: string;  // optional alt text
    size?: number; // default size
}

export const ImageIcon: React.FC<ImageIconProps> = ({ src, alt = "", size = 24 }) => (
    <img
        src={src}
        alt={alt}
        style={{
            width: size,
            height: size,
            objectFit: "contain",
            display: "inline-block",
        }}
    />
);

