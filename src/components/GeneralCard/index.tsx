import React from 'react';

import { Container, Title, Content, Text } from './styles';

import ImageFood from '../../assets/image-food1.svg';
import ImageFood2 from '../../assets/image-food2.svg';
import ImageSports from '../../assets/image-sports1.svg';
import ImageSports2 from '../../assets/image-sports2.svg';

interface CardProps {
  title: string;
  food?: boolean;
}

const GeneralCard = ({ title, food }: CardProps) => (
  <Container>
    <Title>{title}</Title>
    <Content>
      {food ? <ImageFood /> : <ImageSports />}
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
        blandit rhoncus.
      </Text>
    </Content>
    <Content>
      {food ? <ImageFood2 /> : <ImageSports2 />}
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sollicitudin
        blandit rhoncus.
      </Text>
    </Content>
  </Container>
);

export default GeneralCard;
