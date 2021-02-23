import React from 'react';
import Header from '../../pages/Dashboard/components/Header';
import Menu from '../Menu';
import ProgressRing from '../ProgressRing';

import { Container } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <Header />
      <Menu />
      <ProgressRing />
    </Container>
  );
};

export default Main;
