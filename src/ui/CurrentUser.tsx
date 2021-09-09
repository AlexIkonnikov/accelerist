import React, { FC } from 'react';
import styled from 'styled-components';
import { AppText } from './AppText';
import { Avatar } from './Avatar';
import { UserIcon } from './icons/UserIcon';

interface CurrentUserProps {
  name?: string
}

export const CurrentUser: FC<CurrentUserProps> = ({ name = 'No name' }) => {
  return (
    <Wrapper>
      <Avatar>
        <UserIcon />
      </Avatar>
      <UserName type="FootnoteBlack">{name}</UserName>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled(AppText)`
  margin-left: 12px;
`;
