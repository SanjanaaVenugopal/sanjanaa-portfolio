import React from "react";
import { welcome } from "../../Constants/constants";

type props = {};

export const Welcome: React.FC<props> = () => {
  return (
      <div className="p-10 text-center">
        <h1 className="text-5xl font-bold">{welcome.headline}</h1>
        <p className="text-lg mt-2 text-muted-foreground">{welcome.tagline}</p>
      </div>
  );
}
