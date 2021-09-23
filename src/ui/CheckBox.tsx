import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';
import Check from './../assets/icons/check.svg';

interface CheckBoxInterface extends InputHTMLAttributes<HTMLInputElement> {
  text?: string;
}

export const CheckBox: FC<CheckBoxInterface> = ({ text, ...outerProps }) => {
  return (
    <StyledLabel>
      <StyledCheckbox type="checkbox" {...outerProps} />
      <Indicator />
      {text ? <TextWrapper>{text}</TextWrapper> : null}
    </StyledLabel>
  );
};

const StyledLabel = styled.label`
  padding-left: 20px;
  height: 20px;
  font-size: 12px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.black};
  position: relative;
`;

const StyledCheckbox = styled.input`
  appearance: none;
  margin: 0;
  position: absolute;
`;

const Indicator = styled.span`
  margin-left: -20px;
  position: absolute;
  width: 20px;
  height: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 3px;
  ${StyledCheckbox}:not(:disabled):checked  + & {
    background-color: ${({ theme }) => theme.colors.secondaryBlue};
  }

  ${StyledCheckbox}:disabled + & {
    background-color: ${({theme}) => theme.colors.disabledGray};
  }

  &:after {
    content: '';
    position: absolute;
    display: none;
  }
  ${StyledCheckbox}:checked + &:after {
    display: block;
    width: 20px;
    height: 18px;
    background: url(${Check}) no-repeat center center;
  }
`;

const TextWrapper = styled.span`
  margin-left: 11px;
`
