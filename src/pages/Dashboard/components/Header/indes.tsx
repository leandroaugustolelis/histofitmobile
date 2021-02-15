import React from 'react';
import { Container, ProfilePhoto, Title } from './styles';
import Image from '../../../../assets/profilephoto.svg';

import { useAuth } from '../../../../hooks/auth';

const Header: React.FC = () => {
  const { user } = useAuth();
  return (
    <Container>
      <ProfilePhoto>
        <Image />
      </ProfilePhoto>
      <Title>Welcome {user.name}</Title>
    </Container>
  );
};

export default Header;
