import React from "react";
import { welcome } from "../../constants/constants";
import ProfilePic from "../../constants/ProfilePic.jpg"

type props = {};

export const Welcome: React.FC<props> = () => {
  return (
    <div className="p-10 flex items-center gap-4 align-center">
        <img
            src={ProfilePic}
            alt={welcome.dpAltText}
            className="w-64 h-64 rounded-full object-cover border-2 border-white shadow-md"
        />
        <div>
            <h1 className="text-5xl font-bold">{welcome.headline}</h1>
            <p className="text-lg mt-2 text-muted-foreground">{welcome.tagline}</p>
        </div>
    </div>
  );
}
