import type { Project } from '../types';

const colors = [
  { bg: '#0E7490', text: '#ffffff' },
  { bg: '#1D4ED8', text: '#ffffff' },
  { bg: '#7C3AED', text: '#ffffff' },
  { bg: '#059669', text: '#ffffff' },
  { bg: '#D97706', text: '#ffffff' },
  { bg: '#DC2626', text: '#ffffff' },
  { bg: '#DB2777', text: '#ffffff' },
  { bg: '#D4A017', text: '#000000' },
  { bg: '#4F46E5', text: '#ffffff' },
  { bg: '#65A30D', text: '#ffffff' },
  { bg: '#CA8A04', text: '#000000' },
];

function svgThumbnail(index: number, title: string, pattern: string): string {
  const c = colors[index % colors.length];
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="400" height="225" viewBox="0 0 400 225">
    <rect width="400" height="225" fill="${c.bg}"/>
    <text x="200" y="110" text-anchor="middle" fill="${c.text}" font-family="system-ui" font-weight="700" font-size="48">${pattern}</text>
    <text x="200" y="150" text-anchor="middle" fill="${c.text}" opacity="0.6" font-family="system-ui" font-size="14">${title}</text>
  </svg>`;
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export const projects: Project[] = [
  {
    title: 'Inventory Management',
    description:
      'A web application I built to help motorcycle workshops manage inventory, sales, and expenses.',
    stack: ['Javascript', 'React.js', 'Express.js', 'Tailwind CSS', 'Vite'],
    thumbnail: svgThumbnail(0, 'Inventory Management', 'I'),
    liveUrl: 'https://dasajayamotor.vercel.app/',
    githubUrl: 'https://github.com/kaesr03/persediaan-fe',
  },
  {
    title: 'Predictive Maintenance Copilot',
    description:
      'A web application built with my capstone team during the ASAH Dicoding program, designed to predict industrial machine maintenance using Agentic AI.',
    stack: [
      'Javascript',
      'React.js',
      'React',
      'PostgreSQL',
      'python',
      'pandas',
      'numpy',
    ],
    thumbnail: svgThumbnail(1, 'Predictive Maintenance Copilot', 'P'),
    liveUrl: 'https://capstone-asah2025-fe.vercel.app/',
    githubUrl: 'https://github.com/fatimaah0123/CapstoneAsah_Aura.git',
  },
  {
    title: 'BetzBread',
    description:
      'A web application I built to help bread shop manage inventory.',
    stack: ['CSS', 'PHP', 'HTML', 'MYsql', 'Laravel'],
    thumbnail: svgThumbnail(2, 'Bread', 'B'),
    githubUrl: 'https://github.com/kaesr03/rotiLaravel.git',
  },
];
