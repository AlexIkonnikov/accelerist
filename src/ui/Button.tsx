import React, { FC, ButtonHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';
import { Loader } from './Loader';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'danger';
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
      {isLoading ? <Loader variant={variant} /> : children}
    </StyledButton>
  );
};

interface StyledButtonProps {
  $isLoading: boolean;
  $variant: 'primary' | 'secondary' | 'danger';
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
          height: 46px;
      `;
      case 'secondary':
        return `
          background-color: transparent;
          color: ${theme.colors.black};
          height: 36px;
          border: 1px solid ${theme.colors.line};
        `;
      case 'danger':
        return `
          color:${theme.colors.red};
          border: 1px solid ${theme.colors.line};
        `
    }
  }}

  &:hover {
    ${({ $variant, theme }) => {
      switch ($variant) {
        case 'primary':
          return `background-color: #51c2ee;`;
        case 'secondary':
          return `
            border-color: ${theme.colors.gray};
          `;
        case 'danger':
          return `
            border-color: ${theme.colors.gray};
          `
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
            border-color: ${theme.colors.blue};
          `;
        case 'danger':
          return `
            border-color: ${theme.colors.red};
          `;
      }
    }}
  }

  &:disabled {
    cursor: no-drop;
    ${({ $isLoading, $variant, theme }) => {
      if ($isLoading) {
        switch ($variant) {
          case 'primary':
            return `background-color: ${theme.colors.blue};`;
          case 'secondary':
            return `
            color: #BDBDBD;;
          `;
          case 'danger':
            return `border-color: #EAEAEA; color: #EEBCBD;`;
        }
      } else {
        switch ($variant) {
          case 'primary':
            return `background-color: #ceedf9;`;
          case 'secondary':
            return `color:${theme.colors.blue};`;
          case 'danger':
            return `border-color: #EAEAEA;`;
        }
      }
    }}
  }
`;
