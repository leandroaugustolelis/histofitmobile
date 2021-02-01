import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Text } from './styles';

interface FooterProps extends TouchableOpacityProps {
  children: string;
}

const FooterLink: React.FC<FooterProps> = ({ children, ...rest }) => (
  <Container {...rest}>
    <Text>{children}</Text>
  </Container>
);

export default FooterLink;
