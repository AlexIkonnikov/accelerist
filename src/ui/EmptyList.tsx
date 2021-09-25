import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { AppText } from './AppText';
import { AppLink } from './AppLink';
import { ROUTES } from '../route';

interface EmptyListProps {
  text: string;
  render: () => JSX.Element;
}

export const EmptyList: FC<EmptyListProps> = ({ text, render }) => {
  return (
    <Wrapper>
      {render()}
      <AppText type="BodySelect" CSS={mb8}>
        {text}
      </AppText>
      <AppText CSS={mb32}>Go to the search page and add to list</AppText>
      <StyledLink to={ROUTES.search}>Search</StyledLink>
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

const StyledLink = styled(AppLink)`
  width: 244px;
`;
