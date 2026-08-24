export const siteData = {
  basicInfo: {
    name: "Mahamodon Nabi Shafin",
    shortName: "Nabi Shafin",
    title: "Full-Stack Developer (MERN)",
    email: "shafin21215@gmail.com",
    phoneSite: "+8801616539735",
    phoneCV: "+8801758056337",
    location: "Cumilla, Bangladesh (based) / Dhaka, Bangladesh (current role)",
    github: "https://github.com/nabishafin",
    linkedin: "https://www.linkedin.com/in/nabi-shafin/",
    resume: "https://www.nabishafin.info/Mahamodon%20Nabi%20Shafin%20Full%20Stack%20Developer%20-Resume.pdf",
    availability: "Open to relocate or work remotely; open to on-site and remote opportunities",
    languages: ["Bengali (Native)", "English (Professional Working Proficiency)"],
    interests: ["Open-Source Contributing", "UI/UX Design Trends", "Exploring Emerging Web Technologies"],
  },
  hero: {
    tagline1: "Developer",
    tagline2: "Hey, I'm Nabi Shafin, Full-Stack Developer",
    tagline3: "I build flawless digital apps by crafting websites with a user-centric approach. If you're looking for a developer that loves to get stuff done.",
    altTagline: "Welcome to My World! Hi, I'm Nabi Shafin. I build professional & creative web solutions. Feel free to explore!",
    mainTagline: "Crafting high-performance digital experiences with a focus on precision, efficiency, and stunning aesthetics. Let's build something extraordinary together.",
    highlights: {
      teamwork: "I am always eager to collaborate on innovative projects. I believe strong teamwork is the foundation of great products, and I enjoy working with others to create smooth workflows and deliver high-quality results.",
      learner: "I'm always eager to learn and stay updated with the latest technologies. I enjoy exploring new tools, frameworks, and architectures to improve my development skills and build smarter solutions.",
    },
  },
  about: {
    summary1: "Software Developer with 1.5+ years of experience in building responsive and user-friendly web applications using HTML, CSS, JavaScript, React, and Next.js. Specializes in writing clean, scalable, and maintainable code with a strong focus on solving real-world problems.",
    summary2: "Experienced in modern web architectures, REST APIs, and state management. With a background in both frontend (Next.js/React) and backend (Node.js/Express/MongoDB), delivers robust digital solutions with seamless UX across global development environments.",
    summary3: "Proficient in a versatile modern stack including TypeScript, JavaScript, and advanced front-end frameworks like React JS and Next JS. Leverages Node.js and Express.js for scalable backend architectures and RESTful APIs.",
    summary4: "Expertise includes Problem Solving, Debugging, RTK Query, and secure JWT Authentication flows. Passionate about performance optimization, SEO, and using modern UI libraries like @shadcn/ui and Ant Design for premium user experiences.",
    cards: {
      expertise: "My focus lies in building flawlessly responsive user interfaces and integrating robust functionality. I consistently adapt to new technologies, ensuring that the applications I build are future-ready, secure, and highly optimized.",
      communication: "I believe clear and effective communication is key to successful teamwork. I ensure ideas, progress, and feedback are shared openly to keep projects on track and goals aligned.",
    }
  },
  experience: [
    {
      role: "Full-Stack Developer",
      company: "Spark Tech Agency",
      duration: "March 2025 – Present",
      location: "Dhaka, Bangladesh",
      summary: "Architecting responsive pet care platforms and integrating complex backend systems.",
      projects: [
        {
          name: "Wuffoos",
          url: "https://wuffoos.com",
          details: [
            "Architected a responsive pet care platform using Next.js and React.js.",
            "Integrated Node.js/Express REST APIs with SSR & Static Generation for optimized performance.",
            "Implemented state management with Redux Toolkit and real-time chat with Socket.io.",
            "Built secure client-side authentication flows using JWT.",
            "Collaborated with backend team to seamlessly integrate REST APIs with frontend data fetching.",
            "Leveraged Next.js SSR/SSG to significantly improve Core Web Vitals and SEO rankings.",
            "Worked in agile environment translating Figma mockups into production-ready code."
          ]
        }
      ]
    },
    {
      role: "Frontend Developer",
      company: "Legier Beteiligungs",
      duration: "May 2025 – Feb 2026",
      location: "Germany (Remote)",
      summary: "Developed high-performance frontends for digital newspaper and crypto platforms.",
      crossRoleDetails: [
        "Performance Optimization: improved web performance and SEO for all managed projects.",
        "Remote Collaboration: worked effectively in a distributed team using Git and modern comms tools."
      ],
      projects: [
        {
          name: "Newspaper Platform",
          url: "https://legiergroup.com",
          details: [
            "Developed high-performance responsive frontend focusing on content delivery and user engagement.",
            "Optimized web performance and SEO, resulting in faster load times."
          ]
        },
        {
          name: "Scandic Coin",
          url: "https://scandiccoin.dev",
          details: [
            "Built modern UI for a cryptocurrency platform.",
            "Integrated Web3.js for secure wallet connectivity.",
            "Used Redux Toolkit for efficient state management."
          ]
        },
        {
          name: "SNC-DOMAIN",
          url: "",
          details: [
            "Led frontend development for a premium web portal.",
            "Ensured seamless navigation across all devices."
          ]
        }
      ]
    }
  ],
  skills: {
    frontend: [
      "React.js", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS",
      "Redux / RTK", "TanStack Query", "shadcn/ui", "Ant Design", "Chakra UI"
    ],
    backend: [
      "Node.js", "Express.js", "RESTful APIs", "JWT Authentication", "MongoDB"
    ],
    cloudTools: [
      "AWS", "Vercel", "Firebase", "Git, GitHub", "Postman, Swagger", "Zod", "DaisyUI"
    ],
    key: ["Problem Solving", "Debugging", "Responsive UI", "Cross-Browser Support", "CORS"]
  },
  education: [
    {
      period: "2021–2025",
      credential: "B.Sc. in Electrical and Electronic Engineering (EEE)",
      institution: "University of Scholars",
      location: "Dhaka, Bangladesh",
      result: "3.20/4.00"
    },
    {
      period: "2018–2021",
      credential: "Diploma in Electrical Engineering",
      institution: "Comilla Polytechnic Institute",
      location: "Comilla, Bangladesh",
      result: "3.34/4.00"
    },
    {
      period: "2016–2018",
      credential: "Secondary School Certificate (SSC)",
      institution: "Comilla Modern High School",
      location: "Comilla, Bangladesh",
      result: "4.955/5.00"
    }
  ],
  projects: [
    {
      id: "01",
      title: "Global News",
      url: "https://legiergroup.com",
      description: "Developed and maintained a modern corporate website for LEGIER Media Group, an international media and technology company headquartered in Berlin. Showcases the company's global media network, business divisions, and corporate services through a responsive, SEO-optimized, multilingual web experience.",
      features: [
        "Responsive UI & reusable components with Next.js, React.js, TypeScript — cross-browser compatible across desktop/tablet/mobile.",
        "Multilingual & dynamic content with localization support, integrated APIs, dynamic content for multiple business divisions.",
        "Performance & SEO optimization via SSR, strong Core Web Vitals.",
        "Scalable component architecture, close collaboration with designers/stakeholders in agile environment."
      ],
      tech: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit"]
    },
    {
      id: "02",
      title: "Wuffoos",
      url: "https://wuffoos.com",
      description: "Developed a responsive/scalable full-stack pet care platform enabling users to explore and access pet-related services (grooming, health care, general assistance), manage pet profiles, book appointments, and interact with service providers.",
      features: [
        "Frontend built with Next.js and React.js — modern, scalable, high-performance.",
        "Node.js/Express REST APIs for data fetching and frontend-backend communication.",
        "SSR + SSG for performance, loading speed, SEO, and Core Web Vitals.",
        "Complex state management via Redux Toolkit (RTK Query) — maintainable, predictable state.",
        "Real-time chat via Socket.io.",
        "Secure JWT authentication protecting private routes and sensitive data.",
        "Booking system for appointments + dedicated admin panel.",
        "Collaborated with designers/backend engineers, translating Figma designs into responsive, reusable, production-ready UI in an agile environment."
      ],
      tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Mongoose"]
    },
    {
      id: "03",
      title: "PeekSms",
      url: "#",
      description: "Web-based SMS receiving platform allowing users to purchase real phone numbers and receive OTPs/messages securely. Users pay with cryptocurrency and instantly receive a temporary phone number for a set duration based on their plan. Numbers can be used to receive OTPs/verification messages without exposing personal numbers — privacy and security focused. Reliable, seamless experience for SMS-based verification across services.",
      features: [],
      tech: ["Next.js", "Node.js", "Express.js", "MongoDB", "Redux Toolkit"]
    }
  ]
};
