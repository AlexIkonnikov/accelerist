import React, { FC, ChangeEvent, useEffect } from 'react';
import styled from 'styled-components';
import { Slider } from '@material-ui/core';
import { FieldRenderProps } from 'react-final-form';
import { AppText } from './../../ui/AppText';

interface InputRangeProps extends FieldRenderProps<Array<number>, HTMLElement> {
  label?: string;
  values: Array<number>;
}

const InputRange: FC<InputRangeProps> = ({ label = '', values, input, ...outerProps }) => {

  const handleChange = (evt: ChangeEvent<unknown>, value: Array<number> | number) => {
    input.onChange(value);
  };

  return (
    <RangeWrapper>
      <Label>{label}</Label>
      <StyledSlider
        {...outerProps}
        value={input.value || values}
        valueLabelDisplay="auto"
        onChange={handleChange}
        aria-labelledby="range-slider"
        valueLabelFormat={(value: number) => `$${(value/1000000).toFixed(1)}M`}
      />
    </RangeWrapper>
  );
};

const RangeWrapper = styled.div`
  padding: 0 36px;
`;

const Label = styled(AppText)`
  margin-bottom: 12px;
  margin-left: -36px;
`;

const StyledSlider = styled(Slider)`
  & .MuiSlider-track {
    background-color: ${({ theme }) => theme.colors.blue};
  }

  & .MuiSlider-rail {
    background-color: ${({ theme }) => theme.colors.line};
    margin-left: -32px;
    padding-right: 64px;
  }

  & .MuiSlider-thumb {
    width: 72px;
    height: 32px;
    border: 1px solid ${({ theme }) => theme.colors.secondaryBlue};
    border-radius: 6px;
    background: ${({ theme }) => theme.colors.white};
    margin-top: -14px;
    margin-left: -36px;
    &:after {
      display: none;
    }
    &:hover,
    &.Mui-focusVisible {
      box-shadow: unset;
    }
  }

  & .MuiSlider-valueLabel {
    left: unset;
    top: 8px;
    transform: unset;
  }

  & .PrivateValueLabel-thumb-1.PrivateValueLabel-open-2 .PrivateValueLabel-offset-3 {
    transform: unset;
  }

  & .PrivateValueLabel-label-5 {
    color: ${({ theme }) => theme.colors.black};
  }

  & .PrivateValueLabel-circle-4 {
    width: unset;
    height: unset;
    display: unset;
    transform: unset;
    align-items: unset;
    border-radius: unset;
    justify-content: unset;
    background-color: unset;
  }
`;

export default InputRange;
