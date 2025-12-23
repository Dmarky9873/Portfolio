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

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="portfolio" element={<Portfolio />} />
          <Route
            path="portfolio/advanced-robotics"
            element={<AdvancedRobotics />}
          />
          <Route path="portfolio/first-rbc-internship" element={<FirstRBCInternship />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
