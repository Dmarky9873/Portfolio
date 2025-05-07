import './index.scss';
import AnimatedLetters from '../../elements/AnimatedLetters';
import { useEffect, useState } from 'react';
import Paragraph from '../../elements/Paragraph';

const PageNotFound = () => {
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
            strArray={'Page Not Found'.split('')}
            idx={8}
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

export default PageNotFound;
