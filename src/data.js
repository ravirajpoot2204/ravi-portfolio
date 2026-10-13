export const profile = {
  name: "Ravi Rajpoot",
  title: "Full Stack Developer · MERN · Real-time & Media",
  shortTitle: "Full Stack Developer",
  location: "Lucknow, Uttar Pradesh, India",
  email: "ravirajpoot2204@gmail.com",
  phone: "+91 6388296339",
  phoneHref: "tel:+916388296339",
  github: "https://github.com/ravirajpoot2204",
  linkedin: "https://www.linkedin.com/in/ravirajpoot2204/",
  tagline:
    "I build real products end to end — live streaming platforms, AI-powered tools, and full-stack web apps that ship.",
  about: [
    "Full Stack Developer with 2+ years of hands-on project experience. Built a YouTube Clone with live streaming, FFmpeg transcoding, and Razorpay payments. Also built an AI-powered Job Tracker using Gemini AI.",
    "Skilled in React, Next.js, Node.js, Express, MongoDB, TypeScript, and Java/Spring Boot.",
    "Looking for full-stack, frontend, or backend roles.",
  ],
  stats: [
    { value: "2+", label: "Years experience" },
    { value: "3", label: "Projects shipped" },
    { value: "40+", label: "Issues fixed" },
    { value: "40+", label: "DSA problems" },
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const services = [
  {
    icon: "code",
    title: "Full-Stack Web Development",
    description:
      "End-to-end web apps with React on the front and Node.js / Express on the back — clean APIs, auth, and deployment.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    icon: "bolt",
    title: "Real-Time Applications",
    description:
      "Live features that actually feel live — WebSocket chat, presence, notifications, and streaming.",
    tech: ["Socket.IO", "WebRTC", "Redis"],
  },
  {
    icon: "video",
    title: "Video Processing & Streaming",
    description:
      "Live streaming pipelines and adaptive video with FFmpeg — from RTMP ingest to HLS playback.",
    tech: ["FFmpeg", "HLS", "RTMP", "Nginx"],
  },
  {
    icon: "sparkles",
    title: "AI Integration",
    description:
      "Wiring AI into real products — parsing, summarizing, and generating with Gemini and Google APIs.",
    tech: ["Gemini AI", "Gmail API", "Puppeteer"],
  },
];

export const skills = [
  {
    category: "Languages",
    items: ["JavaScript (ES6+)", "TypeScript", "HTML5", "CSS3", "Java", "SQL"],
  },
  {
    category: "Frontend",
    items: ["React.js", "Next.js", "Tailwind CSS", "HLS.js", "WebRTC"],
  },
  {
    category: "Backend",
    items: [
      "Node.js",
      "Express.js",
      "Spring Boot",
      "REST APIs",
      "JWT",
      "OAuth 2.0",
      "Socket.IO",
    ],
  },
  {
    category: "Databases",
    items: ["MongoDB", "Mongoose", "Redis", "SQL"],
  },
  {
    category: "Queues & Media",
    items: ["BullMQ", "FFmpeg (HLS / RTMP)", "Nginx", "RTMP", "WebRTC", "HLS"],
  },
  {
    category: "DevOps & Tools",
    items: ["Git", "Docker", "PM2", "Render", "Vercel", "Netlify", "Postman"],
  },
  {
    category: "Methodologies",
    items: ["Agile", "Scrum", "CI/CD"],
  },
];

export const projects = [
  {
    title: "YouTube Clone",
    subtitle: "Live Streaming & VOD Platform",
    description:
      "A full-stack video platform with live streaming (RTMP + Nginx), HLS adaptive transcoding (144p–360p), real-time chat, and Super Chat payments.",
    impact: [
      "40% lower bandwidth usage",
      "99% payment success rate",
      "100+ concurrent users",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "BullMQ",
      "FFmpeg",
      "Socket.IO",
      "Razorpay",
    ],
    live: "https://youtubeclonesss.netlify.app",
    github: "https://github.com/ravirajpoot2204/YouTubeClone",
  },
  {
    title: "Job Tracker",
    subtitle: "Automated Job Application Management",
    description:
      "A personal tool that parses job application emails and generates tailored cover letters automatically using Gemini AI.",
    impact: ["Saves 5+ hours per week", "85% email parsing accuracy"],
    tech: [
      "MongoDB",
      "Express",
      "React",
      "Node.js",
      "Gmail API",
      "Gemini AI",
      "Puppeteer",
    ],
    live: null,
    github: "https://github.com/ravirajpoot2204/job-tracker",
    note: "Personal tool — demo video available on request.",
  },
  {
    title: "Lead Management System",
    subtitle: "Role-Based Access Platform",
    description:
      "A role-based access platform (Admin / Member) with a lead pipeline, notes, and a full activity trail.",
    impact: ["Completed in 24 hours as a hiring challenge"],
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Vercel"],
    live: "https://lead-manager-eta-black.vercel.app",
    github: null,
    credentials: [
      "Admin  → admin@test.com / admin123",
      "Member → member1@test.com / member123",
    ],
  },
];

export const experience = [
  {
    role: "Self-Led Full Stack Developer",
    company: "Independent Projects",
    period: "June 2024 – Present",
    location: "Lucknow, India",
    points: [
      "Built production-grade applications end to end using the MERN stack — architecture, REST APIs, background workers, and responsive UIs.",
      "Deployed and maintained applications on Render, Vercel, and Netlify with Git-based CI/CD workflows.",
      "Resolved 40+ technical issues across deployment, video streaming pipelines, and third-party API integration.",
    ],
    tech: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "Redis",
      "BullMQ",
      "FFmpeg",
      "Docker",
      "PM2",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    school: "Ambalika Institute of Management & Technology, Lucknow",
    year: "2024",
    details:
      "Studied core computer science — data structures, algorithms, databases, operating systems, and software engineering — alongside self-driven full-stack development.",
  },
];

export const extras = [
  { title: "EFSET English Certificate", detail: "B1 Intermediate" },
  {
    title: "Data Structures & Algorithms",
    detail: "Solved 40+ problems on LeetCode",
  },
];