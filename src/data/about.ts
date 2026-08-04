import type { ImageMetadata } from 'astro';

export interface CurrentFact {
  label: string;
  value: string;
  detail?: string;
}

export interface ExperienceMilestone {
  period: string;
  role: string;
  organization: string;
  location: string;
  summary: string;
}

export interface AboutLink {
  label: string;
  href: string;
}

export interface AboutSection {
  id: 'making' | 'abstraction' | 'leadership' | 'athletics' | 'music';
  eyebrow: string;
  title: string;
  body: readonly string[];
  image: {
    src: ImageMetadata | string;
    alt: string;
    position: 'left' | 'right';
    portrait?: boolean;
    video?: {
      mp4: string;
      webm: string;
      poster: string;
    };
  };
  links?: readonly AboutLink[];
}

export const professionalBio = [
  "I'm a Computer Science student at the University of Toronto and a software developer on RBC's RIG team in Toronto. My work spans enterprise front-end systems, full-stack internal tools, applied machine learning, and autonomous robotics.",
  "I like turning ideas into real things, whether I'm programming, writing music, or building by hand. I care about the process, stay curious, and do my best work alongside people I trust.",
] as const;

export const currentFacts = [
  {
    label: 'Work',
    value: 'Software Developer at RBC',
    detail: 'RIG Team · 2026–present',
  },
  {
    label: 'Education',
    value: 'BSc in Computer Science, University of Toronto',
    detail: 'Expected 2029 · GPA 3.9/4.0',
  },
  {
    label: 'Based in',
    value: 'Toronto, Canada',
  },
] as const satisfies readonly CurrentFact[];

export const experienceMilestones = [
  {
    period: '2026–present',
    role: 'Software Developer, RIG Team',
    organization: 'Royal Bank of Canada',
    location: 'Toronto, Canada',
    summary:
      "I develop reusable React components within RBC's RIG design framework and refine production interfaces for consistency, accessibility, and reuse.",
  },
  {
    period: 'Expected 2029',
    role: 'BSc in Computer Science',
    organization: 'University of Toronto',
    location: 'Toronto, Canada',
    summary: 'I am pursuing a Computer Science degree with a 3.9/4.0 GPA.',
  },
  {
    period: '2025',
    role: 'Innovation Developer',
    organization: 'Royal Bank of Canada',
    location: 'Toronto, Canada',
    summary:
      'My four-person team built a React, Go, and PostgreSQL platform for Apollo SREs that reduced proxy deployment from nine hours to 90 minutes—an 83% improvement—and won Most Innovative Solution for the cohort.',
  },
  {
    period: '2024',
    role: 'Innovation Developer Intern',
    organization: 'Royal Bank of Canada',
    location: 'Toronto, Canada',
    summary:
      "Selected as one of 40 interns from more than 1,100 applicants, I helped build an onboarding platform that reduced setup by more than 40 hours per hire and presented the team's work to RBC's CTO and senior executives.",
  },
  {
    period: '2022–2025',
    role: 'Founder and Team Canada Captain',
    organization: 'Advanced Robotics Club',
    location: 'Toronto, Canada',
    summary:
      "I founded and grew Crestwood's Advanced Robotics Club, secured $5,000 in sponsorships, recruited 12 active members, and led Canada at RoboCup Junior in France in 2023 and Brazil in 2025.",
  },
  {
    period: '2024',
    role: 'Researcher and Author',
    organization: 'A Minimal Approach to Fake News Detection',
    location: 'Toronto, Canada',
    summary:
      'I published a preprint proposing a five-feature XGBoost model that achieved 71% classification accuracy and presented the work at the Polygence Symposium.',
  },
] as const satisfies readonly ExperienceMilestone[];

export const personalSections = [
  {
    id: 'making',
    eyebrow: 'Making',
    title: 'The process is the point.',
    body: [
      "I'm drawn to turning ideas into real things. Sometimes that means coding, sometimes writing music, and sometimes hand-carving a wooden crossbow.",
      "I enjoy the process more than the outcome. Genuine curiosity has carried me further than discipline alone ever could, though I still value the discipline required to finish what I start.",
    ],
    image: {
      src: '/media/optimized/about/night-waterfront.webp',
      alt: 'Daniel standing by the waterfront at night.',
      position: 'right',
      portrait: true,
    },
  },
  {
    id: 'abstraction',
    eyebrow: 'Computer science',
    title: 'Abstraction makes ambitious work possible.',
    body: [
      "Computer science became a natural outlet for the way I think. I'm fascinated by layers of abstraction: you do not need to understand an entire computer to use it, program it, and build useful things with it.",
      "The same idea applies to organizations. Beyond a certain size, no one person can know every granular detail; good interfaces and clear ownership let people move together.",
    ],
    image: {
      src: '/media/optimized/about/robotic-hand-poster.webp',
      alt: 'A robotic hand being controlled by a glove.',
      position: 'left',
      video: {
        mp4: '/media/optimized/about/robotic-hand.mp4',
        webm: '/media/optimized/about/robotic-hand.webm',
        poster: '/media/optimized/about/robotic-hand-poster.webp',
      },
    },
  },
  {
    id: 'leadership',
    eyebrow: 'Leadership and robotics',
    title: 'Trust capable people, then build together.',
    body: [
      "That model shapes how I lead teams: I do not need every granular detail to run a group, but I do need capable people I can trust. I've been fortunate to have them around me.",
      "Robotics gave me a place to practice that approach. I founded Crestwood's Advanced Robotics Club and led teams representing Canada at RoboCup in France and Brazil.",
    ],
    image: {
      src: '/media/optimized/about/robocup-looking-away.webp',
      alt: 'Daniel looking away during RoboCup.',
      position: 'right',
    },
  },
  {
    id: 'athletics',
    eyebrow: 'Athletics',
    title: 'Hard work, made habitual.',
    body: [
      "When I'm away from a keyboard, I'm often on a basketball court, at an MMA gym, or lifting weights—and, sometimes, studying.",
      'Athletics have been a constant in my life for years. More than anything else, they taught me how to work hard.',
    ],
    image: {
      src: '/media/optimized/about/basketball-freethrow.webp',
      alt: 'Daniel shooting a free throw during a basketball game.',
      position: 'left',
    },
  },
  {
    id: 'music',
    eyebrow: 'Music',
    title: 'Music was my first love.',
    body: [
      "I've played drums and bass in bands throughout high school and university. My favourite genres are jazz, progressive rock, jazz fusion, and heavy metal—and yes, I'm a King Crimson fan.",
      "I could happily give a talk on drummer Vinnie Colaiuta's career, especially his work on Frank Zappa's Joe's Garage.",
    ],
    image: {
      src: '/media/optimized/about/drumming-stage.webp',
      alt: 'Daniel playing drums on stage.',
      position: 'right',
      portrait: true,
    },
    links: [
      {
        label: 'Vinnie Colaiuta',
        href: 'https://en.wikipedia.org/wiki/Vinnie_Colaiuta',
      },
      {
        label: "Frank Zappa's Joe's Garage",
        href: 'https://en.wikipedia.org/wiki/Joe%27s_Garage',
      },
    ],
  },
] as const satisfies readonly AboutSection[];

export const about = {
  eyebrow: 'About Daniel',
  title: 'I build systems, teams, and things that move.',
  bio: professionalBio,
  current: currentFacts,
  experience: experienceMilestones,
  sections: personalSections,
} as const;
