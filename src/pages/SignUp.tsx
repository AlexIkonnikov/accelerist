import React, { FC } from 'react';
import styled from 'styled-components';
import { Header } from '../ui/Header';
import img from './../assets/img/homedark.jpg';
import SignUpForm from '../components/SignUpForm/SignUpForm';

export const SignUp: FC = () => {
  return (
    <Background>
      <Header />
      <ContentWrapper>
        <SignUpForm/>
      </ContentWrapper>
    </Background>
  );
};

const Background = styled.div`
  height: 100vh;
  width: 100vw;
  background: url(${img}) no-repeat;
  background-size: 100% 100%;
`;

const ContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 73px;
`;
