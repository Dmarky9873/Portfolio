import { useEffect, useState } from 'react';
import Footer from '../../../../elements/Footer';
import LoadingAnimation from '../../../../elements/LoadingAnimation';
import AnimatedLetters from '../../../../elements/AnimatedLetters';
import Paragraph from '../../../../elements/Paragraph';
import AtTheDesk from '../../../../../assets/images/portfolio/first-rbc-internship/at-the-desk.JPG';
import FullLineImage from '../../../../elements/FullLineImage';
import Breakfast from '../../../../../assets/images/portfolio/first-rbc-internship/breakfast.JPG';
import InTheFoodCourt from '../../../../../assets/images/portfolio/first-rbc-internship/in-the-food-court.JPG';
import NiceView from '../../../../../assets/images/portfolio/first-rbc-internship/nice-view.JPG';

import './index.scss';

const FirstRBCInternship = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2500);
  }, []);

  return (
    <>
      <div className="first-rbc-internship-page container">
        <h1>
          <span className="title-word">
            <AnimatedLetters
              strArray={'RBC Summer '.split('')}
              idx={5}
              letterClass={letterClass}
            />
          </span>
          <br className="mobile-break" />
          <span className="title-word">
            <AnimatedLetters
              strArray={'Tech Labs'.split('')}
              idx={14}
              letterClass={letterClass}
            />
          </span>
        </h1>

        <div className="text-area">
          <Paragraph textAlign="left" width="100%">
            During my grade eleven school year (2024), I was made aware of{' '}
            <a
              href="https://www.rbc.com/en/future-launch/resource-type/programs-services/rbc-summer-tech-labs/"
              className="inline-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              an interesting opportunity
            </a>{' '}
            many high schoolers would dream of: a chance to intern at RBC during
            the summer. Like many others, I applied and hoped for the best.
            After breezing through the coding interview, everything became real
            when I received a request for an interview; suddenly I knew that I
            had a real shot of getting in, as so few candidates get a chance to
            meet the recruiters. I practiced religiously daily with my dad,
            perfecting my answers to any possible question the interviewers may
            ask. The day came and, luckily, the interview went off without a
            hitch. A couple nervous months later I received word that I was
            chosen to be an innovation developer the upcoming summer!
          </Paragraph>
          <Paragraph textAlign="left" width="100%">
            When I first arrived I was admittedly nervous but soon got used to
            being surrounded by liked-minded individuals around the same age as
            me. The program splits us all into groups of four 'pods' which are
            then assigned to a pod manager—a full-time employee at RBC. As a
            pod, we are then assigned work to do by the aforementioned pod
            manager. I learned that over the coming summer, I would have the
            privilege of working with{' '}
            <a href="https://ariciachan.com">Aricia Chan</a>,{' '}
            <a href="https://www.linkedin.com/in/divyjshah/">Divy Shah</a>, and{' '}
            <a href="https://www.linkedin.com/in/diyamehta13/">Diya Mehta</a>.
            Us four quickly grew close and became good friends (we still are to
            this day). We were assigned the task of creating (from scratch) an
            onboarding guide for new developer to RBC—something that would have
            been very helpful for us during our FULL WEEK of onboarding (it
            takes a while).
          </Paragraph>
          <Paragraph textAlign="left" width="100%">
            The work was fun and rewarding. I counterintuitively loved the daily
            commute and getting to wear nice work clothes every day. I learned a
            lot about design and frontend development, especially React.
            Although everyone I met at RBC was beyond helpful, my pod manager{' '}
            <a href="https://www.linkedin.com/in/quinn-liddicoat-03174aa/">
              Quinn Liddicoat
            </a>{' '}
            deserves a special mention, as he made sure to fill any knowledge
            gaps we had with what we were working on every single day. Working
            at RBC was a blast, and the relationships I made are invaluable.
            Here are some pictures from the internship:
          </Paragraph>
          <div className="img-container">
            <FullLineImage
              imageSource={AtTheDesk}
              width="100%"
              imageAlt="The old robot homing onto the front of the goal."
            />
          </div>
          <br />
          <div className="img-container">
            <FullLineImage
              imageSource={Breakfast}
              width="100%"
              imageAlt="The old robot homing onto the front of the goal."
            />
          </div>
          <br />
          <div className="img-container">
            <FullLineImage
              imageSource={InTheFoodCourt}
              width="100%"
              imageAlt="The old robot homing onto the front of the goal."
            />
          </div>
          <br />
          <div className="img-container">
            <FullLineImage
              imageSource={NiceView}
              width="100%"
              imageAlt="The old robot homing onto the front of the goal."
            />
          </div>
        </div>
        <Footer />
      </div>
      <LoadingAnimation />
    </>
  );
};

export default FirstRBCInternship;
