const portfolioData = {
  profile: {
    name: "Faisal Saleh",
    initials: "FS",
    role: "Full Stack Developer",
    specialty: "C# · .NET · JavaScript",
    location: "Bekasi, Indonesia",
    availability: "Open to remote / hybrid",
    phone: "+62 812-8399-3386",
    email: "faisal.saleh127@gmail.com",
    summary:
      "Full Stack Developer with nearly 4 years of professional experience developing and maintaining 7+ enterprise web applications for logistics, warehousing, and port operations, collectively supporting approximately 100 users. Strong background in .NET, SQL Server, and JavaScript, with hands-on experience in REST API integration, application deployment, and production support using IIS and Windows Server. Additional experience with the MERN stack, alongside hands-on projects involving AWS Cloud, Docker, Linux, and CI/CD pipelines.",
  },

  socialLinks: {
    github: "https://github.com/FaisalSaleh2202",
    linkedin: "https://linkedin.com/in/faisal-saleh-9a9368186",
  },

  achievements: [
    {
      icon: "7+",
      title: "Enterprise Applications",
      description: "Applications supporting logistics and operational workflows",
    },
    {
      icon: "~100",
      title: "Active Users",
      description: "Users supported across business and operational teams",
    },
    {
      icon: ".NET",
      title: "Backend Focus",
      description: "ASP.NET Web Forms, ASP.NET Core, C#, VB.NET, and REST APIs",
    },
    {
      icon: "AWS",
      title: "Cloud & DevOps",
      description: "AWS, Docker, Linux, and CI/CD pipelines",
    },
  ],

  experience: [
    {
      period: "Jul 2023 — Present",
      title: ".NET Developer",
      place: "Agung Logistics",
      location: "Indonesia",
      bullets: [
        "Develop and maintain 7+ enterprise web applications supporting approximately 100 users collectively across logistics, warehousing, shipping, and port operations, primarily using ASP.NET Web Forms, VB.NET, SQL Server, and JavaScript.",
        "Translate requirements from operational users and management into application features, UI workflows, and system enhancements.",
        "Build REST API integrations to exchange operational data between internal applications.",
        "Write SQL Server queries and implement database schema changes for reporting, data processing, and new features.",
        "Developed an Excel-based bulk import feature for the PDPLB Import system, enabling users to process SPK, Container, and Manifest data through a single import operation, replacing three separate manual data-entry workflows.",
      ],
      keySystems: [
        "PDPLB Import",
        "Warehouse Cargo Local",
        "CRM",
        "PBM Services",
        "Vessel Management",
        "TQA & BNF",
        "Reach Stacker Digital Checksheet",
      ],
      technologies: [
        "ASP.NET Web Forms",
        "VB.NET",
        "C#",
        "JavaScript",
        "Microsoft SQL Server",
        "HTML",
        "CSS",
        "REST API",
        "IIS",
        "Windows Server",
        "Git",
      ],
    },
    {
      period: "Aug 2021 — Jan 2022",
      title: "Web Developer Intern",
      place: "PT Petrokimia Gresik",
      location: "Gresik, Indonesia",
      bullets: [
        "Developed full stack web application features using the MERN stack: MongoDB, Express.js, React.js, and Node.js.",
        "Built responsive user interfaces using React.js and Tailwind CSS.",
      ],
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Tailwind CSS"],
    },
  ],

  projects: [
    {
      number: "01",
      title: "Multi-Company ERP",
      type: "Full Stack Web Application",
      description:
        "A full stack ERP web application with an ASP.NET Core and C# backend, an Angular and Tailwind CSS frontend, and PostgreSQL data persistence.",
      technologies: ["C#", "ASP.NET Core", "Angular", "Tailwind CSS", "PostgreSQL"],
      accent: "from-sky/25 to-blue-500/5",
      deployment: ["Git", "GitHub Actions", "Docker", "Amazon ECR", "Amazon EC2"],
      highlights: [
        "Developed the backend, frontend, and data persistence for a multi-company ERP web application.",
        "Implemented containerized deployment using Docker, GitHub Actions, Amazon ECR, and Amazon EC2.",
      ],
      liveUrl: "https://47.130.47.165/login",
    },
  ],

  skills: [
    {
      category: "Languages",
      items: ["C#", "VB.NET", "JavaScript", "SQL"],
    },
    {
      category: "Backend",
      items: ["ASP.NET Web Forms", "ASP.NET Core", "Node.js", "Express.js", "REST APIs"],
    },
    {
      category: "Frontend",
      items: ["Angular", "React.js", "Tailwind CSS"],
    },
    {
      category: "Databases",
      items: ["Microsoft SQL Server", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS", "Docker", "Linux", "CI/CD Pipelines"],
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "IIS", "Windows Server"],
    },
  ],

  education: [
    {
      period: "Jan 2018 — Jun 2022",
      title: "Bachelor's Degree in Information Technology",
      place: "Universitas Indraprasta PGRI (UNINDRA)",
    },
  ],

  languages: [
    {
      name: "Indonesian",
      level: "Native",
    },
    {
      name: "English",
      level: "Intermediate; strong listening comprehension, working-level speaking and writing",
    },
  ],
};

export default portfolioData;
