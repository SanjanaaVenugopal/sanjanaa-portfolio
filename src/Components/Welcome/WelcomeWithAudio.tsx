import React from "react";
import { welcome, welcomeHeadlineWithAudioSupport } from "../../Data/constants";
import ProfilePic from "../../Constants/ProfilePic.jpg"
import { AboutMe } from "../AboutMe/AboutMe";

type props = {};

export const WelcomeWithAudio: React.FC<props> = () => {
    const greetings = Object.values(welcomeHeadlineWithAudioSupport);
    const randomIndex = Math.floor(Math.random() * greetings.length);
    const [greeting, setGreeting] = React.useState(greetings[randomIndex]);

    const speakText = (text: string, lang: string) => {
        const synth = window.speechSynthesis;
        const utterance = new SpeechSynthesisUtterance(text);

        // pick female voice if available
        const voices = synth.getVoices();
        const voice =
            voices.find(
                (v) =>
                    v.lang.toLowerCase().startsWith(lang.toLowerCase()) &&
                    v.name.toLowerCase().includes("female")
            ) || voices.find((v) => v.lang.toLowerCase().startsWith(lang.toLowerCase()));

        utterance.voice = voice || null;
        utterance.lang = lang;
        utterance.pitch = 1;
        utterance.rate = 1;

        synth.speak(utterance);
    };

    React.useEffect(() => {
        setGreeting(greetings[randomIndex]);
        // ensure voices are loaded
        window.speechSynthesis.onvoiceschanged = () => {
            speakText(greeting.text, greeting.lang);
        };
    }, []);

    // const speakText = (text: string) => {
    //   const synth = window.speechSynthesis;
    //   const utterance = new SpeechSynthesisUtterance(text);
    //   utterance.lang = "en-US";
    //   utterance.pitch = 1;
    //   utterance.rate = 1;
    //   // utterance.voice = 
    //   synth.speak(utterance);
    // };

    // const getRandomGreeting = (): string => {
    //   const greetings = Object.values(welcomeHeadline);
    //   const randomIndex = Math.floor(Math.random() * greetings.length);
    //   speakText(greetings[randomIndex]);
    //   return greetings[randomIndex];
    // };

    return (
        <div className="w-full flex justify-center px-4">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-10 max-w-5xl w-full py-10">
                <img
                    src={ProfilePic}
                    alt={welcome.dpAltText}
                    className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover border-2 border-purple-950 shadow-md dark:border-white border-opacity-100 border-style"
                    style={{ borderStyle: "solid" }}
                />
                <div className="text-center">
                    <h1 className="text-4xl md:text-5xl font-bold">{greeting.text}</h1>
                    <p className="text-base md:text-lg mt-4 text-muted-foreground">{welcome.tagline}</p>
                    <br />
                    <AboutMe />
                </div>
            </div>
        </div>
    );
}
