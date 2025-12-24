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
import ImageText from '../../elements/ImageText';
import RoboticHand from '../../../assets/images/about/robotic-hand.gif';
import BasketballFreethrow from '../../../assets/images/about/basketball-freethrow.jpg';
import Footer from '../../elements/Footer';

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2500);
  }, []);

  return (
    <>
      <div className="container about-page">
        <div className="about-title-cube-container">
          <div className="text-zone">
            <h1>
              <AnimatedLetters
                strArray={'About me'.split('')}
                idx={15}
                letterClass={letterClass}
              />
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
          imgAlt="At the RoboCup Looking Away"
          textLocation="right"
          imageSource={RoboCupLookingAway}
        >
          I’m drawn to turning ideas into real things. Sometimes that looks like
          code, sometimes music, sometimes a project that starts as a
          half-formed thought and slowly sharpens through iteration. I enjoy the
          process as much as the outcome: experimenting, adapting, and refining
          until something clicks. I’ve learned that genuine curiosity carries
          you further than force ever could, so I follow what excites me and let
          the work grow from there.
        </ImageText>
        <ImageText
          imgAlt="Robotic hand being controlled by glove"
          textLocation="left"
          imageSource={RoboticHand}
        >
          Computer science became a natural outlet for that mindset. I love how
          abstract ideas can be broken down, reassembled, and transformed into
          something tangible. Outside of classes, I love to always build. Small
          experiments, side projects, and tools always push my understanding a
          little further. To me, computer science isn’t just technical; it’s a
          way of thinking that seeps into how I approach problems everywhere
          else.
        </ImageText>
        <ImageText
          imgAlt="Daniel shooting a freethrow in a basketball game"
          textLocation="right"
          imageSource={BasketballFreethrow}
        >
          When I’m not at a keyboard, I’m usually on a basketball court, in the
          gym, or playing either the drums or bass. Athletics have been a
          constant in my life for years, teaching me consistency, focus, and how
          to show up even on days when motivation dips. Music was my first love.
          I have had the pleasure of playing in a plethora of bands throughout
          high school and university. My favourite genres are jazz, prog rock,
          jazz fusion, and heavy metal (yes I'm a King Crimson fan, how'd you
          know?).
        </ImageText>
        <Footer />
      </div>
      <LoadingAnimation />
    </>
  );
};

export default About;
