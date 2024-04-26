import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { NavLogo } from '../Navbar/NavbarElements';
import {
    Container,
    FormWrap,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormButton,
    Text
} from './SigninElements';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate(); // Use useNavigate hook to get the navigate function

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const res = await fetch('http://localhost:5000/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            if (res.ok) {
                console.log(res)
                // If login successful, navigate to another page
                navigate('/chatbot'); // Navigate to '/dashboard'
            } else {
                const errorData = await res.json();
                console.error('Login failed:', errorData.error);
                // Handle the error appropriately
            }
        } catch (error) {
            console.error('An error occurred during login:', error);
            // Handle the error appropriately
        }
    };

    return (
        <Container>
            <FormWrap>
                <NavLogo to="/"> <Logo style={{width:"2em", height:"2em", marginRight:"15px", marginTop: '10px'}}/> KrakenTech </NavLogo>
                <FormContent>
                    <Form onSubmit={handleSubmit}>
                        <FormH1> Sign in to your account </FormH1>
                        <FormLabel htmlFor='email'> Email </FormLabel>
                        <FormInput
                            type='email'
                            id='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <FormLabel htmlFor='password'> Password </FormLabel>
                        <FormInput
                            type='password'
                            id='password'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <FormButton type='submit'> Continue </FormButton>
                        <Text> Forgot password? </Text>
                        <Text> Don't have an account? <Link to="/register" style={{color: "rgb(87,65,217)"}}>Register</Link></Text> 
                    </Form>
                </FormContent>
            </FormWrap>
        </Container>
    );
};

export default SignIn;
