import { Link } from 'react-router-dom';
import './index.scss'
import Resume from '../../assets/files/resume-daniel-markusson.pdf'

const Footer = () => {
    return (
        <footer>
            <div className='footer-text'>
                You made it to the bottom. <Link to={Resume} target="_blank" download='resume-daniel-markusson.pdf'>Download my resume</Link>
            </div>
        </footer>
    )
}

export default Footer;