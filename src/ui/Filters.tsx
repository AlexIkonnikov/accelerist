import React, { FC } from 'react';
import styled from 'styled-components';
import { AppText }  from './AppText';

export const Filters: FC = () => {
  return (
    <>
      <Text>Filters</Text>
      <FilterWrapper>
        <Filter className="filter-item">Travel Industry</Filter>
        <Filter className="filter-item">Health</Filter>
        <Filter className="filter-item">National</Filter>
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
