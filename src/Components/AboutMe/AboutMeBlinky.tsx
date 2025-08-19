import { useEffect, useState } from "react";
import { aboutMeBlinkyTexts } from "../../Data/constants";

export const AboutMeBlinky = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prev) => (prev + 1) % aboutMeBlinkyTexts.length);
        }, 3000); // change every 3s
        return () => clearInterval(interval);
    }, []);

    return (
        <p className="mt-2 text-lg md:text-xl font-medium">
            <span className="animate-pulse">{aboutMeBlinkyTexts[index]}</span>
        </p>
    );
}

