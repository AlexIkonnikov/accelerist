import React, { FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Loader } from './Loader';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const Button: FC<ButtonProps> = ({ children, isLoading = false, disabled, ...outerProps }) => {
  return (
    <StyledButton $isLoading={isLoading} disabled={disabled || isLoading} {...outerProps}>
      {isLoading ? <Loader/> : children}
    </StyledButton>
  )
};

const StyledButton = styled.button<{$isLoading: boolean}>`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  font-family: Rubik-Medium;
  padding: 12px 0;
  text-align: center;
  border-radius: 6px;

  &:hover {
    background-color: #51c2ee;
  }
  &:active {
    background-color: #1da7dc;
  }

  &:disabled {
    cursor: no-drop;
    ${({$isLoading, theme}) => {
      if ($isLoading) {
        return `background-color: ${theme.colors.blue};`
      } else {
        return ` background-color: #ceedf9; color:${theme.colors.blue};`
      }
    }}
  }
`;
