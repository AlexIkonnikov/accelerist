import React, { FC } from 'react';
import styled from 'styled-components';
import { Pagination } from '../components/Pagination';
import { ProspectsList } from '../components/ProspectsList';
import { AppText } from '../ui/AppText';
import { Container } from '../ui/Container';
import { TitleBlock } from '../ui/TitleBlock';

const ProspectListPage: FC = () => {
  return (
    <>
      <TitleBlock title="Prospects" />
      <Container variant={2}>
        <Row>
          <SortingList>
            <SortingItem>
              <AppText>Sort by</AppText>
            </SortingItem>
            <SortingItem>
              <AppText type="FootnoteBlack">Alphabet</AppText>
            </SortingItem>
            <SortingItem>
              <AppText type="FootnoteBlack" className="active">Prospects Available</AppText>
            </SortingItem>
            <SortingItem>
              <AppText type="FootnoteBlack">Last Activity</AppText>
            </SortingItem>
          </SortingList>
          <Pagination/>
        </Row>
        <ProspectsList items={[]} isLoading={false}/>
      </Container>
    </>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 24px;
  padding-bottom: 24px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 23px;
`;

const SortingList = styled.ul`
  display: flex;
  align-items: center;
`;

const SortingItem = styled.li`
  margin-right: 22px;
  padding-bottom: 2px;
  & .active {
    border-bottom: 2px solid ${({theme}) => theme.colors.blue};
  }

  &::last-child {
    margin: 0;
  }
`;

export default ProspectListPage;
