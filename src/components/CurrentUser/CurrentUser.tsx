import React, { FC, useState, useRef, useEffect } from 'react';
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
  const ref = useRef<any>();
  const dispatch = useAppDispatch();

  const handleToggleMenu = () => {
    setMenuState(!isMenuShow);
  };

  const handleLogOut = () => {
    dispatch(actions.user.logOut());
  };

  useEffect(() => {
    const checkIfClickedOutside = (e: MouseEvent) => {
      if (isMenuShow && ref.current && !ref.current.contains(e.target)) {
        setMenuState(false);
      }
    }
    document.addEventListener('click', checkIfClickedOutside);
    return () => { document.removeEventListener('click', checkIfClickedOutside) };
    }, [isMenuShow]);

  return (
    <RelativeWrapper onClick={handleToggleMenu} ref={ref}>
      <Wrapper>
        <AvatarWrapper>
          <Avatar type="square" />
        </AvatarWrapper>
        <UserName type="FootnoteBlack">{name}</UserName>
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
  width: 100%;
  padding: 7px 24px;
  background-color: ${({ theme }) => theme.colors.white};
  position: absolute;
  border-radius: 6px;
  bottom: -40px;
  @media(max-width: 768px) {
    bottom: 30px;
    padding: 5px;
  }
`;

const DangerText = styled(AppText)`
  color: ${({ theme }) => theme.colors.red};
`;

const UserName = styled(AppText)`
  min-width: 83px;
`

export default CurrentUser;
