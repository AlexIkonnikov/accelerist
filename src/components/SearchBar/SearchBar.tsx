import React, { FC, useState, ChangeEvent } from 'react';
import styled from 'styled-components';
import { SearchIcon } from '../../ui/icons/SearchIcon';

interface SearchBarProps  {
  render?: () => JSX.Element
}

const SearchBar: FC<SearchBarProps> = ({render}) => {
  const [query, setQuery] = useState('');

  const handleInputChange = ({target}: ChangeEvent<HTMLInputElement>) => {
    setQuery(target.value);
  }

  const handleSearch = () => {
    console.log(query)
  }

  return (
    <SearchBox>
      <SearchInput type="text" placeholder="Search" value={query} onChange={handleInputChange} />
      <IconWrapper>
        {render && render()}
        <SearchIcon onClick={handleSearch}/>
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
