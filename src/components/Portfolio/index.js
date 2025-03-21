import './index.scss';
import UofTPano from '../../assets/images/portfolio/uoft-pano.jpeg'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react';
import Paragraph from '../Paragraph';
import TitleImageText from '../TitleImageText';
import Footer from '../Footer'
import AdvancedRobotics from '../../assets/images/portfolio/robotics-bordeaux-with-luke-hayden-koaich.jpeg'


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
                Here, you'll find projects that I've completed, clubs and groups I've been a part of, and various other cool things I've done. To learn more about a particular endeavour, click on it.
            </Paragraph>

            <TitleImageText image={AdvancedRobotics} imageAlt="Robotics in Bordeaux with Luke, Hayden, and Mr. Koaich" link="/portfolio/advanced-robotics" title="Advanced Robotics Club" date="2022-present">
                How did three highschoolers end up representing their country on the international stage? I don't know either. But somehow, against all odds, Hayden Patience, Luke Hartford, and I were chosen to represent Canada during the 2023 RoboCup Junior International finals in Bordeaux France. It all stemmed from a fateful grade eleven engineering class class wherein we made autonomous soccer-playing robots. Late nights, early mornings, and an amazing french teacher—this story has it all.             </TitleImageText>
            <TitleImageText image={AdvancedRobotics} imageAlt="Robotics in Bordeaux with Luke, Hayden, and Mr. Koaich" link="/portfolio/advanced-robotics" title="Advanced Robotics Club" date="2022-present">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </TitleImageText>
            <TitleImageText image={AdvancedRobotics} imageAlt="Robotics in Bordeaux with Luke, Hayden, and Mr. Koaich" link="/portfolio/advanced-robotics" title="Advanced Robotics Club" date="2022-present">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </TitleImageText>
            <Footer />
        </div >
    )
}

export default Portfolio;