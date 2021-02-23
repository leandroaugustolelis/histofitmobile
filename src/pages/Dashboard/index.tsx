import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Text } from 'react-native';
import Header from './components/Header';
import Container from './styles';
import Menu from '../../components/Menu';
import SearchField from '../../components/SearchField';
import { useAuth } from '../../hooks/auth';
import Main from '../../components/Main';
import FriendsList from '../../components/FriendsList';
import ProgressRing from '../../components/ProgressRing';

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
      <ProgressRing />
    </Container>
  );
};

export default Dashboard;
