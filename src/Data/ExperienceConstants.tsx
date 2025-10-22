import MS from "./Logos/MS.png"
import IITM from "./Logos/IITM.png"
import Infosys from "./Logos/Infosys.jpeg"
import Siemens from "./Logos/Siemens.jpeg"
import RNSIT from "./Logos/RNSIT.png"
import { FaFigma, FaReact } from "react-icons/fa"
import { SiJavascript, SiPython, SiRedux, SiTypescript } from "react-icons/si"
import Playwright from "./Icons/Playwright.png";
import cosmos from "./Icons/cosmos.png";
import Csharp from "./Icons/Csharp.png";
import FluentUI from "./Icons/FluentUI.svg";
import Kusto from "./Icons/Kusto.svg";


export const experiences = [
  {
    company: "Microsoft",
    role: "Full-stack Developer / Software Engineer",
    logo: MS,
    period: "2023 - Present",
    description:
      "Working on end-to-end features across data pipelines, frontend, and backend — with a strong focus on performance, automation, and scalable design.",
    projects: [
      {
        projectName: "Lighthouse",
        projectDetails: "Delivered scalable frontend features and automated testing frameworks to improve performance and reliability.",
        domain: "Frontend, Data Engineering, System Design, Testing & Automation",
        domainSkills: [
          { name: "ReactJS", icon: FaReact },
          { name: "Redux", icon: SiRedux },
          { name: "Figma", icon: FaFigma },
          { name: "Playwright", icon: Playwright },
          // { name: "Power BI", icon: SiPowerbi },
          { name: "CosmosVC", icon: cosmos },
          // { name: "Kusto", icon: SiAzuredataexplorer }
        ],
        contribution: "Improved UI performance by 50%, increased test coverage to 80%, and built reusable components adopted across multiple teams. Led automation efforts and contributed to scalable data pipelines powering dashboards and alerts."
      },
      {
        projectName: "Sales Advisor",
        projectDetails: "Built high-impact features to enhance user experience and drive engagement through data-driven insights.",
        domain: "Frontend, Backend, UX Engineering, Privacy & Security",
        domainSkills: [
          { name: "JavaScript", icon: SiJavascript },
          { name: "TypeScript", icon: SiTypescript },
          { name: "C#", icon: Csharp },
          { name: "CosmosDB", icon: cosmos },
          { name: "Kusto", icon: Kusto }
        ],
        contribution: "Designed and implemented secure, privacy-compliant features including feedback flows and license management. Reduced latency by 95% and improved user engagement through performance optimization and UX redesign."
      },
      {
        projectName: "Automation & CI/CD",
        projectDetails: "Developed robust automation frameworks and pipelines to ensure high-quality releases and faster development cycles.",
        domain: "Testing & Automation, CI/CD, Quality Engineering",
        domainSkills: [
          { name: "Playwright", icon: Playwright },
          { name: "NYC", icon: SiJavascript },
          { name: "Istanbul", icon: SiJavascript },
          // { name: "Azure DevOps", icon: SiAzuredevops }
        ],
        contribution: "Built end-to-end test automation with 80% coverage, integrated bug logging into CI/CD pipelines, and enabled real-time reporting via Power BI. Supported multiple teams in adopting automation best practices."
      },
      {
        projectName: "Data Engineering & Dashboards",
        projectDetails: "Engineered data pipelines and dashboards to enable actionable insights and improve operational efficiency.",
        domain: "Data Engineering, Visualization, Privacy Compliance",
        domainSkills: [
          // { name: "Power BI", icon: SiPowerbi },
          // { name: "SCOPE", icon: SiAzurefunctions },
          { name: "CosmosVC", icon: cosmos },
          { name: "Kusto", icon: Kusto }
        ],
        contribution: "Built scalable data pipelines and dashboards for tracking user engagement and product performance. Ensured privacy-compliant data handling and reduced incident volume through smarter alerting mechanisms."
      },
      {
        projectName: "AI & Innovation",
        projectDetails: "Built an AI-powered chat agent and contributed to hackathon projects recognized for innovation and impact.",
        domain: "AI Integration, Backend Architecture, Tool Orchestration",
        domainSkills: [
          { name: "LangChain", icon: SiPython },
          // { name: "Azure OpenAI", icon: SiAzurefunctions },
          { name: "Streamlit", icon: SiPython }
        ],
        contribution: "Developed a multi-server AI agent using LangChain and Azure OpenAI, integrating 47+ tools. Delivered a production-ready backend and UI for intelligent query handling and automation."
      }
    ]

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
