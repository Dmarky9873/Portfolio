import { useEffect, useState } from 'react'
import AnimatedLetters from '../../../../elements/AnimatedLetters'
import Paragraph from '../../../../elements/Paragraph'
import './index.scss'

const AdvancedRobotics = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {
        return setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 2500)
    }, [])

    return (
        <div className='advanced-robotics container'>
            <h1>
                <AnimatedLetters
                    strArray={'Advanced Robotics'.split('')}
                    idx={5}
                    letterClass={letterClass}
                />
            </h1>

            <Paragraph textAlign="left" width="100%">
                When, during grade school, I first stepped into Mr. Wan's engineering classroom during my initial visit to what would become my high school, I was immediately captivated by the chaotic  mix of wires, circuits, and metal components scattered around the room. Curious about their purpose, I listened as Mr. Wan detailed Crestwood’s engineering curriculum, emphasizing its capstone project: RoboCup, an annual competition featuring autonomous soccer-playing robots.
                In ninth grade, I hadn’t yet identified strongly with any particular community—I enjoyed video games, basketball, and maintained good grades, but never fully felt part of any specific group. This uncertainty changed dramatically when Mr. Wan recognized my budding interest in technology during our compulsory communications technology class. Encouraged by his mentorship, I dove deeper into computer programming, discovering a passion that would soon define my high school experience.
            </Paragraph>
            <Paragraph textAlign="left" width="100%">
                My involvement in robotics began in tenth grade when Mr. Wan invited me to join his engineering class a year before students usually do. His workshop became my creative studio, and those once-confusing wires became the clay with which I moulded various rudimentary robotic projects. Collaborating closely with peers, we meticulously designed and constructed robots suitable for competition, culminating in our participation in Toronto’s RoboCup. Despite Crestwood's lack of prior victories and limited resources compared to better-funded competitors, our dedication paid off—we secured first place, earning the privilege of representing Canada internationally at RoboCup in France.
                Arriving at the global competition opened my eyes to an extraordinary community—a diverse group united by shared ambition and mutual respect. Although initially underestimated due to our modest, hastily-made designs—as opposed to our opponent's that had been refined upon year after year for decades—we quickly forged meaningful connections. A moment that sticks out to me was the Croatian team immediately lending us their spare gyroscope when ours failed. This moment of unquestionable sportsmanship, generosity, and community spirit, fundamentally shaped my understanding of teamwork and collaboration.
            </Paragraph>
            <Paragraph textAlign="left" width="100%">
                Inspired by these experiences, I returned determined to foster a similar community at Crestwood. I founded the school’s first Advanced Robotics Club, leveraging the buzz around the school sparked by our international participation—after all, what highschooler would say no to a chance at a trip to France? To ensure a good turnout, I spoke on the announcements every day for a week straight advertising us and encouraging more people to turn up. Our inaugural meeting was an overwhelming success. Filling two classrooms with eager students, our principal would be our first sponsor, pledging to match every dollar we procured from other companies. Creating a media team to do just that, we attracted external sponsors, allowing us to compete on a more level playing field. Today, the Advanced Robotics Club thrives as one of the most popular organizations at Crestwood, drawing in diverse, creative minds committed to innovation.
                Through RoboCup, I discovered not only my community but also my life's direction. The rigorous process of planning, designing, and prototyping affirmed my ambition to use computer science to tackle challenges beyond human capabilities. My experiences have not only equipped me with invaluable technical skills but also taught me leadership, mentorship, and resilience—qualities essential for addressing complex, real-world problems.
            </Paragraph>
            <Paragraph textAlign="left" width="100%">
                Now, when prospective students visit our robotics lab, intrigued by the same chaos of wires and machinery that once fascinated me, I strive to ignite their passion just as Mr. Wan did for me. I'm proud of my journey from an uncertain freshman to a confident senior and will take the lessons I learned into every single one of my future endeavours.
            </Paragraph>

        </div>
    )
}

export default AdvancedRobotics;