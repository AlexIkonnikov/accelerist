import React from 'react';
import styled, { css } from 'styled-components';
import { AppText } from './AppText';
import { Avatar } from './Avatar';

export const Owner = () => {
  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar type="rounded"/>
      </AvatarWrapper>
      <TextWrapper>
        <AppText type="FootnoteSelect" CSS={mb4}>
          Jon Doe
        </AppText>
        <AppText>Owner</AppText>
      </TextWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
`;

const AvatarWrapper = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 12px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const mb4 = css`
  margin-bottom: 4px;
`;
