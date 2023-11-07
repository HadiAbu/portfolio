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
  ellipsis,
  colabo,
  starbucks,
  tesla,
  cisco,
  polar,
  worldRanks,
  dynamicDash,
  shoppingCart,
  puzzleMaker,
  threejs,
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
  // {
  //   title: "React Native Developer",
  //   icon: mobile,
  // },
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
  // {
  //   name: "docker",
  //   icon: docker,
  // },
];

const experiences = [
  {
    title: "Front End Developer",
    company_name: "Ellipsis Drive",
    icon: ellipsis,
    iconBg: "#383E56",
    date: "Jan 2022 - Dec 2022",
    points: [
      "Strong focus on user experience (UX/UI)",
      "Developing core features of the company website in ReactJS",
      "creating spatial maps and graphs to payment and producing invoices.",
      "I was responsible for enhancing the platform's usability and performance",
      "Taking a major part in meetings and influencing the whole design and development process.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Polar",
    icon: polar,
    iconBg: "#383E56",
    date: "Aug 2021 - Nov 2021",
    points: [
      "Taking charge of implementing several pages of the website and app",
      "Maintaining legacy code and tests building",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "Colabo",
    icon: colabo,
    iconBg: "#E6DEDD",
    date: "Jan 2019 - May 2020",
    points: [
      "Taking a major part in building the company web based E-commerce system",
      "Collaborating with the Back-End and QA teams to perfect the features we’re handling.",
      "Writing unit tests, end to end tests (using Jest/Enzyme) along the development process and maintaining a healthy production environment.",
      "Taking responsibility and participating in kickoffs with a remote team lead",
    ],
  },
  {
    title: "Automation Engineer",
    company_name: "Cisco",
    icon: cisco,
    iconBg: "#E6DEDD",
    date: "June 2015 - March 2016",
    points: [
      "Stabilizing Cisco ISE system (a network administration product that enables the creation and enforcement of security policies) through writing automation, tests and developing infrastructure",
      "Developing automation in Java and Python.",
      "Maintaining legacy code and tests building",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Hadi proved me wrong.",
    name: "Sara Lee",
    // designation: "CFO",
    // company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Hadi does.",
    name: "Chris Brown",
    // designation: "COO",
    // company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Seeking excellence in his work with great respect for his adoptive company. Facing every challenge presented in his way with great enthusiasm, and indeed with his determination and will he succeeds at tackling the obstacles.",
    name: "Adi Ghoumaed",
    // designation: "Senior software engineer",
    // company: "Cisco Systems LTD.",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
];

const projects = [
  {
    name: "Dynamic Dashboard",
    description:
      "Fully functional front-end project with the all the important and most common used features used in modren day web; Dashboard, Calendar, Charts, Colro themes, Siderbar, Tables of data and more..",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Syncfusion",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "ChartJS",
        color: "orange-text-gradient",
      },
    ],
    image: dynamicDash,
    source_code_link: "https://dynamic-dashboard.vercel.app/",
  },
  {
    name: "World Ranks",
    description:
      "A fullstack project built in React + NextJS, displaying information like population, area, gini, capital, spoken languages,...",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "orange-text-gradient",
      },
      {
        name: "SSR",
        color: "blue-text-gradient",
      },
      {
        name: "responsive",
        color: "green-text-gradient",
      },
    ],
    image: worldRanks,
    source_code_link: "https://world-ranks-red.vercel.app/",
  },
  {
    name: "Shopping Cart",
    description:
      "This shopping cart website was made as a learning project.      ",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "responsive",
        color: "pink-text-gradient",
      },
    ],
    image: shoppingCart,
    source_code_link: "https://shopping-cart-proj.vercel.app/",
  },
  {
    name: "Puzzle Maker",
    description: "Create your own Puzzle by slicing pieces on Canvas.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "React-Konva",
        color: "green-text-gradient",
      },
      {
        name: "responsive",
        color: "pink-text-gradient",
      },
    ],
    image: puzzleMaker,
    source_code_link: "https://tinytap-puzzle-h9z8.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
