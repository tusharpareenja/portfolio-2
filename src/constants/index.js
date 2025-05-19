import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  framer,
  jobit,
  tripguide,
  threejs,
  cpp,
  python,
  next,
  chat_gpt,
  promptopia,
  dizilo,
  trekify,
  firebase,
  mysql,
  express,
  mui,
  appwrite,
  Learnify
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "c++",
    icon: cpp,
  },
  {
    name: "Python",
    icon: python,
  },
  {
    name: "Next",
    icon: next,
  },
  {
    name: "Chat GPT",
    icon: chat_gpt,
  },
 
];

const experiences = [
  {
    title: "React.js Developer",
    company_name: "Starbucks",
    icon: starbucks,
    iconBg: "#383E56",
    date: "March 2020 - April 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Native Developer",
    company_name: "Tesla",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Trekify",
    description:
      "A travel community that goes beyond the ordinary! This platform not only connects users but also introduces them to hidden gems—destinations that are off the beaten path and less visited. It offers personalized travel guides to enrich their journeys and a unique AI-powered feature to match users with the perfect travel buddy based on their preferences, interests, and travel styles. Whether you're seeking adventure, relaxation, or cultural exploration, this innovative community ensures a seamless and unforgettable travel experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: trekify,
    source_code_link: "https://github.com/tusharpareenja/Travel-Website",
  },
  {
    name: "Dizilo",
    description:
      "A one-stop platform designed for game developers! This website allows users to browse and purchase game assets effortlessly, offering a comprehensive collection that caters to every need—from characters and environments to soundtracks and special effects. Beyond being an asset marketplace, it fosters a thriving community for game developers to showcase their projects, exchange ideas, and collaborate. Whether you're building your first game or enhancing an existing project, this platform is your ultimate resource for creativity and connection in the game development world.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongo db",
        color: "green-text-gradient",
      },
      {
        name: "express",
        color: "pink-text-gradient",
      },
      {
        name: "node",
        color: "pink-text-gradient",
      },
    ],
    image: dizilo,
    source_code_link: "https://github.com/tusharpareenja/Dizilo",
  },
  {
    name: "Promptopia",
    description:
      "Promptopia is a community-driven platform where users can upload and share useful prompts, allowing others to discover and utilize them. The platform is built using Next.js for the frontend and MongoDB for data storage.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "next-auth",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: promptopia,
    source_code_link: "https://github.com/tusharpareenja/promptopia",
  },
  {
    name: "Learnify",
    description:
      "Learnify is an AI-powered course generator designed to revolutionize online learning. By leveraging the Gemini API and YouTube API, Learnify creates personalized, comprehensive courses tailored to individual learning goals. The platform integrates AI to curate relevant video content, generate structured course outlines, and provide interactive learning materials. Whether you're exploring a new topic or deepening existing knowledge, Learnify simplifies the process by delivering a seamless and engaging learning experience. Its intelligent recommendations and dynamic content generation ensure that users receive high-quality, up-to-date resources. Learnify embodies innovation in education, making learning accessible, efficient, and tailored for everyone.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "next-auth",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "gemini",
        color: "pink-text-gradient",
      },
      {
        name: "postgreSQL",
        color: "green-text-gradient",
      },
    ],
    image: Learnify,
    source_code_link: "https://github.com/tusharpareenja/Learnify",
  },
];

export const Skill_data = [
  {
    skill_name: "Html 5",
    Image: html,
    width: 100,
    height: 100,
  },
  {
    skill_name: "Css",
    Image: css,
    width: 100,
    height: 100,
  },
  {
    skill_name: "Java Script",
    Image: javascript,
    width: 100,
    height: 100,
  },
  {
    skill_name: "Tailwind Css",
    Image: tailwind,
    width: 100,
    height: 100,
  },
  {
    skill_name: "React",
    Image: reactjs,
    width: 100,
    height: 100,
  },
  {
    skill_name: "Redux",
    Image: redux,
    width: 100,
    height: 100,
  },
  
  {
    skill_name: "Type Script",
    Image: typescript,
    width: 100,
    height: 100,
  },
  {
    skill_name: "Next js 13",
    Image: next,
    width: 100,
    height: 100,
  },
  {
    skill_name: "Framer Motion",
    Image: framer,
    width: 100,
    height: 100,
  },
  {
    skill_name: "Node js",
    Image: nodejs,
    width: 100,
    height: 100,
  },
  {
    skill_name: "Mongo db",
    Image: mongodb,
    width: 100,
    height: 100,
  },

];
export const Frontend_skill = [
  {
    skill_name: "Html 5",
    Image: html,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Css",
    Image: css,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Java Script",
    Image: javascript,
    width: 65,
    height: 65,
  },
  {
    skill_name: "Tailwind Css",
    Image: tailwind,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Material UI",
    Image: mui,
    width: 80,
    height: 80,
  },
  {
    skill_name: "React",
    Image: reactjs,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Redux",
    Image: redux,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Type Script",
    Image: typescript,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Next js 13",
    Image: next,
    width: 80,
    height: 80,
  },
];

export const Backend_skill = [
  {
    skill_name: "Node js",
    Image: nodejs,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Express js",
    Image: express,
    width: 80,
    height: 80,
  },
  {
    skill_name: "Mongo db",
    Image: mongodb,
    width: 40,
    height: 40,
  },
  {
    skill_name: "Fire base",
    Image: firebase,
    width: 55,
    height: 55,
  },

  {
    skill_name: "My SQL",
    Image: mysql,
    width: 70,
    height: 70,
  },

  {
    skill_name: "Appwrite",
    Image: appwrite,
    width: 80,
    height: 80,
  },
];

export const Full_stack = [
  

  {
    skill_name: "Figma",
    Image: figma,
    width: 50,
    height: 50,
  },

];



export const Other_skill = [
  {
    skill_name: "C++",
    Image: cpp,
    width: 60,
    height: 60,
  },
  {
    skill_name: "Python",
    Image: python,
    width: 60,
    height: 60,
  },
];






export { services, technologies, experiences, testimonials, projects };
