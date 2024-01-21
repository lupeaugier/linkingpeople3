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
    jobit,
    tripguide,
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
{
    title: "React Native Developer",
    icon: mobile,
},
{
    title: "Backend Developer",
    icon: backend,
},
{
    title: "Content Creator",
    icon: creator,
},
{
    title: "Frontend Developer",
    icon: creator,
},
{
    title: "Fullstack Developer",
    icon: creator,
},
{
    title: "Data Sciencist",
    icon: creator,
},
{
    title: "CRM specialist",
    icon: creator,
}
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
    name: "docker",
    icon: docker,
},
];

const experiences = [
{
    title: "Job Description Jigsaw",
    company_name: "1-2 weeks",
    icon: 1,
    iconBg: "#383E56",
    // date: "March 2020 - April 2021",
    points: [
    "Lay the foundation for success by meticulously defining job roles and identifying hiring needs.",
    "Craft compelling job descriptions that attract top talent.",
    ],
}, 
{
    title: "Sourcing Symphony",
    company_name: "2-3 weeks",
    icon: 2,
    iconBg: "#383E56",
    // date: "Jan 2021 - Feb 2022",
    points: [
    "Launch a strategic sourcing strategy to discover and engage with the best candidates.",
    "Leverage job boards, social media, and networking to create a diverse pool of potential hiress.",
    ],
},
{
    title: "Tech Insight & Cultural Fit",
    company_name: "3-4 weeks",
    icon: 3,
    iconBg: "#383E56",
    // date: "Jan 2022 - Jan 2023",
    points: [
    "Conduct rigorous technical interviews to assess skills, coupled with a cultural fit evaluation to ensure alignment with company values.",
    "This step ensures not just competence but also a strong connection to the company culture.",
    ],
},
{
    title: "Candidate Spotlight",
    company_name: "1-2 weeks",
    icon: 4,
    iconBg: "#383E56",
    // date: "Jan 2023 - Present",
    points: [
    "Showcase top candidates to key stakeholders through comprehensive presentations.",
    "CHighlight technical prowess, cultural alignment, and the potential impact on the team.",
    "Facilitate meaningful discussions to gather input.",
    ],
},
{
    title: "Satisfaction Checkpoint",
    company_name: "2-3 weeks",
    icon: 5,
    iconBg: "#383E56",
    // date: "Jan 2023 - Present",
    points: [
    "Measure satisfaction levels from both the candidate and the company's perspective.",
    "Seek feedback on the hiring process, addressing concerns, and highlighting successes.",
    "Ensure a positive candidate experience and align expectations for a successful collaboration.",
    ],
},
];

const testimonials = [
{
    testimonial:
    " If there's one thing I have to highlight about Linking People, it's undoubtedly the quality of service and the understanding of our business, and consequently, the profile we are looking for.",
    name: "Sara Castello",
    designation: "People Manager",
    company: "Bigbox",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
},
{
    testimonial: "We work with Linking People as a partner because the service is amazing, and the candidates themselves recognize it.",
    name: "Malia Cara",
    designation: "CPO",
    company: "Tapi",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
},
{
    testimonial:"They are an excellent team of professionals. The ideal partner to successfully carry out any project in the field of Human Capital (Recruiting, Compensation, or Culture).",
    name: "Juan Ignacio Galvan",
    designation: "HR Manager",
    company: "Allaria+",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
},
];

const projects = [
{
    name: "Car Rent",
    description:
    "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
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
    ],
    image: carrent,
    source_code_link: "https://github.com/",
},
{
    name: "Job IT",
    description:
    "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
    {
        name: "react",
        color: "blue-text-gradient",
    },
    {
        name: "restapi",
        color: "green-text-gradient",
    },
    {
        name: "scss",
        color: "pink-text-gradient",
    },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
},
{
    name: "Trip Guide",
    description:
    "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
    {
        name: "nextjs",
        color: "blue-text-gradient",
    },
    {
        name: "supabase",
        color: "green-text-gradient",
    },
    {
        name: "css",
        color: "pink-text-gradient",
    },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
},
];

export { services, technologies, experiences, testimonials, projects };