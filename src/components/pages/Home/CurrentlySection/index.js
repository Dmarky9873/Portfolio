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
      detail: 'Computer Science',
    },
    {
      category: 'Work',
      title: 'Developer @ RBC',
      detail: 'Building where finance and software meet.',
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
        <div className="currently-heading">
          <div>
            <p className="currently-kicker">Right now</p>
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={'Currently'.split('')}
                idx={9}
              />
            </h1>
          </div>
          <span className="currently-badge">Live</span>
        </div>

        <p className="currently-description">
          A snapshot of where I am learning and building at the moment.
        </p>

        <div className="current-places-container">
          {currentPlaces.map((place) => (
            <CurrentPlace
              key={place.title}
              category={place.category}
              title={place.title}
              detail={place.detail}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Currently;
