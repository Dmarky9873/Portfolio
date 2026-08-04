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
        heading: 'Returning with a clearer goal',
        paragraphs: [
          'After my first RBC internship in 2024, I received a return offer for the summer between Grade 12 and university. I already understood the rhythm of Summer Tech Labs, so I set two goals: meet as many people as I could and do the strongest work possible for my team.',
          'I joined Kaibo Huang, Divya Sivaram and Roshan Iruku as a high-school intern. Our brief was to improve how Apollo site reliability engineers deploy API proxies.',
        ],
      },
      {
        heading: 'Making a security workflow easier to use',
        paragraphs: [
          'Banking applications use APIs to move information between their interfaces and backend systems. For example, the RBC app retrieves a bank balance from backend servers rather than keeping that information on the phone. RBC adds in-house API proxies over its already secure vendor platform as another protective layer around those exchanges.',
          'Those proxies were time-consuming to configure for testing and deployment. We estimated that SREs collectively spent about nine hours on the setup in a typical week, so we built a dashboard around the workflow.',
        ],
      },
      {
        heading: 'Measurable time saved',
        paragraphs: [
          'The dashboard brought the weekly estimate down from nine hours to 90 minutes, an 83% reduction. That result earned our team Most Innovative Solution for the 2025 Innovation Developer cohort.',
          'The summer was as much about people as software. I left grateful for the team, the award and another return offer for my first-year university summer.',
        ],
      },
    ],
    nextStep:
      'Build on the project and relationships during the first-year summer return placement offered by RBC.',
  },
  {
    slug: 'smear',
    title: 'Smear',
    year: '2026',
    category: 'Software engineering',
    featured: true,
    eyebrow: 'Independent project · 2026',
    summary:
      'A browser version of a Canadian Prairie card game, backed by self-play bots, a match simulator, live lobbies and an interactive learning mode.',
    outcome:
      'Turned a family game whose rules were mostly passed from person to person into an online system that can preserve the game, teach new players and evaluate competing bot strategies.',
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
      path: '/media/optimized/portfolio/smear/1.webp',
      alt: 'The first playable version of Smear running in a browser.',
    },
    gallery: [
      {
        path: '/media/optimized/portfolio/smear/2.webp',
        alt: 'A debugging view of the round state, legal actions and scoring details.',
      },
      {
        path: '/media/optimized/portfolio/smear/3.webp',
        alt: 'The continuous simulator ranking Smear bots through repeated self-play.',
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
        heading: 'A family game worth keeping',
        paragraphs: [
          "My dad's side of the family has played Smear for as long as I can remember. It is a Canadian Prairie card game, and I spent years at the table waiting until I was old enough to join. Once I learned, I was hooked—and eventually began wondering how a computer could play a game whose rules were passed down rather than formally documented.",
        ],
      },
      {
        heading: 'Turning house rules into software',
        paragraphs: [
          'I implemented the rules in Python, connected them to a FastAPI backend and built the interface in React. The game handles bidding, trump, jokers, hidden hands and scoring. Translating all of the house rules faithfully took repeated testing against the way my family expected each round to behave.',
        ],
      },
      {
        heading: 'Learning without expert match data',
        paragraphs: [
          'There is no database of expert Smear matches, so the bots had to learn by playing. I started with random and greedy players, then built minimax and small neural bots trained through self-play.',
          'I also built a simulator that runs thousands of matches and tracks Elo. It rotates seats so a bot does not appear stronger simply because it received a favourable position.',
        ],
      },
      {
        heading: 'Opening the table to other players',
        paragraphs: [
          'I added live lobbies, real-time updates, games against bots and a learning mode in which players choose a move before seeing what the strongest bot would play. What began as an experiment now helps preserve the game, teach it to new people and test how far the bots can take a card game with almost no online footprint.',
        ],
      },
    ],
    nextStep:
      'Build a live family tournament so relatives across the country can meet around the same virtual table.',
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
      "After the first national win, I founded Crestwood's first Advanced Robotics Club and helped grow it into one of the school's most popular organizations before our team returned to the international stage in 2025.",
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
        heading: 'Finding a creative workshop',
        paragraphs: [
          "On my first visit to the high school I would later attend, Mr. Wan's engineering room immediately caught my attention: wires, circuits and metal parts covered the space. Its capstone project was RoboCup, where teams build one attacking and one defending robot to play autonomous soccer.",
          'Mr. Wan invited me into the Grade 11 engineering class while I was in Grade 10. The workshop became a creative studio where I learned by building increasingly capable robots with my peers.',
        ],
      },
      {
        heading: 'From Toronto to Bordeaux',
        paragraphs: [
          "Crestwood had never won the competition and had fewer resources than many established teams, but our work earned first place in Toronto and the chance to represent Canada at the 2023 RoboCup Junior International finals in Bordeaux, France.",
          "Our quickly built robots stood beside designs that other teams had refined for years. The international community was generous rather than guarded: when our gyroscope failed, the Croatian team immediately lent us a spare. That act reshaped how I thought about competition, collaboration and sportsmanship.",
        ],
      },
      {
        heading: 'Building a robotics community at Crestwood',
        paragraphs: [
          "Back at school, I founded Crestwood's first Advanced Robotics Club. I promoted it on the daily announcements for a week, and the first meeting filled two classrooms. Our principal became the first sponsor, promising to match every dollar we raised from other organizations.",
          "We formed a media team, attracted external sponsors and gave more students the resources to compete. The club became one of Crestwood's most popular organizations, bringing together creative students interested in designing and prototyping ambitious systems.",
          'RoboCup helped clarify the direction I wanted to take in computer science. It also taught me leadership, mentorship and resilience alongside the technical work.',
        ],
      },
      {
        heading: 'Starting again for 2025',
        paragraphs: [
          "In Grade 12, we scrapped the previous design and rebuilt the robot from the ground up. After university admissions, we could dedicate more time to it, and the decision paid off with a dominant national performance and another invitation to represent Canada. At nationals, we named the robots after our lunches: Crispy Chicken and Montreal Smoked Meat.",
          'The international event took us to Brazil for a week. We performed far better than we had in France, met remarkable teams and learned from the experience. The trip became the highlight of my summer and a fitting finish for the strongest version of our robot.',
        ],
      },
    ],
    nextStep:
      'Watch the final 2025 robot compete and carry the lessons from RoboCup into future engineering work.',
  },
  {
    slug: 'first-innovation-developer-internship',
    title: 'RBC Summer Tech Labs · 2024',
    year: '2024',
    category: 'Product engineering',
    featured: false,
    eyebrow: 'Innovation Developer Internship · 2024',
    summary:
      'A from-scratch onboarding guide designed to help new RBC developers find accurate instructions and get productive faster.',
    outcome:
      'The four-person pod delivered an interactive developer onboarding guide while I built practical skills in product design, frontend development and React.',
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
        heading: 'Earning the opportunity',
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
          'The project made design and frontend development tangible, especially the work in React. I also grew to enjoy the daily commute, the professional routine and getting dressed for the office.',
          'People across RBC were generous with their time. Quinn deserves particular credit for checking in every day and filling the gaps in our knowledge. The work was rewarding, but the relationships were the most valuable part of the summer.',
        ],
      },
    ],
    nextStep:
      'Return to RBC Summer Tech Labs in 2025 with stronger product skills and an established network.',
  },
  {
    slug: 'shredr',
    title: 'Shredr',
    year: '2025',
    category: 'Software engineering',
    featured: false,
    eyebrow: 'Independent product · 2025',
    summary:
      'A focused restaurant search tool that surfaces healthier menu options when users need to make a quick decision.',
    outcome:
      'Created a short decision flow: choose a restaurant, compare its menu options and pick a healthier meal without guesswork.',
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
          "Shredr helps people make smarter restaurant choices by surfacing healthier meals from restaurant menus. The experience stays deliberately direct: pick where you're eating, compare the available options and choose a better meal.",
          'I built it as a practical tool for reducing the guesswork that often comes with comparing restaurant menus on the spot.',
        ],
      },
    ],
    nextStep: 'Use Shredr to compare healthier options at a restaurant.',
  },
  {
    slug: 'a-minimal-approach-to-fake-news-detection',
    title: 'A Minimal Approach to Fake News Detection',
    year: '2024',
    category: 'Research',
    featured: false,
    eyebrow: 'Independent research paper · 2024',
    summary:
      'A six-month investigation of machine-learning approaches to fake-news detection, centred on using as few textual features as possible.',
    outcome:
      'Published a paper that reviews existing approaches and presents a novel, deliberately minimal method for detecting fake news.',
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
          'The resulting paper reviews established approaches and presents my own minimal method. The experiment worked well enough to support the central idea and became the basis of the published paper.',
        ],
      },
      {
        heading: 'Learning through publication',
        paragraphs: [
          'I found the academic process immensely fulfilling. Researching, testing and writing the paper deepened my understanding of natural language processing and machine learning, and improved my practical skills in both.',
        ],
      },
    ],
    nextStep: 'Read the published paper for the method and full results.',
  },
];

export const featuredProjects = projects.filter((project) => project.featured);

export const getProjectBySlug = (slug: string) =>
  projects.find((project) => project.slug === slug);
