import React, { FC, ComponentProps } from 'react';
import Select, { components, OptionsType, MultiValueProps,OptionTypeBase, OptionProps } from 'react-select';
import styled from 'styled-components';
import { ReactComponent as ArrowDown } from './../assets/icons/arrow-down.svg';
import { FieldRenderProps } from 'react-final-form';
import { AppText } from './AppText';
import { CheckBox} from './CheckBox'

const DropdownIndicator: FC<ComponentProps<typeof components.DropdownIndicator>> = ({ ...outerProps }) => {
  return (
    <components.DropdownIndicator {...outerProps}>
      <ArrowDown />
    </components.DropdownIndicator>
  );
};

const MultiValueContainer: FC<MultiValueProps<{value: string}>> = ({ ...outerProps }) => {
  return (
    <components.MultiValueContainer {...outerProps}>
      <AppText type="BodyBlack">{outerProps.data.value}</AppText>
    </components.MultiValueContainer>
  );
};

const Option: FC<OptionProps<{value: string}, boolean>> = ({...outerProps}) => {
  console.log(outerProps)
  return (
    <components.Option {...outerProps}>
      <>
      <AppText type="BodyBlack">{outerProps.children}</AppText>
      <CheckBox checked={outerProps.isSelected} readOnly />
      </>
    </components.Option>
  )
}

export const AppSelect: FC<FieldRenderProps<Array<string>, any>> = ({ input, ...outerProps }) => {
    return (
    <>
      <StyledSelect
        {...input}
        {...outerProps}
        defaultValue={input.value}
        classNamePrefix="react-select"
        components={{ DropdownIndicator, MultiValueContainer, Option}}
        isMulti
        hideSelectedOptions={false}
        isSearchable={false}
        closeMenuOnSelect={false}
        menuIsOpen
      />
    </>
  );
};

const StyledSelect = styled(Select)`
  & .react-select__indicator-separator {
    display: none;
  }
  & .react-select__control {
    border-radius: 6px;
    box-shadow: none;
    border: 1px solid ${({ theme }) => theme.colors.line};
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.line};
    }
  }


  & .react-select__clear-indicator  {
    display: none;
  }

  & .react-select__dropdown-indicator {
    margin-right: 22px;
    padding: 0;
  }

  & .react-select__control--menu-is-open {
    border-color: unset;
    box-shadow: unset;
    border: 1px solid ${({ theme }) => theme.colors.line};
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.line};
    }
  }

  & .react-select__placeholder,
  & .react-select__single-value {
    font-size: 16px;
    line-height: 24px;
    color: ${({ theme }) => theme.colors.black};
  }

  & .react-select__value-container {
    padding: 11px 0px 10px 16px;
    height: 46px;
  }

  & .react-select__menu {
    border: 1px solid ${({ theme }) => theme.colors.line};
    border-top: none;
    border-radius: 6px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    margin-top: -4px;
    margin-bottom: 0;
    box-shadow: unset;
    z-index: 10;
  }

  & .react-select__multi-value {
    background: none;
  }

  & .react-select__menu-list {
    padding: 0;
    border-top: none;
    max-height: 180px;
    ::-webkit-scrollbar {
      width: 4px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => theme.colors.lightGray};
      border-radius: 4px;
    }
  }
  & .react-select__multi-value__remove {
    display: none;
  }

  & .react-select__option {
    padding: 11px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    &:hover {
      background-color: ${({ theme }) => theme.colors.selected};
    }
  }

  & .react-select__option--is-focused {
    background: unset;
  }

  & .react-select__option--is-selected {
    background-color: unset;
  }
`;
