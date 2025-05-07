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
              I bring ideas to life. Hard work and self-motivation drive me, but
              collaboration makes the journey even better. And these aren’t just
              words—through this site, you’ll discover the communities I’ve
              contributed to, the teams I’ve led, and the projects I’ve brought
              to completion.
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
          Bringing ideas to life isn’t just about execution—it’s about vision,
          persistence, and the ability to adapt. Whether leading a team, solving
          a complex technical challenge, or refining a project until it meets
          the highest standards, I approach each endeavour with a commitment to
          excellence. I've learned that passion in a subject begets success; as
          such, I throw myself into everything I do, bringing a relentless drive
          and intellectual curiosity that is matched by few.{' '}
        </ImageText>
        <ImageText
          imgAlt="Robotic hand being controlled by glove"
          textLocation="left"
          imageSource={RoboticHand}
        >
          The precision and ability to create anything engendered by computer
          science hooked me. Beyond formal coursework, I immerse myself in
          self-directed projects, constantly seeking ways to refine my skills
          and apply them to broader challenges. The ability to break down
          complex problems, devise efficient solutions, and build something
          tangible from abstract ideas is what drives me. More than just a
          technical discipline, computer science is a mindset—a unique brand of
          analytical thinking that I bring to all areas of my life.{' '}
        </ImageText>
        <ImageText
          imgAlt="Daniel shooting a freethrow in a basketball game"
          textLocation="right"
          imageSource={BasketballFreethrow}
        >
          Outside of programming, I spend much of my time playing basketball and
          weightlifting at the gym, activities I’ve pursued consistently for
          nearly a decade. Balancing athletics with academic responsibilities
          has significantly strengthened my discipline and improved my ability
          to manage my time effectively over the years, skills that have proven
          valuable in all areas of my life.{' '}
        </ImageText>
        <Footer />
      </div>
      <LoadingAnimation />
    </>
  );
};

export default About;
