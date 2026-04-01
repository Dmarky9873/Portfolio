import { useEffect, useState } from 'react';
import AnimatedLetters from '../../../elements/AnimatedLetters';
import './index.scss';
import CurrentPlace from './CurrentPlace';

const Currently = ({ isMobileOpen, onToggleMobile }) => {
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
    <div
      className={`currently-section${
        isMobileOpen ? ' currently-section--mobile-open' : ''
      }`}
    >
      <button
        type="button"
        className="currently-section__toggle"
        onClick={onToggleMobile}
        aria-expanded={isMobileOpen}
        aria-controls="mobile-currently-panel"
      >
        <span>Currently</span>
        <span className="currently-section__toggle-count">
          {currentPlaces.length}
        </span>
      </button>
      <div className="background" id="mobile-currently-panel">
        <div className="currently-section__panel-header">
          <p className="currently-section__eyebrow">Current</p>
        </div>
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={'Currently'.split('')}
            idx={9}
          />
        </h1>

        <div className="current-places-container">
          {currentPlaces.map((place, index) => (
            <CurrentPlace
              key={place.title}
              category={place.category}
              title={place.title}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Currently;
