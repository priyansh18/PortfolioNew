const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Abhishek Jaglan | Portfolio",
  description:
    "A Full Stack Web Developer who thrives on providing solution based custom Backend Systems, and a blend of Frontend Technologies",
  og: {
    title: "Abhishek Portfolio",
    type: "website",
    url: "http://rohankokkula.ml/",
  },
};

//Home Page
const greeting = {
  title: "Hi 👋!",
  sub: "Abhishek Jaglan",
  logo_name: "Abhishek Jaglan",
  resumeLink: "https://drive.google.com/file/d/1bCq1rdLJwN6pC_sqh9tCkyTpuyIyvzEm/view?usp=sharing",
};

// home logos
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "Github",
      iconifyClassname: "simple-icons:github",
      style: {
        color: "white",
      },
      profileLink: "https://github.com/abhishekjaglan",
    },
    {
      siteName: "GeeksforGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#2F8D46",
      },
      profileLink: "https://www.geeksforgeeks.org/user/jaglanabhishek08/",
    },
    // {
    //   siteName: "HackerRank",
    //   iconifyClassname: "simple-icons:hackerrank",
    //   style: {
    //     color: "#2EC866",
    //   },
    //   profileLink: "https://www.hackerrank.com/rohankokkula01",
    // },
    // {
    //   siteName: "Kaggle",
    //   iconifyClassname: "simple-icons:kaggle",
    //   style: {
    //     color: "#20BEFF",
    //   },
    //   profileLink: "https://www.kaggle.com/rohan0301",
    // },
    // {
    //   siteName: "Hackerearth",
    //   iconifyClassname: "simple-icons:hackerearth",
    //   style: {
    //     color: "#323754",
    //   },
    //   profileLink: "https://www.hackerearth.com/@rohankokkula",
    // },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#FFA116",
      },
      profileLink: "https://leetcode.com/u/jaglanabhishek08/",
    },
    {
      siteName: "CodeStudio",
      iconifyClassname: "simple-icons:codingninjas",
      style: {
        color: "#DD6620",
      },
      profileLink: "https://www.naukri.com/code360/profile/jaglanabhishek",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/abhishek-jaglan-041218160/",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Backend Development",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Proficient in building high-performance backend services using Node.js and TypeScript, with a focus on creating maintainable and scalable RESTful APIs",
        "⚡ Experienced in designing and implementing database solutions using both NoSQL (MongoDB) and SQL (MySQL, Postgres) databases, with skills in query optimization and data modeling",
        "⚡ Adept at leveraging backend frameworks and tools such as Express.js, NestJS, and Cloudflare workers to develop secure and efficient server-side applications",
        "⚡ Demonstrates a strong understanding of backend architecture, including microservices, message queues (Kafka), and cloud services, with ongoing learning in advanced deployment technologies like Kubernetes and AWS",
      ],
      softwareSkills: [
        {
          skillName: "Node.js",
          fontAwesomeClassname: "logos-nodejs",
          style: {
            backgroundColor: "transparent",
            color: "#5FA04E"
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            backgroundColor: "transparent",
            color: "#3178C6"
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "ion-logo-javascript",
          style: {
            backgroundColor: "transparent",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            backgroundColor: "transparent",
            color: "#4169E1",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            backgroundColor: "transparent",
            color: "#47A248"
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            backgroundColor: "transparent",
            color: "#4479A1"
          },
        },
        {
          skillName: "Express.js",
          fontAwesomeClassname: "skill-icons:expressjs-light",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "NestJS",
          fontAwesomeClassname: "logos-nestjs",
          style: {
            backgroundColor: "transparent",
            color: "#E0234E"
          },
        },
        {
          skillName: "Next.js",
          fontAwesomeClassname: "ri:nextjs-line",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Kafka",
          fontAwesomeClassname: "logos-kafka",
          style: {
            backgroundColor: "transparet",
            // color: "#231F20"
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            backgroundColor: "transparent",
            color: "#2496ED"
          },
        },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "logos-kubernetes",
          style: {
            backgroundColor: "transparent",
            color: "#326CE5"
          },
        },
        {
          skillName: "AWS",
          fontAwesomeClassname: "logos-aws",
          style: {
            backgroundColor: "transparent",
            color: "#232F3E"
          },
        },
        // {
        //   skillName: "Micro-Services",
        //   fontAwesomeClassname: "logos-tableau",
        //   style: {
        //     backgroundColor: "transparent",
        //   },
        // },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Versatile full stack developer with strong capabilities in both client-side and server-side technologies, creating cohesive web applications using React.js, Next.js, Node.js, Express.js, MongoDB, and PostgreSQL",
        "⚡ Adept at bridging frontend and backend development, implementing features like secure user authentication with jwt and bcrypt, real-time data updates using react hooks, and optimized api consumption with axios across the stack",
        "⚡ demonstrates proficiency in full stack JavaScript/TypeScript development, leveraging frameworks and libraries such as ReactJS, Express.js, and NestJS on both ends to create efficient, scalable, and maintainable web applications",
        "⚡ Skilled in integrating various technologies and services, from frontend state management with Context API and useReducer to backend API development with Node.js, database operations using Mongoose and Prisma ORM, and third-party service integrations like Plaid and Dwolla",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Sass",
          fontAwesomeClassname: "simple-icons:sass",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "BootStrap",
          fontAwesomeClassname: "logos-bootstrap",
          style: {
            color: "#CC6699",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "Node.js",
          fontAwesomeClassname: "logos-nodejs",
          style: {
            backgroundColor: "transparent",
            color: "#5FA04E"
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    // {
    //   title: "UI/UX Design",
    //   fileName: "DesignImg",
    //   skills: [
    //     "⚡ Designing highly attractive user interfaces for mobile and web applications",
    //     "⚡ Customizing logo designs and building logos from scratch",
    //     "⚡ Creating the flow of application functionalities to optimize user experience",
    //     "⚡ Applying latest Design principles and experienced in product wireframing",
    //   ],
    //   softwareSkills: [
    //     {
    //       skillName: "Adobe XD",
    //       fontAwesomeClassname: "simple-icons:adobexd",
    //       style: {
    //         color: "#FF2BC2",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Illustrator",
    //       fontAwesomeClassname: "simple-icons:adobeillustrator",
    //       style: {
    //         color: "#FF7C00",
    //       },
    //     },
    //     {
    //       skillName: "Adobe Photoshop",
    //       fontAwesomeClassname: "simple-icons:adobephotoshop",
    //       style: {
    //         color: "#2fa3f7",
    //       },
    //     },
    //     {
    //       skillName: "Figma",
    //       fontAwesomeClassname: "simple-icons:figma",
    //       style: {
    //         color: "#F24E1E",
    //       },
    //     },
    //   ],
    // },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Backend/Full Stack projects and deploy them to web applications using cloud infrastructure.",
};

//project cards
// colors:[primary,secondary,success,danger,warning,info,light,dark,]
const projectcards = {
  list: [
    {
      title: "TrustWorth Bank",
      img_path: "trustworth.png",
      description:
        "A web dashboard for handling all your bank accounts at one place and perform transactions among those accounts using plaid and dwolla.",
      tags: [
        {
          lang: "Nextjs",
          color: "#004782",
        },
        {
          lang: "AppWrite",
          color: "#820032",
        },
        {
          lang: "Plaid",
          color: "#00a100",
        },
        {
          lang: "Dwolla",
          color: "#ff4b4b",
        },
        {
          lang: "Vercel",
          color: "#3c0095",
        },
        {
          lang: "TypeScript",
          color: "#c47206",
        },
        {
          lang: "Tailwind",
          color: "#820032",
        },
      ],
      link: "https://trust-worth.vercel.app/sign-in",
      code: "https://github.com/abhishekjaglan/TrustWorth-Bank",
      linkcolor: "white",
    },

    {
      title: "Medium",
      img_path: "medium.jpeg",
      description:
        "A clone of medium blogging website with user creation(auth), feed, and publish blogs built on ReactJs and Cloudflare",
      tags: [
        {
          lang: "JavaScript",
          color: "red",
        },
        {
          lang: "ReactJs",
          color: "#004782",
        },
        {
          lang: "Cloudflare",
          color: "#c47206",
        },
        {
          lang: "Hono",
          color: "#4257f5",
        },
        {
          lang: "Postgres",
          color: "#ff4b4b",
        },
        {
          lang: "Connection Pooling(Prisma)",
          color: "#00a100",
        },
        {
          lang: "Tailwind",
          color: "#820032",
        },
      ],
      link: "https://medium-frontend-lake.vercel.app/",
      code: "https://github.com/abhishekjaglan/Medium",
      linkcolor: "white",
    },
    {
      title: "QuickDel",
      img_path: "quickdel.jpeg",
      description:
        "A webapp to sign-in/sign-up to select food, add in cart, search for food, update cart and order online.",
      tags: [
        {
          lang: "JavaScript",
          color: "#004782",
        },
        {
          lang: "ReactJs",
          color: "#8700b0",
        },
        {
          lang: "NodeJs",
          color: "#c47206",
        },
        {
          lang: "Vercel",
          color: "#ff4b4b",
        },
        {
          lang: "MongoDB",
          color: "#3c0095",
        },
        {
          lang: "JWT/Bcrypt",
          color: "#ff4b4b",
        },
        {
          lang: "WebHooks",
          color: "#00a100",
        },
        {
          lang: "Rate-limiting",
          color: "#820032",
        },
      ],
      link: "",
      code: "https://github.com/abhishekjaglan/QuickDel",
      linkcolor: "white",
    },
    // {
    //   title: "Semantic Search APP",
    //   img_path: "project-03.png",
    //   description:
    //     "Demo of OpenAI's GPT-3 model on Semantic search using streamlit",
    //   tags: [
    //     {
    //       lang: "ongoing",
    //       color: "red",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //   ],
    //   link: "",
    //   code: "",
    //   linkcolor: "white",
    // },
    {
      title: "Notes Manager",
      img_path: "notesmanager.jpeg",
      description:
        "Developed scalable API using Node.js & Express.js, handling user authentication, note creation, search, sharing and security measures",
      tags: [
        {
          lang: "JavaScript",
          color: "#004782",
        },
        {
          lang: "Regex",
          color: "#8700b0",
        },
        {
          lang: "NodeJs",
          color: "#c47206",
        },
        {
          lang: "Express.js",
          color: "#ff4b4b",
        },
        {
          lang: "MongoDB",
          color: "#3c0095",
        },
        {
          lang: "JWT/Bcrypt",
          color: "#ff4b4b",
        },
        {
          lang: "DDoS",
          color: "#00a100",
        },
        {
          lang: "Rate-limiting",
          color: "#820032",
        },
      ],
      link: "",
      code: "https://github.com/abhishekjaglan/Notes---api",
      linkcolor: "white",
    },

    {
      title: "Employee Management",
      img_path: "employeemanagement.jpeg",
      description:
        "RESTful API that manages employees of an organisation and performs all CRUD operations, along with security checks and searching in NestJs",
      tags: [
        {
          lang: "JavaScript",
          color: "#004782",
        },
        {
          lang: "Regex",
          color: "#8700b0",
        },
        {
          lang: "NestJs",
          color: "#c47206",
        },
        {
          lang: "DTOs",
          color: "#ff4b4b",
        },
        {
          lang: "PostgreSQL",
          color: "#3c0095",
        },
        {
          lang: "JWT/Bcrypt",
          color: "#ff4b4b",
        },
        {
          lang: "CORS",
          color: "#00a100",
        },
        {
          lang: "Rate-limiting",
          color: "#820032",
        },
        {
          lang: "Logs",
          color: "#c47206",
        },
      ],
      link: "",
      code: "https://github.com/abhishekjaglan/EmployeeMang",
      linkcolor: "white",
    },
    // {
    //   title: "ActiWeight",
    //   img_path: "acti.gif",
    //   description:
    //     "ActiWeight is an Interactive Visualizer for understanding intuition behind 10 Activation Functions used in Neural Networks.",
    //   tags: [
    //     {
    //       lang: "python",
    //       color: "#004782",
    //     },
    //     {
    //       lang: "matplotlib",
    //       color: "#c47206",
    //     },
    //     {
    //       lang: "Streamlit",
    //       color: "#ff4b4b",
    //     },
    //     {
    //       lang: "Heroku",
    //       color: "#3c0095",
    //     },
    //   ],
    //   link: "https://www.youtube.com/watch?v=2vk9lQuX_1Q",
    //   code: "https://github.com/rohankokkula/Actiweight",
    //   linkcolor: "white",
    // },
  ],
};

const resumeleft = {
  left: {
    title: ["Experience"],
    data: [
      {
        title: "Software Engineer - 1",
        subtitle: "NCR Atleos",
        date: "Jun 2024 - Present",
        content: [
          "Engineered a high-performance RESTful API using Node.js and TypeScript, successfully replacing third-party software (NICS and SOUP) to seamlessly integrate AIM with CATM ARCS systems, demonstrating expertise in system integration and API development.",
          "Implemented advanced inter-server communication using Axios, adhering to SOLID and DRY principles, showcasing strong software architecture skills and ability to write clean, maintainable, and efficient code in complex enterprise environments.",
          "Developed a robust, production-ready solution incorporating comprehensive error handling, Winston logging for enhanced debugging, thorough testing practices, and streamlined deployment processes, illustrating end-to-end development capabilities and attention to code quality and reliability.",
          "Architected and implemented a full-stack job tracking system, leveraging React.js and Chart.js for a dynamic multi-page dashboard, Node.js with TypeScript for robust backend services, and PostgreSQL for efficient data management.",
          "Engineered an automated data pipeline using cron jobs to fetch and process metadata from diverse ERP datasources every 20 minutes, demonstrating expertise in real-time data integration and scheduled task management.",
          "Designed and deployed a scalable solution capable of handling at least 5 different job types, showcasing proficiency in complex data flows, API development, and end-to-end application deployment on production servers.",

        ],
      },
      {
        title: "Associate Software Developer",
        subtitle: "Integers.Ai",
        date: "May 2024 - Jun 2024",
        content: [
          "Worked on ad-hoc tasks in frontend team using AngularJS on a project based out of UAE",
          "Used git extensively as version control system",
        ],
      },
      {
        title: "Data Analyst Intern",
        subtitle: "The Shaadi Times",
        date: "May 2020 - July 2020",
        content: [
          "Analyzed COVID-19 and made report on its impact on UK transportation using R.",
          " Increased the accuracy/efficiency of projections by 30%-40% by using predictive model like ARIMA in conjunction with linear regression on up-to 7 diverse public datasets.",
        ],
      },
    ],
  },
};

const resumeright = {
  right: [
    {
      title: ["Education"],
      data: [
        {
          title: "Master’s in Science, Quantitative Finance",
          subtitle: "City, University of London,  London, UK",
          date: "2021 - 2022",
          content: ["CGPA: 6.0/10"],
        },
        {
          title: "Bachelor of Technology in Computer Science and Engineering",
          subtitle: "Guru Gobind Singh Indraprastha University, Delhi",
          date: "2017 - 2021",
          content: ["CGPA: 8.3/10"],
        },
      ],
    },
    {
      title: ["Ranks and Achivements"],
      data: [
        {
          title: "Ranks",
          content: [
            "#761/3156 in weekly contest rating at CodeStudio",
            "Level-7 Global Grandmaster weekly coder and problem solver at CodeStudio",
          ],
        },
        {
          title: "Achievements",
          content: [
            "Published a research paper in the IJSER journal written on “Covid-19 Trend Analysis using Machine Learning Techniques”",
            "Solved 500+ DSA problem solving questions",
            "Awarded PMSS scholarship throughout the bachelor’s degree.",
          ],
        },
      ],
    },
    // {
    //   title: ["Freelance Work"],
    //   data: [
    //     {
    //       title: "Consultancy Website",
    //       subtitle: "kidsworldeducationconsultants.com",
    //       content: [
    //         "Created and hosted a website for consultancy providers in Kids Education Domain",
    //       ],
    //     },
    //     {
    //       title: "Portfolio Website",
    //       subtitle: "pranavphulware.netlify.app",
    //       content: [
    //         "Built a personal Filmography portfolio for a friend and later hosted it at Netlify",
    //       ],
    //     },
    //   ],
    // },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "Tableau Analyst",
      subtitle: "Tableau",
      logo_path: "tabana-01.png",
      certificate_link:
        "https://www.credly.com/badges/2d43f401-7be0-407d-9a77-7477dda8cade/linked_in_profile",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Tableau Consumer",
      subtitle: "Tableau",
      logo_path: "tabcon-01.png",
      certificate_link:
        "https://www.credly.com/badges/e5befe7b-2eec-486f-b77e-bd2458c18b26/linked_in_profile",
      alt_name: "Tableau",
      color_code: "#000000",
    },
    {
      title: "Problem solving",
      subtitle: "HackerRank",
      logo_path: "problem-01.png",
      certificate_link: "https://www.hackerrank.com/rohankokkula",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Python",
      subtitle: "HackerRank",
      logo_path: "python-01.png",
      certificate_link: "https://www.hackerrank.com/rohankokkula",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Certificate of Merit",
      subtitle: "Summer Analytics | IIT Guwahati",
      logo_path: "iitg-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "IITG",
      color_code: "#000000",
    },
    {
      title: "Tableau Desktop Qualified Associate",
      subtitle: "SimpliLearn",
      logo_path: "simplilearn-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Simplilearn",
      color_code: "#000000",
    },
    {
      title: "Question Generation using Transformers",
      subtitle: "Udemy",
      logo_path: "udemy-01.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-b17c4c21-91e3-4f8b-b9c2-259468910985/",
      alt_name: "Udemy",
      color_code: "#000000",
    },
    {
      title: "Machine Learning",
      subtitle: "Stanford University",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "Stanford University",
      color_code: "#000000",
    },
    {
      title: "Data Visualization",
      subtitle: "University of Michigan",
      logo_path: "coursera-01.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/verify/22MTSSC5WDTM",
      alt_name: "University of Michigan",
      color_code: "#000000",
    },
    {
      title: "Data Scientist Career Track",
      subtitle: "DataCamp",
      logo_path: "datacamp-01.png",
      certificate_link:
        "https://www.datacamp.com/statement-of-accomplishment/track/29f2ddab3fbfd0a470713a19c729c0f9d89c88aa",
      alt_name: "DataCamp",
      color_code: "#000000",
    },
    {
      title: "PowerBI Masters",
      subtitle: "iNeuron.ai",
      logo_path: "ineuron-01.png",
      certificate_link:
        "https://academy.ineuron.ai/certificates/downloads/PB009929.pdf",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
    {
      title: "Tableau Masters",
      subtitle: "iNeuron.ai",
      logo_path: "ineuron-01.png",
      certificate_link:
        "https://academy.ineuron.ai/certificates/downloads/TB000634.pdf",
      alt_name: "HackerRank",
      color_code: "#000000",
    },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "contact.jpg",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with Backend, Frontend, Cloud and Opensource Development.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Dwarka, Delhi-110077",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+91 9873816649",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/abhishekjaglan",
    iconifyClassname: "simple-icons:github",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/abhishek-jaglan-041218160/",
    fontAwesomeIcon: "fa-linkedin", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0A66C2", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "X",
    link: "https://x.com/imabhijag",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:abhishek.jaglan08@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/abhijaglan08/",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  projectsHeader,
  contactPageData,
  projectcards,
  certifications,
  resumeleft,
  resumeright,
};
