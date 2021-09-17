import React, { FC, InputHTMLAttributes, ChangeEvent } from 'react';
import styled from 'styled-components';

export const TabRadio: FC<InputHTMLAttributes<HTMLInputElement>> = ({children,...outerProps}) => {

  return (
    <StyledLabel>
      <StyledRadio type="radio" {...outerProps}/>
      <Indicator>{children}</Indicator>
    </StyledLabel>
  );
};

const StyledLabel = styled.label`
  width: 100%;
  flex: 1 1 0;
  display: block;
  font-size: 12px;
  line-height: 18px;
  color: ${({ theme }) => theme.colors.black};
  position: relative;
`;

const StyledRadio = styled.input`
  appearance: none;
  margin: 0;
  position: absolute;
`;

const Indicator = styled.span`
  background-color: #f8f8f8;
  width: 100%;
  display: block;
  padding: 9px 0;
  text-align: center;
  border-radius: 6px;
  ${StyledRadio}:not(:disabled):checked  ~ & {
    background-color: ${({ theme }) => theme.colors.secondaryBlue};
  }

  ${StyledRadio}:disabled + & {
    background-color: #f0f0f0;
  }
`;
