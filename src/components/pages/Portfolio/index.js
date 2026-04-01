import './index.scss';
import AnimatedLetters from '../../elements/AnimatedLetters';
import { useEffect, useState } from 'react';
import Paragraph from '../../elements/Paragraph';
import TitleImageText from '../../elements/TitleImageText';
import Footer from '../../elements/Footer';
import AdvancedRobotics from '../../../assets/images/portfolio/robotics-bordeaux-with-luke-hayden-koaich.jpeg';
import STLGroupPhoto from '../../../assets/images/portfolio/stl-group-photo.JPG';
import MachineLearningImage from '../../../assets/images/portfolio/machine-learning.png';
import PlaceholderInternshipImage from '../../../assets/images/portfolio/first-rbc-internship/nice-view.JPG';
import VexoLabsImage from '../../../assets/images/portfolio/first-rbc-internship/in-the-food-court.JPG';
import LoadingAnimation from '../../elements/LoadingAnimation';

const RESEARCH_GATE_URL =
  'https://www.researchgate.net/publication/394957216_A_Minimal_Approach_to_Fake_News_Detection';

const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2500);
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

        <TitleImageText
          image={AdvancedRobotics}
          imageAlt="Robotics in Bordeaux with Luke, Hayden, and Mr. Koaich"
          link="/portfolio/advanced-robotics"
          title="Advanced Robotics Club"
          date="2022 — 2025"
        >
          How did three highschoolers end up representing their country on the
          international stage? I don't know either. But (somehow), against all
          odds, Hayden Patience, Luke Hartford, and I were chosen to represent
          Canada during the 2023 RoboCup Junior International finals in Bordeaux
          France. It all stemmed from a fateful grade eleven engineering class
          class wherein we made autonomous soccer-playing robots. Later on, we
          grew the club to be one of the largest in the entire highschool,
          representing the country again during our senior year.
        </TitleImageText>
        <TitleImageText
          image={STLGroupPhoto}
          imageAlt="Group photo with members of the RBC Summer Tech Labs"
          link="/portfolio/first-innovation-developer-internship"
          title="RBC Summer Tech Labs First Internship"
          date="2024"
        >
          In the summer of 2024, I was selected to be one of forty highschoolers
          given an opportunity to intern at the Royal Bank of Canada, and to say
          it has been fantastic would be an understatement. Working with Aricia
          Chan, Diya Mehta, and Divy Shah was an absolute pleasure. Over the
          summer, we created an interactive onboarding guide for new developers
          joining RBC, ensuring that our instructions were accurate and easy to
          follow. We, naturally, had some obstacles along the way, but we never
          failed to work as a team and solve whatever challenge we came across.
        </TitleImageText>
        <TitleImageText
          image={PlaceholderInternshipImage}
          imageAlt="Placeholder image for the second RBC Summer Tech Labs internship page"
          link="/portfolio/second-innovation-developer-internship"
          title="RBC Summer Tech Labs Second Internship"
          date="2025"
        >
          This page is a placeholder for my second RBC Summer Tech Labs
          internship. I&apos;ll replace this summary with the real story, the
          team I worked with, the project we built, and the lessons that stood
          out most from returning for a second term. For now, it exists so the
          full structure is ready and easy to update later.
        </TitleImageText>
        <TitleImageText
          image={VexoLabsImage}
          imageAlt="Placeholder image for the Vexo Labs page"
          link="/portfolio/vexo-labs"
          title="Vexo Labs"
          date="2025"
        >
          This is a placeholder for a future Vexo Labs write-up. I&apos;ll swap
          in the actual story, visuals, and technical details later, but for
          now the page is set up in the portfolio so the structure is already
          there when I&apos;m ready to fill it in properly.
        </TitleImageText>
        <TitleImageText
          image={MachineLearningImage}
          imageAlt="Machine Learning Fancy"
          link="/portfolio/a-minimal-approach-to-fake-news-detection"
          title="A Minimal Approach to Fake News Detection"
          date="2024"
        >
          Over six months, I{' '}
          <a href={RESEARCH_GATE_URL} target="_blank" rel="noreferrer">
            published
          </a>{' '}
          a research paper on machine learning approaches to fake news
          detection. The paper delves into various ways that others have used
          machine learning to identify fake news, along with presenting a novel
          approach to the problem. My goal with this was to create something
          that used as few textual features as possible, and it worked! Read on
          to find out how it works and what the results were. I found the
          academic process to be immensely fulfilling. I learned so much about
          natural language processing and machine learning in general and can
          safely say that my skills in the field have improved thanks to it.
        </TitleImageText>
        <Footer />
      </div>
      <LoadingAnimation />
    </>
  );
};

export default Portfolio;
