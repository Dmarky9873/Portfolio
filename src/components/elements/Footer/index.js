import { Link } from 'react-router-dom';
import './index.scss';
import Resume from '../../../assets/files/resume-daniel-markusson.pdf';

const Footer = () => {
  return (
    <footer>
      <div className="footer-text">
        You made it to the bottom! While you're here, why don't you{' '}
        <Link
          to={Resume}
          target="_blank"
          download="resume-daniel-markusson.pdf"
        >
          download my resume
        </Link>
        .
      </div>
    </footer>
  );
};

export default Footer;
