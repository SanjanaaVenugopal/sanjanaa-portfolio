import {
  FaFigma,
  FaNodeJs,
  FaReact,
  FaDatabase,
  FaBrain,
  FaPython,
  FaCss3Alt,
  FaHtml5,
  FaJava,
  FaGithub,
  FaGitAlt,
  FaTools,
  FaServer
} from "react-icons/fa";
import { MdDesignServices, MdWebhook } from "react-icons/md";
import {
  SiChakraui,
  SiTailwindcss,
  SiJest,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiMysql,
  SiC,
  SiCplusplus,
  SiSpringboot,
  SiFirebase,
  SiPostman,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiLatex,
  SiEclipseide,
  SiOpenai,
  SiTensorflow,
  SiKeras,
  SiHuggingface,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { RiRobot2Line } from "react-icons/ri";
import { ImDatabase } from "react-icons/im";

import Playwright from "./Icons/Playwright.png";
import ADF from "./Icons/ADF.png";
import cosmos from "./Icons/cosmos.png";
import Copilot from "./Icons/copilot.png";
import Csharp from "./Icons/Csharp.png";
import FluentUI from "./Icons/FluentUI.svg";
import Kusto from "./Icons/Kusto.svg";
import REST from "./Icons/REST.png";
import VSCcode from "./Icons/VSCode.png";

import { Icon } from "../Components/Skills/Icon";

export const skills = [
  {
    category: "Frontend",
    icon: MdWebhook,
    skills: [
      { name: "ReactJS", icon: FaReact },
      { name: "Redux", icon: SiRedux },
      { name: "Figma", icon: FaFigma },
      { name: "Wireframing", icon: MdDesignServices },
      { name: "Javascript", icon: SiJavascript },
      { name: "Typescript", icon: SiTypescript },
      { name: "FluentUI", icon: () => <Icon src={FluentUI} alt="FluentUI" /> }, // closest available
      { name: "ChakraUI", icon: SiChakraui },
      { name: "Html", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      {
        name: "Playwright",
        icon: () => <Icon src={Playwright} alt="Playwright" />,
      },
      { name: "Jest", icon: SiJest },
      { name: "State Mgmt", icon: SiRedux },
      { name: "React Hooks", icon: FaReact },
    ],
  },
  {
    category: "Backend",
    icon: FaServer,
    skills: [
      { name: "Node.js", icon: FaNodeJs }, ,
      { name: "Databases", icon: FaDatabase },
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "Java", icon: FaJava },
      { name: "CSharp", icon: () => <Icon src={Csharp} alt="CSharp" /> },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      { name: "Kusto", icon: () => <Icon src={Kusto} alt="Kusto" /> },
      { name: "Cosmos", icon: () => <Icon src={cosmos} alt="Cosmos" /> },
      { name: "ActiveMQ", icon: ImDatabase },
      { name: "Springboot", icon: SiSpringboot },
      { name: "Azure Data Factory", icon: () => <Icon src={ADF} alt="ADF" /> },
      { name: "REST APIs", icon: () => <Icon src={REST} alt="REST" /> },
      { name: "Postman", icon: SiPostman },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    category: "ML/AI",
    icon: FaBrain,
    skills: [
      { name: "Python", icon: FaPython },
      { name: "TensorFlow", icon: SiTensorflow },
      { name: "Keras", icon: SiKeras },
      { name: "AI Concepts", icon: GiArtificialIntelligence },
      { name: "Numpy", icon: SiNumpy },
      { name: "Pandas", icon: SiPandas },
      { name: "HuggingFace", icon: SiHuggingface },
      { name: "Agentic AI", icon: RiRobot2Line },
      { name: "Copilot", icon: () => <Icon src={Copilot} alt="Copilot" /> },
      { name: "OpenAI endpoints", icon: SiOpenai },
      { name: "Machine learning", icon: GiArtificialIntelligence },
      { name: "Deep learning", icon: GiArtificialIntelligence },
      { name: "LLMs", icon: GiArtificialIntelligence },
      { name: "Class LMs", icon: GiArtificialIntelligence },
      { name: "ScikitLearn", icon: SiScikitlearn },
    ],
  },
  {
    category: "Others",
    icon: FaTools,
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "VS Code", icon: () => <Icon src={VSCcode} alt="VSCode" /> },
      { name: "Postman", icon: SiPostman },
      { name: "Latex", icon: SiLatex },
      { name: "Eclipse", icon: SiEclipseide },
    ],
  },
];
