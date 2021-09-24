import React, { FC, ComponentProps } from 'react';
import { components } from 'react-select';
import { ReactComponent as ArrowDown } from './../../../assets/icons/arrow-down.svg';

export const DropdownIndicator: FC<ComponentProps<typeof components.DropdownIndicator>> = ({ ...outerProps }) => {
  return (
    <components.DropdownIndicator {...outerProps}>
      <ArrowDown />
    </components.DropdownIndicator>
  );
};
