import React, { useRef, useCallback, useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';

// import { useNavigation } from '@react-navigation/native';

import { Form } from '@unform/mobile';
import { FormHandles } from '@unform/core';

import { Alert, Text } from 'react-native';

import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import { Container, Input, Header, LocationTag } from './styles';

import Button from '../../components/Button';
import PublishPhoto from '../../assets/publish-photo.svg';
import PlaceItem from './components/PlaceItem';

// interface PublishPostDataForm {
//   userId: string;
//   date: Date;
//   location: string;
//   caption: string;
//   postFilename: string;
//   comments: string;
// }

export interface Place {
  name: string;
  place_id: string;
}

const PublishPost: React.FC = () => {
  const [location, setLocation] = useState('');
  const [places, setPlaces] = useState<Place[]>();

  const formRef = useRef<FormHandles>(null);
  const handleSignUp = useCallback(async () => {
    Alert.alert('Publish is complete!', 'Enjoy your timeline.');
  }, []);

  const handleGooglePlaces = async () => {
    Geolocation.getCurrentPosition(resultLocation => {
      setLocation(
        `${resultLocation.coords.latitude},${resultLocation.coords.longitude}`,
      );
    });
    const response = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=10000&keyword=cruise&key=AIzaSyA_XrCD5S1NVEWdgQOLVoY1kb8Prpk_VZE`,
    );

    setPlaces(response.data.results);
  };

  useEffect(() => {
    handleGooglePlaces();
  }, [places]);

  return (
    <Container>
      <Header>
        <PublishPhoto />
        <Form ref={formRef} onSubmit={handleSignUp}>
          <Input placeholder="Write a caption...enjoy your moment" />
        </Form>
      </Header>
      <LocationTag>Share a location:</LocationTag>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0 }}
        data={places}
        keyExtractor={place => place.place_id}
        horizontal={true}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({ item }) => <PlaceItem place={item}></PlaceItem>}
      />
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
