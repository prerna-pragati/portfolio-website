// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.svg";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/1699220251384.jpeg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import sass from "./assets/techstack/sass.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import figma from "./assets/techstack/figma.png";
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project_2.png";
import projectImage3 from "./assets/projects/project_3.png";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project_5.png";
import projectImage6 from "./assets/projects/project6.jpg";

// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Prerna Pragati",
  tagline: "I build things for web",
  img: profile,
  about: `A results-oriented Frontend Software Developer with a proven track record of over six years in the industry, specializing in React development. Holding a Master's degree in Computer and Information Sciences from the esteemed University of Florida and a Bachelor's in Information Technology from West Bengal University of Technology, I bring a blend of academic rigor and practical expertise to every project. Proficient in JavaScript and web development, I possess a comprehensive skill set spanning technologies such as React, Redux, TypeScript, and Tailwind CSS. My career highlights include successfully leading cross-functional teams, optimizing performance, and delivering user-centric solutions that drive business objectives. Committed to continuous learning and innovation, I thrive in dynamic environments where I can leverage my technical prowess to tackle complex challenges and elevate the digital landscape.`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/prerna-pragati-49b381249/",
  github: "https://github.com/prerna-pragati",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Technical Lead",
    Company: `Applied Research Works, Inc`,
    Location: "Kolkata, India",
    Type: "Full Time",
    Duration: "August 2020 - July 2022",
  },
  {
    Position: "Senior Software Engineer",
    Company: `Applied Research Works, Inc`,
    Location: "Kolkata, India",
    Type: "Full Time",
    Duration: "August 2018 - July 2020",
  },
  {
    Position: "Software Engineer",
    Company: `Applied Research Works, Inc`,
    Location: "Kolkata, India",
    Type: "Full Time",
    Duration: "July 2015 - July 2018",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Master's in Computer And Information Sciences",
    Company: "University of Florida",
    Location: "Gainesville, US",
    Type: "Full Time",
    Duration: "August 2022 - May 2024",
  },
  {
    Position: "Bachelor in Information Technology",
    Company: `West Bengal University of Technology`,
    Location: "Kolkata, India",
    Type: "Full Time",
    Duration: "Aug 2011 - June 2015",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  react: react,
  redux: redux,
  sass: sass,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  figma: figma,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Project title 1",
    image: projectImage1,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
  {
    title: "Netflix-GPT",
    image: projectImage2,
    description: `A movie recommendation system using TMDB APIs, Firebase authentication, and OpenAI search integration.`,
    techstack: "React, Redux, Firebase, Tailwind, OpenAI, HTML/CSS, JavaScript",
    previewLink: "https://netflixgpt-44c6d.web.app/",
    githubLink: "https://github.com",
  },
  {
    title: "Event Management system - BookMyEvents",
    image: projectImage3,
    description: `Book My Events is a simple events management application built using Django for creating, booking and managing student organization events.`,
    techstack: "Django, HTML/CSS, JavaScript, Python",
    previewLink: "https://docs.google.com/presentation/d/1K7CvGTUQsXhiPyEIHKpCQteA6glh0e3PDMkkyQjoRE8/edit?usp=sharing",
    githubLink: "https://github.com/prerna-pragati/HCIbookmyevent",
  },
  {
    title: "Crime Data Analysis",
    image: projectImage4,
    description: `Developed a React web app with Oracle for in-depth Crime Data Analysis, enabling interactive exploration of crime trends by location, demographics, and time.`,
    techstack: "React, Express, Oracle, SQL, HTML/CSS, JavaScript, Bootstrap",
    previewLink: "https://github.com/prerna-pragati/crimeDataAnalysis",
    githubLink: "https://github.com/prerna-pragati/crimeDataAnalysis",
  },
  {
    title: "Maternal Health Risk",
    image: projectImage5,
    description: `Utilized Feature Selection to minimize IoMT device usage while maintaining accuracy. Conducted hyperparameter
    tuning for optimization.`,
    techstack: "Python, Jupyter Notebook",
    previewLink: "https://colab.research.google.com/drive/1blJET85aNtNGNLaP8r7BON8mlGpJ6bwR",
    githubLink: "https://github.com/prerna-pragati/MaternalHealthRisk",
  },
  {
    title: "Project title 6",
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://google.com",
    githubLink: "https://github.com",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "prerna.pragati94@gmail.com",
  phone: "+1 352-999-0548",
};
