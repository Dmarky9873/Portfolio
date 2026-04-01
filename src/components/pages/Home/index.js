import { useEffect, useState } from 'react';
import AnimatedLetters from '../../elements/AnimatedLetters';
import LoadingAnimation from '../../elements/LoadingAnimation';
import './index.scss';
import Currently from './CurrentlySection';

const Home = ({
  activeTheme,
  themePreview,
  onRandomizeTheme,
  onSetDarkTheme,
  onSetLightTheme,
  onResetTheme,
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
                <div className="palette-picker__summary">
                  <p className="palette-picker__eyebrow">Palette</p>
                  <div className="palette-picker__swatches" aria-hidden="true">
                    {themePreview.map((swatch, index) => (
                      <span
                        key={`${activeTheme.id}-${index}`}
                        style={{ backgroundColor: swatch }}
                      />
                    ))}
                  </div>
                </div>

                <div className="palette-picker__actions">
                  <button
                    type="button"
                    className="palette-picker__action"
                    onClick={onRandomizeTheme}
                  >
                    Randomize
                  </button>
                  <button
                    type="button"
                    className="palette-picker__action"
                    onClick={onSetDarkTheme}
                  >
                    Just gimme dark mode
                  </button>
                  <button
                    type="button"
                    className="palette-picker__action"
                    onClick={onSetLightTheme}
                  >
                    Just gimmie light mode
                  </button>
                  <button
                    type="button"
                    className="palette-picker__action palette-picker__action--ghost"
                    onClick={onResetTheme}
                  >
                    Reset
                  </button>
                </div>
              </div>
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
