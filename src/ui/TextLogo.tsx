import React, { FC } from 'react';
import styled from 'styled-components';

interface TextLogoProps {
  variant?: 'dark' | 'white';
}

export const TextLogo: FC<TextLogoProps> = ({ variant = 'dark' }) => {
  return <StyledText $variant={variant}>accelerist</StyledText>;
};

const StyledText = styled.p<{ $variant: 'dark' | 'white' }>`
  letter-spacing: 4px;
  text-transform: uppercase;
  ${({ $variant, theme }) => {
    if ($variant === 'dark') {
      return `
        font-size: 16px;
        font-family: Rubik-Medium;
        line-height: 24px;
        color: ${theme.colors.black};
      `;
    } else {
      return `
        font-family: Gotham;
        font-size: 18px;
        line-height: 26px;
        color: ${theme.colors.white};
      `;
    }
  }}
`;
