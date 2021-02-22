import React, { useCallback } from 'react';
import { launchCamera } from 'react-native-image-picker';
import { Alert } from 'react-native';
import {
  Container,
  ShapeView,
  Title,
  UserAvatar,
  UserAvatarButton,
  CameraView,
} from './styles';
import AvatarImage from '../../../../assets/avatar-image.svg';
import ShapeWhite from '../../../../assets/shape-white.svg';
import CameraImage from '../../../../assets/camera-image.svg';

import { useAuth } from '../../../../hooks/auth';
import api from '../../../../services/api';

const Header: React.FC = () => {
  const { user, updateUser } = useAuth();

  const handleUpdateAvatar = useCallback(() => {
    // launchImageLibrary(
    //   {
    //     mediaType: 'photo',
    //   },
    //   response => {
    //     if (response.didCancel) {
    //       return;
    //     }

    //     if (response.errorMessage) {
    //       Alert.alert('Erro ao atualizar seu avatar');
    //       return;
    //     }

    //     const data = new FormData();

    //     data.append('avatar', {
    //       type: 'image/jpeg',
    //       name: `${user.id}.jpg`,
    //       uri: response.uri,
    //     });
    //     api.patch('/users/avatar', data).then(apiResponse => {
    //       updateUser(apiResponse.data);
    //     });
    //   },
    // );

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

        const data = new FormData();

        data.append('avatar', {
          type: 'image/jpeg',
          name: `${user.id}.jpg`,
          uri: response.uri,
        });
        api.patch('/users/avatar', data).then(apiResponse => {
          updateUser(apiResponse.data);
        });
      },
    );
  }, [updateUser, user.id]);

  return (
    <Container>
      <ShapeView>
        <ShapeWhite />
      </ShapeView>

      <UserAvatarButton onPress={handleUpdateAvatar}>
        {user.avatarUrl ? (
          <UserAvatar source={{ uri: user.avatarUrl }} />
        ) : (
          <>
            <AvatarImage />
            <CameraView>
              <CameraImage />
            </CameraView>
          </>
        )}
      </UserAvatarButton>
      <Title>{user.name}</Title>
    </Container>
  );
};

export default Header;
