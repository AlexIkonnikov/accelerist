import React, { FC, useEffect, MouseEventHandler, MouseEvent } from 'react';
import styled from 'styled-components';
import { Pagination } from '../components/Pagination';
import { ProspectsList } from '../components/ProspectsList';
import { actions, selectors } from '../store/ducks';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { AppText } from '../ui/AppText';
import { Container } from '../ui/Container';
import { TitleBlock } from '../ui/TitleBlock';
import { NavLink } from 'react-router-dom';
import { createInitParams, mergeWithExisting, getQueryParams } from '../utils/queryParams';
import { parse, ParsedQuery } from 'query-string';

const ProspectListPage: FC = () => {
  const dispatch = useAppDispatch();
  const list = useAppSelector(selectors.saveList.selectList);
  const status = useAppSelector(selectors.saveList.selectStatus);
  const meta = useAppSelector(selectors.saveList.selectMeta);

  const switchPage = (query: ParsedQuery<string | number>) => {
    const params = mergeWithExisting(query);
    dispatch(actions.saveList.getSavedListRequest(params));
  };

  const handleChangeSorting = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const getParams = parse(e.currentTarget.href.split('?')[1]);
    switchPage(getParams);
  }

  const isActive = (type: string) => {
    const params = getQueryParams();
    return params.sort === type ? true : false;
  }

  useEffect(() => {
    const query = createInitParams({ page: 1, limit: 12, sort:'alphabet'});
    switchPage(query);
  }, []);

  return (
    <>
      <TitleBlock title="Prospecting" />
      <Container variant={2}>
        <Row>
          <SortingList>
            <SortingItem>
              <AppText>Sort by</AppText>
            </SortingItem>
            <SortingItem>
              <CustomLink $isActive={isActive('alphabet')} onClick={handleChangeSorting} href="/prospects?sort=alphabet">Alphabet</CustomLink>
            </SortingItem>
            <SortingItem>
              <CustomLink $isActive={isActive('available')} onClick={handleChangeSorting} href="/prospects?sort=available">Prospects Available</CustomLink>
            </SortingItem>
            <SortingItem>
              <CustomLink $isActive={isActive('last-activity')} onClick={handleChangeSorting} href="/prospects?sort=last-activity">Last Activity</CustomLink>
            </SortingItem>
          </SortingList>
          <Pagination meta={meta} onToggle={switchPage} />
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

const CustomLink = styled.a<{$isActive: boolean}>`
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.black};
  padding-bottom: 2px;
  ${({$isActive, theme}) => {
    if ($isActive) {
      return `
        border-bottom: 1px solid ${theme.colors.blue};
      `
    }
  }};
`;

export default ProspectListPage;
