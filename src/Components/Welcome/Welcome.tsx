import React from "react";
import { welcome, welcomeHeadline } from "../../Data/constants";
import ProfilePic from "../../Data/ProfilePic.jpg"
import { AboutMe } from "../AboutMe/AboutMe";

type props = {};

export const Welcome: React.FC<props> = () => {
  const getRandomGreeting = (): string => {
    const greetings = Object.values(welcomeHeadline);
    const randomIndex = Math.floor(Math.random() * greetings.length);
    return greetings[randomIndex];
  };

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
          <h1 className="text-4xl md:text-5xl font-bold">{getRandomGreeting()}</h1>
          <p className="text-base md:text-lg mt-4 text-muted-foreground">{welcome.tagline}</p>
          <br />
          <AboutMe />
        </div>
      </div>
    </div>
  );
}
