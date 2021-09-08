import React, { FC } from 'react';
import styled from 'styled-components';

interface CounterProps {
  count: number
}

export const Counter: FC<CounterProps> = ({count}) => {
  return (
    <StyledText>
      {count} companies
    </StyledText>
  )
};

const StyledText = styled.p`
  font-size: 16px;
  line-height: 24px;
  font-family: Rubik-Medium;
  color: ${({theme}) => theme.colors.black};
  @media(max-width: 375px) {
    font-size: 12px;
  line-height: 18px;
  font-family: Rubik-Regular;
  }
`
