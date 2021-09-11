import React, { FC } from 'react';
import styled from 'styled-components';
import { AppText } from './AppText';
import { Avatar } from './Avatar';

interface CurrentUserProps {
  name?: string;
}

export const CurrentUser: FC<CurrentUserProps> = ({ name = 'No name' }) => {
  return (
    <Wrapper>
      <AvatarWrapper>
        <Avatar type="square" />
      </AvatarWrapper>
      <AppText type="FootnoteBlack">{name}</AppText>
    </Wrapper>
  );
};

const AvatarWrapper = styled.div`
  margin-right: 12px;
  width: 36px;
  height: 36px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;
