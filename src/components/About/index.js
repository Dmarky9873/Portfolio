import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketball, faDrum, faDumbbell, faLaptopCode, faSquareRootVariable, faBook } from '@fortawesome/free-solid-svg-icons'
import LoadingAnimation from '../LoadingAnimation'
import RoboCupLookingAway from '../../assets/images/about/robocup-looking-away.jpg'
import ImageText from '../ImageText'
import RoboticHand from '../../assets/images/about/robotic-hand.gif'
import BasketballFreethrow from '../../assets/images/about/basketball-freethrow.jpg'

const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2500)
    }, [])



    return (
        <>
            <div className='container about-page'>
                <div className='about-title-cube-container' >

                    <div className='text-zone'>
                        <h1>
                            <AnimatedLetters
                                strArray={'About me'.split('')}
                                idx={15}
                                letterClass={letterClass}
                            />
                        </h1>
                        <p>
                            Whether I’m leading elaborate robotics teams or crafting a cool website (like this one!), I love bringing ideas to life. Hard work and self-motivation drive me, but collaboration makes the journey even better. And these aren’t just words—through this site, you’ll discover the communities I’ve contributed to, the teams I’ve led, and the projects I’ve brought to completion.
                        </p>
                        {/* <p>
                            Maybe it’s the hacker aesthetic it gives off or the creativity I can express through code, but something about computer science completely hooked me. I love exploring it—whether through formal coursework or diving into self-directed projects—and I’m always finding ways to apply what I learn to my other passions. After all, problem-solving is a skill that fits just about anywhere.
                        </p>
                        <p>
                            When I’m not programming, you’ll probably find me on the basketball court or at the gym. I’ve been at it for nearly a decade, and I love the balance it brings—there’s something refreshing about lifting heavy weights after staring at a screen all day. Juggling my bench press, three-point percentage, and GPA has no doubt sharpened my time-management skills.
                        </p> */}

                    </div>

                    <div className='stage-cube-cont'>
                        <div className='cubespinner'>
                            <div className='face1'>
                                <FontAwesomeIcon icon={faBasketball} color='#FFA725' />
                            </div>
                            <div className='face2'>
                                <FontAwesomeIcon icon={faLaptopCode} color='#17153B' />
                            </div>
                            <div className='face3'>
                                <FontAwesomeIcon icon={faDrum} color='#A31D1D' />
                            </div>
                            <div className='face4'>
                                <FontAwesomeIcon icon={faDumbbell} color='#727D73' />
                            </div>
                            <div className='face5'>
                                <FontAwesomeIcon icon={faSquareRootVariable} color='#211C84' />
                            </div>
                            <div className='face6'>
                                <FontAwesomeIcon icon={faBook} color='#443627' />
                            </div>
                        </div>
                    </div>
                </div>

                <ImageText imgAlt="At the RoboCup Looking Away" textLocation='right' imageSource={RoboCupLookingAway} >
                    Whether I’m leading elaborate robotics teams or crafting a cool website (like this one!), I love bringing ideas to life. Hard work and self-motivation drive me, but collaboration makes the journey even better. And these aren’t just words—through this site, you’ll discover the communities I’ve contributed to, the teams I’ve led, and the projects I’ve brought to completion.
                </ImageText>
                <ImageText imgAlt="Robotic hand being controlled by glove" textLocation='left' imageSource={RoboticHand} >
                    Maybe it’s the hacker aesthetic it gives off or the creativity I can express through code, but something about computer science completely hooked me. I love exploring it—whether through formal coursework or diving into self-directed projects—and I’m always finding ways to apply what I learn to my other passions. After all, problem-solving is a skill that fits just about anywhere.
                </ImageText>
                <ImageText imgAlt="Daniel shooting a freethrow in a basketball game" textLocation='right' imageSource={BasketballFreethrow} >
                    When I’m not programming, you’ll probably find me on the basketball court or at the gym. I’ve been at it for nearly a decade, and I love the balance it brings—there’s something refreshing about lifting heavy weights after staring at a screen all day. Juggling my bench press, three-point percentage, and GPA has no doubt sharpened my time-management skills.
                </ImageText>

            </div>
            <LoadingAnimation />
        </>
    )
}

export default About