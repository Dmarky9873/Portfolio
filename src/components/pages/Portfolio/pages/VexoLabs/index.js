import { useEffect, useState } from 'react';
import Footer from '../../../../elements/Footer';
import LoadingAnimation from '../../../../elements/LoadingAnimation';
import AnimatedLetters from '../../../../elements/AnimatedLetters';
import Paragraph from '../../../../elements/Paragraph';

import './index.scss';

const VEXO_LABS_URL = 'https://www.vexo.gg/';
const ACCELERATOR_CENTRE_URL = 'https://www.acceleratorcentre.com/';

const VexoLabs = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2500);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="vexo-labs-page container">
        <h1>
          <span className="title-word">
            <AnimatedLetters
              strArray={'Vexo'.split('')}
              idx={5}
              letterClass={letterClass}
            />
          </span>{' '}
          <span className="title-word">
            <AnimatedLetters
              strArray={'Labs'.split('')}
              idx={10}
              letterClass={letterClass}
            />
          </span>
        </h1>

        <div className="text-area">
          <Paragraph textAlign="left" width="100%">
            In late 2025, I founded{' '}
            <a href={VEXO_LABS_URL} target="_blank" rel="noreferrer">
              Vexo Labs
            </a>{' '}
            with some friends. We aim to help democratize investing and building
            wealth. I&apos;m proud to have had this start-up accepted into
            Canada&apos;s top accelerator, Waterloo&apos;s{' '}
            <a href={ACCELERATOR_CENTRE_URL} target="_blank" rel="noreferrer">
              Accelerator Centre
            </a>
            . We are currently about to start beta testing with volunteer users.
            To learn more, go to:{' '}
            <a href={VEXO_LABS_URL} target="_blank" rel="noreferrer">
              vexo.gg
            </a>
            .
          </Paragraph>
        </div>
        <Footer />
      </div>
      <LoadingAnimation />
    </>
  );
};

export default VexoLabs;
