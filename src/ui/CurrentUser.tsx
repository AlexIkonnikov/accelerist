import React, {FC} from 'react';
import styled from 'styled-components';
import { UserIcon } from './icons/UserIcon';

interface CurrentUserProps {
  name?: string
}

export const CurrentUser: FC<CurrentUserProps> = ({name = 'No name'}) => {
  return (
    <Wrapper>
      <IconWrapper>
        <UserIcon/>
      </IconWrapper>
      <UserName>{name}</UserName>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const IconWrapper = styled.div`
  width: 36px;
  height: 36px;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`;

const UserName = styled.span`
  font-size: 12px;
  line-height: 18px;
  color: ${({theme}) => theme.colors.black}
`
