import React, { FC } from 'react';
import styled from 'styled-components';
import { IFilters } from '../store/savedList/types';
import { AppText }  from './AppText';

interface FiltersProps {
  filters?: IFilters
}

export const Filters: FC<FiltersProps> = ({filters}) => {
  const showFilters = () => {
    if (filters) {
      return Object.entries(filters).map(([key, ...value], index) => {
        return <Filter key={key + index} className="filter-item">{`${key}: ${value}`}</Filter>
      })
    }
    return null;
  }

  return (
    <>
      <Text>Filters</Text>
      <FilterWrapper>
        {showFilters()}
      </FilterWrapper>
    </>
  );
};

const Text = styled(AppText)`
  margin-bottom: 8px;
`;

const FilterWrapper = styled.ul`
  display: flex;
  align-items: center;
`;

const Filter = styled.li`
  padding: 6px 10px;
  border: 1px solid ${({ theme }) => theme.colors.secondaryBlue};
  border-radius: 6px;
  margin-right: 8px;
  &.filter-item:first-child {
    margin-left: 19px;
  }
  &.filter-item:last-child {
    margin-right: 0;
  }
`;
