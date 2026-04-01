import { useEffect, useState } from 'react';
import AnimatedLetters from '../../../elements/AnimatedLetters';
import './index.scss';
import CurrentPlace from './CurrentPlace';

const Currently = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const currentPlaces = [
    {
      category: 'University',
      title: 'The University of Toronto',
    },
    {
      category: 'Work',
      title: 'Developer @ RBC',
    },
  ];

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <div className="currently-section">
      <div className="background">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Currently'.split('')}
            idx={9}
          />
        </h1>

        <div className="current-places-container">
          {currentPlaces.map((place) => (
            <CurrentPlace
              key={place.title}
              category={place.category}
              title={place.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Currently;
