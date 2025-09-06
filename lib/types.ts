export type About = { name: string; intro: string };
export type Job = {
  role: string;
  company: string;
  period: string;
  location?: string;
  points?: string[];
};
export type Education = {
  school: string;
  degree: string;
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
};
export type SkillCategory = { category: string; items: string[] };
export type Contact = {
  blurb?: string;
  items: { label: string; href: string; text?: string }[];
};
