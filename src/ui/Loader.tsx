import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';

type Variants = 'primary' | 'secondary' | 'danger';
type Size = 'small' | 'big';

interface LoaderProps {
  size?: Size;
  variant?: Variants;
}

export const Loader: FC<LoaderProps> = ({ size = 'small', variant = 'primary' }) => {
  return (
    <StyledSvg $size={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <StyledCirce cx="12" cy="12" r="9" $variant={variant} $size={size} />
      <StyledPath d="M12 21C7.02944 21 3 16.9706 3 12" $variant={variant} $size={size} />
    </StyledSvg>
  );
};

const rotate = keyframes`
  from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`;

const StyledSvg = styled.svg<{ $size: Size }>`
  animation: ${rotate} 0.5s linear infinite;
  ${({ $size }) => {
    switch ($size) {
      case 'small':
        return `width: 24px; height: 24px;`;
      case 'small':
        return `width: 55px; height: 55px;`;
    }
  }}
`;

const StyledCirce = styled.circle<{ $variant: Variants; $size: Size }>`
  ${({ $variant }) => {
    switch ($variant) {
      case 'primary':
        return `stroke: #D4C9EC;`;
      case 'secondary':
        return `stroke: #D4C9EC;`;
      case 'danger':
        return `stroke: #FFE4E5;`;
    }
  }}

  ${({ $size }) => {
    switch ($size) {
      case 'big':
        return `stroke-width: 3px;`;
      case 'small':
        return `stroke-width: 1px;`;
    }
  }}
`;

const StyledPath = styled.path<{ $variant: Variants, $size: Size}>`
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'primary':
        return `stroke: white;`;
      case 'secondary':
        return `stroke: ${theme.colors.blue};`;
      case 'danger':
        return `stroke: #F05658;`;
    }
  }}

  ${({ $size }) => {
    switch ($size) {
      case 'big':
        return `stroke-width: 3px;`;
      case 'small':
        return `stroke-width: 1px;`;
    }
  }}
`;
