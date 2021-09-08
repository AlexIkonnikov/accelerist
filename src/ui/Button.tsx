import React, { FC, ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { Loader } from './Loader';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: 'primary' | 'secondary';
}

export const Button: FC<ButtonProps> = ({
  children,
  isLoading = false,
  variant = 'primary',
  disabled,
  ...outerProps
}) => {
  return (
    <StyledButton $variant={variant} $isLoading={isLoading} disabled={disabled || isLoading} {...outerProps}>
      {isLoading ? <Loader /> : children}
    </StyledButton>
  );
};

interface StyledButtonProps {
  $isLoading: boolean;
  $variant: 'primary' | 'secondary';
}

const StyledButton = styled.button<StyledButtonProps>`
  width: 100%;
  text-align: center;
  border-radius: 6px;
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'primary':
        return `
          background-color: ${theme.colors.blue};
          color: ${theme.colors.white};
          font-family: Rubik-Medium;
          padding: 12px 0;
      `;
      case 'secondary':
        return `
          background-color: transparent;
          color: ${theme.colors.black};
          padding: 8px 0;
          border: 1px solid ${theme.colors.blue};
          font-size: 12px;
          line-height: 18px;
        `;
    }
  }}

  &:hover {
    ${({ $variant, theme }) => {
      switch ($variant) {
        case 'primary':
          return `background-color: #51c2ee;`;
        case 'secondary':
          return `
            background-color: #ebf9ff;
            color: ${theme.colors.blue};
          `;
      }
    }}
  }

  &:active {
    ${({ $variant, theme }) => {
      switch ($variant) {
        case 'primary':
          return `background-color: #1da7dc;`;
        case 'secondary':
          return `
            color: ${theme.colors.blue};
            background-color: ${theme.colors.secondaryBlue};
          `;
      }
    }}
  }

  &:disabled {
    cursor: no-drop;
    ${({ $isLoading, $variant,theme }) => {
      if ($isLoading) {
        return $variant ==='primary' ? `background-color: ${theme.colors.blue};` : `background-color: transparent;`;
      } else {
        return ` background-color: #ceedf9; color:${theme.colors.blue};`;
      }
    }}
  }
`;
