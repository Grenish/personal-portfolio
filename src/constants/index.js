import { github, linkedin, twitterx, instagram } from "../assets/socials";
import {
  html,
  css,
  figma,
  javascript,
  react,
  tailwindcss,
  nodejs,
} from "../assets/tech";

import {
  zane,
  imageflex,
  coderjojo,
  codersclub,
  bcaResults,
  exsolve,
  hoobank,
  studystuffs,
} from "../assets/projects";

export const socialMediaLinks = [
  {
    id: 1,
    name: "Github",
    link: "https://github.com/Grenish",
    icon: github,
  },
  {
    id: 2,
    name: "Linkedin",
    link: "https://www.linkedin.com/in/grenish-rai-71a5b4219/",
    icon: linkedin,
  },
  {
    id: 3,
    name: "Twitter",
    link: "https://twitter.com/grenish_rai",
    icon: twitterx,
  },
  {
    id: 4,
    name: "Instagram",
    link: "https://www.instagram.com/grenish_rai/",
    icon: instagram,
  },
];

export const techStack = [
  {
    id: 1,
    name: "HTML",
    icon: html,
    desc: "This is where I started my journey.",
  },
  {
    id: 2,
    name: "CSS",
    icon: css,
    desc: "The first styling I learned.",
  },
  {
    id: 3,
    name: "JavaScript",
    icon: javascript,
    desc: "The lnguage I use to make things happen.",
  },
  {
    id: 4,
    name: "React",
    icon: react,
    desc: "React is my go to framework for frontend development.",
  },
  {
    id: 5,
    name: "Tailwindcss",
    icon: tailwindcss,
    desc: "It is my go to css framework.",
  },
  {
    id: 6,
    name: "Nodejs",
    icon: nodejs,
    desc: "nodejs is like a swiss army knife for me.",
  },
  {
    id: 7,
    name: "Figma",
    icon: figma,
    desc: "Brainstormer, wireframer, prototyper, designer, developer, and more.",
  },
];

export const projects = [
  {
    id: 1,
    name: "Zane",
    image: zane,
    desc: "A simple and minimalistic chatbot.",
    url: "https://betachat.netlify.app/",
  },
  {
    id: 2,
    name: "Imageflex",
    image: imageflex,
    desc: "A simple website to download high quality images.",
    url: "https://imageflex.netlify.app/",
  },
  {
    id: 3,
    name: "Coderjojo",
    image: coderjojo,
    desc: "A portfolio website asked by a client.",
    url: "https://coderjojotest.netlify.app/",
  },
  {
    id: 4,
    name: "Codersclub",
    image: codersclub,
    desc: "A website for a coding club at SMIT.",
    url: "https://codersclub-smit.vercel.app/",
  },
  {
    id: 5,
    name: "BCA Results",
    image: bcaResults,
    desc: "A website to check BCA results.",
    url: "https://bcaresults.vercel.app/",
  },
  {
    id: 6,
    name: "Exsolve",
    image: exsolve,
    desc: "Our freelancing website.",
    url: "https://exsolve.netlify.app/",
  },
  {
    id: 7,
    name: "Hoobank",
    image: hoobank,
    desc: "First React project.",
    url: "https://bank-project-1.netlify.app/",
  },
  {
    id: 8,
    name: "Studystuffs",
    image: studystuffs,
    desc: "A website to download study materials.",
    url: "https://studystuffs.netlify.app/",
  },
];
