import React from 'react';

import { Container, ButtonText } from './styles';

const AddButton: React.FC = ({ children }) => (
  <Container>
    <ButtonText>{children}</ButtonText>
  </Container>
);

export default AddButton;
