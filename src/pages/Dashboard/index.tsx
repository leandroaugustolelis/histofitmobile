import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import Header from './components/Header/indes';
import Container from './styles';
import Menu from '../../components/Menu';
import FriendsList from '../../components/FriendsList';
import SearchField from '../../components/SearchField';
import { useAuth } from '../../hooks/auth';

const Dashboard: React.FC = () => {
  const { signOut } = useAuth();
  return (
    <Container>
      <Header />

      <Menu />
      <SearchField />
      <TouchableOpacity onPress={signOut}>
        <Text>SignOut</Text>
      </TouchableOpacity>
      <FriendsList />
    </Container>
  );
};

export default Dashboard;
