import './index.scss';
import AnimatedLetters from '../../elements/AnimatedLetters';
import { useEffect, useState } from 'react';
import Paragraph from '../../elements/Paragraph';
import TitleImageText from '../../elements/TitleImageText';
import Footer from '../../elements/Footer';
import AdvancedRobotics from '../../../assets/images/portfolio/robotics-bordeaux-with-luke-hayden-koaich.jpeg';
import STLGroupPhoto from '../../../assets/images/portfolio/stl-group-photo.JPG';
import MachineLearningImage from '../../../assets/images/portfolio/machine-learning.png';
import SecondRBCInternshipCover from '../../../assets/images/portfolio/second-rbc-internship/team-selfie-downtown.jpg';
import SmearPreview from '../../../assets/images/portfolio/smear/1.png';
import ShredrPreview from '../../../assets/images/portfolio/shredr/preview.jpg';
import LoadingAnimation from '../../elements/LoadingAnimation';

const RESEARCH_GATE_URL =
  'https://www.researchgate.net/publication/394957216_A_Minimal_Approach_to_Fake_News_Detection';

const portfolioItems = [
  {
    title: 'Advanced Robotics Club',
    date: '2022 — 2025',
    sortYear: 2025,
    image: AdvancedRobotics,
    imageAlt: 'Robotics in Bordeaux with Luke, Hayden, and Mr. Koaich',
    link: '/portfolio/advanced-robotics',
    description: (
      <>
        How did three highschoolers end up representing their country on the
        international stage? I don't know either. But (somehow), against all
        odds, Hayden Patience, Luke Hartford, and I were chosen to represent
        Canada during the 2023 RoboCup Junior International finals in Bordeaux
        France. It all stemmed from a fateful grade eleven engineering class
        class wherein we made autonomous soccer-playing robots. Later on, we
        grew the club to be one of the largest in the entire highschool,
        representing the country again during our senior year.
      </>
    ),
  },
  {
    title: 'RBC Summer Tech Labs First Internship',
    date: '2024',
    sortYear: 2024,
    image: STLGroupPhoto,
    imageAlt: 'Group photo with members of the RBC Summer Tech Labs',
    link: '/portfolio/first-innovation-developer-internship',
    description: (
      <>
        In the summer of 2024, I was selected to be one of forty highschoolers
        given an opportunity to intern at the Royal Bank of Canada, and to say
        it has been fantastic would be an understatement. Working with Aricia
        Chan, Diya Mehta, and Divy Shah was an absolute pleasure. Over the
        summer, we created an interactive onboarding guide for new developers
        joining RBC, ensuring that our instructions were accurate and easy to
        follow. We, naturally, had some obstacles along the way, but we never
        failed to work as a team and solve whatever challenge we came across.
      </>
    ),
  },
  {
    title: 'RBC Summer Tech Labs Second Internship',
    date: '2025',
    sortYear: 2025,
    image: SecondRBCInternshipCover,
    imageAlt: 'Group selfie from the second RBC Summer Tech Labs internship',
    link: '/portfolio/second-innovation-developer-internship',
    description: (
      <>
        After completing my first internship in the summer of 2024, I received a
        return offer for the next summer (the summer between grade 12 and
        first-year university). Coming into the internship with an idea of how
        it was going to work and what I was going to do, I made it my goal to
        meet as many people and to do the best possible work for the team to
        which I was assigned. I met the first goal, evidenced by a return offer
        I got for first year summer. I met the second goal by winning RBC Summer
        Tech Labs "Most Innovative Solution."
      </>
    ),
  },
  {
    title: 'Shredr',
    date: '2025',
    sortYear: 2025,
    image: ShredrPreview,
    imageAlt: 'Shredr restaurant search screen asking where the user is eating',
    link: '/portfolio/shredr',
    description: (
      <>
        Shredr helps users make smarter restaurant choices by surfacing
        healthier meal options from restaurant menus. The app focuses on a
        clean, fast decision flow: pick where you&apos;re eating, compare
        options, and choose a better meal.
      </>
    ),
  },
  {
    title: 'Smear',
    date: '2026',
    sortYear: 2026,
    image: SmearPreview,
    imageAlt: 'Browser interface for the Smear card game project',
    link: '/portfolio/smear',
    description: (
      <>
        My family has played Smear for generations. I built a browser version so
        we could play from anywhere, then went further: bots that learn through
        self-play, a simulator for testing them, and a learning mode for seeing
        what they would play with your hand.
      </>
    ),
  },
  {
    title: 'A Minimal Approach to Fake News Detection',
    date: '2024',
    sortYear: 2024,
    image: MachineLearningImage,
    imageAlt: 'Machine Learning Fancy',
    link: '/portfolio/a-minimal-approach-to-fake-news-detection',
    description: (
      <>
        Over six months, I{' '}
        <a href={RESEARCH_GATE_URL} target="_blank" rel="noreferrer">
          published
        </a>{' '}
        a research paper on machine learning approaches to fake news detection.
        The paper delves into various ways that others have used machine
        learning to identify fake news, along with presenting a novel approach
        to the problem. My goal with this was to create something that used as
        few textual features as possible, and it worked! Read on to find out how
        it works and what the results were. I found the academic process to be
        immensely fulfilling. I learned so much about natural language
        processing and machine learning in general and can safely say that my
        skills in the field have improved thanks to it.
      </>
    ),
  },
];

const orderedPortfolioItems = [...portfolioItems].sort(
  (firstItem, secondItem) => secondItem.sortYear - firstItem.sortYear
);

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2500);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="title-area">
          <h1>
            <AnimatedLetters
              strArray={'Portfolio'.split('')}
              idx={10}
              letterClass={letterClass}
            />
          </h1>
        </div>
        <Paragraph textAlign="center" width="70%">
          Here, you'll find projects that I've completed, clubs and groups I've
          been a part of, and various other cool things I've done. To learn more
          about a particular endeavour... well... you know what to do.
        </Paragraph>

        {orderedPortfolioItems.map((item) => (
          <TitleImageText
            key={item.link}
            image={item.image}
            imageAlt={item.imageAlt}
            link={item.link}
            title={item.title}
            date={item.date}
          >
            {item.description}
          </TitleImageText>
        ))}
        <Footer />
      </div>
      <LoadingAnimation />
    </>
  );
};

export default Portfolio;
