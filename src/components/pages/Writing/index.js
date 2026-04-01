import './index.scss';
import AnimatedLetters from '../../elements/AnimatedLetters';
import { useEffect, useState } from 'react';
import Paragraph from '../../elements/Paragraph';
import TitleImageText from '../../elements/TitleImageText';
import Footer from '../../elements/Footer';
import LoadingAnimation from '../../elements/LoadingAnimation';
import { writingItems } from '../../../data/writing';

const Writing = () => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2500);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container about-page writing-page">
        <div className="title-area">
          <h1>
            <AnimatedLetters
              strArray={'Writing'.split('')}
              idx={10}
              letterClass={letterClass}
            />
          </h1>
        </div>
        <Paragraph textAlign="center" width="70%">
          Here are some papers I&apos;ve written you may enjoy.
        </Paragraph>

        {writingItems.map((item) => (
          <TitleImageText
            key={item.slug}
            image={item.previewImage}
            imageAlt={item.previewAlt}
            link={`/writing/${item.slug}`}
            title={item.title}
            date={item.meta}
          >
            {item.listDescription}
          </TitleImageText>
        ))}

        <Footer />
      </div>
      <LoadingAnimation />
    </>
  );
};

export default Writing;
