import MS from "./Logos/MS.png"
import IITM from "./Logos/IITM.png"
import Infosys from "./Logos/Infosys.jpeg"
import Siemens from "./Logos/Siemens.jpeg"
import RNSIT from "./Logos/RNSIT.png"
import { FaFigma, FaReact } from "react-icons/fa"
import { SiRedux } from "react-icons/si"

export const experiences = [
    {
        company: "Microsoft",
        role: "Full-stack Developer",
        logo: MS,
        period: "2022 – Present",
        description:
            "Working on end-to-end features across data pipelines, frontend, and backend.",
        projects: [{
            projectName: "Lighthouse",
            projectDetails: "1 liner about lighthouse",
            domain: "Frontend",
            domainSkills: [
                { name: "ReactJS", icon: FaReact },
                { name: "Redux", icon: SiRedux },
                { name: "Figma", icon: FaFigma }
            ],
            contribution: "Performance"
        }]
    },
    {
        company: "IIT Madras",
        role: "Postgraduate - CS",
        logo: IITM,
        period: "2020 - 2022",
        description:
            "Master’s in Computer Science with a focus on distributed systems and ML.",
        projects: [{
            projectName: "Lighthouse",
            projectDetails: "1 liner about lighthouse",
            domain: "Frontend",
            domainSkills: [
                { name: "ReactJS", icon: FaReact },
                { name: "Redux", icon: SiRedux },
                { name: "Figma", icon: FaFigma }
            ],
            contribution: "Performance"
        }]
    },
];
