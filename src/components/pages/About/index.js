import './index.scss';
import AnimatedLetters from '../../elements/AnimatedLetters';
import { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBasketball,
  faDrum,
  faDumbbell,
  faLaptopCode,
  faSquareRootVariable,
  faBook,
} from '@fortawesome/free-solid-svg-icons';
import LoadingAnimation from '../../elements/LoadingAnimation';
import RoboCupLookingAway from '../../../assets/images/about/robocup-looking-away.jpg';
import NightWaterfront from '../../../assets/images/about/night-waterfront.jpg';
import ImageText from '../../elements/ImageText';
import RoboticHand from '../../../assets/images/about/robotic-hand.gif';
import BasketballFreethrow from '../../../assets/images/about/basketball-freethrow.jpg';
import DrummingStage from '../../../assets/images/about/drumming-stage.jpeg';
import Footer from '../../elements/Footer';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2500);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="about-title-cube-container">
          <div className="about-intro">
            <h1 className="about-title">
              <span className="title-word" aria-label="About">
                <AnimatedLetters
                  strArray={'About'.split('')}
                  idx={15}
                  letterClass={letterClass}
                />
              </span>
              <span className="title-word" aria-label="me">
                <AnimatedLetters
                  strArray={'me'.split('')}
                  idx={21}
                  letterClass={letterClass}
                />
              </span>
            </h1>
            <p>
              I love creating. Whether it's programming, writing music, or
              athletics, I let my creativity run the show. Collaboration makes
              the process even sweeter. Roam this site to see learn about me and
              check out some things I've worked on.
            </p>
          </div>

          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faBasketball} color="#FFA725" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faLaptopCode} color="#17153B" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faDrum} color="#A31D1D" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faDumbbell} color="#727D73" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faSquareRootVariable} color="#211C84" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faBook} color="#443627" />
              </div>
            </div>
          </div>
        </div>

        <ImageText
          imgAlt="Daniel standing by the waterfront at night"
          textLocation="right"
          imageSource={NightWaterfront}
          imgClassName="image-text__portrait"
        >
          I’m drawn to turning ideas into real things. Sometimes that looks like
          coding, sometimes writing music, sometimes hand-carving a wooden
          crossbow. I enjoy the process MORE than the outcome, to be quite
          honest. I’ve learned that genuine curiosity carries you further than
          "discipline" ever could; not that I'm against having discipline, but
          that can only take you so far.
        </ImageText>
        <ImageText
          imgAlt="Robotic hand being controlled by glove"
          textLocation="left"
          imageSource={RoboticHand}
        >
          Computer science became a natural outlet for that mindset. I really
          find the idea of layers of abstraction fascinating. You don't need to
          know how an entire computer works to be able to use it, program it,
          work with it. Similarly, you don't need to know every granular detail
          in order to run a team—in fact, you can't after a certain size.
        </ImageText>
        <ImageText
          imgAlt="At the RoboCup Looking Away"
          textLocation="right"
          imageSource={RoboCupLookingAway}
        >
          I find that mindset really pushes places to the next level—it's what I
          implement whenever I am in charge of a team—with the small caveat that
          you have to know you've got good people first (I've been lucky enough
          to almost always have good people around me).
        </ImageText>
        <ImageText
          imgAlt="Daniel shooting a freethrow in a basketball game"
          textLocation="left"
          imageSource={BasketballFreethrow}
        >
          When I’m not at a keyboard, I’m usually on a basketball court, MMA
          gym, lifting weights, playing the drums or bass with a band, or
          (sometimes) studying. Athletics have been a constant in my life for
          years, really teaching me how to work hard.
        </ImageText>
        <ImageText
          imgAlt="Daniel playing drums on stage"
          textLocation="right"
          imageSource={DrummingStage}
          imgClassName="image-text__portrait"
        >
          Music was my first love. I have had the pleasure of playing in a
          plethora of bands throughout high school and university. My favourite
          genres are jazz, prog rock, jazz fusion, and heavy metal (yes I'm a
          King Crimson fan, how'd you know?). I genuinely think I could give a
          Ted Talk on the life of the drummer{' '}
          <a
            href="https://en.wikipedia.org/wiki/Vinnie_Colaiuta"
            target="_blank"
            rel="noreferrer"
          >
            Vinnie Colaiuta
          </a>{' '}
          (I specifically am in love with his work on Frank Zappa's{' '}
          <a
            href="https://en.wikipedia.org/wiki/Joe%27s_Garage"
            target="_blank"
            rel="noreferrer"
          >
            Joe&apos;s Garage
          </a>{' '}
          album).
        </ImageText>
        <Footer />
      </div>
      <LoadingAnimation />
    </>
  );
};

export default About;
