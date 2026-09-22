export type TCommonProps = {
  title?: string;
  name?: string;
  icon?: string;
};

export type TExperience = {
  companyName: string;
  iconBg: string;
  date: string;
  points: string[];
} & Required<Omit<TCommonProps, "name">>;

export type TCertification = {
  name: string;
  issuer: string;
  date: string;
  icon: string;
};

export type TProject = {
  description: string;
  tags: {
    name: string;
    color: string;
  }[];
  image: string;
  sourceCodeLink: string;
  liveDemoLink?: string;
} & Required<Pick<TCommonProps, "name">>;

export type TTechnology = {
  name: string;
  icon: string;
  category: string;
};

export type TNavLink = {
  id: string;
} & Required<Pick<TCommonProps, "title">>;

export type TService = Required<Omit<TCommonProps, "name">>;

export type TTestimonial = {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
};

export type TMotion = {
  direction: "up" | "down" | "left" | "right" | "";
  type: "tween" | "spring" | "just" | "";
  delay: number;
  duration: number;
};