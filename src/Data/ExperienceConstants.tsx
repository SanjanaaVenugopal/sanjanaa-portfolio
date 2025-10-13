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
        role: "Full-stack Developer / Software Engineer",
        logo: MS,
        period: "2023 - Present",
        description:
            "Working on end-to-end features across data pipelines, frontend, and backend.",
        projects: [{
            projectName: "Lighthouse",
            projectDetails: "1 liner about lighthouse",
            domain: "Frontend, Data Engineering, System designing, Testing & Automation",
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
        period: "2021 - 2023",
        description:
            "Master's in Computer Science with a focus on distributed systems and ML.",
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
        },
        ]
    },
    {
        company: "Siemens",
        role: "Software Engineer Intern",
        logo: Siemens,
        period: "May 2022 - Aug 2022",
        description: "",
        projects: [{
            projectName: "",
            projectDetails: "",
            domain: "",
            domainSkills: [],
            contribution: ""
        }]
    },
    {
        company: "Infosys",
        role: "System Engineer",
        logo: Infosys,
        period: "2019 - 2021",
        description: "",
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
        company: "RNS Institute of Technology",
        role: "Undergraduate - ECE",
        logo: RNSIT,
        period: "2015 - 2019",
        description: "",
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
        company: "Baby",
        role: "Being a baby",
        logo: RNSIT,
        period: "1997-2015",
        description: "",
        projects: []
    },
];
