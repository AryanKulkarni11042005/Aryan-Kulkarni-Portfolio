export const personalInfo = {
    name: "Aryan Kulkarni",
    role: "Software Engineering",
    tagline: "Building elegant solutions to complex problems",
    email: "aryankulkarni1104@gmail.com",
    location: "Mumbai, Maharashtra",
    resumeUrl: "/resume.pdf",
    social: {
        github: "https://github.com/AryanKulkarni11042005",
        linkedin: "https://www.linkedin.com/in/aryan-kulkarni-a24a182b9/"
    },
};

export const about = {
    summary: `I'm a passionate full-stack developer with expertise in building modern web applications. 
  With a strong foundation in both frontend and backend technologies, I create scalable, 
  user-friendly solutions that solve real-world problems. I'm constantly learning and exploring 
  new technologies to stay at the forefront of web development.`,
    image: "/profile.jpg", // Add your profile image to public folder
};

export const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-featured e-commerce platform with payment integration, inventory management, and admin dashboard.",
        techStack: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe"],
        githubUrl: "https://github.com/yourusername/project1",
        liveUrl: "https://project1.vercel.app",
        featured: true,
    },
    {
        id: 2,
        title: "Task Management App",
        description: "Collaborative task management application with real-time updates and team collaboration features.",
        techStack: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
        githubUrl: "https://github.com/yourusername/project2",
        liveUrl: "https://project2.vercel.app",
        featured: true,
    },
    {
        id: 3,
        title: "AI Content Generator",
        description: "AI-powered content generation tool using OpenAI API for creating blog posts and marketing copy.",
        techStack: ["Next.js", "OpenAI API", "Vercel AI SDK", "Tailwind CSS"],
        githubUrl: "https://github.com/yourusername/project3",
        liveUrl: "https://project3.vercel.app",
        featured: false,
    },
];

export const experience = [
    {
        id: 1,
        title: "Software Engineer Intern",
        company: "Tech Company Inc.",
        location: "Remote",
        period: "Jun 2024 - Aug 2024",
        description: [
            "Developed and maintained web applications using React and Node.js",
            "Collaborated with cross-functional teams to deliver features on time",
            "Improved application performance by 30% through code optimization",
        ],
    },
    {
        id: 2,
        title: "Research Assistant",
        company: "University Research Lab",
        location: "Campus",
        period: "Jan 2024 - May 2024",
        description: [
            "Conducted research on machine learning applications in web development",
            "Published findings in academic conferences",
            "Developed proof-of-concept applications using Python and TensorFlow",
        ],
    },
    {
        id: 3,
        title: "Freelance Web Developer",
        company: "Self-Employed",
        location: "Remote",
        period: "Sep 2023 - Present",
        description: [
            "Built custom websites for small businesses and startups",
            "Managed client relationships and project timelines",
            "Delivered 15+ projects with 100% client satisfaction",
        ],
    },
];

export const skills = {
    Languages: ["JavaScript", "TypeScript", "Python", "Java", "SQL"],
    Frameworks: ["React", "Next.js", "Node.js", "Express", "Tailwind CSS"],
    Tools: ["Git", "Docker", "VS Code", "Figma", "Postman"],
    Databases: ["PostgreSQL", "MongoDB", "Redis", "MySQL"],
    "AI/ML": ["OpenAI API", "TensorFlow", "Scikit-learn", "Pandas"],
};
