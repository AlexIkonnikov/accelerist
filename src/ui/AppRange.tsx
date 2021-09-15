import React, { FC, useState, ChangeEvent, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Slider } from '@material-ui/core';

export const AppRange: FC = () => {
  const [value, setValue] = useState([20,70]);

  const handleChange = (evt: ChangeEvent<unknown>, value: Array<number>| number) => {
    if (Array.isArray(value)) {
      setValue(value);
    }
  };
  return (
    <StyledSlider
      defaultValue={30}
      value={value}
      onChange={handleChange}
      valueLabelDisplay="auto"
      aria-labelledby="range-slider"
      valueLabelFormat={(str: number) => `$${str}M`}
    />
  );
};

const StyledSlider = styled(Slider)`

  & .MuiSlider-track {
    background-color: ${({ theme }) => theme.colors.blue};
  }

  & .MuiSlider-rail {
    background-color: ${({ theme }) => theme.colors.line};
  }

  & .MuiSlider-thumb {
    width: 72px;
    height: 32px;
    border: 1px solid #caf0ff;
    border-radius: 6px;
    background: white;
    margin-top: -14px;
    &:after {
      display: none;
    }
    &:hover, &.Mui-focusVisible {
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

  /* & .PrivateValueLabel-offset-3 {
    transform: unset;
  } */

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
