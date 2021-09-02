import React, { FC } from 'react';
import styled from 'styled-components';
import { LogoIcon } from './icons/LogoIcon';
import { TextLogo } from './TextLogo';

export const AppLogo: FC = () => {

  return (
    <Wrapper>
      <LogoIcon variant='white' />
      <TextLogo />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
