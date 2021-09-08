import React, { FC } from 'react';
import styled from 'styled-components';
import { Pagination } from '../components/Pagination';
import { CompanyCard } from '../ui/CompanyCard';
import { Container } from '../ui/Container';
import { Counter } from '../ui/Counter';
import { TitleBlock } from '../ui/TitleBlock';

const FavoritesPage: FC = () => {
  return (
    <>
      <TitleBlock title="Favorites" />
      <Container variant={2}>
        <Wrapper>
          <Counter count={0} />
          <Pagination />
        </Wrapper>
        <CardWrapper>
          <CompanyCard/>
          <CompanyCard/>
          <CompanyCard/>
        </CardWrapper>
      </Container>
    </>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 26px 0;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 375px) {
    display: block;
  }
`;

export default FavoritesPage;
