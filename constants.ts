import { ProfileData } from './types';

export const PORTFOLIO_DATA: ProfileData = {
  name: "Yogayata Verma",
  title: "",
  summary: "A Web Developer with 1+ year of experience in web development, AI integration, and system design, specializing in full-stack, microservices, API integration, and databases. Passionate about building scalable solutions and elevating system performance.",
  navLinks: [
    { label: "home", url: "/" },
    { label: "projects", url: "/projects" },
    { label: "blog", url: "/blog" },
    { label: "github", url: "https://github.com/yogayataverma" },
    { label: "linkedin", url: "https://www.linkedin.com/in/yverma2000/" }

  ],
  experience: [
    {
      role: "Web Developer",
      company: "Onclick Innovations Private Limited",
      period: "Oct 2025 - Present",
      responsibilities: [
        "Pegasus: Contributed to a microservice-based healthcare system focused on digitizing the end-to-end workflow of clinical sample collection, storage, tracking, and report dispatch. Developed a dedicated microservice for accurate sample-to-building allocation.",
        "Strengthened system observability by implementing comprehensive logging and activity tracking, enabling faster debugging. Improved overall performance through service-level optimizations.",
        "Collaborated effectively within a cross-functional team to enhance system reliability, scalability, and operational efficiency.",
        "NousTalk: Extended and optimized an Online Counselling Platform by adding key features such as real-time video calling for sessions, online appointment scheduling, group chats, note-taking, and AI assistance, while resolving pre-existing bugs.",
        "Built using microservices architecture and MySQL. Applied logging, caching, throttling techniques, and PayPal Payment Gateway integration to enhance system reliability and scalability.",
        "Implemented best practices for consistent development, testing, and seamless delivery across environments. Strengthened system security and data integrity by applying proper validations, sanitization, and access control."
      ],
      skills: "Skills: Microservices, Node.js, MySQL, PayPal API, Logging, Caching, Video Calling, AI Integration"
    },
    {
      role: "Software Trainee",
      company: "Impinge Solutions",
      period: "Apr 2024 - Jul 2025",
      responsibilities: [
        "Convo: Developed and delivered a scalable real-time chat application using Socket.IO and Node.js, supporting text, multimedia, and group chats.",
        "Leveraged Redis for caching frequently accessed data to improve response times. Persisted chat history in MongoDB with compound indexes on senderId and timestamp for efficient retrieval.",
        "Implemented encryption for all message payloads and integrated JWT authentication for secure sessions. Collaborated with a cross-functional team to optimize performance and ensure seamless integration across services.",
        "LotteryWheel: Developed a high-performance lottery platform with QR code-based entry, capable of processing 10,000+ scans per minute during peak loads.",
        "Developed store onboarding workflows and interactive dashboards to track participant metrics. Implemented a real-time winner selection and notification system, driving a 35% boost in user participation.",
        "Integrated a dashboard for seamless export and tracking of winner and participant data across campaigns. Built a dedicated Java service to automatically fetch updated PDF reports, generate summaries, and email them to stakeholders on a scheduled basis."
      ],
      skills: "Skills: Socket.IO, Node.js, Redis, MongoDB, JWT, Java, QR Codes, Real-time Systems"
    },
    {
      role: "Decision Analytics Intern",
      company: "EXL Services",
      period: "Jan 2023 - Jul 2023",
      responsibilities: [
        "Developed rapid web application prototypes for the insurance industry using React, Node.js, and Express, consuming MySQL-stored data via RESTful APIs.",
        "Designed and implemented interactive visualizations with Chart.js and Canvas to display key performance metrics (KPIs) such as conversion rate and premium value.",
        "Collaborated with stakeholders in weekly sprint reviews; incorporated feedback to refine UI/UX, resulting in a 20% improvement in dashboard adoption among end users.",
        "Implemented modular component design to maximize code reuse and reduce development time. Integrated JWT-based authentication and role-based access control to secure sensitive KPI data."
      ],
      skills: "Skills: React, Node.js, Express, MySQL, Chart.js, JWT, RESTful APIs"
    }
  ],
  projects: [
    {
      title: "Pegasus Healthcare System",
      description: "Microservice-based healthcare system for digitizing clinical sample collection, storage, tracking, and report dispatch. Developed dedicated microservice for accurate sample-to-building allocation with comprehensive logging and activity tracking.",
      techStack: ["Microservices", "Node.js", "MySQL", "Logging", "Healthcare"],
      link: "#"
    },
    {
      title: "NousTalk - Online Counselling Platform",
      description: "Extended online counselling platform with real-time video calling, appointment scheduling, group chats, note-taking, and AI assistance. Implemented PayPal payment gateway, caching, throttling, and security best practices.",
      techStack: ["Microservices", "MySQL", "Video Calling", "PayPal API", "AI Integration", "Node.js"],
      link: "#"
    },
    {
      title: "Convo",
      description: "A scalable real-time chat application using Socket.IO and Node.js, supporting text, multimedia, and group chats. Features Redis caching, MongoDB persistence, encryption, and JWT authentication for secure sessions.",
      techStack: ["Socket.IO", "Node.js", "Redis", "MongoDB", "JWT", "Encryption"],
      link: "https://connectify-connect.netlify.app/"
    },
    {
      title: "LotteryWheel",
      description: "A high-performance lottery platform with QR code-based entry, processing 10,000+ scans per minute. Features real-time winner selection, participant tracking dashboards, and automated PDF report generation with email notifications.",
      techStack: ["Node.js", "Java", "QR Codes", "Real-time Processing", "Email Integration"],
      link: "https://lotterywheel.netlify.app/"
    }
  ],
  skills: [
    {
      category: "Programming Languages",
      items: "C++, Java, Python, JavaScript, TypeScript, PHP, HTML, CSS"
    },
    {
      category: "Frameworks & Libraries",
      items: "React.js, Node.js, Express.js, Tailwind CSS, Django, Flask, Angular, Redux Toolkit, Socket.io"
    },
    {
      category: "Database",
      items: "SQL, MySQL, MongoDB, SQLite3, PostgreSQL"
    },
    {
      category: "DevOps & Cloud",
      items: "Git, Jenkins, Docker, Linux, CI/CD, AWS, S3, Kubernetes, GCP"
    },
    {
      category: "Tools & Technologies",
      items: "Postman, Swagger, Selenium, Redis, JWT, OpenAI API, PayPal, Chart.js, Webhooks, Ollama, OAuth"
    }
  ],
  socials: [
    { label: "email", url: "mailto:yogayatajugnu@gmail.com" },
    { label: "linkedin", url: "https://www.linkedin.com/in/yverma2000/" },
    { label: "X", url: "https://x.com/yogayataverma" },
    { label: "github", url: "https://github.com/yogayataverma" },
    { label: "leetcode", url: "https://www.leetcode.com/u/yogayataverma" },
    { label: "hackerrank", url: "https://www.hackerrank.com/yogayatajugnu" },
  ]
};