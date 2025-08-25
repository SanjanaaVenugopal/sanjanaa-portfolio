import { Github, Instagram, Linkedin, Palette } from "lucide-react";

export enum welcome {
  headline = "Hi, I'm Sanjanaa",
  tagline = "Welcome to my whimsical corner of the web!",
  dpAltText = "Sanjanaa's profile",
}

export enum commandBar {
  doMore = "DoMore", // Aria label
  resume = "Resume",
  contactMe = "Contact me",
}

export enum welcomeHeadline {
  en = "Hi, I am Sanjanaa", // English
  es = "Hola, soy Sanjanaa", // Spanish
  fr = "Bonjour, je suis Sanjanaa", // French
  de = "Hallo, ich bin Sanjanaa", // German
  it = "Ciao, sono Sanjanaa", // Italian
  kn = "ನಮಸ್ಕಾರ, ನಾನು ಸಂಜನಾ", // Kannada
  ta = "வணக்கம், நான் சன்ஜனா", // Tamil
  mai = "नमस्कार, हम संजना छी", // Maithili
  hi = "नमस्ते, मैं संजना हूँ", // Hindi
  sa = "नमस्ते, अहं संजना अस्मि", // Sanskrit
  ja = "こんにちは、私は サンジャナー です", // Japanese
  ko = "안녕하세요, 저는 산자나입니다", // Korean
  ru = "Привет, я Санжана", // Russian
  zh = "你好，我是桑加娜", //Mandrin
  ar = "مرحبا، أنا سانجانا", //Arabic
  mwr = "नमस्कार, म्हारो नाम संजना है", //Marwari
}

export const welcomeHeadlineWithAudioSupport: Record<
  string,
  { text: string; lang: string }
> = {
  en: { text: "Hi, I am Sanjanaa", lang: "en-US" },
  fr: { text: "Bonjour, je suis Sanjanaa", lang: "fr-FR" },
  hi: { text: "नमस्ते, मैं संजना हूँ", lang: "hi-IN" },
};

export const aboutMeBlinkyTexts = [
  "🤓 Full-stack developer at Microsoft",
  "🎓 Computer Science Post graduate from IIT Madras",
  "🥇 All India Rank 45 - GATE CS 2021",
];

export enum AboutMe {
  line1 = "I'm Sanjanaa, a full-stack developer passionate about creating interactive, fun, and user-friendly web experiences. I love exploring new technologies and building quirky projects that make people smile.",
  line2 = "I have a strong foundation in React, JavaScript, and system designing. I enjoy designing playful UI/UX features while opting for cool & stable design choices.",
}

export enum ContactFormTexts {
  headline = "Email me!",
  name = "Name",
  title = "Title",
  message = "Message",
  email = "Email id",
  emailError = "Please enter a valid email address!",
  nameError = "Name must be at least 3 characters!",
  messageError = "Message must be at least 3 characters!",
  send = "Send",
}

export enum ContactMeSlider {
  sliderHeader = "Drop your number!",
  sliderValue = "Your number: ",
  sliderClose = "Close",
}

export enum ContactMeClown {
  header = "Just kidding! 🤡",
  tagline = "I'm not storing your number.. 😛",
}

export enum ContactMeEmail {
  successHeader = "Message Sent!🎉",
  successTagline = "Thanks for reaching out. I'll get back to you soon!",
  failureHeader = "Something went wrong!😢",
  failureTagline = "Please try again!",
}

export enum SkillsHeader {
  header = "Skills",
}

export const socialLinks = [
  {
    href: "https://github.com/SanjanaaVenugopal",
    Icon: Github,
  },
  {
    href: "https://www.linkedin.com/in/sanjanaa-gv/",
    Icon: Linkedin,
  },
  {
    href: "https://www.instagram.com/sanjanaa_venugopal/",
    Icon: Instagram,
  },
  {
    href: "",
    Icon: Palette,
  },
];

export const ReportBugTitle = [
  "Are you sure it's not by design?",
  "Are you reaaally sure??",
  "Did you double-check? 👀",
  "Do you still think this is a bug?",
  "Pretty sure it's by design… still want to report it?",
  "Wow, you're persistent! Still sure about this?",
  "Final chance… are you absolutely, positively sure? 🤨",
  "Okay okay! You win 😤 Go ahead and report it!",
];

export enum ReportBugButtonTexts {
  yes = "Yes",
  no = "No",
}

export const iconSize = 16;
