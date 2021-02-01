import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Container, Title, BlankSpace, ForgotPassword, Footer } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import FooterText from '../../components/FooterText';
import FooterLink from '../../components/FooterLink';

import Image from '../../assets/img2.svg';

const SignIn: React.FC = () => {
  const navigation = useNavigation();
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
