import React, { FC, ButtonHTMLAttributes } from 'react';
import styled from 'styled-components';
import CloseIcon from './../assets/icons/close.svg';

export const Closure: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({...outerProps}) => {
  return <CloseButton {...outerProps}/>
};

const CloseButton = styled.button`
  border: none;
  background: transparent;
  width: 24px;
  height: 24px;
  position: absolute;
  top: 28px;
  right: 32px;
  cursor: pointer;
  background-image: url(${CloseIcon});
  background-size: cover;
  background-repeat: no-repeat;
  @media (min-width: 768px) {
    display: none;
  }
`;
