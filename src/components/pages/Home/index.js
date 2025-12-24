import { useEffect, useState } from 'react';
import AnimatedLetters from '../../elements/AnimatedLetters';
import Logo from './Logo';
import LoadingAnimation from '../../elements/LoadingAnimation';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ' Daniel'.split('');
  const jobArray = "I bridge tech and finance.".split('');

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _7`}>i</span>
            <span className={`${letterClass} _8`}>,</span>
            <br />
            <span className={`${letterClass} _9`}>I</span>
            <span className={`${letterClass} _10`}>'</span>
            <span className={`${letterClass} _11`}>m</span>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={12}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={10}
            />
          </h1>
          <h2>I design things that perform under pressure.</h2>
        </div>
        <Logo />
      </div>
      <LoadingAnimation />
    </>
  );
};

export default Home;
