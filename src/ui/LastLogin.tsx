import React, { FC } from 'react';
import styled from 'styled-components';
import { AppText } from './AppText';
import { Avatar } from './Avatar';

export const LastLogin: FC = () => {
  return (
    <div>
      <Title>Last Login</Title>
      <UserWrapper>
        <AvatarWrapper>
          <Avatar type="rounded"/>
        </AvatarWrapper>
        <UserInfo>
          <AppText type="FootnoteSelect">User Name</AppText>
          <AppText>12 Aug 2020</AppText>
        </UserInfo>
      </UserWrapper>
      <UserWrapper>
        <AvatarWrapper>
          <Avatar type="rounded"/>
        </AvatarWrapper>
        <UserInfo>
          <AppText type="FootnoteSelect">User Name</AppText>
          <AppText>12 Aug 2020</AppText>
        </UserInfo>
      </UserWrapper>
    </div>
  );
};

const Title = styled(AppText)`
  margin-bottom: 16px;
`;

const UserWrapper = styled.div`
  margin-bottom: 8px;
  display: flex;
`;

const AvatarWrapper = styled.div`
  width: 32px;
  height: 32px;
  margin-right: 10px;
`;

const UserInfo = styled.div`
  margin-top: 7px;
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({theme}) => theme.colors.line};
`;
