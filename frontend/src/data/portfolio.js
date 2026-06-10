import { FaCode, FaDatabase, FaGithub, FaLinkedin, FaNodeJs, FaPython, FaReact, FaTools } from 'react-icons/fa';
import { HiOutlineCpuChip, HiOutlineServerStack } from 'react-icons/hi2';
import { SiExpress, SiFramer, SiMongodb, SiTailwindcss, SiTensorflow, SiVite } from 'react-icons/si';

export const navItems = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export const socials = [
  { label: 'GitHub', href: 'https://github.com/', icon: FaGithub },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/', icon: FaLinkedin },
  { label: 'Email', href: 'mailto:rathivarshini@example.com', icon: FaCode },
];

export const timeline = [
  {
    period: '2022 - Present',
    title: 'B.Tech Artificial Intelligence and Machine Learning',
    body: 'Building a strong engineering foundation across data structures, full stack systems, machine learning, model evaluation, and applied AI workflows.',
  },
  {
    period: 'Focus Area',
    title: 'AI-powered Product Engineering',
    body: 'Combining React, Node.js, MongoDB, Python, and ML concepts to ship practical applications with clean UX and measurable outcomes.',
  },
];

export const skillGroups = [
  {
    title: 'Frontend',
    icon: FaReact,
    skills: [
      { name: 'React.js', value: 92 },
      { name: 'Tailwind CSS', value: 90 },
      { name: 'Framer Motion', value: 84 },
      { name: 'React Router', value: 86 },
    ],
  },
  {
    title: 'Backend',
    icon: HiOutlineServerStack,
    skills: [
      { name: 'Node.js', value: 86 },
      { name: 'Express.js', value: 85 },
      { name: 'JWT Auth', value: 82 },
      { name: 'REST APIs', value: 88 },
    ],
  },
  {
    title: 'Database',
    icon: FaDatabase,
    skills: [
      { name: 'MongoDB Atlas', value: 84 },
      { name: 'Mongoose', value: 82 },
      { name: 'Schema Design', value: 78 },
    ],
  },
  {
    title: 'AI/ML',
    icon: HiOutlineCpuChip,
    skills: [
      { name: 'Machine Learning', value: 82 },
      { name: 'Deep Learning', value: 76 },
      { name: 'Computer Vision', value: 74 },
      { name: 'NLP', value: 72 },
    ],
  },
  {
    title: 'Programming Languages',
    icon: FaPython,
    skills: [
      { name: 'Python', value: 88 },
      { name: 'JavaScript', value: 87 },
      { name: 'Java', value: 76 },
      { name: 'SQL', value: 70 },
    ],
  },
  {
    title: 'Tools',
    icon: FaTools,
    skills: [
      { name: 'GitHub', value: 86 },
      { name: 'Vite', value: 84 },
      { name: 'Postman', value: 80 },
      { name: 'Vercel', value: 78 },
    ],
  },
];

export const featuredProjects = [
  {
    title: 'PDF Chatbot',
    description: 'AI document assistant that extracts context from PDFs and answers questions with a clean chat workflow.',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1200&q=80',
    githubLink: 'https://github.com/',
    liveLink: 'https://example.com',
    technologies: ['React', 'Node.js', 'AI', 'PDF Parser'],
    featured: true,
  },
  {
    title: 'SafeRoute AI',
    description: 'Safety-first route planning concept that combines location intelligence, risk scoring, and user-friendly alerts.',
    image: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=1200&q=80',
    githubLink: 'https://github.com/',
    liveLink: 'https://example.com',
    technologies: ['React', 'Maps API', 'ML', 'Express'],
    featured: true,
  },
  {
    title: 'Personal Portfolio Website',
    description: 'Full stack portfolio with admin management, project APIs, JWT authentication, and a premium responsive interface.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=80',
    githubLink: 'https://github.com/',
    liveLink: 'https://example.com',
    technologies: ['React', 'Tailwind', 'MongoDB', 'JWT'],
    featured: true,
  },
  {
    title: 'Fitness App',
    description: 'Workout tracking app concept with progress views, personalized routines, and approachable health metrics.',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=1200&q=80',
    githubLink: 'https://github.com/',
    liveLink: 'https://example.com',
    technologies: ['React', 'Node.js', 'Charts', 'MongoDB'],
    featured: true,
  },
  {
    title: 'Retinal Disease Detection using AI',
    description: 'Computer vision project focused on retinal image classification and accessible diagnostic assistance.',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1200&q=80',
    githubLink: 'https://github.com/',
    liveLink: 'https://example.com',
    technologies: ['Python', 'TensorFlow', 'CNN', 'AI'],
    featured: true,
  },
];

export const certifications = [
  'AI Foundation Certification',
  'Python Course Completion',
  'Full Stack Development Training',
  'Machine Learning Fundamentals',
];

export const experience = [
  {
    role: 'Full Stack Development Intern',
    company: 'Thiranex',
    period: 'Internship',
    highlights: [
      'Built responsive React interfaces with reusable component patterns.',
      'Integrated REST APIs and improved frontend data handling.',
      'Practiced production workflows across Git, testing, and deployment preparation.',
    ],
  },
];

export const githubStats = [
  { label: 'Repositories', value: '20+' },
  { label: 'Tech Stack', value: 'MERN' },
  { label: 'Focus', value: 'AI + Web' },
];

export const techIcons = [FaReact, SiTailwindcss, SiFramer, FaNodeJs, SiExpress, SiMongodb, SiTensorflow, SiVite];
