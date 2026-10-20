export interface TechItem {
  name: string;
  icon: string;
  darkIcon?: string;
}

export const frontendSkills: TechItem[] = [
  { name: 'React', icon: '/tech/react.svg' },
  { name: 'TypeScript', icon: '/tech/typescript.svg' },
  { name: 'JavaScript', icon: '/tech/js.svg' },
  { name: 'Tailwind CSS', icon: '/tech/tailwindcss.svg' },
  {
    name: 'shadcn/ui',
    icon: '/tech/shadcn-ui-light.svg',
    darkIcon: '/tech/shadcn-ui-dark.svg',
  },
  { name: 'Vite', icon: '/tech/vite.svg' },
  { name: 'HTML5', icon: '/tech/html5.svg' },
  {
    name: 'CSS',
    icon: '/tech/css3.svg',
    darkIcon: '/tech/css3-dark.svg',
  },
];

export const backendSkills: TechItem[] = [
  { name: 'Node', icon: '/tech/nodejs-light.svg' },
  { name: 'MySQL', icon: '/tech/mysql.svg' },
  { name: 'Express', icon: '/tech/express.svg' },
  { name: 'Supabase', icon: '/tech/supabase.svg' },
  { name: 'PostgreSQL', icon: '/tech/postgre.svg' },
];

export const toolsSkills: TechItem[] = [
  { name: 'Git', icon: '/tech/git.svg' },
  {
    name: 'GitHub',
    icon: '/tech/github.svg',
    darkIcon: '/tech/github-dark.svg',
  },
  {
    name: 'Vercel',
    icon: '/tech/vercel-light.svg',
    darkIcon: '/tech/vercel-dark.svg',
  },
  // { name: "Docker", icon: "/tech/docker.svg" },
  { name: 'NPM', icon: '/tech/npm.svg' },
];

export const skillRows: {
  direction: 'left' | 'right';
  category: string;
  items: TechItem[];
}[] = [
  {
    direction: 'left',
    category: 'Frontend',
    items: frontendSkills,
  },
  {
    direction: 'right',
    category: 'Backend',
    items: backendSkills,
  },
  {
    direction: 'left',
    category: 'Tools & DevOps',
    items: toolsSkills,
  },
];
