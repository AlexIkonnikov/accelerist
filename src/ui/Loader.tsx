import React, { FC } from 'react';
import styled, { keyframes } from 'styled-components';

export const Loader: FC = () => {
  return (
    <StyledSvg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="9" stroke="#D4C9EC" strokeWidth="3" />
      <path d="M12 21C7.02944 21 3 16.9706 3 12" stroke="white" strokeWidth="3" />
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
