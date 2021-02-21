import React from 'react';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Header,
  ShapeView,
  Title,
  Description,
  BlankSpace,
} from './styles';

import Button from '../../components/Button';

import HealthyStyleImage from '../../assets/healthy-image.svg';
import Shape from '../../assets/shape.svg';

const InitialPage: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header>
        <ShapeView>
          <Shape />
        </ShapeView>
      </Header>
      <Container>
        <HealthyStyleImage />
        <Title>Get things done with TODO</Title>
        <Description>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          adipiscing tempor tincidunt elementum nec.
        </Description>
        <BlankSpace />
        <Button
          onPress={() => {
            navigation.navigate('SignUp');
          }}
        >
          Get Started
        </Button>
      </Container>
    </>
  );
};

export default InitialPage;
