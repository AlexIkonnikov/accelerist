import React, { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  isValid: boolean;
}

export const Input: FC<InputProps> = ({ isValid, ...outerProps }) => {
  return <StyledInput $isValid={isValid} {...outerProps} />;
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

  ${({ $isValid, theme }) =>
    $isValid &&
    `
      background-color: #f3d6d6;
      border: 1px solid ${theme.colors.red};
  `};

  &:disabled {
    ${({ theme }) => {
      return `
        background-color: ${theme.colors.substrate};
        color: ${theme.colors.gray}
      `;
    }}
  }
`;
