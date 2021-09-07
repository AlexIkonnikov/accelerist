import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Navbar } from '../components/Navbar';
import { Container } from './Container';
import { LogoIcon } from './icons/LogoIcon';
import { TextLogo } from './TextLogo';

export const MainHeader: FC = () => {
  return (
    <Background>
      <Container>
        <ContentWrapper>
          <LogoLink to="/dashboard">
            <LogoWrapper>
              <LogoIcon variant="dark" />
            </LogoWrapper>
            <TextLogo variant="dark" />
          </LogoLink>
          <Navbar />
        </ContentWrapper>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.secondaryBlue};
`;

const ContentWrapper = styled.div`
  padding: 19px 0 19px 0;
  height: 100%;
  display: flex;
  align-items: center;
`;

const LogoLink = styled(NavLink)`
  display: flex;
  align-items: center;
  margin-right: 49px;
`;

const LogoWrapper = styled.div`
  margin-right: 12px;
  @media (max-width: 375px) {
    margin-right: 8px;
  }
`;
