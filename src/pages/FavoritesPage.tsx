import React, { FC, useEffect } from 'react';
import styled from 'styled-components';
import { Pagination } from '../components/Pagination';
import { actions, selectors } from '../store/ducks';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { CompanyCard } from '../ui/CompanyCard';
import { Container } from '../ui/Container';
import { Counter } from '../ui/Counter';
import { EmptyList } from '../ui/EmptyList';
import { TitleBlock } from '../ui/TitleBlock';
import { stringify, parse } from 'query-string';
import { Loader } from './../ui/Loader';

const FavoritesPage: FC = () => {
  const dispatch = useAppDispatch();
  const company = useAppSelector(selectors.company.selectCompany);
  const meta = useAppSelector(selectors.company.selectMeta);
  const status = useAppSelector(selectors.company.selectStatus);

  const togglePage = (page?: number) => {
    const params = parse(location.search);
    const query = stringify({ ...params, page: page || 1, limit: 12 });
    history.replaceState(location.search, '', '?' + query);
    dispatch(actions.company.getFavoritesCompanyRequest(query));
  };

  useEffect(() => {
    togglePage();
  }, []);

  return (
    <>
      <TitleBlock title="Favorites" />
      <Container variant={2}>
        {status === 'pending' ? (
          <LoaderWrapper>
            <Loader size="big" variant="secondary" />
          </LoaderWrapper>
        ) : (
          <>
            <Wrapper>
              <Counter count={meta.totalItems} />
              <Pagination meta={meta} onToggle={togglePage} />
            </Wrapper>
            <CardWrapper>
              {company.length > 0 ? (
                company.map((item) => {
                  return <CompanyCard key={item.id} company={item} />;
                })
              ) : (
                <EmptyWrapper>
                  <EmptyList text="Not favorites company" render={() => <></>} />
                </EmptyWrapper>
              )}
            </CardWrapper>
          </>
        )}
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
  padding-bottom: 25px;
  @media (max-width: 375px) {
    display: block;
  }
`;

const EmptyWrapper = styled.div`
  padding: 242px 426px 224px 426px;
  border-radius: 6px;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default FavoritesPage;
