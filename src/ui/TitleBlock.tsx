import React, { FC } from 'react';
import styled from 'styled-components';
import { Container } from './Container';

interface TitleBlockProps {
  title: string
  render?: () => JSX.Element
}

export const TitleBlock: FC<TitleBlockProps> = ({ title, render }) => {
  return (
    <Background>
      <Container variant={2}>
        <ContentWrapper>
          <TitleText>{title}</TitleText>
          {render && render()}
        </ContentWrapper>
      </Container>
    </Background>
  );
};

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 32px;
  @media (max-width: 375px) {
    background: transparent;
    margin: 0;
  }
`;

const TitleText = styled.h2`
  color: ${({theme}) => theme.colors.black};
  font-family: Rubik-Medium;
  font-size: 32px;
  line-height: 48px;
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 42px;
  }
  @media (max-width: 375px) {
    font-size: 16px;
    line-height: 24px;
  }
`;

const ContentWrapper = styled.div`
  padding: 24px 0;
  display: flex;
  align-items: center;
  @media(max-width: 375px) {
    display: block;
    padding: 16px 0 20px 0;
  }
`;
