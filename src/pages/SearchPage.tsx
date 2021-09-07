import React, { FC } from 'react';
import styled from 'styled-components';
import { MainLayout } from '../layouts/MainLayout';
import { CompanyCard } from '../ui/CompanyCard';
import { Container } from '../ui/Container';
import { SearchResult } from '../ui/SearchResult';
import { TitleBlock } from '../ui/TitleBlock';

const SearchPage: FC = () => {
  return (
    <MainLayout>
      <TitleBlock title="Search" />
      <Container>
        <Inner>
          <SearchResult count={0}/>
          <CardWrapper>
            <CompanyCard/>
            <CompanyCard/>
          </CardWrapper>
        </Inner>
      </Container>
    </MainLayout>
  );
};

const Inner = styled.div`
  max-width: 1096px;
  @media(max-width: 768px) {
    max-width: 704px;
  }
  @media(max-width: 375px) {
    max-width: 343px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;


export default SearchPage;
