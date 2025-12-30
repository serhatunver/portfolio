export type Project = {
  id: string;
  title: string;
  description: string;
  detailedDescription?: string;
  techStack: string[];
  githubLink?: string;
  demoLink?: string;
};

export type Education = {
  id: string;
  degree: string;
  department: string;
  institution: string;
  duration: string;
  location: string;
  details: string;
  gpa: string;
  institutionLogo: string;
};

export type Experience = {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  techStack: string[];
  companyLogo?: string;
};

export type TechStack = {
  title: string;
  technologies: string[];
};
