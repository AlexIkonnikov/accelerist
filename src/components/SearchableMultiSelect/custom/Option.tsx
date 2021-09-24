import React, { FC } from 'react';
import { components, OptionProps } from 'react-select';
import { CheckBox } from './../../../ui/CheckBox';
import { AppText } from '../../../ui/AppText';
import styled from 'styled-components';

export const Option: FC<OptionProps<{ value: string }, boolean>> = ({ ...outerProps }) => {
  return (
    <components.Option {...outerProps}>
      <>
        <CheckBox checked={outerProps.isSelected} readOnly />
        <LabelText type="BodyBlack">{outerProps.children}</LabelText>
      </>
    </components.Option>
  );
};

const LabelText = styled(AppText)`
  margin-left: 10px;
`;
