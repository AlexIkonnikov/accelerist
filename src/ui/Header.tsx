import React, { FC } from 'react';
import styled from 'styled-components';
import { LogoIcon } from './icons/LogoIcon';
import { TextLogo } from './TextLogo';

export const Header: FC = () => {
  return (
    <HeaderWrapper>
      <IconWrapper>
        <LogoIcon variant="white" />
      </IconWrapper>
      <TextLogo />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 80px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.black};
`;

const IconWrapper = styled.div`
  margin-right: 16px;
`;
