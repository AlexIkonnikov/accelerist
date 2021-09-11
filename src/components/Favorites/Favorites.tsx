import React, { FC } from 'react';
import styled from 'styled-components';
import { AppText } from '../../ui/AppText';
import { EmptyFavorites } from '../../ui/EmptyFavorites';
import { SeeMoreLink } from '../../ui/SeeMoreLink';
import { ShortCard } from '../../ui/ShortCard';

interface FavoritesProps {
  company?: Array<any>;
}

const Favorites: FC<FavoritesProps> = ({ company = [] }) => {
  return (
    <>
      <TitleWrapper>
        <AppText type="Headline" tagName="h3">
          Favorites
        </AppText>
        {company.length > 0 ? <SeeMoreLink to="/favorites" /> : null}
      </TitleWrapper>
      {
        company.length > 0 ?
        <Grid>
          {company.map((company, idx) => <ShortCard key={company + idx}/>)}
        </Grid>
          :
        <EmptyWrapper>
          <EmptyFavorites/>
        </EmptyWrapper>
      }
    </>
  );
};

const TitleWrapper = styled.div`
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

const EmptyWrapper = styled.div`
  padding: 136px 146px 119px 146px;
  background-color: ${({theme}) => theme.colors.white};
  border-radius: 6px;
`


export default Favorites;
