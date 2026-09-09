/**
 * ============================================================
 *  SITE DATA
 * ============================================================
 * This is the ONLY file you need to touch to add a new project
 * or a new work experience. Everything on the page is generated
 * from the arrays below by js/main.js — no HTML editing required.
 *
 * TO ADD A NEW PROJECT:
 *   Copy one object inside PROJECTS, paste it at the top of the
 *   array, and fill in your own values. That's it — save the
 *   file and refresh the page.
 *
 * TO ADD A NEW JOB / EXPERIENCE:
 *   Same idea, inside the EXPERIENCE array.
 *
 * You can also do this without touching code at all — open the
 * site, click "+ Add record" in the Projects section, fill the
 * form, and click "Copy code for data.js". It writes the exact
 * object below for you to paste in.
 * ============================================================
 */

const SITE_DATA = {
  profile: {
    name: "Vengateshwaran A",
    role: "Full Stack Web Developer",
    location: "Manamadurai, Tamil Nadu, India",
    email: "vengateshwaran1510@gmail.com",
    phone: "+91 63744 61442",
    linkedin: "https://www.linkedin.com/in/vengateshwaran-a-4259ab251",
    github: "https://github.com/Vengateshwaran1510",
    summary:
      "I build web applications end to end — from the schema up. One year of hands-on experience shipping Angular frontends, PHP/Java backends and REST APIs on top of optimized MySQL databases, across e-commerce, healthcare and directory platforms.",
    status: "Open to full-time roles",
  },

  stats: [
    { value: "1", label: "Year of professional experience" },
    { value: "5+", label: "End-to-end projects delivered" },
    { value: "100%", label: "Project completion rate" },
  ],

  // Order = display order, top of array shows first.
  experience: [
    {
      id: "EXP-003",
      role: "Junior Web Developer",
      company: "Vlykit Solutions Pvt Ltd",
      location: "Remote",
      start: "Apr 2025",
      end: "Apr 2026",
      stack: ["PHP", "SQL", "Angular", "Java", "REST APIs", "HTML5", "CSS3", "JavaScript"],
      points: [
        "Engineered and deployed 5 dynamic web applications using PHP and SQL, improving query performance by optimizing database structures and indexes.",
        "Developed responsive web applications with Angular, keeping the experience consistent across desktop, tablet and mobile.",
        "Integrated RESTful APIs with a Java backend, enabling efficient data flow between frontend and server-side components.",
      ],
    },
    {
      id: "EXP-002",
      role: "Full Stack Developer Intern",
      company: "Vlykit Solutions Pvt Ltd",
      location: "Remote",
      start: "Jan 2025",
      end: "Apr 2025",
      stack: ["HTML5", "CSS3", "JavaScript", "SQL", "API Integration"],
      points: [
        "Built and integrated features across the stack using HTML5, CSS3, JavaScript and SQL.",
        "Worked directly with REST APIs to connect frontend views to live backend data.",
      ],
    },
    {
      id: "EXP-001",
      role: "Full Stack Developer Intern",
      company: "VEI Technology",
      location: "Tindivanam, India",
      start: "Jun 2024",
      end: "Jul 2024",
      stack: ["HTML5", "CSS3", "JavaScript", "SQL", "Debugging Tools"],
      points: [
        "Facilitated troubleshooting and resolution of technical issues, reducing website downtime by identifying and fixing critical bugs.",
        "Conducted website performance analysis using developer tools to identify bottlenecks and optimize load times.",
      ],
    },
  ],

  // Order = display order, top of array shows first.
  projects: [
    {
      id: "PRJ-005",
      name: "Jewellery E-Commerce Website",
      description:
        "A full-featured online jewellery platform with secure payment integration. Built a product catalog with search and filter functionality that improved user navigation and conversion.",
      stack: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
      link: "",
    },
    {
      id: "PRJ-004",
      name: "E-Commerce Website for Fenestration Products",
      description:
        "A complete e-commerce solution with shopping cart, inventory management and payment gateway integration, built with cross-functional teams to keep checkout end-to-end and seamless.",
      stack: ["HTML", "CSS", "JS", "PHP", "SQL"],
      link: "",
    },
    {
      id: "PRJ-003",
      name: "Matrimony Website",
      description:
        "A responsive matrimony portal with user authentication and profile management. Login is secured with encrypted password storage and session management.",
      stack: ["HTML", "CSS", "JS", "PHP"],
      link: "",
    },
    {
      id: "PRJ-002",
      name: "Doctor Consulting Website",
      description:
        "A patient-facing interface for booking consultations, managing appointments and maintaining health profiles, with calendar functionality and appointment reminders.",
      stack: ["HTML", "CSS", "JS", "PHP", "SQL"],
      link: "",
    },
    {
      id: "PRJ-001",
      name: "E-Commerce Website for Grocery",
      description:
        "An online grocery platform with real-time inventory tracking and order management. Regular performance analysis kept page load times fast.",
      stack: ["HTML", "CSS", "JS", "PHP", "SQL"],
      link: "",
    },
  ],

  skills: {
    Frontend: ["HTML5", "CSS3", "JavaScript (ES6+)", "Angular", "Bootstrap", "Responsive Web Design"],
    Backend: ["PHP", "Java", "RESTful API Development", "API Integration"],
    Database: ["SQL", "MySQL", "Database Design & Optimization"],
    "Tools & Practices": ["Git", "Version Control", "Agile Methodologies", "Cross-browser Compatibility"],
  },

  education: [
    { school: "CARE College of Engineering", credential: "B.E. — Computer Science & Engineering", year: "2021 – 2025" },
    { school: "Velammal Matric Hr Sec School", credential: "HSC", year: "2021" },
    { school: "Velammal Matric Hr Sec School", credential: "SSLC", year: "2019" },
  ],

  achievements: [
    "Zonal Medalist, Anna University Sports Board",
    "Best Performer in Extra-Curricular Activities",
  ],

  softSkills: [
    "Problem Solving",
    "Adaptability",
    "Leadership",
    "Time Management",
    "Team Collaboration",
    "Quick Learner",
    "Attention to Detail",
  ],
};
