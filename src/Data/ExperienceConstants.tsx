import MS from "./Logos/MS.png"
import IITM from "./Logos/IITM.png"
import Infosys from "./Logos/Infosys.png"
import Siemens from "./Logos/Siemens.png"
import RNSIT from "./Logos/RNSIT.png"
import baby from "./Logos/baby.png"
import { FaFigma, FaReact } from "react-icons/fa"
import { SiJavascript, SiPython, SiRedux, SiTypescript } from "react-icons/si"
import Playwright from "./Icons/Playwright.png";
import cosmos from "./Icons/cosmos.png";
import Csharp from "./Icons/Csharp.png";
import FluentUI from "./Icons/FluentUI.svg";
import Kusto from "./Icons/Kusto.svg";
import { IconType } from "react-icons/lib"

export type Skill = {
  name: string,
  icon: IconType
}

export type Domain = {
  domainName: string,
  domainDescription: string,
  domainSkills: Skill[],
  highlights: string[]
}

export type Experience = {
  company: string,
  role: string,
  logo: any,
  period: string,
  description: string,
  domains: Domain[]

}

export const experiences: Experience[] = [
  {
    company: "Microsoft",
    role: "Full-stack Developer / Software Engineer",
    logo: MS,
    period: "2023 - Present",
    description:
      "Building performant, scalable, and privacy-compliant systems end-to-end — across frontend, backend, automation, and AI innovation.",
    domains: [
      {
        domainName: "Frontend",
        domainDescription:
          "Delivered modern, high-performance UI experiences with reusable components and design consistency across products.",
        domainSkills: [
          { name: "ReactJS", icon: FaReact },
          { name: "Redux", icon: SiRedux },
          { name: "TypeScript", icon: SiTypescript },
          // { name: "JavaScript", icon: SiJavascript },
          // { name: "Figma", icon: FaFigma }
        ],
        highlights: [
          "Improved UI performance by 95% and raised automated test coverage to 80%.",
          "Built reusable component library adopted across multiple teams.",
          "Led UX redesign using Figma to improve engagement and accessibility.",
          "Implemented secure, privacy-compliant frontend workflows for licensing and feedback."
        ]
      },
      {
        domainName: "Backend & System Design",
        domainDescription:
          "Architected reliable, low-latency systems and integrated scalable data APIs for distributed environments.",
        domainSkills: [
          { name: "TypeScript", icon: SiTypescript },
          // { name: "C#", icon: SiCsharp },
          // { name: "Azure Functions", icon: SiAzurefunctions },
          // { name: "Cosmos DB", icon: cosmos },
          // { name: "Kusto", icon: Kusto }
        ],
        highlights: [
          "Implemented secure, event-driven micro-features across multiple services by exploring multiple use cases of cosmos, kusto and redux db",
        ]
      },
      {
        domainName: "Testing, Automation & CI/CD",
        domainDescription:
          "Developed robust test automation and continuous integration systems to ensure release reliability.",
        domainSkills: [
          // { name: "Playwright", icon: Playwright },
          { name: "NYC", icon: SiJavascript },
          { name: "Istanbul", icon: SiJavascript },
          // { name: "Azure DevOps", icon: SiAzuredevops }
        ],
        highlights: [
          "Built E2E automation frameworks achieving 80% coverage.",
          "Integrated test reporting and bug logging into CI/CD pipelines.",
          "Enabled faster, high-quality releases across multiple teams."
        ]
      },
      {
        domainName: "Data Engineering & Visualization",
        domainDescription:
          "Engineered scalable data pipelines and dashboards to drive insights and operational efficiency.",
        domainSkills: [
          // { name: "Power BI", icon: SiPowerbi },
          // { name: "SCOPE", icon: SiAzurefunctions },
          // { name: "CosmosVC", icon: cosmos },
          // { name: "Kusto", icon: Kusto }
        ],
        highlights: [
          "Developed privacy-compliant pipelines and dashboards for engagement analytics.",
          "Automated alerting and reporting mechanisms reducing incident volume.",
          "Built reusable data models for product performance tracking."
        ]
      },
      {
        domainName: "AI & Innovation",
        domainDescription:
          "Explored intelligent automation and chat-based integrations using cutting-edge AI frameworks.",
        domainSkills: [
          { name: "LangChain", icon: SiPython },
          // { name: "Azure OpenAI", icon: SiAzurefunctions },
          { name: "Streamlit", icon: SiPython }
        ],
        highlights: [
          "Developed an AI-powered chat agent integrating 47+ tools with LangChain & Azure OpenAI.",
          "Led hackathon projects recognized for innovation and cross-team impact.",
          "Delivered production-ready backend and UI for intelligent query orchestration."
        ]
      }
    ]
  },
  {
    company: "IIT Madras",
    role: "Postgraduate - CS",
    logo: IITM,
    period: "2021 - 2023",
    description:
      "Masters in Computer Science with a focus on ML.",
    domains: [{
      domainName: "Machine Learning",
      domainDescription: "IndicRASA",
      domainSkills: [

      ],
      highlights: []
    },
    ]
  },
  {
    company: "Siemens",
    role: "Software Engineer Intern",
    logo: Siemens,
    period: "May 2022 - Aug 2022",
    description: "",
    domains: [{
      domainName: "",
      domainDescription: "",
      domainSkills: [],
      highlights: []
    }]
  },
  {
    company: "Infosys",
    role: "System Engineer",
    logo: Infosys,
    period: "2019 - 2021",
    description: "",
    domains: [{
      domainName: "Lighthouse",
      domainDescription: "1 liner about lighthouse",
      domainSkills: [
        { name: "ReactJS", icon: FaReact },
        { name: "Redux", icon: SiRedux },
        { name: "Figma", icon: FaFigma }
      ],
      highlights: []
    }]
  },
  {
    company: "RNS Institute of Technology",
    role: "Undergraduate - ECE",
    logo: RNSIT,
    period: "2015 - 2019",
    description: "",
    domains: [{
      domainName: "Lighthouse",
      domainDescription: "1 liner about lighthouse",
      domainSkills: [
        { name: "ReactJS", icon: FaReact },
        { name: "Redux", icon: SiRedux },
        { name: "Figma", icon: FaFigma }
      ],
      highlights: []
    }]
  },
  {
    company: "Baby",
    role: "Being a baby",
    logo: baby,
    period: "1997-2015",
    description: "What more do you want to know?",
    domains: []
  },
];
