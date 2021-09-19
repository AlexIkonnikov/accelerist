import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { SearchIcon } from '../../ui/icons/SearchIcon';

interface SearchBarProps extends InputHTMLAttributes<HTMLInputElement> {
  render?: () => JSX.Element
  onSearch: () => void
}

const SearchBar: FC<SearchBarProps> = ({render, onSearch, ...outerProps}) => {
  const handleSearch = () => {
    console.log('')
  }

  return (
    <SearchBox>
      <SearchInput type="text" placeholder="Search" {...outerProps} />
      <IconWrapper>
        {render && render()}
        <SearchIcon onClick={onSearch}/>
      </IconWrapper>
    </SearchBox>
  );
};

const SearchBox = styled.div`
  position: relative;
`;

const SearchInput = styled.input`
  background-color: #F1F4F5;
  border-radius: 6px;
  padding: 9px 16px 9px 24px;
  border: none;
  font-size: 12px;
  line-height: 18px;
  width: 100%;
  outline: none;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 9px;
`;

export default SearchBar;
