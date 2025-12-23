import './index.scss';
import { useEffect, useState } from 'react';
import Paragraph from '../../../../elements/Paragraph';
import AnimatedLetters from '../../../../elements/AnimatedLetters';

const FirstRBCInternship = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2500);
  }, []);

  return (
    <div className="container about-page">
      <div className="title-area">
        <h1>
          <AnimatedLetters
            strArray={'First RBC Internship'.split('')}
            idx={3}
            letterClass={letterClass}
          />
        </h1>
      </div>
      <div className="error-404-paragraph">
        <Paragraph textAlign="center">
          This website is very much a work in progress, and you have likely
          pressed on a link that hasn't been built yet.
        </Paragraph>
      </div>
    </div>
  );
};

export default FirstRBCInternship;
