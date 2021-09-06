import React, { FC } from 'react';
import styled from 'styled-components';
import { FieldRenderProps } from 'react-final-form';
import { Input } from '../../ui/Input';
import { PasswordInput } from '../PasswordInput';

interface InputProps extends FieldRenderProps<string> {
  label?: string;
}

const InputField: FC<InputProps> = ({ label = '', input, meta }) => {
  const isValid = meta.error && meta.touched;
  return (
    <>
      {label !== '' && <StyledLabel htmlFor={input.name}>{label}</StyledLabel>}
      {input.type === 'password' ? <PasswordInput input={input} meta={meta} /> : <Input isValid={isValid} {...input} />}
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

export default InputField;
