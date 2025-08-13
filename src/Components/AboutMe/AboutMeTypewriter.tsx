import { useEffect, useState } from "react";
import { aboutMeBlinkyTexts } from "../../Constants/constants";

export const AboutMeTypewriter = ({ speed = 50, pause = 1500 }) => {
    const [displayText, setDisplayText] = useState("");
    const [textIndex, setTextIndex] = useState(0);
    const [charIndex, setCharIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentText = aboutMeBlinkyTexts[textIndex];

        let timer: string | number | NodeJS.Timeout | undefined;
        if (!isDeleting && charIndex <= currentText.length) {
            timer = setTimeout(() => {
                setDisplayText(currentText.substring(0, charIndex));
                setCharIndex(charIndex + 1);
            }, speed);
        } else if (isDeleting && charIndex >= 0) {
            timer = setTimeout(() => {
                setDisplayText(currentText.substring(0, charIndex));
                setCharIndex(charIndex - 1);
            }, speed / 2);
        } else if (!isDeleting && charIndex > currentText.length) {
            timer = setTimeout(() => setIsDeleting(true), pause);
        } else if (isDeleting && charIndex < 0) {
            setIsDeleting(false);
            setTextIndex((textIndex + 1) % aboutMeBlinkyTexts.length);
        }

        return () => clearTimeout(timer);
    }, [charIndex, isDeleting, textIndex, speed, pause]);

    return <h6 className="text-lg md:text-xl font-medium">{displayText}|</h6>;
};

