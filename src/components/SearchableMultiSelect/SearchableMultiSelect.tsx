import React, { FC } from 'react';
import styled from 'styled-components';
import { AppText } from './../../ui/AppText';
import { FieldRenderProps } from 'react-final-form';
import Select from 'react-select';
import { Option } from './custom/Option';

interface SearchableMultiSelectProps extends FieldRenderProps<Array<string>, HTMLElement> {
  label?: string;
}

const SearchableMultiSelect: FC<SearchableMultiSelectProps> = ({ label = '', input, ...outerProps }) => {
  return (
    <div>
      {label && <Label>{label}</Label>}
      <CustomSelect
        {...input}
        {...outerProps}
        isMulti
        menuIsOpen
        hideSelectedOptions={false}
        classNamePrefix="react-select"
        components={{Option}}
      />
    </div>
  );
};

const Label = styled(AppText)`
  margin-bottom: 4px;
`;

const CustomSelect = styled(Select)`
  & .react-select__indicators {
    display: none;
  }

  & .react-select__control {
    border-radius: 6px;
    box-shadow: none;
    border: 1px solid ${({ theme }) => theme.colors.line};
  }

  & .react-select__control--is-disabled {
    background: ${({theme}) => theme.colors.substrate};
  }

  & .react-select__menu {
    position: static;
    margin: 0;
    margin-top: 18px;
    border: none;
    border-radius: unset;
    box-shadow: unset;
  }

  & .react-select__menu-list {
    padding: 0;
    max-height: 120px;
    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.lightGray};
      border-radius: 4px;
    }
  }

  & .react-select__option {
    display: flex;
    align-items: center;
    padding: 9px 0;

    &:hover {
      background-color: ${({ theme }) => theme.colors.selected};
    }
  }

  & .react-select__option--is-selected {
    background-color: unset;
  }

  & .react-select__option--is-focused {
    background: unset;
  }

  & .react-select__value-container {
    height: 46px;
  }
`;

export default SearchableMultiSelect;
