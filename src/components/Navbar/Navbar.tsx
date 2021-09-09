import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { CurrentUser } from './../../ui/CurrentUser';
import { NavList } from '../../ui/NavList';
import { Burger } from '../../ui/Burger';
import { Closure } from '../../ui/Closure';

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
        <Closure onClick={handleCloseModal} />
        <NavList/>
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

export default Navbar;
