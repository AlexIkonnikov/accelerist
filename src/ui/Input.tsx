import React, { FC } from 'react';
import styled from 'styled-components';
import { FieldRenderProps } from 'react-final-form';
import { InputField } from './InputField';

interface InputProps extends FieldRenderProps<string> {
  label?: string;
}

export const Input: FC<InputProps> = ({ label = '', input, meta }) => {
  const isValid = meta.error && meta.touched;
  return (
    <>
      {label !== '' && <StyledLabel htmlFor={input.name}>{label}</StyledLabel>}
      <InputField isValid={isValid} {...input} />
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
