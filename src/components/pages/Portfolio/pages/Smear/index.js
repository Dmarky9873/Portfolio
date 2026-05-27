import { useEffect, useState } from 'react';
import Footer from '../../../../elements/Footer';
import LoadingAnimation from '../../../../elements/LoadingAnimation';
import AnimatedLetters from '../../../../elements/AnimatedLetters';
import Paragraph from '../../../../elements/Paragraph';
import FullLineImage from '../../../../elements/FullLineImage';
import SmearImage1 from '../../../../../assets/images/portfolio/smear/1.png';
import SmearImage2 from '../../../../../assets/images/portfolio/smear/2.png';
import SmearImage3 from '../../../../../assets/images/portfolio/smear/3.png';
import SmearImage4 from '../../../../../assets/images/portfolio/smear/4.png';

import './index.scss';

const PLAY_SMEAR_URL = 'https://play-smear.com/';

const Smear = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2500);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="smear-page container">
        <h1>
          <AnimatedLetters
            strArray={'Smear'.split('')}
            idx={5}
            letterClass={letterClass}
          />
        </h1>

        <div className="text-area">
          <Paragraph textAlign="left" width="100%">
            My dad&apos;s side of the family has been playing Smear for as long
            as I can remember. It is a Canadian prairie card game, and for years
            I would sit around the table asking when I was finally old enough to
            join in. Once they taught me, I got hooked. Later, I started
            wondering what it would take to make a computer play a game whose
            rules were mostly passed from person to person, not written down in
            a book.
          </Paragraph>
          <div className="img-container">
            <FullLineImage
              imageSource={SmearImage1}
              width="100%"
              imageAlt="The first playable version of Smear running in the browser."
            />
          </div>
          <Paragraph textAlign="left" width="100%">
            The first step was making the game actually work in a browser. I
            wrote the rules in Python and connected them to a FastAPI backend
            and React interface, handling everything from bidding and trump to
            jokers and scoring. That sounds straightforward until hidden hands
            and house rules get involved. Getting each round to behave the way
            my family expected took a fair amount of arguing with my own code.
          </Paragraph>
          <div className="img-container">
            <FullLineImage
              imageSource={SmearImage2}
              width="100%"
              imageAlt="A debugging view showing the full round state, legal actions, and scoring details."
            />
          </div>
          <Paragraph textAlign="left" width="100%">
            Once I had a playable game, the question I actually wanted to answer
            was: can a bot get good at Smear? There are no databases of expert
            matches to learn from, so the bots had to learn by playing. I began
            with random and greedy players, then moved to minimax and small
            neural bots trained through self-play. I also built a simulator that
            runs thousands of matches and tracks Elo, with seats rotated so a
            bot does not look clever simply because it got a better position.
          </Paragraph>
          <div className="img-container">
            <FullLineImage
              imageSource={SmearImage3}
              width="100%"
              imageAlt="The continuous simulator ranking Smear bots through repeated self-play."
            />
          </div>
          <Paragraph textAlign="left" width="100%">
            Eventually I wanted other people to use it, especially the people
            who taught me the game. I added live lobbies, real-time updates,
            games against bots, and a learning mode where you choose a move
            before seeing what the strongest bot would play. What started as an
            excuse to model a family card game has become a way to keep it
            around, teach it to new people, and test how far these bots can push
            a game that barely exists online.
          </Paragraph>
          <div className="img-container">
            <FullLineImage
              imageSource={SmearImage4}
              width="100%"
              imageAlt="A learning challenge comparing a player's decision against the optimal bot."
            />
          </div>
          <Paragraph textAlign="left" width="100%">
            The next thing I want to build is a live family tournament. We are
            spread across the country, so getting everybody around the same
            "table" would mean a lot to everyone!
          </Paragraph>
          <div className="smear-play-actions" aria-label="Smear game links">
            <a
              className="smear-play-link"
              href={PLAY_SMEAR_URL}
              target="_blank"
              rel="noreferrer"
            >
              Play Smear
            </a>
          </div>
        </div>
        <Footer />
      </div>
      <LoadingAnimation />
    </>
  );
};

export default Smear;
