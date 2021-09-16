import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { actions } from '../../store/ducks';
import { useAppDispatch } from '../../store/hooks';
import { AppText } from './../../ui/AppText';
import { Avatar } from './../../ui/Avatar';

interface CurrentUserProps {
  name?: string;
}

const CurrentUser: FC<CurrentUserProps> = ({ name = 'No name' }) => {

  const [isMenuShow, setMenuState] = useState(false);

  const dispatch = useAppDispatch();

  const handleToggleMenu = () => {
    setMenuState(!isMenuShow);
  }

  const handleLogOut = () => {
    dispatch(actions.user.logOut());
  }

  return (
    <RelativeWrapper onClick={handleToggleMenu}>
      <Wrapper>
        <AvatarWrapper>
          <Avatar type="square" />
        </AvatarWrapper>
        <AppText type="FootnoteBlack">{name}</AppText>
      </Wrapper>
      {isMenuShow &&
      <MenuWrapper>
        <button onClick={handleLogOut}>
          <DangerText>Log out</DangerText>
        </button>
      </MenuWrapper>
      }
    </RelativeWrapper>
  );
};

const RelativeWrapper = styled.div`
  position: relative;
  cursor: pointer;
`;

const AvatarWrapper = styled.div`
  margin-right: 12px;
  width: 36px;
  height: 36px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const MenuWrapper = styled.div`
  padding: 15px 5px;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  border-radius: 6px;
  bottom: -60px;
  @media(max-width: 768px) {
    bottom: 30px;
    padding: 5px;
  }
`;

const DangerText = styled(AppText)`
  color: ${({ theme }) => theme.colors.red};
`;

export default CurrentUser;
