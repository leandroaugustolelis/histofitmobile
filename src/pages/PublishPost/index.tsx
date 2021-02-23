import React, { useRef, useCallback } from 'react';

// import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { Alert } from 'react-native';
import { Container, Input, Header, LocationTag } from './styles';

import Button from '../../components/Button';
import PublishPhoto from '../../assets/publish-photo.svg';
// import api from '../../services/api';

// interface PublishPostDataForm {
//   userId: string;
//   date: Date;
//   location: string;
//   caption: string;
//   postFilename: string;
//   comments: string;
// }

const PublishPost: React.FC = () => {
  // const navigation = useNavigation();
  const formRef = useRef<FormHandles>(null);
  const handleSignUp = useCallback(async () => {
    // await api.post('/posts', data);

    Alert.alert('Publish is complete!', 'Enjoy your timeline.');

    // navigation.goBack();
  }, []);

  return (
    <Container>
      <Header>
        <PublishPhoto />
        <Form ref={formRef} onSubmit={handleSignUp}>
          <Input placeholder="Write a caption...enjoy your moment" />
        </Form>
      </Header>
      <LocationTag>Share a location</LocationTag>

      <Button
        onPress={() => {
          formRef.current?.submitForm();
        }}
      >
        Publish
      </Button>
    </Container>
  );
};

export default PublishPost;
