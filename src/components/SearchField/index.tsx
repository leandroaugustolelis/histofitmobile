import React from 'react';

import { Container, Input } from './styles';
import SearchIcon from '../../assets/searchicon.svg';

const SearchField: React.FC = () => (
  <Container>
    <SearchIcon />
    <Input
      placeholderTextColor="rgba(0, 0, 0, 0.25)"
      placeholder="Search Friend"
    />
  </Container>
);

export default SearchField;
