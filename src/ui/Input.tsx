import React, { FC } from 'react';
import styled from 'styled-components';
import { FieldRenderProps } from 'react-final-form';

interface InputProps extends FieldRenderProps<string> {
  label?: string
}

export const Input: FC<InputProps> = ({ label = '', input, meta }) => {
  const isValid = meta.error && meta.touched;
  return (
    <>
      {label !== '' && <StyledLabel htmlFor={input.name}>{label}</StyledLabel>}
      <StyledInput id={input.name} {...input} $isValid={isValid}/>
      {isValid && <ErrorText>{meta.error}</ErrorText>}
    </>
  );
};

const ErrorText = styled.span`
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.red};
`;
const StyledLabel = styled.label`
  margin-bottom: 4px;
  display: block;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const StyledInput = styled.input<{ $isValid: boolean }>`
  display: block;
  position: relative;
  width: 100%;
  border-radius: 6px;
  font-size: 16px;
  line-height: 25px;
  padding: 10px 50px 10px 16px;
  color: ${({ theme }) => theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.line};
  &:focus {
    outline: 0;
    border: 1px solid ${({ theme }) => theme.colors.blue};
  }

  ${({ $isValid }) =>
    $isValid &&
    `
    background-color: #f3d6d6;
    border: 1px solid #F05658;
    &:focus {
      border: 1px solid #F05658;
    }
  `};

  &:disabled {
    background-color: #f9f9f9;
    color: ${({ theme }) => theme.colors.gray};
  }
`;
