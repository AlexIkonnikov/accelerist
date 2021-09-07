import React, { FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import { Loader } from './Loader';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export const TransparentButton: FC<ButtonProps> = ({isLoading = false, disabled, children, ...outerProps}) => {
  return (
    <StyledButton $isLoading={isLoading} disabled={disabled || isLoading} {...outerProps}>
      {isLoading ? <Loader/> : children}
    </StyledButton>
  );
};

const StyledButton = styled.button<{$isLoading: boolean}>`
  width: 100%;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.black};
  font-family: Rubik-Regular;
  padding: 8px 0;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.blue};
  border-radius: 6px;
  font-size: 12px;
  line-height: 18px;

  &:hover {
    background-color: #EBF9FF;
    color: ${({ theme }) => theme.colors.blue};
  }
  &:active {
    color: ${({ theme }) => theme.colors.blue};
    background-color: ${({ theme }) => theme.colors.secondaryBlue};
  }

  &:disabled {
    cursor: no-drop;
    ${({$isLoading, theme}) => {
      if ($isLoading) {
        return `background-color: transparent;`
      } else {
        return ` background-color: #ceedf9; color:${theme.colors.blue};`
      }
    }}
  }
`;
