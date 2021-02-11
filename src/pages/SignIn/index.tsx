import React, { useCallback, useRef } from 'react';

import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { Container, Title, BlankSpace, ForgotPassword, Footer } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import FooterText from '../../components/FooterText';
import FooterLink from '../../components/FooterLink';

import Image from '../../assets/img2.svg';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const handleSignIn = useCallback((data: SignInFormData) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <BlankSpace />
      <BlankSpace />
      <Title>Welcome Back !</Title>
      <Image height={219} width={257} styles={{ alignItems: 'center' }} />
      <BlankSpace />

      <Form ref={formRef} onSubmit={handleSignIn}>
        <Input name="email" placeholder="Enter your email" />
        <Input name="password" placeholder="Enter password" />
        <ForgotPassword>Forgot Password</ForgotPassword>
        <Button
          onPress={() => {
            formRef.current?.submitForm();
          }}
        >
          Login
        </Button>
      </Form>
      <Footer>
        <FooterText>Dont have an account?</FooterText>
        <FooterLink onPress={() => navigation.navigate('SignUp')}>
          Sign Up
        </FooterLink>
      </Footer>
    </Container>
  );
};

export default SignIn;
