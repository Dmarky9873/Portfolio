import './index.scss';
import UofTPano from '../../assets/images/portfolio/uoft-pano.jpeg'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import Paragraph from '../Paragraph';


const Portfolio = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2500)
    }, [])


    return (
        <div className='container about-page'>
            <div className='title-area'>
                <h1>
                    <AnimatedLetters
                        strArray={'Portfolio'.split('')}
                        idx={13}
                        letterClass={letterClass}
                    />
                </h1>
            </div>
            <Paragraph textAlign="center">
                Here, you'll find projects that I've completed, clubs and groups I've been a part of, and various other cool things I've done. To learn more about a particular endeavour, click on its title.
            </Paragraph>
        </div>
    )
}

export default Portfolio;