import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { SearchBar } from '../components/SearchBar';
import { SlidersIcon } from './icons/SlidersIcon';
import { TitleText } from './TitleText';

interface TitleBlockProps {
  title: string;
}

export const TitleBlock: FC<TitleBlockProps> = ({ title }) => {
  return (
    <Background>
      <Container>
        <ContentWrapper>
          <TitleText>{title}</TitleText>
          <Route path="/search">
            <SearchBarWrapper>
              <SearchBar render={() => <StyledSlidersIcon />} />
            </SearchBarWrapper>
          </Route>
        </ContentWrapper>
      </Container>
    </Background>
  );
};

const Container = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 284px 0 60px;
  @media (max-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }
  @media (max-width: 375px) {
    max-width: 375px;
    padding: 0 16px;
  }
`;

const StyledSlidersIcon = styled(SlidersIcon)`
  margin-right: 15px;
`;

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 32px;
  @media (max-width: 375px) {
    background: transparent;
    margin: 0;
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

const SearchBarWrapper = styled.div`
  margin-left: 82px;
  width: 100%;
  margin-right: 173px;
  @media (max-width: 768px) {
    margin-left: 32px;
    margin-right: 0;
  }
  @media (max-width: 375px) {
    margin: 8px 0 0 0;
  }
`;
