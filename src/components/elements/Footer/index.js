import './index.scss';
import resumeHref from '../../../assets/files/daniel-markusson-resume.pdf';

const Footer = () => {
  return (
    <footer>
      <div className="footer-inner">
        <div className="footer-text">
          You made it to the bottom! While you're here, why don't you{' '}
          <a
            href={resumeHref}
            target="_blank"
            rel="noreferrer"
            download="resume-daniel-markusson.pdf"
          >
            download my resume
          </a>
          .
        </div>
      </div>
      <span className="footer-tag">&lt;/body&gt;</span>
    </footer>
  );
};

export default Footer;
