import React from 'react';

import { useNavigation } from '@react-navigation/native';
import { Container, BlankSpace, Title, Description, Footer } from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import FooterText from '../../components/FooterText';
import FooterLink from '../../components/FooterLink';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
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
