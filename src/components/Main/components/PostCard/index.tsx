import React from 'react';

import { View } from 'react-native';
import { Container, Title, Content, Caption, PhotoPost } from './styles';

import { Post } from '../../../../core/types/Post';

type Props = {
  post: Post;
};

const PostCard = ({ post }: Props) => (
  <Container>
    <Content>
      <PhotoPost source={{ uri: post.photoUrl }} />
      <View
        style={{
          height: 150,
          marginLeft: 10,
          marginRight: 20,
          flex: 1,
          flexDirection: 'column',
        }}
      >
        <Title>
          {post.date}, {post.location}
        </Title>
        <Caption>{post.caption}</Caption>
      </View>
    </Content>
  </Container>
);

export default PostCard;
