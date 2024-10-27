import React from 'react';
import { Form, Title, Input, Button } from './Component';


const SignUp: React.FC = () => {
    return (
        <Form>
            <Title>Create Account</Title>
            <Input type='text' placeholder='Name' />
            <Input type='email' placeholder='Email' />
            <Input type='password' placeholder='Password' />
            <Button>Sign Up</Button>
        </Form>
    );
};

export default SignUp;