import React from 'react';

import { Container, Input } from './styles';
import SearchImage from '../../assets/search-image.svg';

const SearchField: React.FC = () => (
  <Container>
    <SearchImage />
    <Input
      placeholderTextColor="rgba(0, 0, 0, 0.25)"
      placeholder="Search Friend"
    />
  </Container>
);

export default SearchField;
