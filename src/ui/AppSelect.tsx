import React, { FC, ComponentProps } from 'react';
import Select, { components, OptionsType } from 'react-select';
import styled from 'styled-components';
import { ReactComponent as ArrowDown } from './../assets/icons/arrow-down.svg';
import { FieldRenderProps } from 'react-final-form';
import { AppText } from './AppText';

const DropdownIndicator: FC<ComponentProps<typeof components.DropdownIndicator>> = ({ ...outerProps }) => {
  return (
    <components.DropdownIndicator {...outerProps}>
      <ArrowDown />
    </components.DropdownIndicator>
  );
};

const MultiValue: FC<ComponentProps<typeof components.MultiValue>> = ({selectProps, data, innerProps, ...all}) => {
  const values = selectProps.value;
  if (values) {
   const idx = values.length - 1;
    return (
      <components.MultiValue data={data} innerProps={innerProps}  selectProps={selectProps} {...all}>
        {values && <AppText tagName="span">{idx}</AppText>}
      </components.MultiValue>
    )
  } else {
    return null;
  }
}

interface SelectProps extends FieldRenderProps<Array<string>> {
  options: OptionsType<Field>;
}

interface Field {
  value: string;
  label: string;
}

export const AppSelect: FC = () => {
  // const handleChangeEvent = (result: Field) => {
  //   input.onChange([result.value]);
  // };

  return (
    <StyledSelect
      classNamePrefix="react-select"
      options={[{value: 'first', label: 'first'}, {value: 'second', label: 'second'}, {value: 'last', label: 'last'}]}
      components={{ DropdownIndicator }}
      isMulti
      isSearchable={false}
    />
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

  & .react-select__indicators {
    width: 24px;
    height: 24px;
    padding: 13px 16px 13px 16px;
    box-sizing: content-box;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  & .react-select__control--menu-is-open {
    border-color: unset;
    box-shadow: unset;
    border: 1px solid ${({ theme }) => theme.colors.line};
    &:hover {
      border: 1px solid ${({ theme }) => theme.colors.line};
    }
    & .react-select__indicators {
      transform: rotate(-180deg);
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
  }

  & .react-select__menu {
    border: 1px solid #e8e8e8;
    border-top: none;
    border-radius: 6px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    margin-top: -17px;
    margin-bottom: 0;
    box-shadow: unset;
  }

  & .react-select__multi-value {
    background: none;
  }

  & .react-select__menu-list {
    padding: 0;
    border-top: none;
  }

  & .react-select__option {
    padding: 11px 16px;
    &:hover {
      background-color: #e9f9ff;
    }
  }

  & .react-select__option--is-selected {
    background-color: #e9f9ff;
    color: ${({ theme }) => theme.colors.black};
  }

  /* & .react-select__clear-indicator {
    display: none;
  } */
`;
