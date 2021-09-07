import React, { FC } from 'react';
import { Route } from 'react-router-dom';
import styled from 'styled-components';
import { SearchBar } from '../components/SearchBar';
import { Container } from './Container';
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
              <SearchBar
                render={() => <StyledSlidersIcon />}
              />
            </SearchBarWrapper>
          </Route>
        </ContentWrapper>
      </Container>
    </Background>
  );
};

const StyledSlidersIcon = styled(SlidersIcon)`
  margin-right: 15px;
`;

const Background = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  margin-bottom: 32px;
`;

const ContentWrapper = styled.div`
  padding: 24px 0;
  display: flex;
  align-items: center;
`;

const SearchBarWrapper = styled.div`
  margin-left: 82px;
  width: 715px;
`;
