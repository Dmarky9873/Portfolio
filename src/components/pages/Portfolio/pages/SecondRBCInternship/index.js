import { useEffect, useState } from 'react';
import Footer from '../../../../elements/Footer';
import LoadingAnimation from '../../../../elements/LoadingAnimation';
import AnimatedLetters from '../../../../elements/AnimatedLetters';
import Paragraph from '../../../../elements/Paragraph';
import FullLineImage from '../../../../elements/FullLineImage';
import AwardCertificate from '../../../../../assets/images/portfolio/second-rbc-internship/award-certificate.jpg';
import DadSelfie from '../../../../../assets/images/portfolio/second-rbc-internship/dad-selfie.jpg';
import TeamDinner from '../../../../../assets/images/portfolio/second-rbc-internship/team-dinner.jpg';
import TeamSelfieDowntown from '../../../../../assets/images/portfolio/second-rbc-internship/team-selfie-downtown.jpg';
import TeamSelfiePark from '../../../../../assets/images/portfolio/second-rbc-internship/team-selfie-park.jpg';

import './index.scss';

const SecondRBCInternship = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2500);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="second-rbc-internship-page container">
        <h1>
          <span className="title-word">
            <AnimatedLetters
              strArray={'RBC'.split('')}
              idx={5}
              letterClass={letterClass}
            />
          </span>{' '}
          <span className="title-word">
            <AnimatedLetters
              strArray={'Summer'.split('')}
              idx={9}
              letterClass={letterClass}
            />
          </span>{' '}
          <br className="mobile-break" />
          <span className="title-word">
            <AnimatedLetters
              strArray={'Tech'.split('')}
              idx={16}
              letterClass={letterClass}
            />
          </span>{' '}
          <span className="title-word">
            <AnimatedLetters
              strArray={'Labs'.split('')}
              idx={21}
              letterClass={letterClass}
            />
          </span>
          <br className="mobile-break" />
          <span className="title-word">
            <AnimatedLetters
              strArray={'Second'.split('')}
              idx={26}
              letterClass={letterClass}
            />
          </span>{' '}
          <span className="title-word">
            <AnimatedLetters
              strArray={'Internship'.split('')}
              idx={33}
              letterClass={letterClass}
            />
          </span>
        </h1>

        <div className="text-area">
          <Paragraph textAlign="left" width="100%">
            Over the summer of 2025, I had the pleasure of working with Kaibo
            Huang, Divya Sivaram, and Roshan Iruku at RBC as a high school
            intern. While there, we were tasked with developing a tool for
            Apollo SREs to improve their deployment of API proxies. Yeah
            that&apos;s a mouthful, but I&apos;ll try and explain.
          </Paragraph>
          <div className="img-container">
            <FullLineImage
              imageSource={TeamSelfieDowntown}
              width="100%"
              imageAlt="Outdoor group selfie with the second RBC Summer Tech Labs internship team."
            />
          </div>
          <Paragraph textAlign="left" width="100%">
            For a bank, security is everything. This includes their APIs. For
            the uninitiated, an API is how the frontend and backend of a product
            communicate; for example, if you want to check your bank account
            balance on your RBC bank app, the app doesn&apos;t just have this
            data locally stored; it has to retrieve it USING AN API, from
            RBC&apos;s backend servers.
          </Paragraph>
          <div className="img-container">
            <FullLineImage
              imageSource={DadSelfie}
              width="100%"
              imageAlt="Photo from the second RBC Summer Tech Labs internship."
            />
          </div>
          <Paragraph textAlign="left" width="100%">
            Now, back to security. As I said, security is everything for a bank.
            You don&apos;t want to take any risks of some bad actor reading your
            bank account information. This is where API proxies come in. They
            act as an in-house protective layer that goes on top of the API
            vendor that RBC uses (which itself is already pentagon-level secure,
            RBC just wants to add its own touch).
          </Paragraph>
          <div className="img-container">
            <FullLineImage
              imageSource={TeamSelfiePark}
              width="100%"
              imageAlt="Team photo from an outing during the second RBC Summer Tech Labs internship."
            />
          </div>
          <Paragraph textAlign="left" width="100%">
            These proxies are a pain in the ass to use and deploy, however; we
            calculated that for all SREs (the people in charge of API
            deployments) in any given week, they lose around 9 hours of time
            just setting up these API proxies for testing/deployment. Through
            the dashboard we built, we cut this down by 83%, bringing that 9
            hour number to just 90 mins.
          </Paragraph>
          <div className="img-container">
            <FullLineImage
              imageSource={TeamDinner}
              width="100%"
              imageAlt="Team dinner during the second RBC Summer Tech Labs internship."
            />
          </div>
          <Paragraph textAlign="left" width="100%">
            This huge improvement is how we won the most innovative solution for
            the 2025 Innovation Developer cohort. It was a blast to build and
            &quot;innovate&quot; with everyone this year, and I am super
            grateful for the return offer I got for my first year summer!
          </Paragraph>
          <div className="img-container">
            <FullLineImage
              imageSource={AwardCertificate}
              width="100%"
              imageAlt="Certificate for most innovative solution at RBC Summer Tech Labs."
            />
          </div>
        </div>
        <Footer />
      </div>
      <LoadingAnimation />
    </>
  );
};

export default SecondRBCInternship;
