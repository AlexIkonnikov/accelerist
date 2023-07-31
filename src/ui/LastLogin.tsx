import React, { FC } from 'react';
import styled from 'styled-components';
import { AppText } from './AppText';
import { Avatar } from './Avatar';

export const LastLogin: FC = () => {
  return (
    <Wrapper>
      <Title type="BodySelect">Last Login</Title>
      <UserWrapper className="user-wrapper">
        <AvatarWrapper>
          <Avatar type="rounded" />
        </AvatarWrapper>
        <UserInfo className="user-info">
          <AppText type="FootnoteSelect">User Name</AppText>
          <AppText>12 Aug 2020</AppText>
        </UserInfo>
      </UserWrapper>
      <UserWrapper className="user-wrapper">
        <AvatarWrapper>
          <Avatar type="rounded" />
        </AvatarWrapper>
        <UserInfo className="user-info">
          <AppText type="FootnoteSelect">User Name</AppText>
          <AppText>12 Aug 2020</AppText>
        </UserInfo>
      </UserWrapper>
      <UserWrapper className="user-wrapper">
        <AvatarWrapper>
          <Avatar type="rounded" />
        </AvatarWrapper>
        <UserInfo className="user-info">
          <AppText type="FootnoteSelect">User Name</AppText>
          <AppText>12 Aug 2020</AppText>
        </UserInfo>
      </UserWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .user-wrapper:last-child .user-info {
    border: none;
  }
`;

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
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
`;
