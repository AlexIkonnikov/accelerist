import React, { FC } from 'react';
import styled from 'styled-components';
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
      <UserName>{name}</UserName>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.span`
  font-size: 12px;
  line-height: 18px;
  margin-left: 12px;
  color: ${({ theme }) => theme.colors.black};
`;
