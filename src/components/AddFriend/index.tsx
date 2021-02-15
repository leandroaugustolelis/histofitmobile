import React from 'react';

import { Container, Content, ImagePhoto, FriendName } from './styles';
import AddButton from './components/AddButton';

const AddFriend: React.FC = () => (
  <Container>
    <ImagePhoto />
    <Content>
      <FriendName>João Fulano</FriendName>
      <AddButton>Add</AddButton>
    </Content>
  </Container>
);

export default AddFriend;
