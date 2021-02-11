import React, { useRef, useCallback } from 'react';
import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import api from '../../services/api';
import { Container, BlankSpace, Title, Description, Footer } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import FooterText from '../../components/FooterText';
import FooterLink from '../../components/FooterLink';

interface SignUpDataForm {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const handleSignUp = useCallback(async (data: SignUpDataForm) => {
    await api.post('/users', data);

    Alert.alert('Registration is complete!', 'Please login.');

    navigation.goBack();
  }, []);

  return (
    <Container>
      <BlankSpace />
      <BlankSpace />
      <Title>Welcome Onboard</Title>
      <Description>Lets help you meet up your taxi</Description>
      <BlankSpace />
      <Form ref={formRef} onSubmit={handleSignUp}>
        <Input name="name" placeholder="Enter your full name" />
        <Input name="email" placeholder="Enter your email" />
        <Input name="password" placeholder="Enter your password" />
        <Button
          onPress={() => {
            formRef.current?.submitForm();
          }}
        >
          Register
        </Button>
      </Form>
      <Footer>
        <FooterText>Already have an account?</FooterText>
        <FooterLink onPress={() => navigation.navigate('SignIn')}>
          Sign In
        </FooterLink>
      </Footer>
    </Container>
  );
};

export default SignUp;
