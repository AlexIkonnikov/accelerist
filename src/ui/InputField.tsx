import React, {FC, InputHTMLAttributes} from 'react';
import styled from 'styled-components';

interface InputFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  isValid: boolean
}

export const InputField: FC<InputFieldProps> = ({isValid, ...outerProps}) => {
  return <StyledInput $isValid={isValid} {...outerProps}/>
};

const StyledInput = styled.input<{ $isValid?: boolean }>`
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
