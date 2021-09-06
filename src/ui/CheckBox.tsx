import React, { FC } from 'react';
import { FieldRenderProps } from 'react-final-form';
import styled from 'styled-components';
import check from './../assets/img/check.svg';

export const CheckBox: FC<FieldRenderProps<string>> = ({input}) => {
  return (
    <StyledLabel>
      <StyledCheckbox type="checkbox" {...input}/>
      <Indicator />
      Remember
    </StyledLabel>
  );
};

const StyledLabel = styled.label`
  padding-left: 30px;
  font-size: 12px;
  line-height: 20px;
  color: ${({theme}) => theme.colors.black};
`;

const StyledCheckbox = styled.input`
  appearance: none;
  margin: 0;
  position: absolute;
`;

const Indicator = styled.span`
margin-left: -30px;
  position: absolute;
  width: 20px;
  height: 20px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 3px;
  ${StyledCheckbox}:not(:disabled):checked  + & {
    background-color: ${({ theme }) => theme.colors.secondaryBlue};
  }

  ${StyledCheckbox}:disabled + & {
    background-color: #f0f0f0;
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
    background: url(${check}) no-repeat center center;
  }
`;
