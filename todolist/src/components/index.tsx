import React from 'react';

import {DivData} from './DivData';
import { Header } from './Header';

import { Container } from './styles';

export const MainApp: React.FC = () => {
  

  return (
    <Container>
      <Header/>
      <DivData/>
    </Container>
  )
}

