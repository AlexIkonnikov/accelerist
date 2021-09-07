import React, { FC } from 'react';
import styled from 'styled-components';
import { MainHeader } from '../ui/MainHeader';

export const MainLayout: FC = ({ children }) => {
  return (
    <Background>
      <MainHeader />
      {children}
    </Background>
  );
};

const Background = styled.div`
  background-color: #f9f9f9;
  height: 100vh;
`;
