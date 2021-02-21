import React, { useCallback, useRef } from 'react';
import { Alert } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import * as Yup from 'yup';
import {
  Container,
  Header,
  ShapeView,
  Title,
  BlankSpace,
  ForgotPassword,
  Footer,
} from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';
import FooterText from '../../components/FooterText';
import FooterLink from '../../components/FooterLink';

import { useAuth } from '../../hooks/auth';
import getValidationErrors from '../../utils/getValidationErrors';

import FitnessTrackImage from '../../assets/fitness-track.svg';
import Shape from '../../assets/shape.svg';

interface SignInFormData {
  email: string;
  password: string;
}

const SignIn: React.FC = () => {
  const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);

  const { signIn } = useAuth();

  const handleSignIn = useCallback(
    async (data: SignInFormData) => {
      try {
        formRef.current?.setErrors({});

        const schema = Yup.object().shape({
          email: Yup.string()
            .required('Email required')
            .email('Please insert a valid email'),
          password: Yup.string().required('Password required'),
        });

        await schema.validate(data, {
          abortEarly: false,
        });

        await signIn({
          email: data.email,
          password: data.password,
        });
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const errors = getValidationErrors(err);
          formRef.current?.setErrors(errors);
          return;
        }

        Alert.alert(
          'Authentication error',
          'Login error, please check credentials',
        );
      }
    },
    [signIn],
  );

  return (
    <>
      <Header>
        <ShapeView>
          <Shape />
        </ShapeView>
      </Header>
      <Container>
        <Title>Welcome Back !</Title>
        <FitnessTrackImage styles={{ alignItems: 'center' }} />
        <BlankSpace />
        <Form ref={formRef} onSubmit={handleSignIn}>
          <Input
            name="email"
            placeholder="Enter your email"
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <Input name="password" placeholder="Enter password" secureTextEntry />
          <ForgotPassword>Forgot Password</ForgotPassword>
        </Form>
        <Button
          onPress={() => {
            formRef.current?.submitForm();
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
    </>
  );
};

export default SignIn;
