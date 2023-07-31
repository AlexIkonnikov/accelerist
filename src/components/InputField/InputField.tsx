import React, { FC } from 'react';
import styled from 'styled-components';
import { FieldRenderProps } from 'react-final-form';
import { Input } from '../../ui/Input';
import { PasswordInput } from '../PasswordInput';
import { AppText } from '../../ui/AppText';

interface InputProps extends FieldRenderProps<string> {
  label?: string;
}

const InputField: FC<InputProps> = ({ label = '', input, meta }) => {
  const isValid = meta.error && meta.touched;
  return (
    <>
      {label !== '' && <StyledLabel htmlFor={input.name}>
        <AppText>{label}</AppText>
      </StyledLabel>}
      {input.type === 'password' ? <PasswordInput input={input} meta={meta} /> : <Input isValid={isValid} {...input} />}
      {isValid && <ErrorText type="Footnote">{meta.error}</ErrorText>}
    </>
  );
};

const ErrorText = styled(AppText)`
  color: ${({ theme }) => theme.colors.red};
`;
const StyledLabel = styled.label`
  margin-bottom: 4px;
  display: block;
`;

export default InputField;
