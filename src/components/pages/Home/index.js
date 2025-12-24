import { useEffect, useState } from 'react';
import AnimatedLetters from '../../elements/AnimatedLetters';
import LogoTitle from '../../../assets/images/logos/logo-d.png';
import Logo from './Logo';
import LoadingAnimation from '../../elements/LoadingAnimation';
import './index.scss';

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = 'aniel'.split('');
  const jobArray = "I'm a generalist.".split('');

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
            <span className={`${letterClass} _9`}>i</span>
            <span className={`${letterClass} _10`}>,</span>
            <br />
            <span className={`${letterClass} _11`}>I</span>
            <span className={`${letterClass} _12`}>'</span>
            <span className={`${letterClass} _13`}>m</span>
            <img src={LogoTitle} alt="Developer Name First Letter" />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={14}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={19}
            />
          </h1>
          <h2>n. gen·er·al·ist: a person competent in several different fields or activities.</h2>
        </div>
        <Logo />
      </div>
      <LoadingAnimation />
    </>
  );
};

export default Home;
