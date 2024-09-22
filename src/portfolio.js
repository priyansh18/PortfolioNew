const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Priyansh Singhal | Portfolio",
  description:
    "Associate Application Developer at Oracle. I specialize in developing and maintaining web applications using PL/SQL and a JavaScript library for creative coding.",
  og: {
    title: "Priyansh Portfolio",
    type: "website",
    url: "https://priyanshsinghal.netlify.app",
  },
};

//Home Page
const greeting = {
  title: "Hi 👋!",
  sub: "Priyansh Singhal",
  logo_name: "Priyansh Singhal",
  resumeLink:
    "https://drive.google.com/file/d/1bpQzuRfXQ9jbjFBR6SkG9LKNvyaifN3C/view?usp=sharing",
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
      profileLink: "https://github.com/priyansh18",
    },
    {
      siteName: "GeeksforGeeks",
      iconifyClassname: "simple-icons:geeksforgeeks",
      style: {
        color: "#2F8D46",
      },
      profileLink: "https://www.geeksforgeeks.org/user/singhalpriyansh58/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/singhalpriyansh3",
    },
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#FFA116",
      },
      profileLink: "https://leetcode.com/u/18_priyansh/",
    },
    {
      siteName: "LinkedIn",
      iconifyClassname: "simple-icons:linkedin",
      style: {
        color: "#0077b5",
      },
      profileLink: "https://www.linkedin.com/in/priyanshsinghal/",
    },
  ],
};

//what i do?
const skills = {
  data: [
    {
      title: "Applications Developer",
      fileName: "DataScienceImg",
      skills: [
        "⚡  Leveraged PL/SQL, JavaScript, and Oracle Cloud expertise to troubleshoot and resolve complex issues in Oracle APEX and OCI, boosting task completion rates by 30%.",
        "⚡ Created tutorials and documentation to aid team members in understanding Oracle APEX and OCI, improving efficiency and collaboration.",
        "⚡ Streamlined workflows by sharing best practices and troubleshooting techniques, reducing time spent on resolving recurring issues.",
        "⚡ Developed resources that accelerated team learning, resulting in quicker onboarding and improved project outcomes.",
      ],
      softwareSkills: [
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
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            backgroundColor: "transparent",
            color: "#4479A1",
          },
        },

        {
          skillName: "OCI",
          fontAwesomeClassname: "fluent:cloud-48-filled",
          style: {
            backgroundColor: "transparent",
            color: "#232F3E",
          },
        },
      ],
    },
    {
      title: "Full Stack Developer",
      fileName: "FullStackImg",
      skills: [
        "⚡ Skilled full stack developer with experience in building dynamic websites using Django, PHP, WordPress, HTML, CSS, JavaScript, and React.",
        "⚡ Capable of connecting the frontend and backend, implementing secure login systems, real-time updates with React and Redux, and making sure data flows smoothly between parts of the application.",
        "⚡ Proficient in both JavaScript and backend technologies, using tools like React, jQuery, and Redux for the frontend, and Django or PHP for the backend to create reliable and scalable websites.",
        "⚡  Able to seamlessly combine different technologies—from managing state with Redux to building robust backends with Django and integrating third-party services into WordPress for a complete solution.",
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
          skillName: "Django",
          fontAwesomeClassname: "simple-icons:django",
          style: {
            backgroundColor: "transparent",
            color: "#5FA04E",
          },
        },
        {
          skillName: "C++",
          fontAwesomeClassname: "simple-icons:cplusplus",
          style: {
            backgroundColor: "transparent",
            color: "#5FA04E",
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
      title: "MovieTv-Info",
      img_path: "proj-1.jpeg",
      description:
        "It is a Movies & Series app, calling an external API (OMDB) to fetch the movies or the TV series data and manipulate it inside our application with Redux integration.",
      tags: [
        {
          lang: "React",
          color: "#004782",
        },
        {
          lang: "HTML",
          color: "#820032",
        },
        {
          lang: "CSS",
          color: "#00a100",
        },
        {
          lang: "Sass",
          color: "#ff4b4b",
        },
        {
          lang: "Firebase",
          color: "#3c0095",
        },
        {
          lang: "Javascript",
          color: "#c47206",
        },
        {
          lang: "Node",
          color: "#820032",
        },
      ],
      link: "https://movietv-info.web.app/",
      code: "https://github.com/priyansh18/MovieTv-Info",
      linkcolor: "white",
    },

    {
      title: "Covid-19-Dashboard",
      img_path: "proj-2.png",
      description:
        "This project tracks live COVID-19 stats by country and city, providing real-time updates on confirmed, active, and recovered cases. It also offers recovery and infection rate predictions, allowing users to forecast future trends. Additionally, a real-time self-assessment chatbot helps users assess symptoms and receive safety advice.",
      tags: [
        {
          lang: "Python3",
          color: "red",
        },
        {
          lang: "Django",
          color: "#004782",
        },
        {
          lang: "HTML",
          color: "#c47206",
        },
        {
          lang: "Javascript",
          color: "#4257f5",
        },
        {
          lang: "ChartJs",
          color: "#ff4b4b",
        },
        {
          lang: "CSS",
          color: "#00a100",
        },
      ],
      link: "https://interactivecovid19dashboard.herokuapp.com/",
      code: "https://github.com/priyansh18/Covid-19-Dashboard",
      linkcolor: "white",
    },
    {
      title: "Pryfry",
      img_path: "proj-3.jpeg",
      description:
        "It is a restaurant website built using Django, where user can check the menu and pricing,reserve a table, check out blogs as well as send queries using email.",
      tags: [
        {
          lang: "JavaScript",
          color: "#004782",
        },
        {
          lang: "Sass",
          color: "#8700b0",
        },
        {
          lang: "HTML",
          color: "#c47206",
        },
        {
          lang: "CSS",
          color: "#ff4b4b",
        },
        {
          lang: "Django",
          color: "#3c0095",
        },
        {
          lang: "Heroku",
          color: "#ff4b4b",
        },
      ],
      link: "https://pryfry.herokuapp.com/",
      code: "https://github.com/priyansh18/Resturant_site",
      linkcolor: "white",
    },
    {
      title: "Breaking Bad Cast",
      img_path: "proj-4.jpeg",
      description:
        "Developed scalable API using Node.js & Express.js, handling user authentication, note creation, search, sharing and security measures",
      tags: [
        {
          lang: "JavaScript",
          color: "#004782",
        },
        {
          lang: "CSS",
          color: "#8700b0",
        },
        {
          lang: "HTML",
          color: "#c47206",
        },
        {
          lang: "React",
          color: "#ff4b4b",
        },
        {
          lang: "Firebase",
          color: "#3c0095",
        },
      ],
      link: "https://breakingbad-cast.web.app/",
      code: "https://github.com/priyansh18/breaking_bad_react",
      linkcolor: "white",
    },

    {
      title: "Burger-Builder",
      img_path: "proj-5.png",
      description:
        "RESTful API that manages employees of an organisation and performs all CRUD operations, along with security checks and searching in NestJs",
      tags: [
        {
          lang: "JavaScript",
          color: "#004782",
        },
        {
          lang: "HTML",
          color: "#3c0095",
        },
        {
          lang: "CSS",
          color: "#ff4b4b",
        },
        {
          lang: "Firebase",
          color: "#00a100",
        },
        {
          lang: "Redux",
          color: "#820032",
        },
        {
          lang: "React",
          color: "#c47206",
        },
      ],
      link: "https://burger-builder-5a5c5.web.app/",
      code: "https://github.com/priyansh18/burger_builder",
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
        title: "Applications Developer",
        subtitle: "Oracle",
        date: "July 2023 - Present",
        content: [
          "•Leveraged knowledge-sharing resources to troubleshoot and resolve complex issues in Oracle APEX and OCI, resulting in a 30% increase in successful task completion rates.",
          "Created tutorials and documentation to aid team members in understanding Oracle APEX and OCI, improving efficiency and collaboration.",
          "Streamlined workflows by sharing best practices and troubleshooting techniques, reducing time spent on resolving recurring issues.",
          "Developed resources that accelerated team learning, resulting in quicker onboarding and improved project outcomes.",
        ],
      },
      {
        title: "Full Stack Web Developer",
        subtitle: "Startupstorymedia",
        date: "May 2021 - Sep 2021",
        content: [
          "Led cross-functional team of designers and developers in a collaborative effort to craft a highly intuitive and user- centric website, resulting in a seamless online experience for our diverse user base and boosting user engagement by 30%.",
          "Served as an integral part of a team and directly involved in making core-decisions.",
          "Implemented a dynamic website that led to an increase in 25% throughput.",
        ],
      },
      {
        title: "Friends,",
        subtitle: "Freelance",
        date: "Feb 2021 - May 2021",
        content: [
          "Independently developed and deployed a dynamic, feature-rich website from scratch using Django, achieving rapid project completion and optimal functionality.",
          "Collaborated with internal and external design/dev resources to implement scalable front-end templates and design modules.",
          "•Modernised a User-interactive interface for a better experience.",
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
          title: "Netaji Subhas University of Technology,",
          subtitle: "New Delhi",
          date: "Aug 2021 - Jun 2023",
          content: ["CGPA: 8.1/10"],
        },
        {
          title: "Bachelor of Technology in Computer Science and Engineering",
          subtitle: "Guru Gobind Singh Indraprastha University, Delhi",
          date: "2017 - 2021",
          content: ["CGPA: 8.6/10"],
        },
      ],
    },
    {
      title: ["Achivements"],
      data: [
        {
          title: "Achievements",
          content: [
            "Published a research paper in the IJSER journal written on “Covid-19 Trend Analysis using Machine Learning Techniques”",
            "Solved 300+ DSA problem solving questions",
            "GATE 2021 with AIR 5571 among the top 5%.",
            "•Attained an outstanding 92% score in AMCAT 2020,showcasing exceptional aptitude and competence in core skills and knowledge areas.",
          ],
        },
      ],
    },
  ],
};

//certificate cards
const certifications = {
  certifications: [
    {
      title: "1B Round",
      subtitle: "Code Chef",
      logo_path: "Code.png",
      certificate_link: "https://www.codechef.com/certificates/public/fe2c901",
      alt_name: "Codechef",
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
    subtitle: "Mansarovar Park, Delhi-110032",
  },
};

//contact icons
const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/priyansh18",
    iconifyClassname: "simple-icons:github",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/priyanshsinghal/",
    fontAwesomeIcon: "fa-linkedin", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0A66C2", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:singhalpriyansh58@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/18_priyansh/",
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
