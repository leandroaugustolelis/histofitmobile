import React from 'react';

import { Container, Content, ImagePhoto, FriendName } from './styles';
import AddButton from './components/AddButton';
import { User } from '../../core/types/User';

type Props = {
  user: User;
};

const AddFriend = ({ user }: Props) => (
  <Container>
    <ImagePhoto />
    <Content>
      <FriendName>{user.name}</FriendName>
      <AddButton>Add</AddButton>
    </Content>
  </Container>
);

export default AddFriend;
