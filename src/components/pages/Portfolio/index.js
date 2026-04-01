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
import VexoLabsImage from '../../../assets/images/portfolio/first-rbc-internship/in-the-food-court.JPG';
import LoadingAnimation from '../../elements/LoadingAnimation';

const RESEARCH_GATE_URL =
  'https://www.researchgate.net/publication/394957216_A_Minimal_Approach_to_Fake_News_Detection';
const VEXO_LABS_URL = 'https://www.vexo.gg/';
const ACCELERATOR_CENTRE_URL = 'https://www.acceleratorcentre.com/';

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
          image={SecondRBCInternshipCover}
          imageAlt="Group selfie from the second RBC Summer Tech Labs internship"
          link="/portfolio/second-innovation-developer-internship"
          title="RBC Summer Tech Labs Second Internship"
          date="2025"
        >
          After completing my first internship in the summer of 2024, I received
          a return offer for the next summer (the summer between grade 12 and
          first-year university). Coming into the internship with an idea of how
          it was going to work and what I was going to do, I made it my goal to
          meet as many people and to do the best possible work for the team to
          which I was assigned. I met the first goal, evidenced by a return
          offer I got for first year summer. I met the second goal by winning
          RBC Summer Tech Labs "Most Innovative Solution."
        </TitleImageText>
        <TitleImageText
          image={VexoLabsImage}
          imageAlt="Placeholder image for the Vexo Labs page"
          link="/portfolio/vexo-labs"
          title="Vexo Labs"
          date="2025"
        >
          In late 2025, I founded{' '}
          <a href={VEXO_LABS_URL} target="_blank" rel="noreferrer">
            Vexo Labs
          </a>{' '}
          with some friends. We aim to help democratize investing and building
          wealth. I&apos;m proud to have had this start-up accepted into
          Canada&apos;s top accelerator, Waterloo&apos;s{' '}
          <a href={ACCELERATOR_CENTRE_URL} target="_blank" rel="noreferrer">
            Accelerator Centre
          </a>
          . We are currently about to start beta testing with volunteer users.
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
