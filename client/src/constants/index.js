import { FaReact, FaHtml5, FaCss3Alt, FaJs, FaNode, FaPhp, FaJava, FaPython, FaDatabase } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiCplusplus, SiC, SiNextdotjs } from 'react-icons/si';

export const education = [
  {
    year: "2023 - Present",
    degree: "B.Tech Computer Science and Engineering",
    institution: "Lovely Professional University",
    description: "Maintaining an 8.29 CGPA. Focused on algorithmic problem-solving and full-stack software development."
  },
  {
    year: "2019 - 2021",
    degree: "Intermediate - PCM",
    institution: "St Joseph Sr. Sec. School",
    description: "Completed higher secondary education focusing on Physics, Chemistry, and Mathematics (83.40%)."
  },
  {
    year: "2018 - 2019",
    degree: "Matriculation",
    institution: "St Joseph Sr. Sec. School",
    description: "Completed secondary education with 82% overall grade."
  }
];

export const certifications = [
  {
    title: "Build Generative AI Apps and Solutions with No Code Tools",
    issuer: "Infosys Springboard",
    date: "2025",
    link: "https://drive.google.com/file/d/1Y-DdB9KEzJNNraetmiwNHXMdVNZBsUWX/view?usp=sharing",
    description: "Learned techniques to implement and leverage generative AI tools for modern software development.",
    skills: ["Generative AI", "No Code", "Solutions Architecture"],
    image: "/images/BuildAi.png"
  },
  {
    title: "Java Spring Boot",
    issuer: "Programming Pathshala",
    date: "Jul 2025",
    link: "https://drive.google.com/file/d/1suM9RJxbtIdjI81GUS_uSaHi4FNuPwRC/view",
    description: "Intensive training in backend engineering specializing in Spring Boot REST APIs, MVC structure, and OOPs.",
    skills: ["Java", "Spring Boot", "REST API", "MVC", "OOPs"],
    image: "/images/springboot.png"
  },
  {
    title: "Cloud Computing",
    issuer: "NPTEL",
    date: "2024",
    link: "https://drive.google.com/file/d/1HowvArAJVg6y5yJDZGDs_CzkPE2JV7jM/view?usp=sharing",
    description: "Comprehensive understanding of cloud infrastructures, virtualization, and distributed systems.",
    skills: ["Cloud Computing", "Distributed Systems"],
    image: "/images/nptel.png"
  },
  {
    title: "The Bits and Bytes of Computer Networking",
    issuer: "Coursera",
    date: "2024",
    link: "https://drive.google.com/file/d/1pNeFENdwOcxQi5zX6pkY5nXpx1J-EDqu/view?usp=sharing",
    description: "Comprehensive understanding of computer networking, TCP/IP, and HTTP.",
    skills: ["Computer Networking", "TCP/IP", "HTTP"],
    image: "/images/bits.png"
  },
  {
    title: "Object Oriented Programming",
    issuer: "IamNeo",
    date: "2024",
    link: "https://drive.google.com/file/d/1F0nt-bQLpOx9IbFlUfdi5PexxOBOwHaF/view?usp=drive_link",
    description: "Advanced assessment and validation of object-oriented programming methodologies.",
    skills: ["OOPs", "Design Patterns", "Software Architecture"],
    image: "/images/oops.png"
  }
];

export const skills = {
  frontend: [
    { name: "React.js", icon: "FaReact", color: "#61dbfb" },
    { name: "JavaScript", icon: "FaJs", color: "#f0db4f" },
    { name: "HTML5", icon: "FaHtml5", color: "#e34c26" },
    { name: "CSS3", icon: "FaCss3Alt", color: "#264de4" },
    { name: "Tailwind CSS", icon: "SiTailwindcss", color: "#38b2ac" }
  ],
  backend: [
    { name: "Node.js", icon: "FaNode", color: "#68a063" },
    { name: "Express.js", icon: "SiExpress", color: "#ffffff" },
    { name: "PHP", icon: "FaPhp", color: "#777bb4" },
    { name: "MySQL", icon: "SiMysql", color: "#4479a1" },
    { name: "MongoDB", icon: "FaDatabase", color: "#47A248" }
  ],
  programming: [
    { name: "C", icon: "SiC", color: "#A8B9CC" },
    { name: "C++", icon: "SiCplusplus", color: "#00599C" },
    { name: "Java", icon: "FaJava", color: "#007396" },
    { name: "Python", icon: "FaPython", color: "#3776AB" },
    { name: "Problem Solving", icon: "FaTerminal", color: "#ffffff" }
  ],
  tools: [
    { name: "Git", icon: "FaGitAlt", color: "#F05032" },
    { name: "GitHub", icon: "FaGithub", color: "#ffffff" },
    { name: "Postman", icon: "SiPostman", color: "#ffffff" },
    { name: "Docker", icon: "FaDocker", color: "#ffffff" },
    { name: "Kubernetes", icon: "SiKubernetes", color: "#ffffff" }
  ]
};

export const projects = [
  {
    id: "01",
    title: "Time & Productivity Analysis System",
    category: "Full Stack",
    description: "Full-stack application tracking real-time productivity. Built RESTful APIs with Node.js/Express, a MongoDB schema for daily logs, and an interactive React dashboard visualizing productivity trends.",
    features: [
      "Identified time-wasting habits through real-time activity tracking and analysis.",
      "Engineered a full-stack MERN system with Node.js APIs and a React dashboard.",
      "Delivered actionable productivity insights via dynamic Chart.js visualizations."
    ],
    tech: ["MongoDB", "Express.js", "React.js", "Node.js"],
    github_link: "https://github.com/Ashutosh-kumar-2004/Time-Analysis-and-Productivity",
    project_link: "https://productivity-tracker-aky.vercel.app/",
    image_url: "images/timeAnalysis.png"
  },
  {
    id: "02",
    title: "ShopEase - E-Commerce",
    category: "Full Stack",
    description: "Responsive e-commerce platform ensuring secure cart management through PHP sessions and maintaining a scalable MySQL database for product and user information.",
    features: [
      "Optimized cart management and user authentication for high-performance shopping.",
      "Developed a scalable PHP/MySQL backend with a responsive Tailwind CSS UI.",
      "Implemented secure session handling and real-time inventory synchronization."
    ],
    tech: ["PHP", "MySQL", "JavaScript", "Tailwind CSS"],
    github_link: "https://github.com/Amar7070/shopping-cart",
    project_link: "#",
    image_url: "images/ShoppingCart.png"
  },
  {
    id: "03",
    title: "Page Replacement Simulator",
    category: "Web App",
    description: "An educational graphical simulator dynamically visualizing core OS page replacement logic (FIFO, LRU, Optimal). Integrates real-time visual comparisons using Chart.js.",
    features: [
      "Simplified abstract OS memory management concepts through interactive simulation.",
      "Visualized real-time algorithmic execution and fault calculations with Chart.js.",
      "Architected an intuitive dashboard for immediate algorithmic comprehension."
    ],
    tech: ["JavaScript", "Chart.js", "HTML", "CSS"],
    github_link: "https://github.com/Amar7070/Page-Replacement-Algorithm-Simulator",
    project_link: "https://page-replacement-algorithm-simulato-blush.vercel.app/",
    image_url: "images/pageReplace.png"
  }
];

export const socialLinks = {
  linkedin: "https://www.linkedin.com/in/amar-sahani07",
  github: "https://github.com/Amar7070",
  email: "mailto:amarsahani0777@gmail.com",
  phone: "tel:+917070520777"
};

export const services = [];
