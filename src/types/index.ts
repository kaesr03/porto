export interface ProfileData {
  name: string;
  role: string;
  location: string;
  email: string;
  github: string;
  linkedin: string;
  twitter?: string;
  instagram?: string;
  shortBio: string;
  longBio: string;
  goals: string[];
  philosophy: string;
}

export interface Experience {
  title: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Project {
  title: string;
  description: string;
  stack: string[];
  liveUrl?: string;
  githubUrl: string;
  thumbnail?: string;
}
