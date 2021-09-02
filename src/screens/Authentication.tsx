import React, { FC } from 'react';
import styled from 'styled-components';
import { Header } from '../ui/Header';
import img from './../assets/img/homedark.jpg';

export const Authentication: FC = () => {
  return (
    <Background>
      <Header />
    </Background>
  );
};

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${img}) no-repeat;
  background-size: 100%;
`;
