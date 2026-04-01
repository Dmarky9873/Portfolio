import { useEffect, useState } from 'react';
import AnimatedLetters from '../../elements/AnimatedLetters';
import LoadingAnimation from '../../elements/LoadingAnimation';
import './index.scss';
import Currently from './CurrentlySection';

const Home = ({
  palettes,
  activePalette,
  onPaletteChange,
  onRandomizePalette,
}) => {
  const [letterClass, setLetterClass] = useState('text-animate');

  const nameArray = ' Daniel'.split('');

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <div className="home-copy">
            <h1>
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['H', 'i', ',']}
                idx={9}
              />
              <br />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={['I', "'", 'm']}
                idx={12}
              />
              <AnimatedLetters
                letterClass={letterClass}
                strArray={nameArray}
                idx={12}
              />
              <br />
              <span style={{ whiteSpace: 'nowrap' }}>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={'I'.split('')}
                  idx={10}
                />
              </span>{' '}
              <span style={{ whiteSpace: 'nowrap' }}>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={'bridge'.split('')}
                  idx={11}
                />
              </span>{' '}
              <span style={{ whiteSpace: 'nowrap' }}>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={'tech'.split('')}
                  idx={17}
                />
              </span>{' '}
              <span style={{ whiteSpace: 'nowrap' }}>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={'and'.split('')}
                  idx={21}
                />
              </span>{' '}
              <span style={{ whiteSpace: 'nowrap' }}>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={'finance.'.split('')}
                  idx={24}
                />
              </span>
            </h1>
            <h2>I design things that perform under pressure.</h2>

            <section className="palette-picker" aria-label="Color palette controls">
              <div className="palette-picker__header">
                <div>
                  <p className="palette-picker__eyebrow">Palette Lab</p>
                  <p className="palette-picker__title">
                    Choose a look for the site or shuffle to a new one.
                  </p>
                </div>
                <button
                  type="button"
                  className="randomize-button"
                  onClick={onRandomizePalette}
                >
                  Randomize
                </button>
              </div>

              <div className="palette-picker__grid">
                {palettes.map((palette) => (
                  <button
                    type="button"
                    key={palette.id}
                    className={`palette-option${
                      palette.id === activePalette.id ? ' is-active' : ''
                    }`}
                    onClick={() => onPaletteChange(palette.id)}
                  >
                    <span className="palette-option__swatches" aria-hidden="true">
                      {palette.swatches.map((swatch, index) => (
                        <span
                          key={`${palette.id}-${index}`}
                          style={{ backgroundColor: swatch }}
                        />
                      ))}
                    </span>
                    <span className="palette-option__label">{palette.label}</span>
                  </button>
                ))}
              </div>

              <p className="palette-picker__description">
                {activePalette.description}
              </p>
            </section>
          </div>
        </div>
        <Currently />
      </div>
      <LoadingAnimation />
    </>
  );
};

export default Home;
