import { summary } from "framer-motion/client";

export const profile = {
  name: "Mohammad Saifullah Ansari",
  role: "Full-Stack Developer",
  location: "Delhi, India",
  coreTech: "React · Java · Spring Boot · Node.js · Express.js · MySQL",
  email: "saifa5098@gmail.com", 
   experience: "3+ Years",
  phone: "+91 70919 05601",
  tracking: "MSA-DEV-2022",
summary:
    "Full-Stack Developer with 3+ years of professional experience designing and developing scalable web applications using React, Java, Spring Boot, Node.js, Express.js, and MySQL. Experienced in building real-world business applications including logistics management systems, vehicle tracking platforms, HR and documentation systems, and machine maintenance dashboards. Strong understanding of REST APIs, database management, responsive UI development, and full-stack application architecture.",
    summary2: "I am a results-driven Full-Stack Developer who enjoys turning business requirements into reliable, scalable, and user-friendly software solutions. My experience covers both frontend and backend development, including React-based interfaces, Java/Spring Boot APIs, Node.js applications, database management, authentication, dashboards, and application integration. I have worked on production systems supporting logistics operations, employee management, documentation, vehicle tracking, and equipment maintenance."
};

export const skillCrates = [
  {
    label: "Languages",
    code: "01",
    items: ["JavaScript", "Java"],
  },
  {
    label: "Frameworks & Libraries",
    code: "02",
    items: ["React", "Node.js","Spring Boot", "Express", "Redux Toolkit", "Bootstrap", "Tailwind CSS", "Material UI"],
  },
  {
    label: "Tools",
    code: "03",
    items: ["VS Code", "GitHub", "GitLab"],
  },
  {
    label: "Cloud Platforms",
    code: "04",
    items: ["AWS"],
  },
  {
    label: "Databases",
    code: "05",
    items: ["MongoDB (NoSQL)", "MySQL"],
  },
];

export const route = [
  {
    id: "edu",
    kind: "Origin",
    date: "Aug 2018 — Jun 2022",
    title: "B.Tech, Computer Science",
    org: "IES Institute of Technology and Management",
    detail: "Graduated with a CGPA of 7.64. Foundation stop — where the algorithms, data structures and the first lines of code got loaded onto the truck.",
    status: "CLEARED",
  },
  {
    id: "cert1",
    kind: "Checkpoint",
    date: "2023",
    title: "Java Full-Stack Developer",
    org: "KodNest, Bangalore",
    detail: "Intensive full-stack certification covering Java, React, and production-grade backend patterns.",
    status: "CERTIFIED",
  },
  {
    id: "cert2",
    kind: "Checkpoint",
    date: "2023",
    title: "AWS Cloud Technical Essentials",
    org: "Coursera",
    detail: "Core AWS services, deployment fundamentals, and cloud infrastructure essentials.",
    status: "CERTIFIED",
  },
  {
    id: "job",
    kind: "Destination",
    date: "April 2023 — May 2026",
    title: "Full-Stack Developer",
    org: "Gautam Solar Pvt Ltd, Delhi",
    detail:
      "Delivered Many internal systems end to end: a logistics dashboard, an HR/documentation backend, and a machine-maintenance tracker.",
    status: "DELIVERED",
  },
];

export const jobHighlights = [
  {
    title: "Logistics Management",
    stack: "React · Redux · Tailwind CSS",
    detail:
      "Built a scalable frontend to manage solar-panel orders and dispatch tracking, with SIM-based and Fastag vehicle tracking wired in.",
    // metrics: [
    //   { value: "-30%", label: "delivery delays" },
    //   { value: "-20%", label: "logistics cost" },
    // ],
  },
  {
    title: "Documentation & HR System",
    stack: "Spring Boot · MySQL",
    detail:
      "Engineered the backend that automated employee onboarding and audit processes end to end.",
    // metrics: [
    //   { value: "-40%", label: "paperwork errors" },
    //   { value: "+50%", label: "processing speed" },
    // ],
  },
  {
    title: "Machine Maintenance",
    stack: "React · Dashboard UI",
    detail:
      "Designed a front-end dashboard to track maintenance schedules and flag machines before they broke down.",
    // metrics: [
    //   { value: "-25%", label: "machine downtime" },
    // ],
  },
];

export const shipments = [
  {
    id: "PKG-01",
    name: "RentalWave",
    status: "DELIVERED",
    statusColor: "green",
    tagline: "Full-stack property listing platform",
    detail:
      "Property discovery platform with secure authentication, dynamic search filters, and direct owner-to-renter interaction — built for a smooth, no-broker search experience.",
    tools: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    id: "PKG-02",
    name: "Logistics Management System",
    status: "DELIVERED",
    statusColor: "amber",
    tagline: "Real-time vehicle tracking & dispatch",
    detail:
      "Full-stack logistics platform with real-time vehicle tracking, automated dispatching, and a live dashboard for shipment and delivery status.",
    tools: ["SQl", "Spring Boot", "React", "Java"],
  },
];

// TODO: swap in your real LinkedIn/GitHub profile URLs before publishing.
export const contact = {
  email: "saifa5098@gmail.com",
  phone: "+91 70919 05601",
  location: "Delhi, India",
  // linkedin: "https://linkedin.com/in/your-handle",
  github: "https://github.com/Saifullah-ansari",
  //  github2: "https://github.com/Saifullah-ansari",
};
