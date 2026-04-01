import './index.scss';
import { useState, useEffect, useRef } from 'react';
import LogoMark from '../../../assets/images/logos/logo-d-svg.svg';
import LogoSubtitleMask from '../../../assets/images/logos/logo_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faGithub,
  faYoutube,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import {
  faHome,
  faUser,
  faEnvelope,
  faBars,
  faClose,
  faBriefcase,
  faFileLines,
} from '@fortawesome/free-solid-svg-icons';
import { Link, NavLink } from 'react-router-dom';

const Sidebar = () => {
  const [showNav, setShowNav] = useState(false);
  const navRef = useRef(null);
  const getNavLinkClassName = (baseClassName = '') => ({ isActive }) =>
    `${baseClassName}${isActive ? ' active' : ''}`.trim();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (showNav && navRef.current && !navRef.current.contains(event.target)) {
        setShowNav(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showNav]);

  return (
    <div className="nav-bar" ref={navRef}>
      <div className="logo-border">
        <Link
          className="logo"
          to="/"
          aria-label="Daniel Markusson home"
          onClick={() => setShowNav(false)}
        >
          <span
            className="logo-mark"
            aria-hidden="true"
            style={{
              WebkitMaskImage: `url(${LogoMark})`,
              maskImage: `url(${LogoMark})`,
            }}
          />
          <span
            className="logo-subtitle"
            aria-hidden="true"
            style={{
              WebkitMaskImage: `url(${LogoSubtitleMask})`,
              maskImage: `url(${LogoSubtitleMask})`,
            }}
          />
        </Link>
      </div>
      <nav className={showNav ? 'mobile-show' : ''}>
        <NavLink
          end
          aria-label="Home"
          className={getNavLinkClassName()}
          to="/"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faHome} />
        </NavLink>
        <NavLink
          aria-label="Portfolio"
          className={getNavLinkClassName('portfolio-link')}
          to="/portfolio"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faBriefcase} />
        </NavLink>
        <NavLink
          aria-label="Writing"
          className={getNavLinkClassName('writing-link')}
          to="/writing"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faFileLines} />
        </NavLink>
        <NavLink
          aria-label="About"
          className={getNavLinkClassName('about-link')}
          to="/about"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faUser} />
        </NavLink>
        <NavLink
          aria-label="Contact"
          className={getNavLinkClassName('contact-link')}
          to="/contact"
          onClick={() => setShowNav(false)}
        >
          <FontAwesomeIcon icon={faEnvelope} />
        </NavLink>
        <button
          type="button"
          className="nav-toggle close-icon"
          onClick={() => setShowNav(false)}
          aria-label="Close navigation"
        >
          <FontAwesomeIcon icon={faClose} />
        </button>
      </nav>
      <ul>
        <li>
          <a
            href="https://www.linkedin.com/in/daniel-markusson-61a4a8263/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} className="anchor-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Dmarky9873"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FontAwesomeIcon icon={faGithub} className="anchor-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.youtube.com/@DanielMarkusson"
            rel="noreferrer"
            target="_blank"
            aria-label="YouTube"
          >
            <FontAwesomeIcon icon={faYoutube} className="anchor-icon" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/daniel_markusson/"
            rel="noreferrer"
            target="_blank"
            aria-label="Instagram"
          >
            <FontAwesomeIcon icon={faInstagram} className="anchor-icon" />
          </a>
        </li>
      </ul>
      <button
        type="button"
        className="nav-toggle hamburger-icon"
        onClick={() => setShowNav(true)}
        aria-label="Open navigation"
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
    </div>
  );
};

export default Sidebar;
