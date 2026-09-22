type TSection = {
  p: string;
  h2: string;
  content?: string;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
  };

  hero: {
    name: string;
    p: string[];
  };

  contact: {
    form: {
      name: {
        span: string;
        placeholder: string;
      };

      email: {
        span: string;
        placeholder: string;
      };

      message: {
        span: string;
        placeholder: string;
      };
    };
  } & TSection;

  sections: {
    about: Required<TSection>;
    experience: TSection;
    tech: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  // ==========================================================
  // HTML
  // ==========================================================

  html: {
    title: "Mohammed Ajmal M — AI/ML Software Engineer",

    fullName: "Mohammed Ajmal M",

    email: "mohammedajmalajmal2003@gmail.com",
  },

  // ==========================================================
  // HERO
  // ==========================================================

  hero: {
    name: "Mohammed Ajmal M",

    p: [
      "Software Engineer | AI/ML Engineer | Python Developer",

      "I build AI-powered, machine learning, full-stack, and data-driven applications using Python and modern web technologies.",
    ],
  },

  // ==========================================================
  // CONTACT
  // ==========================================================

  contact: {
    p: "Get in touch",

    h2: "Contact.",

    form: {
      name: {
        span: "Your Name",
        placeholder: "What's your name?",
      },

      email: {
        span: "Your Email",
        placeholder: "What's your email?",
      },

      message: {
        span: "Your Message",
        placeholder: "What do you want to say?",
      },
    },
  },

  // ==========================================================
  // SECTIONS
  // ==========================================================

  sections: {
    about: {
      p: "",

      h2: "",

      content:
        "I build intelligent and scalable applications using Python, AI/ML, Deep Learning, NLP, Computer Vision, Object Detection, Prompt Engineering, and LLM technologies. I develop full-stack applications using Django, FastAPI, Flask, and React, while working across data processing, API integration, machine learning, automation, and cloud deployment. My focus is on turning real-world problems into practical, user-friendly technology solutions.",
    },

    experience: {
      p: "What I have done so far",

      h2: "Work Experience.",
    },

    tech: {
      p: "Technologies I work with",

      h2: "Skills.",
    },

    feedbacks: {
      p: "Certifications & training",

      h2: "Credentials.",
    },

    works: {
      p: "My work",

      h2: "Projects.",

      content:
        "A collection of AI/ML, data analytics, automation, LLM, and full-stack applications developed to solve practical problems.",
    },
  },
};