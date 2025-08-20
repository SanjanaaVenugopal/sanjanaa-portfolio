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
} from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import {
  SiExpress,
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
  // SiCsharp,
  SiSpringboot,
  //   SiAzuredataexplorer,
  SiFirebase,
  SiPostman,
  SiNumpy,
  SiPandas,
  SiScikitlearn,
  SiLatex,
  //   SiVisualstudiocode,
  SiEclipseide,
  SiOpenai,
  SiTensorflow,
  SiKeras,
  SiHuggingface,
} from "react-icons/si";
import { GiArtificialIntelligence } from "react-icons/gi";
import { TbLayersIntersect } from "react-icons/tb";
// import { GrRest } from "react-icons/gr";
// import { BiLogoCopilot } from "react-icons/bi";
import { RiRobot2Line } from "react-icons/ri";
import { ImDatabase } from "react-icons/im";

import Playwright from "./Icons/Playwright.png"; // adjust path
import { ImageIcon } from "../Components/Skills/ImageIcon";

export const skills = [
  {
    category: "Frontend + Designing",
    icon: TbLayersIntersect,
    skills: [
      { name: "ReactJS", icon: FaReact },
      { name: "Redux", icon: SiRedux },
      { name: "Figma", icon: FaFigma },
      { name: "Wireframing", icon: MdDesignServices },
      { name: "Javascript", icon: SiJavascript },
      { name: "Typescript", icon: SiTypescript },
      { name: "FluentUI", icon: FaReact }, // closest available
      { name: "ChakraUI", icon: SiChakraui },
      { name: "Html", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      {
        name: "Playwright",
        icon: () => <ImageIcon src={Playwright} alt="Playwright" />,
      },
      { name: "Jest", icon: SiJest },
      { name: "State Mgmt", icon: SiRedux },
      { name: "React Hooks", icon: FaReact },
    ],
  },
  {
    category: "Backend",
    icon: FaNodeJs,
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "Databases", icon: FaDatabase },
      { name: "C", icon: SiC },
      { name: "C++", icon: SiCplusplus },
      { name: "Java", icon: FaJava },
      //   { name: "CSharp", icon: SiCsharp },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "MySQL", icon: SiMysql },
      //   { name: "KQL", icon: SiAzuredataexplorer },
      { name: "Cosmos", icon: ImDatabase }, // no direct cosmos icon
      { name: "ActiveMQ", icon: ImDatabase }, // placeholder
      { name: "Springboot", icon: SiSpringboot },
      //   { name: "Azure Data Factory", icon: SiAzuredataexplorer },
      //   { name: "REST APIs", icon: GrRest },
      { name: "Postman", icon: SiPostman },
      { name: "Firebase", icon: SiFirebase },
    ],
  },
  {
    category: "Libraries",
    icon: FaReact,
    skills: [
      { name: "React", icon: FaReact },
      { name: "Redux", icon: SiRedux },
      { name: "Chakra UI", icon: SiChakraui },
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
      //   { name: "Copilot", icon: BiLogoCopilot },
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
    icon: FaBrain,
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      //   { name: "VS Code", icon: SiVisualstudiocode },
      { name: "Postman", icon: SiPostman },
      { name: "Latex", icon: SiLatex },
      { name: "Eclipse", icon: SiEclipseide },
    ],
  },
];
