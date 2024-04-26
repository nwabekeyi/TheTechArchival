import React from 'react'
import lorena from '../../images/Lorena.jpg'
import karen from '../../images/karen.jpg'
import ben from '../../images/ben.jpg'
import Footer from '../Footer'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements'
import { FaArrowLeft } from 'react-icons/fa';
import { ContainerBack, BackToHomeButton } from '../backToHomeButtonStyle';

const containerStyle = {
    backgroundColor: 'white'
}


const  Testimonials = () => {
  return (
    <div style={containerStyle}>
    <ServicesContainer id='services'>
        <ServicesH1> Testimonies </ServicesH1>
        <ServicesWrapper>
            <ServicesCard>
              <ServicesIcon src={ben}/>
              <ServicesH2> Ben Kyle </ServicesH2>
              <ServicesP> "KrakenTech transformed my career with their  courses, equipping me with in-demand tech skills for today's market." </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={karen}/>
              <ServicesH2>Karen Zeni </ServicesH2>
              <ServicesP> "Exceptional instructors, and a supportive community at KrakenTech made learning tech enjoyable and rewarding." </ServicesP>
            </ServicesCard>
            <ServicesCard>
              <ServicesIcon src={lorena}/>
              <ServicesH2> Lorena </ServicesH2>
              <ServicesP> "KrakenTech's hands-on approach and curriculum helped me land my dream job in the tech industry with confidence." </ServicesP>
            </ServicesCard>
        </ServicesWrapper>
    </ServicesContainer>

    <Footer/>
    <ContainerBack>
      <BackToHomeButton to= '/'>
        <FaArrowLeft title='back to homepage' />
      </BackToHomeButton>
    </ContainerBack>
    </div>
  )
}

export default Testimonials