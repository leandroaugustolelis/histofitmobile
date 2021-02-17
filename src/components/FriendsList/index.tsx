import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import AddFriend from '../AddFriend';
import { User } from '../../core/types/User';

import { Container } from './styles';

import api from '../../services/api';

const FriendsList: React.FC = () => {
  const [users, setUsers] = useState<User[]>();

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('users');
      setUsers(response.data);
    }

    loadUsers();
  }, [users]);
  return (
    <Container>
      <FlatList
        data={users}
        keyExtractor={user => user.id}
        numColumns={2}
        renderItem={({ item }) => <AddFriend user={item} />}
      />
    </Container>
  );
};

export default FriendsList;
