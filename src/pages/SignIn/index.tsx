import React from 'react';

import { Container, Title, BlankSpace, ForgotPassword } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

import Image from '../../assets/img2.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <BlankSpace />
      <BlankSpace />
      <Title>Welcome Back !</Title>
      <Image height={219} width={257} styles={{ alignItems: 'center' }} />
      <BlankSpace />
      <Input name="email" placeholder="Enter your email" />
      <Input name="password" placeholder="Enter password" />
      <ForgotPassword>Forgot Password</ForgotPassword>
      <Button
        onPress={() => {
          console.log('deu');
        }}
      >
        Login
      </Button>
    </Container>
  );
};

export default SignIn;
