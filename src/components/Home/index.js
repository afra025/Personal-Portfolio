import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import './index.scss';
import { useEffect, useState } from 'react';
import AnimatedLetters from '../AnimatedLetters';
import Logo from './Logo'
import Loader from 'react-loaders';
const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['a','d','i','y','a']
    const jobArray = ['w','e','b',' ','d','e','v','e','l','o','p','e','r','.']
    
    useEffect(() => {
        const timer = setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    
        // Cleanup function to clear the timer if the component unmounts
        return () => clearTimeout(timer)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                 <span className={letterClass}>H</span>   
                 <span className={`${letterClass} _12`}>i,</span>   
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <span className={`${letterClass} _15`}>&nbsp;A</span>
                <span className={`${letterClass} _16`}>f</span>
                <span className={`${letterClass} _17`}>r</span>
                <span className={`${letterClass} _18`}>a</span>
                <img src={LogoTitle} alt="deveoper" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={20} />
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={25} />
                </h1>
                <h2>Frontend Developer / Problem Solver</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
            </div>
            <Logo/>
        </div>
        <Loader type='pacman' />
        </>
    );
}

export default Home