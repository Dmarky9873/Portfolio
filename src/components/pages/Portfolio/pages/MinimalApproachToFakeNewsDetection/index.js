import { useEffect, useState } from 'react';
import AnimatedLetters from '../../../../elements/AnimatedLetters';
import Footer from '../../../../elements/Footer';
import LoadingAnimation from '../../../../elements/LoadingAnimation';
import Paragraph from '../../../../elements/Paragraph';
import PDFViewer from '../../../../elements/PDFViewer';
import fakeNewsPaper from '../../../../../assets/files/papers/a-minimal-approach-to-fake-news-detection.pdf';
import './index.scss';

const MinimalApproachToFakeNewsDetection = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2500);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="minimal-fake-news-page container">
        <h1>
          <span className="title-word">
            <AnimatedLetters
              strArray={'A Minimal '.split('')}
              idx={5}
              letterClass={letterClass}
            />
          </span>
          <br className="mobile-break" />
          <span className="title-word">
            <AnimatedLetters
              strArray={'Approach to '.split('')}
              idx={14}
              letterClass={letterClass}
            />
          </span>
          <br className="mobile-break" />
          <span className="title-word">
            <AnimatedLetters
              strArray={'Fake News Detection'.split('')}
              idx={27}
              letterClass={letterClass}
            />
          </span>
        </h1>

        <div className="text-area">
          <Paragraph textAlign="left" width="100%">
            Over six months, I wrote a research paper on machine learning
            approaches to fake news detection. The paper delves into various
            ways that others have used machine learning to identify fake news,
            along with presenting a novel approach to the problem. My goal with
            this was to create something that used as few textual features as
            possible, and it worked! Read on to find out how it works and what
            the results were. I found the academic process to be immensely
            fulfilling. I learned so much about natural language processing and
            machine learning in general and can safely say that my skills in the
            field have improved thanks to it.
          </Paragraph>

          <PDFViewer
            label="Research Paper"
            title="A Minimal Approach to Fake News Detection"
            fileUrl={fakeNewsPaper}
            fileName="a-minimal-approach-to-fake-news-detection.pdf"
          />
        </div>
        <Footer />
      </div>
      <LoadingAnimation />
    </>
  );
};

export default MinimalApproachToFakeNewsDetection;
