import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import Loader from 'react-loaders'


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    
    useEffect(() => {
        const timer = setTimeout(() => { 
            setLetterClass('text-animate-hover')
        }, 3000)
    
        // Cleanup function to clear the timer if the component unmounts
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
        <div className="container about-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A','b','o','u','t',' ','m','e']}
                    idx={15}
                    />
                </h1>
                <p>
                I am a passionate and driven individual eager to work with cutting-edge technologies and innovative teams to solve complex problems and deliver impactful solutions. I thrive in environments that challenge me to learn continuously and push the boundaries of my skills. With a strong foundation in various technologies, I am excited about the opportunity to collaborate with talented professionals and make meaningful contributions to projects that drive progress and success for both the company and myself.  
                </p>
                <p>
                With confidence, I embrace new experiences and ideas, knowing that my skills and determination drive me toward achieving my goals.
                </p>
                <p>
                If I need to define myself in one sentence that would be a quick learner with a kind heart and a joyful attitude, I embrace new challenges with enthusiasm and a positive spirit  
                </p>
            </div>

            <div className='stage-cube-cont'>
                <div className='cubespinner'>
                    <div className='face1'>
                        <FontAwesomeIcon icon={faHtml5} color='#F06529' />
                    </div>
                    <div className='face2'>
                        <FontAwesomeIcon icon={faCss3} color='#28A4D9' />
                    </div>
                    <div className='face3'>
                        <FontAwesomeIcon icon={faReact} color='#5ED4F4' />
                    </div>
                    <div className='face4'>
                        <FontAwesomeIcon icon={faJsSquare} color='#EFD81D' />
                    </div>
                    <div className='face5'>
                        <FontAwesomeIcon icon={faBootstrap} color='#9b59b6' />
                    </div>
                    <div className='face6'>
                        <FontAwesomeIcon icon={faCode} color='#DD0031' />
                    </div>
                </div>
            </div>
        </div>
        <Loader type='pacman' />
        </>
    )
}

export default About