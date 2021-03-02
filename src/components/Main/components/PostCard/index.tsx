import React from 'react';

import { View } from 'react-native';
import { Container, Title, Content, Caption } from './styles';

import ImageFood from '../../../../assets/post-image.svg';

interface PostProps {
  date: Date;
  location: string;
  post: string;
}

const PostCard = () => (
  <Container>
    <Content>
      <ImageFood />
      <View
        style={{
          height: 150,
          marginLeft: 10,
          marginRight: 20,
          flex: 1,
          flexDirection: 'column',
        }}
      >
        <Title>23/02/2021 às 14:35, Mountain Park</Title>
        <Caption>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis integer
          nisl port titor praesent arcu at vel quis tellus. Sit varius amet urna
          lobortis. Id ac scelerisque quisque enim, nisl, fac
        </Caption>
      </View>
    </Content>
  </Container>
);

export default PostCard;
