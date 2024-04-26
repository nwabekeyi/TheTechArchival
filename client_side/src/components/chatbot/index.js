import React from 'react';
import styled from 'styled-components';
import Chatbot from 'react-chatbot-kit';
import 'react-chatbot-kit/build/main.css';
import ActionProvider from './actionProvider'; // Importing ActionProvider
import MessageParser from './messageParser'; // Importing MessageParser
import config from './config';
import './chatbot.css'
import chatBot from '../../images/support.png';
import {
  HeroBg,
  VideoBg,
} from '../HeroSection/HeroElements'

const ChatbotComponent = () => {
  const customStyle = {
    // Add drop shadow effect to each message
    botMessageBox: {
      boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)',
      borderBottom: '10px',
    },
    userMessageBox: {
      boxShadow: '0px 3px 5px rgba(0, 0, 0, 0.1)',
      borderBottom: '10px',

    },
  };

  return (
    <div>
      <HeroBg>
        <img  src={chatBot} style={{height: "100vh", width: '90vw'}} />
      </HeroBg>
      <StyledChatbot>
        <Chatbot
          headerText='Kraken support Bot'
          config={config}
          actionProvider={ActionProvider} // Passing ActionProvider instance as a prop
          messageParser={MessageParser} // Passing MessageParser instance as a prop
          // customStyle={customStyle} // Pass customStyle prop to Chatbot
        />
      </StyledChatbot>
    </div>
  );
};

const StyledChatbot = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  width: 100vw; /* Default width for small screens */
  height: 100vh;
  background-color: #fff;
  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.1);

  @media (min-width: 1040px) {
    /* Width for screens larger than or equal to 768px (e.g., tablets, laptops) */
    width: 40vw;
    max-width: 40rem; /* Limiting maximum width for larger screens */
  }



  .rcw-message-container {
    /* Apply shadow to each message container */
    box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.1);
  }
`;

export default ChatbotComponent;
