import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { CurrentUser } from './../CurrentUser';
import { NavList } from '../../ui/NavList';
import { Burger } from '../../ui/Burger';
import { Closure } from '../../ui/Closure';
import { SearchBar } from '../SearchBar';
import { useHistory, useLocation } from 'react-router';
import { Field, Form, FormProps } from 'react-final-form';
import { stringify } from 'query-string';

const Navbar: FC = () => {
  const [isVisible, setVisible] = useState(false);
  const { pathname } = useLocation();
  const { push } = useHistory();

  const handleSubmitForm = (values: FormProps) => {
    const params = stringify({ ...values, page: 1, limit: 12 });
    push(`/search?${params}`);
  };

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
          <NavList />
          {pathname !== '/search' && (
            <SearchBarWrapper>
              <Form
                onSubmit={handleSubmitForm}
                render={({ handleSubmit }) => {
                  return <Field name="q" render={({ input }) => <StyleSearch onSearch={handleSubmit} {...input} />} />;
                }}
              />
            </SearchBarWrapper>
          )}
          <CurrentUser />
        </NavWrapper>
        <Overlay onClick={handleCloseModal} $isModalOpen={isVisible}/>
      </Container>
  );
};

const Overlay = styled.div<{ $isModalOpen: boolean }>`
  width: 100%;
  ${({ $isModalOpen }) => {
    if ($isModalOpen) {
      return `
        height: 100%;
        z-index: 5;
        background: rgba(0,0,0, 0.3);
        position: fixed;
        top: 0;
        left: 0;
      `;
    }
  }};
  @media(min-width: 769px) {
    display: none;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  z-index: 10;
  @media (max-width: 768px) {
    width: auto;
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
    padding: 132px 55px 32px 40px;
    transition: transform 0.4s;
  }
  @media (max-width: 375px) {
    width: 100%;
  }
`;

const SearchBarWrapper = styled.div`
  margin-left: 45px;
  margin-right: 40px;
  width: 100%;
`;

const StyleSearch = styled(SearchBar)`
  background-color: #f4feff;
`;

export default Navbar;
