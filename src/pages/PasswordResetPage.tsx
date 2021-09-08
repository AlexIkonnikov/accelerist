import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { ResetForm } from '../components/ResetForm';

const PasswordResetPage: FC = () => {
  return (
    <>
      <ResetForm />
      <LinkWrapper>
        <OpacityLink to="/signin">Return to Login</OpacityLink>
      </LinkWrapper>
    </>
  );
};

const OpacityLink = styled(NavLink)`
  text-align: center;
  padding: 9px 24px;
  background-color: rgba(18, 36, 52, 0.15);
  border-radius: 6px;
  font-size: 12px;
  font-family: Rubik-Medium;
  color: ${({ theme }) => theme.colors.white};
`;

const LinkWrapper = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  bottom: 28px;
  justify-content: center;
  align-items: center;
`;

export default PasswordResetPage;
