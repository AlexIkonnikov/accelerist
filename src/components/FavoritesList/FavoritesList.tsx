import React, { FC } from 'react';
import styled from 'styled-components';
import { ROUTES } from '../../route';
import { ICompany } from '../../store/company/types';
import { AppText } from '../../ui/AppText';
import { EmptyList } from '../../ui/EmptyList';
import { Loader } from '../../ui/Loader';
import { SeeMoreLink } from '../../ui/SeeMoreLink';
import { ShortCard } from '../../ui/ShortCard';
import { ReactComponent as Heart } from './../../assets/icons/heart.svg';

interface FavoritesListProps {
  company?: Array<ICompany>;
  isLoading?: boolean;
}

const FavoritesList: FC<FavoritesListProps> = ({ company = [], isLoading = true }) => {
  return (
    <>
      <TitleWrapper>
        <AppText type="Headline" tagName="h3">
          Favorites
        </AppText>
        {company.length > 0 ? <SeeMoreLink to={ROUTES.favorites} /> : null}
      </TitleWrapper>
      {
        company.length > 0 ?
        <Grid>
          {company.map((company, idx) => <ShortCard key={company.id + idx} company={company} />)}
        </Grid>
          :
        <EmptyWrapper>
          {isLoading ? <Loader size="big" variant="secondary"/> :<EmptyList text="No favorite company" render={() => <Heart/>}/>}
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
  display: flex;
  justify-content: center;
`


export default FavoritesList;
