import React from 'react';
import { Form, Title, Input, Button, Anchor } from './Component';


const SignIn: React.FC = () => {
    return (
        <Form>
            <Title>Sign in</Title>
            <Input type='email' placeholder='Email' />
            <Input type='password' placeholder='Password' />
            <Anchor href='#'>Forgot your password?</Anchor>
            <Button>Sign In</Button>
        </Form>
    );
};

export default SignIn;