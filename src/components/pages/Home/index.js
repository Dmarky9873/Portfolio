import { useEffect, useState } from 'react';
import AnimatedLetters from '../../elements/AnimatedLetters';
import Logo from './Logo';
import LoadingAnimation from '../../elements/LoadingAnimation';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ' Daniel'.split('');

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
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['H', 'i', ',']}
              idx={9}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['I', "'", 'm']}
              idx={12}
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={12}
            />
            <br />
            <span style={{ whiteSpace: 'nowrap' }}>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={'I'.split('')}
                idx={10}
              />
            </span>{' '}
            <span style={{ whiteSpace: 'nowrap' }}>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={'bridge'.split('')}
                idx={11}
              />
            </span>{' '}
            <span style={{ whiteSpace: 'nowrap' }}>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={'tech'.split('')}
                idx={17}
              />
            </span>{' '}
            <span style={{ whiteSpace: 'nowrap' }}>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={'and'.split('')}
                idx={21}
              />
            </span>{' '}
            <span style={{ whiteSpace: 'nowrap' }}>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={'finance.'.split('')}
                idx={24}
              />
            </span>
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
