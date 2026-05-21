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
            Smear is a game that has been passed down through my father&apos;s
            side of my family. I was introduced to the Canadian prairie card game
            when I was in my early teens; I had been begging to learn for a
            while and they finally let me learn. Because Smear is nowhere near as
            widely studied as games like chess or poker, trying to build it
            forced me to do something difficult: turn a living, house-ruled game
            into a precise system a computer could understand.
          </Paragraph>
          <div className="img-container">
            <FullLineImage
              imageSource={SmearImage1}
              width="100%"
              imageAlt="The first playable version of Smear running in the browser."
            />
          </div>
          <Paragraph textAlign="left" width="100%">
            Smear has bidding, trump selection, hidden cards, team and
            individual scoring, jokers, and a ruleset where the &quot;best&quot;
            move is often not obvious until the end of the round. I built a full
            Python game engine to model the rules exactly, then wrapped it in a
            FastAPI backend and React frontend so the game could be played,
            debugged, and tested interactively. The project grew into both a
            playable web app and a research environment for exploring how
            computers can make decisions in games with incomplete information.
          </Paragraph>
          <div className="img-container">
            <FullLineImage
              imageSource={SmearImage2}
              width="100%"
              imageAlt="A debugging view showing the full round state, legal actions, and scoring details."
            />
          </div>
          <Paragraph textAlign="left" width="100%">
            The most interesting part of the project was building the bots.
            Since there is no meaningful dataset of high-level Smear games, I
            could not simply train a model on existing examples. Instead, I
            implemented several strategies from the ground up: random and greedy
            baselines, hidden-information minimax bots, omniscient comparison
            bots, and lightweight neural bots trained through self-play and
            teacher-guided improvement. To compare them fairly, I built a
            continuous simulation system that runs thousands of bot matches,
            rotates seat positions, tracks Elo ratings, and reports confidence
            intervals so improvements could be measured. This allowed incremental
            improvement and verification that the bots weren&apos;t getting worse.
          </Paragraph>
          <div className="img-container">
            <FullLineImage
              imageSource={SmearImage3}
              width="100%"
              imageAlt="The continuous simulator ranking Smear bots through repeated self-play."
            />
          </div>
          <Paragraph textAlign="left" width="100%">
            As the project matured, I added the features that would make Smear
            feel less like a local experiment and more like a real product:
            browser sessions, multiplayer lobbies, WebSocket updates,
            bot-assisted games, a public play interface, and a learning mode
            that gives players a position, asks them to choose a move, then
            reveals what the strongest bot would do and why. In doing so, Smear
            became more than just a card game implementation. It became a way of
            preserving a piece of family culture while using computer science to
            explore strategy in a game that had never really been formalized.
          </Paragraph>
          <div className="img-container">
            <FullLineImage
              imageSource={SmearImage4}
              width="100%"
              imageAlt="A learning challenge comparing a player's decision against the optimal bot."
            />
          </div>
          <Paragraph textAlign="left" width="100%">
            In the future, I want to host live tournaments with members of my
            family. This is something that will bring a family across multiple
            continents together for the first time in many years.
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
