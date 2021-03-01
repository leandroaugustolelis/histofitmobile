import React, { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';

// import { useNavigation } from '@react-navigation/native';

import { useForm } from 'react-hook-form';

import { Alert, Text, Button, Image } from 'react-native';

import axios from 'axios';
import { FlatList } from 'react-native-gesture-handler';
import {
  Container,
  Input,
  Header,
  LocationTag,
  PlaceItem,
  PlaceView,
  Photo,
} from './styles';
import api from '../../services/api';
import { useAuth } from '../../hooks/auth';

export interface Place {
  name: string;
  place_id: string;
}

interface PostForm {
  user_id: string;
  location: string;
  caption: string;
  date: Date;
}

const PublishPost = props => {
  const { register, handleSubmit, setValue } = useForm();
  // const { user } = useAuth();

  // setValue('user_id', user.id);
  setValue('date', new Date());

  const { photoImage } = props.route.params;
  const { photoData } = props.route.params;

  const [location, setLocation] = useState('');
  const [places, setPlaces] = useState<Place[]>();

  const onSubmit = async (data: PostForm) => {
    Alert.alert('Form Data', JSON.stringify(data));
    console.log(JSON.stringify(data));

    try {
      console.log('antes');
      await api.post('/posts', data);
      console.log('depois');
    } catch (err) {
      console.log(err);
    }
  };

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
    register('caption');
    register('location');
    register('date');
    handleGooglePlaces();
  }, [register]);

  return (
    <Container>
      <Header>
        <Photo
          source={{
            uri: photoImage,
          }}
        />
        <Input
          placeholder="Write a caption...enjoy your moment"
          onChangeText={text => setValue('caption', text)}
        />
      </Header>
      <LocationTag>Share a location:</LocationTag>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0 }}
        data={places}
        keyExtractor={place => place.place_id}
        horizontal={true}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({ item }) => (
          <PlaceView onPress={() => setValue('location', item.name)}>
            <PlaceItem>{item.name}</PlaceItem>
          </PlaceView>
        )}
      />
      <Button title="S U B M I T" onPress={handleSubmit(onSubmit)}>
        Publish
      </Button>
    </Container>
  );
};

export default PublishPost;
