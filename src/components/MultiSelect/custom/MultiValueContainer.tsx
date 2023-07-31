import React, { FC } from 'react';
import { components, MultiValueProps } from 'react-select';
import { AppText } from '../../../ui/AppText';

export const MultiValueContainer: FC<MultiValueProps<{ value: string, label: string }>> = ({ ...outerProps }) => {
  return (
    <components.MultiValueContainer {...outerProps}>
      <AppText type="BodyBlack">{outerProps.data.label}</AppText>
    </components.MultiValueContainer>
  );
};
