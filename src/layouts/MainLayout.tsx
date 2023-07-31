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
  background-color: ${({theme}) => theme.colors.substrate};;
  min-height: 100vh;
`;
