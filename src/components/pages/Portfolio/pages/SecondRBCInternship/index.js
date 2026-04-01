import { useEffect, useState } from 'react';
import Footer from '../../../../elements/Footer';
import LoadingAnimation from '../../../../elements/LoadingAnimation';
import AnimatedLetters from '../../../../elements/AnimatedLetters';
import Paragraph from '../../../../elements/Paragraph';
import FullLineImage from '../../../../elements/FullLineImage';
import PlaceholderOne from '../../../../../assets/images/portfolio/first-rbc-internship/at-the-desk.JPG';
import PlaceholderTwo from '../../../../../assets/images/portfolio/first-rbc-internship/breakfast.JPG';
import PlaceholderThree from '../../../../../assets/images/portfolio/first-rbc-internship/in-the-food-court.JPG';
import PlaceholderFour from '../../../../../assets/images/portfolio/first-rbc-internship/nice-view.JPG';

import './index.scss';

const SecondRBCInternship = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2500);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="second-rbc-internship-page container">
        <h1>
          <span className="title-word">
            <AnimatedLetters
              strArray={'RBC'.split('')}
              idx={5}
              letterClass={letterClass}
            />
          </span>{' '}
          <span className="title-word">
            <AnimatedLetters
              strArray={'Summer'.split('')}
              idx={9}
              letterClass={letterClass}
            />
          </span>
          <br className="mobile-break" />
          <span className="title-word">
            <AnimatedLetters
              strArray={'Tech'.split('')}
              idx={16}
              letterClass={letterClass}
            />
          </span>{' '}
          <span className="title-word">
            <AnimatedLetters
              strArray={'Labs'.split('')}
              idx={21}
              letterClass={letterClass}
            />
          </span>
          <br className="mobile-break" />
          <span className="title-word">
            <AnimatedLetters
              strArray={'Second'.split('')}
              idx={26}
              letterClass={letterClass}
            />
          </span>{' '}
          <span className="title-word">
            <AnimatedLetters
              strArray={'Internship'.split('')}
              idx={33}
              letterClass={letterClass}
            />
          </span>
        </h1>

        <div className="text-area">
          <Paragraph textAlign="left" width="100%">
            This page is a placeholder for my second RBC Summer Tech Labs
            internship. I&apos;ll replace this section with the real write-up
            later, including what team I joined, what I built, and how the role
            evolved compared with my first internship. For now, the goal is
            simply to have the full page structure ready to go.
          </Paragraph>
          <div className="img-container">
            <FullLineImage
              imageSource={PlaceholderOne}
              width="100%"
              imageAlt="Placeholder image for the second RBC Summer Tech Labs internship page."
            />
          </div>
          <Paragraph textAlign="left" width="100%">
            I plan to use this section to talk about the work itself: the
            project area, the technologies involved, the people I collaborated
            with, and the kinds of engineering decisions I got to participate
            in. I also want to capture what felt different about returning with
            more context and confidence the second time around.
          </Paragraph>
          <div className="img-container">
            <FullLineImage
              imageSource={PlaceholderTwo}
              width="100%"
              imageAlt="Placeholder image for the second RBC Summer Tech Labs internship page."
            />
          </div>
          <Paragraph textAlign="left" width="100%">
            Another part of the final version will focus on the day-to-day
            experience: how the internship was structured, how the pod worked,
            and what I learned from working through a full summer of design,
            implementation, iteration, and review. This filler copy is just
            standing in until I add the real details.
          </Paragraph>
          <div className="img-container">
            <FullLineImage
              imageSource={PlaceholderThree}
              width="100%"
              imageAlt="Placeholder image for the second RBC Summer Tech Labs internship page."
            />
          </div>
          <Paragraph textAlign="left" width="100%">
            The images throughout this page are temporary placeholders as well.
            I&apos;ll swap them out for the actual screenshots and photos I want
            to keep in the portfolio once I&apos;ve chosen the final set. The
            finished page will keep this same overall structure, just with the
            proper content in place.
          </Paragraph>
          <div className="img-container">
            <FullLineImage
              imageSource={PlaceholderFour}
              width="100%"
              imageAlt="Placeholder image for the second RBC Summer Tech Labs internship page."
            />
          </div>
        </div>
        <Footer />
      </div>
      <LoadingAnimation />
    </>
  );
};

export default SecondRBCInternship;
