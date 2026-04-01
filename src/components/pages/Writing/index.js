import './index.scss';
import AnimatedLetters from '../../elements/AnimatedLetters';
import { useEffect, useState } from 'react';
import Paragraph from '../../elements/Paragraph';
import TitleImageText from '../../elements/TitleImageText';
import Footer from '../../elements/Footer';
import LoadingAnimation from '../../elements/LoadingAnimation';
import { writingItems } from '../../../data/writing';
import fakeNewsPaperPreview from '../../../assets/images/writing/a-minimal-approach-to-fake-news-detection.png';

const Writing = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [firstWritingItem, ...remainingWritingItems] = writingItems;

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

        <TitleImageText
          image={firstWritingItem.previewImage}
          imageAlt={firstWritingItem.previewAlt}
          link={`/writing/${firstWritingItem.slug}`}
          title={firstWritingItem.title}
          date={firstWritingItem.meta}
        >
          {firstWritingItem.listDescription}
        </TitleImageText>

        <TitleImageText
          image={fakeNewsPaperPreview}
          imageAlt="First page preview of A Minimal Approach to Fake News Detection."
          link="/portfolio/a-minimal-approach-to-fake-news-detection"
          title="A Minimal Approach to Fake News Detection"
          date="2024 / Research Paper"
        >
          Over six months, I published a research paper on machine learning
          approaches to fake news detection. It reviews existing approaches and
          presents a novel method.
        </TitleImageText>

        {remainingWritingItems.map((item) => (
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
