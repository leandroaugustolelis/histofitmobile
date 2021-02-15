import React from 'react';
import Header from './components/Header/indes';
import Container from './styles';
import Menu from '../../components/Menu';
import FriendsList from '../../components/FriendsList';
import SearchField from '../../components/SearchField';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header />
      <Menu />
      <SearchField />
      <FriendsList />
    </Container>
  );
};

export default Dashboard;
