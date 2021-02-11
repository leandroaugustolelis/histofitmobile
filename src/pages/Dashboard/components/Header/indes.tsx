import React from 'react';
import { Container, ProfilePhoto, Title } from './styles';
import Image from '../../../../assets/profilephoto.svg';

const Header = () => {
  return (
    <Container>
      <ProfilePhoto>
        <Image />
      </ProfilePhoto>
      <Title>Welcome Joao Fulano!</Title>
    </Container>
  );
};

export default Header;
