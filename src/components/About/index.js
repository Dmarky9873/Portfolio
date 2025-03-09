import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBasketball, faDrum, faDumbbell, faLaptopCode, faSquareRootVariable, faBook } from '@fortawesome/free-solid-svg-icons'
import LoadingAnimation from '../LoadingAnimation'
import UofTPano from '../../assets/images/about/uoft-pano.jpg'
import FullLineImage from '../FullLineImage'

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
                            I am a reliable and hard-working programmer, recognized with awards for my accomplishments. I consider myself a
                            creative, out-of-the-box thinker who is self-motivated and enthusiastic
                            about collaborating with others.
                        </p>
                        <p>
                            Being incredibly passionate about programming, I am constantly driven to enhance my skills through formal coursework and self-directed study.
                        </p>
                        <p>
                            Participating in a host of different extracurricular activities, I pride myself on my time management skills and scheduling abilities.
                        </p>

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

                <FullLineImage imageSource={UofTPano} />
            </div>
            <LoadingAnimation />
        </>
    )
}

export default About