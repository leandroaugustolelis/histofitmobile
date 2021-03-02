import React, { useEffect, useState } from 'react';
import Geolocation from '@react-native-community/geolocation';
import { format } from 'date-fns';

import { useNavigation } from '@react-navigation/native';

import { useForm } from 'react-hook-form';

import { Alert, Text, Button } from 'react-native';

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
  LocationSelected,
} from './styles';
import api from '../../services/api';

export interface Place {
  name: string;
  place_id: string;
}

// interface PostForm {
//   user_id: string;
//   location: string;
//   caption: string;
//   date: Date;
// }

const PublishPost = props => {
  const { register, handleSubmit, setValue } = useForm();
  const navigation = useNavigation();

  setValue('date', format(new Date(), 'yyyy-MM-dd HH:m:ss'));

  const { photoImage } = props.route.params;
  const { photoData } = props.route.params;

  const [locationLatLong, setLocationLatLong] = useState('');
  const [location, setLocation] = useState('');
  const [places, setPlaces] = useState<Place[]>();

  const onSubmit = async (data: any) => {
    Alert.alert('Form Data', JSON.stringify(data));

    photoData.append('location', data.location);
    photoData.append('caption', data.caption);
    photoData.append('date', data.date);

    await api.post('/posts', photoData);

    navigation.navigate('Main');
  };

  useEffect(() => {
    Geolocation.getCurrentPosition(resultLocation => {
      setLocationLatLong(
        `${resultLocation.coords.latitude},${resultLocation.coords.longitude}`,
      );
    });
    axios
      .get(
        `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${locationLatLong}&radius=10000&keyword=cruise&key=AIzaSyA_XrCD5S1NVEWdgQOLVoY1kb8Prpk_VZE`,
      )
      .then(response => setPlaces(response.data.results));

    register('caption');
    register('location');
    register('date');
  }, [register, locationLatLong]);

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
      <LocationSelected>{location}</LocationSelected>
      <LocationTag>Share a location:</LocationTag>
      <FlatList
        showsHorizontalScrollIndicator={false}
        style={{ flexGrow: 0 }}
        data={places}
        keyExtractor={place => place.place_id}
        horizontal={true}
        ItemSeparatorComponent={() => <Text> </Text>}
        renderItem={({ item }) => (
          <PlaceView
            onPress={() => {
              setLocation(item.name);
              setValue('location', item.name);
            }}
          >
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
