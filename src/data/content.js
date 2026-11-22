export const profile = {
  name: 'Has Adhi Rian',
  email: 'hasadhi93@gmail.com',
  linkedin: 'https://www.linkedin.com/in/hasadhirian',
  github: 'https://github.com/mynameAdhi/',
  cv: '/cv/has-adhi-rian-cv.pdf',
  portrait: '/images/profile.jpg',
  harmasentech: 'https://harmasentech.web.id/',
}

export const navItems = [
  { id: 'about', index: '01' },
  { id: 'skills', index: '02' },
  { id: 'projects', index: '03' },
  { id: 'experience', index: '04' },
  { id: 'contact', index: '05' },
]

export const projectOrder = ['dawn-six', 'spk', 'coffee-exporter', 'harmasentech']

export const projectMeta = {
  'dawn-six': {
    index: '01',
    cover: 'broadcast',
    stack: ['Laravel 11', 'Node.js', 'Baileys SDK', 'Vite', 'MySQL', 'REST API'],
    live: null,
    demo: true,
    private: true,
  },
  spk: {
    index: '02',
    cover: 'weights',
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS3', 'Bootstrap'],
    live: null,
    demo: false,
    private: false,
  },
  'coffee-exporter': {
    index: '03',
    cover: 'route',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Vercel', 'Netlify'],
    live: null,
    demo: false,
    private: false,
  },
  harmasentech: {
    index: '04',
    cover: 'blocks',
    stack: ['HTML5', 'CSS3', 'JavaScript', 'Git', 'Vercel'],
    live: profile.harmasentech,
    demo: false,
    private: false,
  },
}

export const experienceOrder = ['harmasentech', 'elang']

export const experienceMeta = {
  harmasentech: {
    company: 'HarmasenTech',
    location: '',
    current: true,
  },
  elang: {
    company: 'PT Elang System Solusi Indonesia',
    location: 'Depok, Indonesia',
    current: false,
  },
}

export const skillGroups = [
  {
    name: 'Main Stack',
    items: ['Laravel', 'Vue.js', 'Tailwind CSS', 'MySQL'],
  },
  {
    name: 'Frontend',
    items: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript', 'Vue.js', 'React.js'],
  },
  {
    name: 'Backend',
    items: ['PHP (Laravel)', 'Node.js', 'Python'],
  },
  {
    name: 'Database',
    items: ['MySQL'],
  },
  {
    name: 'Tools & Environment',
    items: ['Git', 'Vite', 'REST API'],
  },
]

export const contactChannels = [
  {
    id: 'linkedin',
    index: '02',
    href: profile.linkedin,
    external: true,
  },
  {
    id: 'github',
    index: '03',
    href: profile.github,
    external: true,
  },
  {
    id: 'cv',
    index: '04',
    href: profile.cv,
    download: true,
  },
]
