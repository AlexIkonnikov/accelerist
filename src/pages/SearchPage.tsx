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
      <Inner>
        <SearchResult count={0} />
        <CardWrapper>
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
        </CardWrapper>
      </Inner>
    </MainLayout>
  );
};

const Inner = styled.div`
  max-width: 1096px;
  padding: 0 0 0 60px;
  @media (max-width: 768px) {
    max-width: 768px;
    padding:0 32px;
  }
  @media (max-width: 375px) {
    max-width: 375px;
    padding:0 16px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 375px) {
    display: block;
  }
`;

export default SearchPage;
