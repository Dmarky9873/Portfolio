import { useEffect, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home';
import Layout from './components/Layout';
import './App.scss';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Portfolio from './components/pages/Portfolio';
import PageNotFound from './components/pages/PageNotFound';
import AdvancedRobotics from './components/pages/Portfolio/pages/AdvancedRobotics';
import FirstRBCInternship from './components/pages/Portfolio/pages/FirstRBCInternship';
import MinimalApproachToFakeNewsDetection from './components/pages/Portfolio/pages/MinimalApproachToFakeNewsDetection';
import SecondRBCInternship from './components/pages/Portfolio/pages/SecondRBCInternship';
import VexoLabs from './components/pages/Portfolio/pages/VexoLabs';
import {
  createRandomTheme,
  darkTheme,
  defaultTheme,
  getThemeBackgroundStyles,
  getThemePreview,
  isValidTheme,
  lightTheme,
} from './theme/palettes';
import { applyThemeFavicon } from './theme/favicon';

const getInitialTheme = () => {
  if (typeof window === 'undefined') {
    return defaultTheme;
  }

  const storedTheme = window.localStorage.getItem('portfolio-theme');

  if (!storedTheme) {
    return defaultTheme;
  }

  try {
    const parsedTheme = JSON.parse(storedTheme);

    return isValidTheme(parsedTheme) ? parsedTheme : defaultTheme;
  } catch (error) {
    return defaultTheme;
  }
};

function App() {
  const [activeTheme, setActiveTheme] = useState(getInitialTheme);
  const themePreview = getThemePreview(activeTheme);

  useEffect(() => {
    const root = document.documentElement;
    const body = document.body;
    const backgroundStyles = getThemeBackgroundStyles(activeTheme);

    Object.entries(activeTheme.colors).forEach(([variableName, value]) => {
      root.style.setProperty(variableName, value);
      body.style.setProperty(variableName, value);
    });

    [root, body].forEach((element) => {
      element.style.backgroundColor = backgroundStyles.backgroundColor;
      element.style.backgroundImage = backgroundStyles.backgroundImage;
    });

    applyThemeFavicon(activeTheme);
    window.localStorage.setItem('portfolio-theme', JSON.stringify(activeTheme));
  }, [activeTheme]);

  const handleRandomizeTheme = () => setActiveTheme(createRandomTheme());
  const handleSetDarkTheme = () => setActiveTheme(darkTheme);
  const handleSetLightTheme = () => setActiveTheme(lightTheme);
  const handleResetTheme = () => setActiveTheme(defaultTheme);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <Home
                activeTheme={activeTheme}
                themePreview={themePreview}
                onRandomizeTheme={handleRandomizeTheme}
                onSetDarkTheme={handleSetDarkTheme}
                onSetLightTheme={handleSetLightTheme}
                onResetTheme={handleResetTheme}
              />
            }
          />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route
            path="portfolio/advanced-robotics"
            element={<AdvancedRobotics />}
          />
          <Route
            path="portfolio/first-innovation-developer-internship"
            element={<FirstRBCInternship />}
          />
          <Route
            path="portfolio/second-innovation-developer-internship"
            element={<SecondRBCInternship />}
          />
          <Route path="portfolio/vexo-labs" element={<VexoLabs />} />
          <Route
            path="portfolio/a-minimal-approach-to-fake-news-detection"
            element={<MinimalApproachToFakeNewsDetection />}
          />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
