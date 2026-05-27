import { useEffect, useState } from 'react';
import Footer from '../../../../elements/Footer';
import LoadingAnimation from '../../../../elements/LoadingAnimation';
import AnimatedLetters from '../../../../elements/AnimatedLetters';
import Paragraph from '../../../../elements/Paragraph';
import FullLineImage from '../../../../elements/FullLineImage';
import ShredrPreview from '../../../../../assets/images/portfolio/shredr/preview.jpg';

import './index.scss';

const SHREDR_URL = 'https://www.shredr.ca';

const Shredr = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2500);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="shredr-page container">
        <h1>
          <AnimatedLetters
            strArray={'Shredr'.split('')}
            idx={5}
            letterClass={letterClass}
          />
        </h1>

        <div className="text-area">
          <Paragraph textAlign="left" width="100%">
            Shredr helps users make smarter restaurant choices by surfacing
            healthier meal options from restaurant menus. The app focuses on a
            clean, fast decision flow: pick where you&apos;re eating, compare
            options, and choose a better meal.
          </Paragraph>
          <div className="img-container">
            <FullLineImage
              imageSource={ShredrPreview}
              width="100%"
              imageAlt="Shredr homepage asking where the user is eating today."
            />
          </div>
          <Paragraph textAlign="left" width="100%">
            Built as a practical tool for quickly comparing restaurant menu
            options and helping users avoid guesswork when choosing meals.
          </Paragraph>
          <div className="shredr-actions" aria-label="Shredr website link">
            <a
              className="shredr-link"
              href={SHREDR_URL}
              target="_blank"
              rel="noreferrer"
            >
              Open Shredr
            </a>
          </div>
        </div>
        <Footer />
      </div>
      <LoadingAnimation />
    </>
  );
};

export default Shredr;
