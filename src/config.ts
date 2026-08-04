export const siteConfig = {
  name: 'Daniel Markusson',
  shortName: 'DM',
  title: 'Daniel Markusson — Software Developer',
  description:
    'Software developer at RBC and Computer Science student at the University of Toronto in Toronto, Canada.',
  url: 'https://www.danielmarkusson.net',
  location: 'Toronto, Canada',
  email: 'markussondan@gmail.com',
  links: {
    linkedin: 'https://www.linkedin.com/in/daniel-markusson-61a4a8263/',
    github: 'https://github.com/Dmarky9873',
    youtube: 'https://www.youtube.com/@DanielMarkusson',
    instagram: 'https://www.instagram.com/daniel_markusson/',
  },
} as const;

export const navigation = [
  { label: 'Work', href: '/portfolio' },
  { label: 'About', href: '/about' },
  { label: 'Writing', href: '/writing' },
  { label: 'Contact', href: '/contact' },
] as const;
