import React, { FC } from 'react';
import styled from 'styled-components';
import img from './../assets/img/homedark.jpg';
import { Header } from '../ui/Header';

export const StartLayout: FC = ({ children }) => {
  return (
    <Background>
      <Header />
      <ContentWrapper>
       {children}
      </ContentWrapper>
    </Background>
  );
};

const Background = styled.div`
  min-height: 100vh;
  background: url(${img}) no-repeat;
  background-size: 100% 100%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  margin-top: 73px;
`;
