import { useEffect, useRef, useState } from 'react';
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
  const [isPaletteMobileOpen, setIsPaletteMobileOpen] = useState(false);
  const [isCurrentlyMobileOpen, setIsCurrentlyMobileOpen] = useState(false);
  const palettePickerRef = useRef(null);
  const currentlySectionRef = useRef(null);

  const nameArray = ' Daniel'.split('');
  const paletteActions = [
    {
      id: 'randomize',
      label: 'Randomize',
      className: 'palette-picker__action--randomize',
      onClick: () => {
        onRandomizeTheme();
        setIsPaletteMobileOpen(false);
      },
    },
    {
      id: 'dark',
      label: 'Just gimme dark mode',
      className: 'palette-picker__action--dark',
      onClick: () => {
        onSetDarkTheme();
        setIsPaletteMobileOpen(false);
      },
    },
    {
      id: 'light',
      label: 'Just gimme light mode',
      className: 'palette-picker__action--light',
      onClick: () => {
        onSetLightTheme();
        setIsPaletteMobileOpen(false);
      },
    },
    {
      id: 'reset',
      label: 'Reset',
      className: 'palette-picker__action--reset',
      onClick: () => {
        onResetTheme();
        setIsPaletteMobileOpen(false);
      },
    },
  ];

  useEffect(() => {
    const timeoutId = window.setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 4000);

    return () => window.clearTimeout(timeoutId);
  }, []);

  useEffect(() => {
    if (!isPaletteMobileOpen && !isCurrentlyMobileOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      if (palettePickerRef.current?.contains(event.target)) {
        return;
      }

      if (currentlySectionRef.current?.contains(event.target)) {
        return;
      }

      setIsPaletteMobileOpen(false);
      setIsCurrentlyMobileOpen(false);
    };

    document.addEventListener('pointerdown', handlePointerDown);

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown);
    };
  }, [isPaletteMobileOpen, isCurrentlyMobileOpen]);

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

            <section
              ref={palettePickerRef}
              className={`palette-picker${isPaletteMobileOpen ? ' palette-picker--mobile-open' : ''
                }`}
              aria-label="Color palette controls"
            >
              <button
                type="button"
                className="palette-picker__toggle"
                onClick={() => {
                  setIsPaletteMobileOpen((currentValue) => !currentValue);
                  setIsCurrentlyMobileOpen(false);
                }}
                aria-expanded={isPaletteMobileOpen}
                aria-controls="mobile-palette-panel"
              >
                <span className="palette-picker__toggle-label">Palette</span>
                <span className="palette-picker__swatches" aria-hidden="true">
                  {themePreview.map((swatch, index) => (
                    <span
                      key={`${activeTheme.id}-toggle-${index}`}
                      style={{ backgroundColor: swatch }}
                    />
                  ))}
                </span>
              </button>

              <div className="palette-picker__panel" id="mobile-palette-panel">
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
                </div>

                <div className="palette-picker__actions">
                  {paletteActions.map((action) => (
                    <button
                      key={action.id}
                      type="button"
                      className={`palette-picker__action ${action.className}`}
                      onClick={action.onClick}
                    >
                      {action.label}
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
        <div ref={currentlySectionRef} className="home-page__currently-shell">
          <Currently
            isMobileOpen={isCurrentlyMobileOpen}
            onToggleMobile={() => {
              setIsCurrentlyMobileOpen((currentValue) => !currentValue);
              setIsPaletteMobileOpen(false);
            }}
          />
        </div>
      </div>
      <LoadingAnimation />
    </>
  );
};

export default Home;
