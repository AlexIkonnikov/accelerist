import React, { FC } from 'react';
import styled, { CSSProp } from 'styled-components';

interface TextLogoProps {
  containerStyled?: CSSProp;
}

export const TextLogo: FC<TextLogoProps> = ({ containerStyled = {} }) => {
  return <StyledText $CSS={containerStyled}>accelerist</StyledText>;
};

const StyledText = styled.p<{ $CSS: CSSProp}>`
  font-family: Gotham;
  font-size: 18px;
  line-height: 26px;
  color: ${({theme}) => theme.colors.white};
  text-transform: uppercase;
  letter-spacing: 4px;
`;
