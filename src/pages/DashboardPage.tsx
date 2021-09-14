import React, { FC } from 'react';
import styled from 'styled-components';
import { FavoritesList } from './../components/FavoritesList';
import { ProspectsCard } from '../components/ProspectsCard';
import { Reports } from '../components/Reports';
import { AppText } from '../ui/AppText';
import { Container } from '../ui/Container';
import { SeeMoreLink } from '../ui/SeeMoreLink';
import { TitleBlock } from '../ui/TitleBlock';
import { ProspectsList } from '../components/ProspectsList';

const DashboardPage: FC = () => {
  return (
    <>
      <TitleBlock title="Dashboard" />
      <Container variant={2}>
        <Section>
          <Wrapper>
            <AppText type="Headline" tagName="h3">
              Prospecting Sessions
            </AppText>
            <SeeMoreLink to="/prospect-list" />
          </Wrapper>
          <ProspectsList items={[]}/>
        </Section>
        <Grid>
          <Section>
            <FavoritesList company={[]}/>
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
