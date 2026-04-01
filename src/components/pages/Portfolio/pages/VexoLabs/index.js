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

const VexoLabs = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2500);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="vexo-labs-page container">
        <h1>
          <span className="title-word">
            <AnimatedLetters
              strArray={'Vexo'.split('')}
              idx={5}
              letterClass={letterClass}
            />
          </span>{' '}
          <span className="title-word">
            <AnimatedLetters
              strArray={'Labs'.split('')}
              idx={10}
              letterClass={letterClass}
            />
          </span>
        </h1>

        <div className="text-area">
          <Paragraph textAlign="left" width="100%">
            This page is a placeholder for a future Vexo Labs write-up. I&apos;ll
            replace this paragraph with the real background later: what Vexo
            Labs is, how I got involved, what the core project was, and the main
            technical challenges that made the work interesting.
          </Paragraph>
          <div className="img-container">
            <FullLineImage
              imageSource={PlaceholderOne}
              width="100%"
              imageAlt="Placeholder image for the Vexo Labs page."
            />
          </div>
          <Paragraph textAlign="left" width="100%">
            I also plan to use this section to describe the product, the team,
            and the engineering workflow in more detail. For now, this filler
            copy is just standing in so the page layout, spacing, and image
            rhythm already match the rest of the portfolio.
          </Paragraph>
          <div className="img-container">
            <FullLineImage
              imageSource={PlaceholderTwo}
              width="100%"
              imageAlt="Placeholder image for the Vexo Labs page."
            />
          </div>
          <Paragraph textAlign="left" width="100%">
            The final version will likely cover the main problem we were solving
            at Vexo Labs, the stack that supported it, and the parts of the work
            that pushed my thinking furthest. Until then, this keeps the page in
            place and ready to be updated without needing another structural
            pass.
          </Paragraph>
          <div className="img-container">
            <FullLineImage
              imageSource={PlaceholderThree}
              width="100%"
              imageAlt="Placeholder image for the Vexo Labs page."
            />
          </div>
          <Paragraph textAlign="left" width="100%">
            The images are temporary placeholders too. I&apos;ll swap in the
            actual visuals later, but the page will keep this same overall
            layout: alternating text and images, the same width constraints, and
            the same portfolio-detail treatment used elsewhere on the site.
          </Paragraph>
          <div className="img-container">
            <FullLineImage
              imageSource={PlaceholderFour}
              width="100%"
              imageAlt="Placeholder image for the Vexo Labs page."
            />
          </div>
        </div>
        <Footer />
      </div>
      <LoadingAnimation />
    </>
  );
};

export default VexoLabs;
