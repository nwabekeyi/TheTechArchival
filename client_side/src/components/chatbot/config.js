import { createChatBotMessage } from 'react-chatbot-kit';
import CourseSelection from './widget/courseSelection';
import RegistrationFormWidget from './widget/registrationForm';
import WelcomeOptions from './widget/welcomeOption';
import  {ReactComponent as Logo} from '../../images/logo.svg';
import ProofOfPayment from './widget/proveOfPayment';


const config = {
  botName: 'KrakenTech Support Bot',
  initialMessages: [
    createChatBotMessage('`Hello, My name is Kraken. How can I assist you today?`', {
      widget: 'welcomeOptions', // Render the WelcomeOptions widget as the initial message
    }),  ],
  customComponents: {
    botAvatar: (props) => <Logo style={{height: '40px', width: '40px'}} {...props} />, 

  },
   widgets: [
    {
      widgetName: 'proofOfPayment',
      widgetFunc: (props) => (
        <ProofOfPayment  {...props}/>
      ),
    },

    {
      widgetName: 'welcomeOptions',
      widgetFunc: (props) => (
        <WelcomeOptions  {...props}/>
      ),
    },

    {
      widgetName: 'courseSelection',
      widgetFunc: (props) => <CourseSelection {...props} />,
      props: {
      },
    },
    {
      widgetName: 'registrationForm',
      widgetFunc: (props) => <RegistrationFormWidget {...props} />,
      props: {
        onSubmit: (formData) => {
          // Logic to handle form submission (e.g., send data to server)
          console.log('Form data:', formData);
          // You can trigger the next step in the chatbot flow here if needed
          // props.triggerNextStep();
        },
      },
    },
  ],
};

export default config;
