import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, TextInput } from './styles';

interface InputProps extends TextInputProps {
  name: string;
}

const Input: React.FC<InputProps> = ({ ...rest }) => (
  <Container>
    <TextInput placeholderTextColor="#000" {...rest} />
  </Container>
);

export default Input;
