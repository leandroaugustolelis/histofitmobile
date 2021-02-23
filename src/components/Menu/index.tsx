import React from 'react';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import { Container } from './styles';

import MenuProfileImage from '../../assets/menu-profile.svg';
import MenuFriendsImage from '../../assets/menu-friends.svg';
import MenuListImage from '../../assets/menu-list.svg';

const Menu: React.FC = () => {
  const Navigation = useNavigation();
  return (
    <Container>
      <TouchableOpacity onPress={() => Navigation.navigate('Main')}>
        <MenuProfileImage />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Navigation.navigate('FriendsList')}>
        <MenuFriendsImage />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => Navigation.navigate('FriendsList')}>
        <MenuListImage />
      </TouchableOpacity>
    </Container>
  );
};

export default Menu;
