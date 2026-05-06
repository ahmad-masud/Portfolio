export type About = { about_name: string; footer_name: string; intro: string };
export type Job = {
  role: string;
  company: string;
  image?: string;
  imageAlt?: string;
  period: string;
  location?: string;
  points?: string[];
};
export type Education = {
  school: string;
  degree: string;
  image?: string;
  imageAlt?: string;
  field?: string;
  period: string;
  location?: string;
  points?: string[];
};
export type Project = {
  title: string;
  desc: string;
  tags?: string[];
  links?: { label: string; url: string }[];
  image?: string;
  imageAlt?: string;
};
export type SkillCategory = { category: string; items: string[] };
export type Contact = {
  blurb?: string;
  items: { href: string; label?: string; text?: string; icon?: string }[];
};
