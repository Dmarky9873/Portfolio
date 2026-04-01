import { useEffect, useState } from 'react';
import AnimatedLetters from '../../../../elements/AnimatedLetters';
import Footer from '../../../../elements/Footer';
import LoadingAnimation from '../../../../elements/LoadingAnimation';
import Paragraph from '../../../../elements/Paragraph';
import PDFViewer from '../../../../elements/PDFViewer';
import './index.scss';

const WritingArticle = ({ article }) => {
  const [letterClass, setLetterClass] = useState('text-animate');

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 2500);

    return () => window.clearTimeout(timeoutId);
  }, []);

  let letterIndex = 5;

  return (
    <>
      <div className="writing-article-page container">
        <h1 className="writing-article-title">
          {article.title.split(' ').map((word) => {
            const idx = letterIndex;
            letterIndex += word.length + 2;

            return (
              <span className="title-word" key={`${article.slug}-${word}-${idx}`}>
                <AnimatedLetters
                  strArray={word.split('')}
                  idx={idx}
                  letterClass={letterClass}
                />
              </span>
            );
          })}
        </h1>

        <p className="writing-article-meta">{article.meta}</p>

        <div className="text-area">
          <Paragraph textAlign="left" width="100%">
            {article.intro}
          </Paragraph>

          <PDFViewer
            label={article.meta}
            title={article.title}
            fileUrl={article.fileUrl}
            fileName={article.fileName}
          />
        </div>
        <Footer />
      </div>
      <LoadingAnimation />
    </>
  );
};

export default WritingArticle;
