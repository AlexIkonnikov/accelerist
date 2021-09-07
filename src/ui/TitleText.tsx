import React, {FC} from 'react';
import styled from 'styled-components';

export const TitleText: FC = ({children}) => {
  return <StyledText>{children}</StyledText>
};

const StyledText = styled.h2`
  color: ${({theme}) => theme.colors.black};
  font-family: Rubik-Medium;
  font-size: 32px;
  line-height: 48px;
  @media (max-width: 768px) {
    font-size: 28px;
    line-height: 42px;
  }
  @media (max-width: 375px) {
    font-size: 16px;
    line-height: 24px;
  }
`;
