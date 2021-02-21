import React from 'react';
import { Container, ProfilePhoto, ShapeView, Title } from './styles';
import Image from '../../../../assets/profilephoto.svg';
import ShapeWhite from '../../../../assets/shape-white.svg';

import { useAuth } from '../../../../hooks/auth';

const Header: React.FC = () => {
  const { user } = useAuth();
  return (
    <Container>
      <ShapeView>
        <ShapeWhite />
      </ShapeView>
      <ProfilePhoto>
        <Image />
      </ProfilePhoto>
      <Title>{user.name}</Title>
    </Container>
  );
};

export default Header;
