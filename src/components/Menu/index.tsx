import React from 'react';
import { Alert } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container } from './styles';

import MenuProfileImage from '../../assets/menu-profile.svg';
import MenuFriendsImage from '../../assets/menu-friends.svg';
import MenuListImage from '../../assets/menu-list.svg';

const Menu: React.FC = () => (
  <Container>
    <TouchableOpacity onPress={() => Alert.alert('Profile Clicked')}>
      <MenuProfileImage />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Alert.alert('Friends Clicked')}>
      <MenuFriendsImage />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Alert.alert('Friends Clicked')}>
      <MenuListImage />
    </TouchableOpacity>
  </Container>
);

export default Menu;
