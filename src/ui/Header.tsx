import React, { FC } from 'react';
import styled from 'styled-components';
import { AppLogo } from './AppLogo';

export const Header: FC = () => {
  return (
    <Wrapper>
      <AppLogo />
    </Wrapper>
  );
};

const Wrapper = styled.header`
  display: flex;
  justify-content: center;
  min-height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
`;
