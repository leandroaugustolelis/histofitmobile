import React from 'react';

import { Container, Title, Description, BlankSpace } from './styles';

import Button from '../../components/Button';

import InitialImg from '../../assets/img1.svg';

const SignIn: React.FC = () => {
  return (
    <Container>
      <BlankSpace />
      <BlankSpace />
      <InitialImg height={219} width={257} styles={{ alignItems: 'center' }} />
      <Title>Get things done with TODO</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        adipiscing tempor tincidunt elementum nec.
      </Description>
      <BlankSpace />
      <Button
        onPress={() => {
          console.log('deu');
        }}
      >
        Get Started
      </Button>
    </Container>
  );
};

export default SignIn;
