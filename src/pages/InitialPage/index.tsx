import React from 'react';
import { useNavigation } from '@react-navigation/native';

import { Container, Title, Description, BlankSpace } from './styles';

import Button from '../../components/Button';

import Image from '../../assets/img1.svg';

const InitialPage: React.FC = () => {
  const navigation = useNavigation();
  return (
    <Container>
      <BlankSpace />
      <BlankSpace />
      <Image height={219} width={257} styles={{ alignItems: 'center' }} />
      <Title>Get things done with TODO</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        adipiscing tempor tincidunt elementum nec.
      </Description>
      <BlankSpace />
      <Button
        style={{ width: '100%' }}
        onPress={() => {
          navigation.navigate('SignUp');
        }}
      >
        Get Started
      </Button>
    </Container>
  );
};

export default InitialPage;
