import React, { FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({ ...outerProps }) => {
  return <StyledButton {...outerProps} />;
};

const StyledButton = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.colors.blue};
  color: ${({ theme }) => theme.colors.white};
  font-family: Rubik-Medium;
  padding: 12px 0;
  text-align: center;
  border-radius: 6px;

  &:hover {
    background-color: #51C2EE;
  }
  &:active {
    background-color: #1DA7DC;
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.blue};
    background-color: #CEEDF9;
    cursor: no-drop;
  }
`;
