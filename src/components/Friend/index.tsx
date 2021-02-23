import React from 'react';

import { Container, Content, ImagePhoto, FriendName } from './styles';
import AddButton from './components/AddButton';
import { User } from '../../core/types/User';

type Props = {
  user: User;
};

const Friend = ({ user }: Props) => {
  return (
    <Container>
      <ImagePhoto source={{ uri: user.avatarUrl }} />
      <Content>
        <FriendName>{user.name}</FriendName>
        <AddButton>Add</AddButton>
      </Content>
    </Container>
  );
};

export default Friend;
