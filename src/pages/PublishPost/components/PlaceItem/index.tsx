import React, { useState } from 'react';

import { Container, PlaceName } from './styles';

interface Place {
  name: string;
  place_id: string;
}

type Props = {
  place: Place;
  // isClicked: boolean;
};

const PlaceItem = ({ place }: Props) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <Container
      onPress={() => {
        console.log(place.place_id);
        setIsClicked(!isClicked);
      }}
    >
      <PlaceName isClicked={isClicked}>{place.name}</PlaceName>
    </Container>
  );
};

export default PlaceItem;
