import React, { ButtonHTMLAttributes, FC } from 'react';
import styled from 'styled-components';

export const Burger: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({...outerProps}) => {
  return <StyledBurger {...outerProps}/>
};

const StyledBurger = styled.button`
  border: none;
  background: transparent;
  width: 24px;
  height: 24px;
  position: relative;
  cursor: pointer;

  &:focus {
    outline: none;
  }

  &::after,
  &::before {
    content: ' ';
    position: absolute;
    display: block;
    width: 18px;
    height: 2px;
    border-radius: 1px;
    background-color: ${({ theme }) => theme.colors.black};
    top: 4px;
    left: 0;
  }

  &::before {
    top: 4px;
    box-shadow: 0px 7px ${({ theme }) => theme.colors.black};
  }

  &::after {
    top: 18px;
  }
  @media (min-width: 769px) {
    display: none;
  }
`;
