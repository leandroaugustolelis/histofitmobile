import React from 'react';
import { Alert } from 'react-native';

import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container } from './styles';

import Image from '../../assets/profile.svg';
import FriendsImage from '../../assets/friends.svg';

const Menu: React.FC = () => (
  <Container>
    <TouchableOpacity onPress={() => Alert.alert('Profile Clicked')}>
      <Image />
    </TouchableOpacity>
    <TouchableOpacity onPress={() => Alert.alert('Friends Clicked')}>
      <FriendsImage />
    </TouchableOpacity>
  </Container>
);

export default Menu;
