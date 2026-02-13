export const profile = {
  name: "Yhwach",
  title: "Full Stack Developer",
  description: "I build responsive and interactive web applications using React, JavaScript, HTML, CSS, and backend technologies.",
  about: "I'm a full-stack developer focused on building modern web applications using React, JavaScript, HTML, CSS, and backend technologies. I enjoy turning ideas into functional, clean, and user-friendly solutions while continuously learning and improving my skills.",
  email: "anasebraheem03@gmail.com",
  
  skills: [
    { name: "JavaScript", level: 90, category: "frontend" },
    { name: "React", level: 95, category: "frontend" },
    { name: "HTML", level: 90, category: "frontend" },
    { name: "CSS", level: 85, category: "frontend" },
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Python", level: 75, category: "backend" },
    { name: "PostgreSQL", level: 70, category: "backend" },
    { name: "AWS", level: 65, category: "backend" },
  ],

  projects: [
    {
      id: 1,
      title: "Personal Portfolio Website",
      description: "A responsive portfolio website built with React and Tailwind CSS to showcase my projects and skills.",
      tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "next-themes", "React Hook Form"],
      demoUrl: "https://github.com/Kairox065",
      featured: true,
    },
    {
      id: 4,
      title: "Password Generating Extension",
      description: "A secure local password manager extension with master password protection and Web Crypto API encryption.",
      tech: ["JavaScript (ES6+)", "HTML5", "CSS3", "Chrome Extension API", "Web Crypto API",],
      demoUrl: "/projects/passwordgenerator",
      featured: true,
    },
    {
      id: 3,
      title: "Discord Bot",
      description: "A Discord bot for automating tasks and managing servers. and moderating!",
      tech: ["Python", "Discord.py", "Discord API", "Asynchronous programming", "Error handling"],
      demoUrl: "https://weather-demo.vercel.app",
      githubUrl: "https://github.com/johndoe/weather-dashboard",
      featured: false,
    },
  ],

  socials: [
    { name: "GitHub", url: "https://github.com/Kairox065", icon: "Github" },
    { name: "Email", url: "mailto:anasebraheem03@gmail.com", icon: "Mail" },
  ],
}

export type Profile = typeof profile
