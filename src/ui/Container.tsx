import React, {FC} from 'react';
import styled from 'styled-components';

export const Container: FC = ({children}) => {
  return <StyledContainer>{children}</StyledContainer>
};

const StyledContainer = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 60px;
`;
