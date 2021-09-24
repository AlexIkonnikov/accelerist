import React, { FC } from 'react';
import { components, OptionProps } from 'react-select';
import { CheckBox } from './../../../ui/CheckBox';
import { AppText } from '../../../ui/AppText';

export const Option: FC<OptionProps<{ value: string }, boolean>> = ({ ...outerProps }) => {
  return (
    <components.Option {...outerProps}>
      <>
        <AppText type="BodyBlack">{outerProps.children}</AppText>
        <CheckBox checked={outerProps.isSelected} readOnly />
      </>
    </components.Option>
  );
};
