import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { CurrentUser } from './../../ui/CurrentUser';
import CloseIcon from './../../assets/icons/close.svg';

const Navbar: FC = () => {
  const [isVisible, setVisible] = useState(false);

  const handleShowModal = () => {
    setVisible(true);
  };
  const handleCloseModal = () => {
    setVisible(false);
  };
  return (
    <Container>
      <Burger onClick={handleShowModal} />
      <NavWrapper $isVisible={isVisible}>
        <Closer onClick={handleCloseModal} />
        <List>
          <Item>
            <Link to="/dashboard">Dashboard</Link>
          </Item>
          <Item>
            <Link to="/audience">Audience</Link>
          </Item>
          <Item>
            <Link to="/pricing">Pricing</Link>
          </Item>
          <Item>
            <Link to="/prospecting">Prospecting</Link>
          </Item>
          <Item>
            <Link to="/roi">ROI</Link>
          </Item>
          <Item>
            <Link to="/upgrade-membership">Upgrade Membership</Link>
          </Item>
        </List>
        <CurrentUser />
      </NavWrapper>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  @media (max-width: 768px) {
    justify-content: flex-end;
  }
`;

const NavWrapper = styled.nav<{ $isVisible: boolean }>`
  display: flex;
  justify-content: space-between;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 100vh;
    width: 43%;
    z-index: 10;
    position: fixed;
    right: -400px;
    ${({ $isVisible }) => {
      if ($isVisible) {
        return `transform: translateX(-400px);`;
      }
      return ``;
    }}
    top: 0;
    background: white;
    padding: 132px 130px 32px 40px;
    transition: transform 0.4s;
  }
  @media(max-width: 375px) {
    width: 100%;
  }
`;

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 504px;
  @media (max-width: 970px) {
    min-width: 400px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    min-width: unset;
    align-items: flex-start;
  }
`;

const Item = styled.li`
  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

const Link = styled(NavLink)`
  ${({ theme }) => `color: ${theme.colors.black}`};
  font-size: 12px;
  line-height: 18px;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 25px;
  }
  &.active {
    font-family: Rubik-Medium;
  }
`;

const Burger = styled.button`
  border: none;
  background: transparent;
  width: 24px;
  height: 24px;
  position: relative;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::after,
  &::before {
    content: ' ';
    position: absolute;
    display: block;
    width: 18px;
    height: 2px;
    border-radius: 1px;
    background-color: ${({ theme }) => theme.colors.black};
    top: 4px;
    left: 0;
  }

  &::before {
    top: 4px;
    box-shadow: 0px 7px ${({ theme }) => theme.colors.black};
  }

  &::after {
    top: 18px;
  }
  @media (min-width: 768px) {
    display: none;
  }
`;

const Closer = styled.button`
  border: none;
  background: transparent;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 28px;
  right: 32px;
  cursor: pointer;
  background-image: url(${CloseIcon});
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: 768px) {
    display: none;
  }
`;

export default Navbar;
