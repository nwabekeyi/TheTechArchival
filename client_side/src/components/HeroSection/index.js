import React, { useState } from 'react'
import { Link } from 'react-router-dom';
// pexels.com for free stock videos
import Video from '../../videos/video.mp4'
import {
    HeroContainer,
    HeroBg,
    VideoBg,
    HeroContent,
    HeroH1,
    HeroP,
    HeroBtnWrapper,
    ArrowForward,
    ArrowRight
} from './HeroElements'

import {ButtonNavigate } from '../ButtonElement'

const HeroSection = () => {

    const [ hover, setHover ] = useState(false)

    const onHover = () => {
        setHover((prevHover) => !prevHover);
    };

    return (
        <HeroContainer id="home">
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4'/>
            </HeroBg>
            <HeroContent>
                <HeroH1> Become A Tech Proffesional Today </HeroH1>
                <HeroP>
                    Sign up for the next cohort of virtual classes. <br></br>
                    Code with a team of experts on real-time projects.
                </HeroP>
            <Link to="/chatbot">
                <HeroBtnWrapper>
                    <ButtonNavigate
                        to="/chatbot" // Specify the path to the Chatbot page
                        smooth={true} // Enable smooth scrolling
                        duration={500} // Set the duration of the scroll animation
                        spy={true} // Activate active class for the current section
                        exact="true" // Activate active class for exact scroll position
                        primary={true} // Example prop value
                        big={true} // Example prop value
                        dark={true} // Example prop value
                        fontBig={true} // Example prop value
                        onMouseEnter={onHover} // Call onHover when mouse enters the button area
                        onMouseLeave={onHover}
      >
                        Get started
                        {hover ? <ArrowForward/> : <ArrowRight/>}
                    </ButtonNavigate>
                </HeroBtnWrapper>
            </Link>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection