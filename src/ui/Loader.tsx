import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';

interface LoaderProps {
  size?: 'small' | 'big'
}

export const Loader: FC<LoaderProps> = ({size = 'small'}) => {
  const dimensions = size === 'big' ?  55 : 24;
  const strokeWidth = size === 'big' ?  1 : 3;
  const color =  size === 'big' ?  '#2BAEE0' : 'white';
  return (
    <StyledSvg width={dimensions} height={dimensions} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="#D4C9EC" strokeWidth={strokeWidth} />
      <path d="M12 21C7.02944 21 3 16.9706 3 12" stroke={color} strokeWidth={strokeWidth} />
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

const StyledSvg = styled.svg`
  animation: ${rotate} 0.5s linear infinite;
`;
