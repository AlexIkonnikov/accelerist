import React, { FC, useState } from 'react';
import styled from 'styled-components';
import { FieldRenderProps } from 'react-final-form';
import { OpenEyeIcon } from '../../ui/icons/OpenEyeIcon';
import { OffEyeIcon } from '../../ui/icons/OffEyeIcon';
import { InputField } from '../../ui/InputField';

interface InputProps extends FieldRenderProps<string> {
  label?: string;
}

export const PasswordInput: FC<InputProps> = ({ label = '', input, meta }) => {
  const [type, setType] = useState('password');
  const setPasswordTypeHandler = () => {
    setType('password');
  }

  const setTextTypeHandler = () => {
    setType('text');
  }

  const isValid = meta.error && meta.touched;
  return (
    <>
      {label !== '' && <StyledLabel htmlFor={input.name}>{label}</StyledLabel>}
      <RelativeWrapper>
        <InputField {...input} id={input.name} type={type} isValid={isValid} />
        <IconWrapper>
          {type === 'password' ? <OffEyeIcon onClick={setTextTypeHandler} /> : <OpenEyeIcon onClick={setPasswordTypeHandler}/>}
        </IconWrapper>
      </RelativeWrapper>
      {isValid && <ErrorText>{meta.error}</ErrorText>}
    </>
  );
};

const RelativeWrapper = styled.div`
  position: relative;
`;

const IconWrapper = styled.div`
  position: absolute;
  right: 16px;
  top: 10px;
`;

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
