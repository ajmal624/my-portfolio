import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TCertification,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  aboutIntroVideo,

  // Skills
  python,
  javascript,
  sql,
  html,
  css,
  react,
  fastapi,
  openai,
  streamlit,
  huggingface,

  // Projects
  carPrice,
  dataspark,
  diabetes,
  fakeNews,
  finance,
  invoice,
  multiclass,
  pizzaInventory,
  pokemon,
  realEstate,
  redbus,
  secureCrud,
  studyPlanner,
  travelPlanner,
  underwater,
} from "../assets";

/* =========================================================
   NAVIGATION
========================================================= */

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "Experience",
  },
  {
    id: "tech",
    title: "Skills",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "certifications",
    title: "Certifications",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

/* =========================================================
   SERVICES
========================================================= */

export const services: TService[] = [
  {
    title: "AI / ML Engineer",
    icon: backend,
  },
  {
    title: "Python Developer",
    icon: web,
  },
  {
    title: "Full Stack Developer",
    icon: mobile,
  },
];

export {
  aboutIntroVideo,
};

/* =========================================================
   TECHNOLOGIES / SKILLS
========================================================= */

export const technologies: TTechnology[] = [
  /* -------------------- LANGUAGES -------------------- */

  {
    name: "Python",
    icon: python,
    category: "Languages",
  },
  {
    name: "JavaScript",
    icon: javascript,
    category: "Languages",
  },
  {
    name: "SQL",
    icon: sql,
    category: "Languages",
  },
  {
    name: "HTML",
    icon: html,
    category: "Languages",
  },
  {
    name: "CSS",
    icon: css,
    category: "Languages",
  },

  /* -------------------- FRAMEWORKS -------------------- */

  {
    name: "React",
    icon: react,
    category: "Frameworks",
  },
    {
    name: "FastAPI",
    icon: fastapi,
    category: "Frameworks",
  },


  /* -------------------- API & TESTING -------------------- */

  {
    name: "OpenAI",
    icon: openai,
    category: "API & Testing",
  },

  /* -------------------- CLOUD & DEPLOYMENT -------------------- */

  {
    name: "Streamlit",
    icon: streamlit,
    category: "Cloud & Deployment",
  },
  {
    name: "Hugging Face",
    icon: huggingface,
    category: "Cloud & Deployment",
  },
];

/* =========================================================
   EXPERIENCE
========================================================= */

export const experiences: TExperience[] = [
  {
    title: "Software Engineer",
    companyName: "PARK Intelli Solutions Pvt. Ltd",
    icon: backend,
    iconBg: "#383E56",
    date: "Aug 2025 - Jan 2026",
    points: [
      "Worked on software development and AI-focused application projects.",
      "Developed Python-based applications and contributed to machine learning solutions.",
      "Worked with APIs, data processing, application development, and model integration.",
      "Collaborated on practical software projects and improved application functionality.",
    ],
  },
];

/* =========================================================
   PROJECTS
========================================================= */

export const projects: TProject[] = [
  {
    name: "Car Price Prediction",
    description:
      "End-to-end machine learning application that predicts vehicle prices based on selected vehicle features using a trained model and interactive web interface.",
    tags: [
      {
        name: "Python",
        color: "text-blue-400",
      },
      {
        name: "Machine Learning",
        color: "text-green-400",
      },
      {
        name: "Streamlit",
        color: "text-red-400",
      },
      {
        name: "Hugging Face",
        color: "text-yellow-400",
      },
    ],
    image: carPrice,
    sourceCodeLink:
      "https://github.com/ajmal624/car-price-prediction",
    liveDemoLink:
      "https://car-price-prediction-a3dqqsf22dylqkqdxzj7s5.streamlit.app",
  },

  {
    name: "Diabetes Prediction",
    description:
      "Machine learning application that evaluates diabetes risk from health-related input features and provides real-time predictions through an interactive Streamlit interface.",
    tags: [
      {
        name: "Python",
        color: "text-blue-400",
      },
      {
        name: "Machine Learning",
        color: "text-green-400",
      },
      {
        name: "Streamlit",
        color: "text-red-400",
      },
    ],
    image: diabetes,
    sourceCodeLink:
      "https://github.com/ajmal624/Diabetes_Prediction",
    liveDemoLink:
      "https://diabetesprediction-5llfmdqc7c7zhxnsgygdzj.streamlit.app",
  },

  {
    name: "Pokémon Type Prediction",
    description:
      "Multi-class machine learning application that predicts a Pokémon's primary type from base combat statistics using feature engineering and an interactive Streamlit interface.",
    tags: [
      {
        name: "Python",
        color: "text-blue-400",
      },
      {
        name: "Machine Learning",
        color: "text-green-400",
      },
      {
        name: "Streamlit",
        color: "text-red-400",
      },
    ],
    image: pokemon,
    sourceCodeLink:
      "https://github.com/ajmal624/Pok-mon-Type-Prediction",
    liveDemoLink:
      "https://pok-mon-type-prediction-74beep3j54wrlayhlb5j9q.streamlit.app",
  },

  {
    name: "Domino's Pizza Sales Forecasting & Inventory Optimization",
    description:
      "Predictive purchase order system using time-series forecasting to estimate pizza demand and map demand forecasts to ingredient requirements for inventory optimization.",
    tags: [
      {
        name: "Python",
        color: "text-blue-400",
      },
      {
        name: "Machine Learning",
        color: "text-green-400",
      },
      {
        name: "Streamlit",
        color: "text-red-400",
      },
      {
        name: "Forecasting",
        color: "text-purple-400",
      },
    ],
    image: pizzaInventory,
    sourceCodeLink:
      "https://github.com/ajmal624/Pizza-Prodigy-Predictive-Sales-and-Inventory-Optimization-for-Domino-s-main",
    liveDemoLink:
      "https://ddw6hznfpjyrwdtwvapm33.streamlit.app",
  },

  {
    name: "Redbus Data Scraping & Dynamic Filtering",
    description:
      "Selenium-based application that extracts bus route details, prices, timings, and seat availability and provides interactive filtering through Streamlit.",
    tags: [
      {
        name: "Python",
        color: "text-blue-400",
      },
      {
        name: "Selenium",
        color: "text-green-400",
      },
      {
        name: "Streamlit",
        color: "text-red-400",
      },
      {
        name: "SQL",
        color: "text-orange-400",
      },
    ],
    image: redbus,
    sourceCodeLink:
      "https://github.com/ajmal624/Redbus-Data-Scraping-with-Selenium-Dynamic-Filtering-using-Streamlit-main",
    liveDemoLink:
      "https://ptbpkxul7hrgx34nvbwkvs.streamlit.app",
  },

  {
    name: "DataSpark",
    description:
      "Data analytics project that analyzes retail transactions, customer behavior, sales trends, and store performance through interactive dashboards.",
    tags: [
      {
        name: "Python",
        color: "text-blue-400",
      },
      {
        name: "SQL",
        color: "text-orange-400",
      },
      {
        name: "Power BI",
        color: "text-yellow-400",
      },
      {
        name: "Analytics",
        color: "text-green-400",
      },
    ],
    image: dataspark,
    sourceCodeLink:
      "https://github.com/ajmal624/DataSpark",
    liveDemoLink:
      "https://dataspark-je5in2zxmybzjreh6jbu4f.streamlit.app",
  },

  {
    name: "Fake News Detection Dashboard",
    description:
      "NLP-based application that detects and classifies news articles as fake or genuine using machine learning and text processing techniques.",
    tags: [
      {
        name: "Python",
        color: "text-blue-400",
      },
      {
        name: "NLP",
        color: "text-purple-400",
      },
      {
        name: "TensorFlow",
        color: "text-orange-400",
      },
      {
        name: "Streamlit",
        color: "text-red-400",
      },
    ],
    image: fakeNews,
    sourceCodeLink:
      "https://github.com/ajmal624/fake-news-dashboard",
    liveDemoLink:
      "https://fake-news-dashboard-mxyecsq3e3earpopp65gug.streamlit.app",
  },

  {
    name: "Underwater Image Enhancement",
    description:
      "Deep learning system that improves the color balance, visibility, and visual quality of underwater images using image processing and deep learning techniques.",
    tags: [
      {
        name: "Python",
        color: "text-blue-400",
      },
      {
        name: "PyTorch",
        color: "text-orange-400",
      },
      {
        name: "Computer Vision",
        color: "text-green-400",
      },
      {
        name: "Streamlit",
        color: "text-red-400",
      },
    ],
    image: underwater,
    sourceCodeLink:
      "https://github.com/ajmal624/underwater-image-enhancement",
    liveDemoLink:
      "https://underwater-image-enhancement-35mrib4wn7mujfuvzkktgw.streamlit.app",
  },

  {
    name: "Invoice PDF Extractor",
    description:
      "AI-powered document processing application that extracts structured information from invoice PDFs using PyMuPDF and OpenAI API integration.",
    tags: [
      {
        name: "Python",
        color: "text-blue-400",
      },
      {
        name: "PyMuPDF",
        color: "text-green-400",
      },
      {
        name: "OpenAI",
        color: "text-purple-400",
      },
      {
        name: "Streamlit",
        color: "text-red-400",
      },
    ],
    image: invoice,
    sourceCodeLink:
      "https://github.com/ajmal624/Invoice-Extractor",
    liveDemoLink:
      "https://invoice-extractor-wnws8opkgssaif2duaulcn.streamlit.app",
  },

  {
    name: "Multiclass Classification",
    description:
      "End-to-end multi-class classification web application with a FastAPI backend, HTML frontend, trained machine learning model, and live deployment.",
    tags: [
      {
        name: "Python",
        color: "text-blue-400",
      },
      {
        name: "FastAPI",
        color: "text-green-400",
      },
      {
        name: "Machine Learning",
        color: "text-purple-400",
      },
      {
        name: "Render",
        color: "text-cyan-400",
      },
    ],
    image: multiclass,
    sourceCodeLink:
      "https://github.com/ajmal624/multiclass_classification",
    liveDemoLink:
      "https://multiclass-classification-6siy.onrender.com",
  },

  {
    name: "Real Estate Management",
    description:
      "Full-stack real estate management application for managing properties, users, inquiries, appointments, and favorites with AI-assisted functionality.",
    tags: [
      {
        name: "Python",
        color: "text-blue-400",
      },
      {
        name: "Flask",
        color: "text-gray-300",
      },
      {
        name: "MySQL",
        color: "text-blue-300",
      },
      {
        name: "LLM",
        color: "text-purple-400",
      },
    ],
    image: realEstate,
    sourceCodeLink:
      "https://github.com/ajmal624/real_estate_management",
    liveDemoLink:
      "https://real-estate-management-ez1k.onrender.com",
  },

  {
    name: "AI Study Planner",
    description:
      "AI-powered study planning application using Django REST Framework and React to generate personalized study schedules and organize learning activities.",
    tags: [
      {
        name: "Python",
        color: "text-blue-400",
      },
      {
        name: "Django",
        color: "text-green-400",
      },
      {
        name: "React",
        color: "text-cyan-400",
      },
      {
        name: "Vercel",
        color: "text-white",
      },
    ],
    image: studyPlanner,
    sourceCodeLink:
      "https://github.com/ajmal624/ai-study-planner",
    liveDemoLink:
      "https://ai-studyflow-planner.vercel.app",
  },

  {
    name: "AI Travel Planner",
    description:
      "AI-driven travel planning application with a Django REST Framework backend and React frontend for personalized travel itinerary generation.",
    tags: [
      {
        name: "Python",
        color: "text-blue-400",
      },
      {
        name: "Django",
        color: "text-green-400",
      },
      {
        name: "React",
        color: "text-cyan-400",
      },
      {
        name: "Vercel",
        color: "text-white",
      },
    ],
    image: travelPlanner,
    sourceCodeLink:
      "https://github.com/ajmal624/ai-travel-planner",
    liveDemoLink:
      "https://ai-travel-planner-ochre-chi.vercel.app",
  },

  {
    name: "Finance Dashboard",
    description:
      "Full-stack personal finance dashboard with a Django REST Framework API and React frontend for transaction tracking, budgeting, and financial analytics.",
    tags: [
      {
        name: "Python",
        color: "text-blue-400",
      },
      {
        name: "Django",
        color: "text-green-400",
      },
      {
        name: "React",
        color: "text-cyan-400",
      },
      {
        name: "Vercel",
        color: "text-white",
      },
    ],
    image: finance,
    sourceCodeLink:
      "https://github.com/ajmal624/finance-dashboard",
    liveDemoLink:
      "https://finance-dashboard-two-lovat.vercel.app",
  },

  {
    name: "Secure CRUD",
    description:
      "Full-stack secure CRUD application implementing token-based authentication, role-based access control, protected workflows, and a React frontend.",
    tags: [
      {
        name: "Python",
        color: "text-blue-400",
      },
      {
        name: "Django",
        color: "text-green-400",
      },
      {
        name: "React",
        color: "text-cyan-400",
      },
      {
        name: "Security",
        color: "text-red-400",
      },
    ],
    image: secureCrud,
    sourceCodeLink:
      "https://github.com/ajmal624/secure-crud",
    liveDemoLink:
      "https://secure-crud.vercel.app",
  },
];

/* =========================================================
   CERTIFICATIONS
========================================================= */

export const certifications: TCertification[]= [
  {
    name: "Data Science Using Python",
    issuer: "Certification",
    date: "2025",
    icon: creator,
  },
  {
    name: "Advanced Diploma in Python Programming",
    issuer: "Certification",
    date: "2025",
    icon: web,
  },
];

/* =========================================================
   TESTIMONIALS
========================================================= */

export const testimonials = [
  {
    testimonial:
      "A motivated Software Engineer with hands-on experience in Python, AI/ML, full-stack development, and data-driven applications.",
    name: "Mohammed Ajmal M",
    designation: "Software Engineer",
    company: "PARK Intelli Solutions",
    image: "",
  },
];

/* =========================================================
   DEFAULT EXPORT
========================================================= */

export default {
  services,
  technologies,
  experiences,
  projects,
  certifications,
  testimonials,
  navLinks,
};