import React, { useEffect } from 'react';
import { Alert, Text } from 'react-native';
import { launchCamera } from 'react-native-image-picker';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Header from '../../pages/Dashboard/components/Header';
import Menu from '../Menu';

import PlusCircle from '../../assets/plus-circle.svg';

import { Container, PlusCircleView } from './styles';
import { useAuth } from '../../hooks/auth';
import api from '../../services/api';
import PostCard from './components/PostCard';

const Main = () => {
  const navigation = useNavigation();

  useEffect(() => {
    api.get('/posts').then(response => console.log(response.data));
  }, []);

  const takePicture = () => {
    launchCamera(
      {
        mediaType: 'photo',
      },
      response => {
        if (response.didCancel) {
          return;
        }

        if (response.errorMessage) {
          Alert.alert('Erro ao atualizar seu avatar');
          return;
        }

        const photoImage = response.uri;

        const data = new FormData();

        data.append('photo', {
          type: 'image/jpeg',
          name: `${Math.random()
            .toString(36)
            .replace(/[^a-z]+/g, '')
            .substr(0, 5)}.jpg`,
          uri: response.uri,
        });

        navigation.navigate('PublishPost', { photoImage, photoData: data });
      },
    );
  };

  const { signOut } = useAuth();
  return (
    <Container>
      <Header />
      <Menu />
      <TouchableOpacity onPress={signOut}>
        <Text>SignOut</Text>
      </TouchableOpacity>
      <PlusCircleView onPress={() => takePicture()}>
        <PlusCircle />
      </PlusCircleView>
      <PostCard />
    </Container>
  );
};

export default Main;
