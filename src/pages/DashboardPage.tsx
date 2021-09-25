import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { FavoritesList } from './../components/FavoritesList';
import { Reports } from '../components/Reports';
import { AppText } from '../ui/AppText';
import { Container } from '../ui/Container';
import { SeeMoreLink } from '../ui/SeeMoreLink';
import { TitleBlock } from '../ui/TitleBlock';
import { ProspectsList } from '../components/ProspectsList';
import { ICompany } from '../store/company/types';
import { getFavoritesCompany, getSavedList } from '../services/api';
import { IList } from '../store/savedList/types';
import { ROUTES } from '../route';

const DashboardPage: FC = () => {
  const [company, setCompany] = useState<Array<ICompany>>([]);
  const [savedList, setSavedList] = useState<Array<IList>>([]);
  const [isLoading, setStatus] = useState(true);

  const getData =  () => {
    const favoritesCompany = getFavoritesCompany({page: 1, limit: 6});
    const savedSearchList = getSavedList({page:1, limit:2});
    return Promise.allSettled([favoritesCompany, savedSearchList]);
  }

  useEffect(() => {
    getData().then((response) => {
      console.log(response)
      if (response[0].status === 'fulfilled') {
        setCompany(response[0].value.data.items);
      }
      if (response[1].status === 'fulfilled') {
        setSavedList(response[1].value.data.items);
      }
      setStatus(false);
    })
  }, [])

  return (
    <>
      <TitleBlock title="Dashboard" />
      <Container variant={2}>
        <Section>
          <Wrapper>
            <AppText type="Headline" tagName="h3">
              Prospecting Sessions
            </AppText>
            <SeeMoreLink to={ROUTES.prospects} />
          </Wrapper>
          <ProspectsList items={savedList} isLoading={isLoading}/>
        </Section>
        <Grid>
          <Section>
            <FavoritesList company={company} isLoading={isLoading}/>
          </Section>
          <Section>
            <Reports />
          </Section>
        </Grid>
      </Container>
    </>
  );
};

const Section = styled.section`
  margin-bottom: 40px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 0;
  margin-bottom: 16px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 16px;
`;

export default DashboardPage;
