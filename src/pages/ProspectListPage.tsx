import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Pagination } from '../components/Pagination';
import { ProspectsList } from '../components/ProspectsList';
import { actions, selectors } from '../store/ducks';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { AppText } from '../ui/AppText';
import { Container } from '../ui/Container';
import { TitleBlock } from '../ui/TitleBlock';
import { stringify, parse } from 'query-string';
import { NavLink } from 'react-router-dom';

const ProspectListPage: FC = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector(selectors.saveList.selectList);
  const status = useAppSelector(selectors.saveList.selectStatus);
  const meta = useAppSelector(selectors.saveList.selectMeta);

  const togglePage = (page?: number) => {
    const params = parse(location.search);
    const query = stringify({ ...params, page: page || 1, limit: 12 });
    history.replaceState(location.search, '', '?' + query);
    dispatch(actions.saveList.getSavedListRequest(query));
  };

  useEffect(() => {
    togglePage();
  }, [dispatch]);

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
              <AppText type="FootnoteBlack">
                <NavLink exact to="/prospects?sort=alphabet">Alphabet</NavLink>
              </AppText>
            </SortingItem>
            <SortingItem>
              <AppText type="FootnoteBlack">
                <NavLink exact to="/prospects?sort=available">Prospects Available</NavLink>
              </AppText>
            </SortingItem>
            <SortingItem>
              <AppText type="FootnoteBlack">
                <NavLink exact to="/prospects?sort=last-activity">Last Activity</NavLink>
              </AppText>
            </SortingItem>
          </SortingList>
          <Pagination meta={meta} />
        </Row>
        <ProspectsList items={list} isLoading={status === 'pending'} />
      </Container>
    </>
  );
};

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
  /* & .active {
    border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
  } */

  &::last-child {
    margin: 0;
  }
`;

export default ProspectListPage;
