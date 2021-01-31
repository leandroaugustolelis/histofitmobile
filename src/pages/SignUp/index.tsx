import React from 'react';

import { Container, BlankSpace, Title, Description } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  return (
    <Container>
      <BlankSpace />
      <BlankSpace />
      <Title>Welcome Onboard</Title>
      <Description>Lets help you meet up your taxi</Description>
      <BlankSpace />
      <Input name="full name" placeholder="Enter your full name" />
      <Input name="email" placeholder="Enter your email" />
      <Input name="password" placeholder="Enter your password" />
      <Input name="confirmpassword" placeholder="Confirm password" />
      <Button>Register</Button>
    </Container>
  );
};

export default SignUp;
