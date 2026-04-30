import React from 'react';
import { Code, Database, Wrench, Cpu, Box, Server, Shield } from 'lucide-react';
import { 
  IconJava, IconPython, IconCpp, IconReact, IconHTML, 
  IconCSS, IconMySQL, IconFlask, IconGit, IconLinux, IconAWS, 
  IconJS
} from '../components/ui/Icons';

export const PROFILE = {
  name: "Aditya Sharma",
  roles: [
    "Full-Stack Engineer", 
    "Embedded Systems Specialist", 
    "Software Architect", 
    "Innovator" 
  ],
  email: "adisharma70100@gmail.com",
  linkedin: "https://www.linkedin.com/in/adi-sharma7/",
  github: "https://github.com/Aditya-7010",
  summary: "Full-stack developer and electronics engineering enthusiast with experience building end-to-end solutions across software and hardware. Skilled in modern web technologies, IoT systems, and machine learning fundamentals, with a focus on developing practical, scalable applications. Comfortable working across the stack—from designing user interfaces to integrating backend services and embedded components. Continuously learning and applying new technologies to solve real-world problems efficiently."
};

export const TECH_CATEGORIES = [
  {
    title: "Core Languages",
    icon: <Code size={20} className="text-indigo-600"/>,
    skills: [
      { name: "Java", svg: <IconJava/>, color: "hover:border-indigo-500 hover:shadow-indigo-500/10", text: "group-hover:text-indigo-700", level: 90 },
      { name: "Python", svg: <IconPython/>, color: "hover:border-teal-500 hover:shadow-teal-500/10", text: "group-hover:text-teal-700", level: 85 },
      { name: "C++", svg: <IconCpp/>, color: "hover:border-indigo-600 hover:shadow-indigo-600/10", text: "group-hover:text-indigo-800", level: 75 },
      { name: "JavaScript", svg: <IconJS/>, color: "hover:border-amber-500 hover:shadow-amber-500/10", text: "group-hover:text-amber-600", level: 85 }
    ]
  },
  {
    title: "Web & Databases",
    icon: <Database size={20} className="text-teal-600"/>,
    skills: [
      { name: "React", svg: <IconReact/>, color: "hover:border-teal-400 hover:shadow-teal-400/10", text: "group-hover:text-teal-600", level: 80 },
      { name: "HTML", svg: <IconHTML/>, color: "hover:border-indigo-500 hover:shadow-indigo-500/10", text: "group-hover:text-indigo-600", level: 95 },
      { name: "CSS", svg: <IconCSS/>, color: "hover:border-teal-500 hover:shadow-teal-500/10", text: "group-hover:text-teal-600", level: 90 },
      { name: "MySQL", svg: <IconMySQL/>, color: "hover:border-indigo-500 hover:shadow-indigo-500/10", text: "group-hover:text-indigo-600", level: 75 },
      { name: "Flask", svg: <IconFlask/>, color: "hover:border-slate-500 hover:shadow-slate-500/10", text: "group-hover:text-slate-700", level: 70 }
    ]
  },
  {
    title: "Hardware & Tools",
    icon: <Wrench size={20} className="text-amber-500"/>,
    skills: [
      { name: "Git / VCS", svg: <IconGit/>, color: "hover:border-indigo-500 hover:shadow-indigo-500/10", text: "group-hover:text-indigo-600", level: 85 },
      { name: "Linux OS", svg: <IconLinux/>, color: "hover:border-slate-400 hover:shadow-slate-400/10", text: "group-hover:text-slate-600", level: 80 },
      { name: "AWS Cloud", svg: <IconAWS/>, color: "hover:border-amber-500 hover:shadow-amber-500/10", text: "group-hover:text-amber-600", level: 65 },
      { name: "IoT / Sensors", svg: <Cpu className="w-full h-full p-2"/>, color: "hover:border-teal-500 hover:shadow-teal-500/10", text: "group-hover:text-teal-600", level: 85 }
    ]
  }
];

export const SKILLS_DOMAINS_DETAILED = [
  { name: "Software Engineering", desc: "Architecting robust, fault-tolerant software systems utilizing modern design patterns and microservices.", icon: <Code size={24} className="text-indigo-600" /> },
  { name: "Internet of Things", desc: "Designing sophisticated embedded systems that seamlessly bridge physical hardware with cloud infrastructure.", icon: <Cpu size={24} className="text-teal-500" /> },
  { name: "Machine Learning", desc: "Engineering predictive models and intelligent algorithms that transform raw data into actionable insights.", icon: <Box size={24} className="text-indigo-500" /> },
  { name: "Data Science", desc: "Extracting profound metrics through advanced analytical processing and statistical frameworks.", icon: <Database size={24} className="text-amber-500" /> },
  { name: "Cloud Operations", desc: "Deploying and managing highly available, globally distributed infrastructure on AWS.", icon: <Server size={24} className="text-indigo-600" /> },
  { name: "System Architecture", desc: "End-to-end design of performant, secure, and resilient technology stacks from bare-metal to cloud.", icon: <Shield size={24} className="text-teal-500" /> }
];

export const EDUCATION = [
  {
    degree: "B.Tech in Electronics & Communication",
    institution: "Chandigarh Group of Colleges, Landran",
    duration: "2023 - 2027",
    score: "8.01 CGPA"
  },
  {
    degree: "Intermediate (CBSE)",
    institution: "Shishu Niketan Sr Sec Model School, Chandigarh",
    duration: "2022 - 2023",
    score: "79.8%"
  },
  {
    degree: "Matriculation (CBSE)",
    institution: "Shishu Niketan Sr Sec Model School, Chandigarh",
    duration: "2020 - 2021",
    score: "88.8%"
  }
];

export const PROJECTS = [
  {
    title: "Custom 2D Rendering Engine 🎮",
    duration: "1 month",
    team: "Individual",
    tech: ["Java", "Graphics", "OOP", "Multithreading"],
    description: "Designed and developed a 2D game using core Java Graphics without relying on external game engines. Implemented rendering pipelines, collision detection mechanisms, and NPC behavior while applying object-oriented design principles and multithreading for performance optimization."
  },
  {
    title: "Predictive Mental Health Engine 🧠",
    duration: "1 month",
    team: "Team of 3",
    tech: ["Python", "Flask", "Logistic Regression", "HTML", "CSS"],
    description: "Built a machine learning model using logistic regression to assess mental health indicators based on user-provided data. Integrated the model into a Flask-based web application, enabling an interactive interface for data input and real-time predictions."
  }
];

export const CERTIFICATIONS = [
  "Machine Learning with Python - Techlive (2025)",
  "Embedded Systems - NIELIT (2025)",
  "Big Data and Data Science - CGC Landran (2025)",
  "AWS Academy Cloud Operations (Mar 2025)",
  "AWS Academy Data Engineering (Nov 2023)"
];

export const ACHIEVEMENTS = [
  { title: "Patent Filed", desc: "Hospital Waste Segregation System (Status: Patentable 2025)" },
  { title: "Bootcamp Completed", desc: "Big Data and Data Science by NIELIT, Chandigarh (2025)" },
  { title: "Coordinator", desc: "ICCS-2025 International Conference, CGC Landran (Sept 2025)" },
  { title: "Coordinator", desc: "Engineer's Day Event, CGC Landran (2025)" },
  { title: "Participant", desc: "National Science Day (2025)" }
];