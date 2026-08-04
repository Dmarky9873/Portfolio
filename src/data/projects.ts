export type ProjectCategory =
  | 'Product engineering'
  | 'Software engineering'
  | 'Robotics'
  | 'Startup'
  | 'Research';

export interface ProjectLink {
  label: string;
  href: string;
}

export interface ProjectMedia {
  path: string;
  alt: string;
}

export interface ProjectMetric {
  value: string;
  label: string;
}

export interface ProjectSection {
  heading: string;
  paragraphs: string[];
}

export interface Project {
  slug: string;
  title: string;
  year: string;
  category: ProjectCategory;
  featured: boolean;
  eyebrow: string;
  summary: string;
  outcome: string;
  role: string;
  team: string[];
  stack: string[];
  links: ProjectLink[];
  cover: ProjectMedia;
  gallery: ProjectMedia[];
  metrics: ProjectMetric[];
  sections: ProjectSection[];
  nextStep: string;
}

export const projects: Project[] = [
  {
    slug: 'second-innovation-developer-internship',
    title: 'RBC Summer Tech Labs · 2025',
    year: '2025',
    category: 'Product engineering',
    featured: true,
    eyebrow: 'Innovation Developer Internship · 2025',
    summary:
      'A deployment dashboard that made it faster for RBC site reliability engineers to configure and test API proxies.',
    outcome:
      'The team reduced a nine-hour weekly workflow to 90 minutes—an 83% improvement—and won Most Innovative Solution for the 2025 Innovation Developer cohort.',
    role: 'Innovation Developer Intern',
    team: [
      'Daniel Markusson',
      'Kaibo Huang',
      'Divya Sivaram',
      'Roshan Iruku',
    ],
    stack: [],
    links: [],
    cover: {
      path: '/media/optimized/portfolio/second-rbc-internship/cover.webp',
      alt: 'Daniel and members of the 2025 RBC Summer Tech Labs cohort outside the office.',
    },
    gallery: [
      {
        path: '/media/optimized/portfolio/second-rbc-internship/team-selfie-downtown.webp',
        alt: 'Daniel with his 2025 RBC Summer Tech Labs team in downtown Toronto.',
      },
      {
        path: '/media/optimized/portfolio/second-rbc-internship/dad-selfie.webp',
        alt: 'Daniel and his dad visiting the RBC office.',
      },
      {
        path: '/media/optimized/portfolio/second-rbc-internship/team-selfie-park.webp',
        alt: 'The 2025 RBC Summer Tech Labs team together in a park.',
      },
      {
        path: '/media/optimized/portfolio/second-rbc-internship/team-dinner.webp',
        alt: 'The 2025 RBC Summer Tech Labs team at dinner.',
      },
      {
        path: '/media/optimized/portfolio/second-rbc-internship/award-certificate.webp',
        alt: 'Most Innovative Solution certificate from RBC Summer Tech Labs.',
      },
    ],
    metrics: [
      {
        value: '83%',
        label: 'less time spent preparing API proxies',
      },
      {
        value: '9 hours',
        label: 'estimated weekly workflow before the dashboard',
      },
      {
        value: '90 minutes',
        label: 'estimated weekly workflow after the dashboard',
      },
    ],
    sections: [
      {
        heading: 'Back at RBC for a second summer',
        paragraphs: [
          'After my first RBC internship in 2024, I received a return offer for the summer between Grade 12 and university. I already understood the rhythm of Summer Tech Labs, so I set two goals: meet as many people as I could and do the strongest work possible for my team.',
          'I joined Kaibo Huang, Divya Sivaram and Roshan Iruku as a high-school intern. Our brief was to improve how Apollo site reliability engineers deploy API proxies.',
        ],
      },
      {
        heading: 'Why API-proxy setup took nine hours',
        paragraphs: [
          'Banking applications use APIs to move information between their interfaces and backend systems. For example, the RBC app retrieves a bank balance from backend servers rather than keeping that information on the phone. RBC adds in-house API proxies over its already secure vendor platform as another protective layer around those exchanges.',
          'Those proxies were time-consuming to configure for testing and deployment. We estimated that SREs collectively spent about nine hours on the setup in a typical week, so we built a dashboard around the workflow.',
        ],
      },
      {
        heading: 'From nine hours to 90 minutes',
        paragraphs: [
          'The dashboard brought the weekly estimate down from nine hours to 90 minutes, an 83% reduction. That result earned our team Most Innovative Solution for the 2025 Innovation Developer cohort.',
          'The award was exciting, but the team and another return offer mattered just as much to me.',
        ],
      },
    ],
    nextStep:
      'RBC invited me back for a third summer, where I now work on the RIG team.',
  },
  {
    slug: 'smear',
    title: 'Smear',
    year: '2026',
    category: 'Software engineering',
    featured: true,
    eyebrow: 'Independent project · 2026',
    summary:
      'I brought my family’s card game online, then added bots, a match simulator, live lobbies, and a learning mode.',
    outcome:
      'The site documents our family rules, lets people play online, and uses self-play to compare bot strategies.',
    role: 'Independent designer and developer',
    team: [],
    stack: ['Python', 'FastAPI', 'React'],
    links: [
      {
        label: 'Play Smear',
        href: 'https://play-smear.com/',
      },
    ],
    cover: {
      path: '/media/optimized/portfolio/smear/cards-cover.webp',
      alt: 'A small hand of worn playing cards fanned face-down on a warm tabletop.',
    },
    gallery: [
      {
        path: '/media/optimized/portfolio/smear/2.webp',
        alt: 'The Smear lobby and table setup screen.',
      },
      {
        path: '/media/optimized/portfolio/smear/3.webp',
        alt: 'A Smear game in progress during the auction phase.',
      },
      {
        path: '/media/optimized/portfolio/smear/4.webp',
        alt: "A learning challenge comparing a player's decision with the strongest bot's move.",
      },
    ],
    metrics: [
      {
        value: 'Thousands',
        label: 'of simulated matches used to compare bots',
      },
    ],
    sections: [
      {
        heading: 'Why I built it',
        paragraphs: [
          "My dad's side of the family has played Smear for as long as I can remember. It is a Canadian Prairie card game, and I spent years at the table waiting until I was old enough to join. Once I learned, I was hooked—and eventually began wondering how a computer could play a game whose rules were passed down rather than formally documented.",
        ],
      },
      {
        heading: 'Turning our house rules into code',
        paragraphs: [
          'I implemented the rules in Python, connected them to a FastAPI backend and built the interface in React. The game handles bidding, trump, jokers, hidden hands and scoring. Translating all of the house rules faithfully took repeated testing against the way my family expected each round to behave.',
        ],
      },
      {
        heading: 'Training bots without match data',
        paragraphs: [
          'There is no database of expert Smear matches, so the bots had to learn by playing. I started with random and greedy players, then built minimax and small neural bots trained through self-play.',
          'I also built a simulator that runs thousands of matches and tracks Elo. It rotates seats so a bot does not appear stronger simply because it received a favourable position.',
        ],
      },
      {
        heading: 'Taking it online',
        paragraphs: [
          'I added live lobbies, real-time updates, games against bots and a learning mode in which players choose a move before seeing what the strongest bot would play. What began as an experiment now documents our rules, lets other people learn the game and gives me a way to test bots against one another.',
        ],
      },
    ],
    nextStep:
      'Next I want to run a live tournament for relatives across the country.',
  },
  {
    slug: 'advanced-robotics',
    title: 'Advanced Robotics Club',
    year: '2022–2025',
    category: 'Robotics',
    featured: true,
    eyebrow: 'RoboCup Junior · 2022–2025',
    summary:
      'Three Crestwood students built autonomous soccer robots, won nationally and represented Canada at RoboCup in France and Brazil.',
    outcome:
      "After winning nationals in 2023, I founded Crestwood's first Advanced Robotics Club. Its first meeting filled two classrooms, and we returned to international competition in 2025.",
    role: 'Robot designer, builder and club founder',
    team: ['Daniel Markusson', 'Hayden Patience', 'Luke Hartford'],
    stack: ['Autonomous robotics', 'Electronics', 'Rapid prototyping'],
    links: [
      {
        label: 'Watch the 2025 robot',
        href: 'https://www.youtube.com/watch?v=hKEXCdHGUBc&list=PLLjR-m9oUah_GIAkYu5iZuuBbOm_w8b6B&index=1',
      },
    ],
    cover: {
      path: '/media/optimized/portfolio/robotics-bordeaux-with-luke-hayden-koaich.webp',
      alt: 'Daniel in Bordeaux with Luke, Hayden and Mr. Koaich during RoboCup 2023.',
    },
    gallery: [
      {
        path: '/src/assets/images/portfolio/advanced-robotics/old-robot.gif',
        alt: 'The original autonomous robot homing onto the front of the goal.',
      },
      {
        path: '/media/optimized/portfolio/advanced-robotics/messy-wires.webp',
        alt: 'Daniel working among the wiring and electronics of a robotics project.',
      },
      {
        path: '/src/assets/images/portfolio/advanced-robotics/new-robot.gif',
        alt: 'The rebuilt robot tracking and chasing the ball.',
      },
      {
        path: '/media/optimized/portfolio/advanced-robotics/team.webp',
        alt: 'Members of the Crestwood robotics team together in 2024.',
      },
    ],
    metrics: [
      {
        value: '1st place',
        label: "at Toronto's RoboCup competition",
      },
      {
        value: '2×',
        label: 'represented Canada internationally',
      },
      {
        value: '2 classrooms',
        label: 'filled at the first Advanced Robotics Club meeting',
      },
    ],
    sections: [
      {
        heading: 'The classroom that got me into robotics',
        paragraphs: [
          "On my first visit to the high school I would later attend, Mr. Wan's engineering room immediately caught my attention: wires, circuits and metal parts covered the space. Its capstone project was RoboCup, where teams build one attacking and one defending robot to play autonomous soccer.",
          'Mr. Wan invited me into the Grade 11 engineering class while I was in Grade 10. The workshop became a creative studio where I learned by building increasingly capable robots with my peers.',
        ],
      },
      {
        heading: 'From Toronto to Bordeaux',
        paragraphs: [
          "Crestwood had never won the competition and had fewer resources than many established teams, but our work earned first place in Toronto and the chance to represent Canada at the 2023 RoboCup Junior International finals in Bordeaux, France.",
          "Our quickly built robots stood beside designs that other teams had refined for years. When our gyroscope failed, the Croatian team immediately lent us a spare. That was my first glimpse of how generous the RoboCup community could be.",
        ],
      },
      {
        heading: 'Building a robotics community at Crestwood',
        paragraphs: [
          "Back at school, I founded Crestwood's first Advanced Robotics Club. I promoted it on the daily announcements for a week, and the first meeting filled two classrooms. Our principal became the first sponsor, promising to match every dollar we raised from other organizations.",
          "We formed a media team, attracted external sponsors and gave more students a place to build robots and compete. The club became one of Crestwood's most popular organizations.",
          'RoboCup convinced me to keep pursuing computer science. Founding the club taught me how to recruit, mentor and keep a team moving.',
        ],
      },
      {
        heading: 'Starting again for 2025',
        paragraphs: [
          "In Grade 12, we scrapped the previous design and rebuilt the robot from the ground up. After university admissions, we could dedicate more time to it, and the decision paid off with a dominant national performance and another invitation to represent Canada. At nationals, we named the robots after our lunches: Crispy Chicken and Montreal Smoked Meat.",
          'The international event took us to Brazil for a week. We performed far better than we had in France and met remarkable teams. Brazil was the highlight of my summer, and the rebuilt robot performed much better than our 2023 version.',
        ],
      },
    ],
    nextStep: 'The final 2025 robot is on YouTube, linked above.',
  },
  {
    slug: 'first-innovation-developer-internship',
    title: 'RBC Summer Tech Labs · 2024',
    year: '2024',
    category: 'Product engineering',
    featured: false,
    eyebrow: 'Innovation Developer Internship · 2024',
    summary:
      'An onboarding guide that helped new RBC developers find instructions and get set up faster.',
    outcome:
      'Our four-person pod shipped the guide, and I learned React, frontend development, and product design on a working team.',
    role: 'Innovation Developer Intern',
    team: [
      'Daniel Markusson',
      'Aricia Chan',
      'Diya Mehta',
      'Divy Shah',
      'Quinn Liddicoat · Pod Manager',
    ],
    stack: ['React', 'Frontend development', 'Product design'],
    links: [
      {
        label: 'RBC Summer Tech Labs',
        href: 'https://www.rbc.com/en/future-launch/resource-type/programs-services/rbc-summer-tech-labs/',
      },
      {
        label: 'Aricia Chan',
        href: 'https://ariciachan.com',
      },
      {
        label: 'Divy Shah',
        href: 'https://www.linkedin.com/in/divyjshah/',
      },
      {
        label: 'Diya Mehta',
        href: 'https://www.linkedin.com/in/diyamehta13/',
      },
      {
        label: 'Quinn Liddicoat',
        href: 'https://www.linkedin.com/in/quinn-liddicoat-03174aa/',
      },
    ],
    cover: {
      path: '/media/optimized/portfolio/stl-group-photo.webp',
      alt: 'Members of the 2024 RBC Summer Tech Labs cohort in front of gold STL balloons.',
    },
    gallery: [
      {
        path: '/media/optimized/portfolio/first-rbc-internship/at-the-desk.webp',
        alt: 'An RBC workstation used during the 2024 Summer Tech Labs internship.',
      },
      {
        path: '/media/optimized/portfolio/first-rbc-internship/breakfast.webp',
        alt: 'Breakfast during the 2024 RBC Summer Tech Labs internship.',
      },
      {
        path: '/media/optimized/portfolio/first-rbc-internship/in-the-food-court.webp',
        alt: 'The team spending time together in the food court.',
      },
      {
        path: '/media/optimized/portfolio/first-rbc-internship/nice-view.webp',
        alt: 'The view from the RBC office during Summer Tech Labs.',
      },
    ],
    metrics: [
      {
        value: '40',
        label: 'high-school students selected for the cohort',
      },
      {
        value: '4 people',
        label: 'in the product pod',
      },
    ],
    sections: [
      {
        heading: 'Applying to Summer Tech Labs',
        paragraphs: [
          'During Grade 11 in 2024, I learned about the chance to spend a summer at RBC as an Innovation Developer. After the coding interview led to a recruiter interview, I practised possible questions with my dad every day. A nervous wait ended with an offer to join the cohort as one of 40 selected high-school students.',
        ],
      },
      {
        heading: 'A four-person product pod',
        paragraphs: [
          'I arrived nervous, but quickly felt at home among like-minded students. Summer Tech Labs divided the cohort into four-person pods, each supported by an RBC employee. I worked with Aricia Chan, Diya Mehta and Divy Shah under our pod manager, Quinn Liddicoat. We became close friends and have stayed in touch.',
          'Our brief was to create an onboarding guide from scratch for developers joining RBC. After experiencing a full week of onboarding ourselves, we understood why clear, accurate and easy-to-follow instructions mattered. When obstacles surfaced, the four of us worked through them as a team.',
        ],
      },
      {
        heading: 'Learning how a product team works',
        paragraphs: [
          'I learned a lot about design, frontend development and React. I also grew to enjoy the daily commute, the professional routine and getting dressed for the office.',
          'People across RBC were generous with their time. Quinn deserves particular credit for checking in every day and filling the gaps in our knowledge. The work was rewarding, but the relationships were the most valuable part of the summer.',
        ],
      },
    ],
    nextStep: 'RBC invited me back to Summer Tech Labs in 2025.',
  },
  {
    slug: 'shredr',
    title: 'Shredr',
    year: '2025',
    category: 'Software engineering',
    featured: false,
    eyebrow: 'Independent product · 2025',
    summary:
      'A restaurant search tool for comparing healthier menu options.',
    outcome:
      'Users choose a restaurant, compare healthier dishes, and pick a meal.',
    role: 'Independent product developer',
    team: [],
    stack: [],
    links: [
      {
        label: 'Open Shredr',
        href: 'https://www.shredr.ca',
      },
    ],
    cover: {
      path: '/src/assets/images/portfolio/shredr/preview.jpg',
      alt: 'Shredr asking a user where they are eating today.',
    },
    gallery: [],
    metrics: [],
    sections: [
      {
        heading: 'A faster meal decision',
        paragraphs: [
          "Shredr helps people compare healthier meals on restaurant menus. Choose a restaurant, compare the listed options and pick a meal.",
          'I built it to make menu comparisons faster when choosing a restaurant meal.',
        ],
      },
    ],
    nextStep: 'Shredr is live at shredr.ca.',
  },
  {
    slug: 'a-minimal-approach-to-fake-news-detection',
    title: 'A Minimal Approach to Fake News Detection',
    year: '2024',
    category: 'Research',
    featured: false,
    eyebrow: 'Independent research paper · 2024',
    summary:
      'A six-month research project testing whether five article-level features could distinguish fake news from real news.',
    outcome:
      'The five-feature XGBoost model reached 71% test accuracy, and the paper was published in 2024.',
    role: 'Researcher and author',
    team: [],
    stack: ['Machine learning', 'Natural language processing'],
    links: [
      {
        label: 'Read on ResearchGate',
        href: 'https://www.researchgate.net/publication/394957216_A_Minimal_Approach_to_Fake_News_Detection',
      },
      {
        label: 'Download the paper',
        href: '/src/assets/files/papers/a-minimal-approach-to-fake-news-detection.pdf',
      },
    ],
    cover: {
      path: '/src/assets/images/portfolio/machine-learning.png',
      alt: 'A machine-learning wordmark beside a network shaped like a light bulb.',
    },
    gallery: [
      {
        path: '/src/assets/images/writing/a-minimal-approach-to-fake-news-detection.png',
        alt: 'The first page of A Minimal Approach to Fake News Detection.',
      },
    ],
    metrics: [
      {
        value: '6 months',
        label: 'spent researching and writing the paper',
      },
    ],
    sections: [
      {
        heading: 'A deliberately small feature set',
        paragraphs: [
          'Over six months, I studied how other researchers had applied machine learning to fake-news detection. I wanted to find out whether a useful model could work with as few textual features as possible.',
          'The resulting paper reviews established approaches and presents my own minimal method. The five-feature XGBoost model reached 71% test accuracy.',
        ],
      },
      {
        heading: 'Learning through publication',
        paragraphs: [
          'Researching, testing and writing the paper gave me practical experience with natural-language processing and machine learning.',
        ],
      },
    ],
    nextStep: 'The paper is published and available on ResearchGate.',
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
