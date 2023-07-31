import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import styled from 'styled-components';

export const AppLink: FC<LinkProps> = ({children, ...outerProps}) => {
  return <StyledLink {...outerProps}>{children}</StyledLink>;
};

const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  height: 36px;
  font-size: 12px;
  line-height: 18px;
  width: 100%;
  border-radius: 6px;
  ${({ theme }) => {
    return `
      color: ${theme.colors.black};
      border: 1px solid ${theme.colors.blue};
    `;
  }}

  &:hover {
    background-color: #ebf9ff;
    color: ${({ theme }) => theme.colors.blue};
  }

  &:active {
    ${({ theme }) => {
      return `
        color: ${theme.colors.blue};
        background-color: ${theme.colors.secondaryBlue};
    `;
    }}
  }
`;
