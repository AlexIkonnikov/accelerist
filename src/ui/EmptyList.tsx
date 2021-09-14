import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { AppText } from './AppText';
import { Button } from './Button';

interface EmptyListProps {
  text: string
  render: () => JSX.Element
}

export const EmptyList: FC<EmptyListProps> = ({text, render}) => {
  return (
    <Wrapper>
      {render()}
      <AppText type="BodySelect" CSS={mb8}>
        {text}
      </AppText>
      <AppText CSS={mb32}>Go to the search page and add to list</AppText>
      <CustomLink to="/search">
        <Button variant="secondary">Search</Button>
      </CustomLink>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const mb8 = css`
  margin-top: 40px;
  margin-bottom: 8px;
`;

const mb32 = css`
  margin-bottom: 32px;
`;

const CustomLink = styled(Link)`
  min-width: 244px;
`;
