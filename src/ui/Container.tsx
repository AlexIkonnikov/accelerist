import React, {FC} from 'react';
import styled from 'styled-components';

interface ContainerProps {
  variant?: 1 | 2
}

export const Container: FC<ContainerProps> = ({variant = 1, children}) => {
  return <SmartContainer $variant={variant}>{children}</SmartContainer>
};

const SmartContainer = styled.div<{$variant: number}>`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 60px;

  ${({$variant}) => {
    return ($variant === 1 ? `padding: 0 60px;` : `padding: 0 284px 0 60px;`);
  }}

  @media(max-width: 768px) {
    padding: 0 32px;
    max-width: 768px;
  }
  @media(max-width: 375px) {
    max-width: 375px;
    padding: 0 16px;
  }
`;
