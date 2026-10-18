export const profile = {
  name: "Ravi Rajpoot",
  title: "Full Stack Developer · MERN · Real-time & Media",
  headline: "Full Stack Developer",
  location: "Lucknow, Uttar Pradesh, India",
  locationLine:
    "B.Tech CSE 2024 · Lucknow · Open to Bangalore / Hyderabad / Pune / Noida / Remote",
  email: "ravirajpoot2204@gmail.com",
  phone: "+91 6388296339",
  phoneHref: "tel:+916388296339",
  github: "https://github.com/ravirajpoot2204",
  linkedin: "https://www.linkedin.com/in/ravirajpoot2204/",
  resumeUrl: "/resume.pdf",
  yearsLine: "2+ years building production-style full-stack applications",
  tagline:
    "I build real products end to end — live streaming platforms, AI-powered tools, and full-stack web apps that ship.",
  about: [
    "Full Stack Developer with 2+ years of hands-on project experience. Built a YouTube Clone with live streaming, FFmpeg transcoding, and Razorpay payments. Also built an AI-powered Job Tracker using Gemini AI.",
    "Skilled in React, Next.js, Node.js, Express, MongoDB, TypeScript, and Java/Spring Boot.",
    "Looking for full-stack, frontend, or backend roles.",
  ],
  gapNote:
    "After graduating in 2024, I spent two years building production-style projects independently — a YouTube Clone with live streaming and an AI-powered Job Tracker — because I couldn't afford formal training. My CGPA is 6.46, but these projects show what I can actually ship.",
  stats: [
    { value: "2+", label: "Years building full-stack apps" },
    { value: "3", label: "Projects shipped" },
    { value: "40+", label: "DSA problems solved" },
    { value: "40%", label: "Bandwidth reduced (HLS)" },
  ],
  primaryStack: [
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "TypeScript",
    "Redis",
    "FFmpeg",
  ],
};

export const navLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

// audit: remove any skill below you can't defend for 60 seconds in an interview
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

// Order matters: easiest-to-verify first
export const projects = [
  {
    id: "lead-manager",
    title: "Lead Management System",
    subtitle: "Role-Based Access Platform",
    screenshot: "/screenshots/lead-manager.png",
    headline:
      "Role-based lead pipeline with admin / member access and a full activity trail.",
    impact: [
      "Built in 24 hours as a hiring challenge",
      "Admin + Member role separation enforced via JWT",
      "Kanban lead pipeline with notes and per-action activity trail",
      "CRUD + per-action authorization at the query level",
    ],
    challenge:
      "Enforcing role-scoped access at the query level — not just the UI — so members could never reach admin endpoints, even with a forged request.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "Vercel"],
    live: "https://lead-manager-eta-black.vercel.app",
    github: null,
    primaryAction: "live",
    credentials: [
      "Admin  → admin@test.com / admin123",
      "Member → member1@test.com / member123",
    ],
  },
  {
    id: "youtube-clone",
    title: "YouTube Clone",
    subtitle: "Live Streaming & VOD Platform",
    screenshot: "/screenshots/youtube-clone.png",
    headline:
      "Full-stack video platform with live RTMP streaming, HLS transcoding, and Razorpay payments.",
    impact: [
      "Reduced bandwidth 40% via adaptive bitrate (144p–360p HLS)",
      "99% payment success rate on Razorpay Super Chat",
      "Handled 100+ concurrent simulated viewers with Redis + BullMQ",
      "End-to-end RTMP → HLS pipeline with FFmpeg + Nginx",
    ],
    challenge:
      "FFmpeg memory leaks during concurrent transcoding — fixed by isolating each job in its own worker process and capping concurrency.",
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
    live: null,
    github: "https://github.com/ravirajpoot2204/YouTubeClone",
    demoUrl: null, // TODO: paste YouTube demo URL here when uploaded
    primaryAction: "demo",
    note: "Live streaming needs a local RTMP server — the demo video shows the full flow.",
  },
  {
    id: "job-tracker",
    title: "Job Tracker",
    subtitle: "AI-Powered Job Application Management",
    screenshot: "/screenshots/job-tracker.png",
    headline:
      "AI-powered job tracker that parses application emails and generates tailored cover letters.",
    impact: [
      "Saves 5+ hours per week on application tracking",
      "85% email parsing accuracy on Gmail API emails",
      "Gemini AI generates a tailored cover letter per application",
      "Puppeteer scrapes job postings into structured fields",
    ],
    challenge:
      "Hitting 85% parsing accuracy across Gmail's inconsistent HTML — solved by falling back to Gemini when regex confidence drops below a threshold.",
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
    primaryAction: "github",
    note: "Personal tool — the resume / cover letter generator is testable; output is tailored to my profile.",
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