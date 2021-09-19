import React, { FC } from 'react';
import styled from 'styled-components';
import { IList } from '../../store/savedList/types';
import { EmptyList } from '../../ui/EmptyList';
import { Loader } from '../../ui/Loader';
import { ProspectsCard } from '../ProspectsCard';
import { ReactComponent as FolderIcon } from './../../assets/icons/folder.svg';

interface ProspectsListProps {
  items: Array<IList>;
  isLoading?: boolean
}

const ProspectsList: FC<ProspectsListProps> = ({ items, isLoading = true }) => {
  if (items.length > 0) {
    return (
      <Grid>
        {items.map((item) => (
          <ProspectsCard key={item.id} list={item} />
        ))}
      </Grid>
    );
  }
  return (
    <EmptyWrapper>
      {isLoading ? <Loader size="big"/> :<EmptyList text="No lists saved" render={() => <FolderIcon />} />}
    </EmptyWrapper>
  );
};

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 24px;
  grid-row-gap: 16px;
`;

const EmptyWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0px 34px;
  border-radius: 6px;
  background-color: ${({theme}) => theme.colors.white};
`;

export default ProspectsList;
