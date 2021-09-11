import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { ReactComponent as Heart } from './../assets/icons/heart.svg';
import { AppText } from './AppText';
import { Button } from './Button';

export const EmptyFavorites: FC = () => {
  return (
    <Wrapper>
      <HeartIcon />
      <AppText type="BodySelect" CSS={mb8}>
        No favorite company
      </AppText>
      <AppText CSS={mb32}>Go to the search page and add to favorites</AppText>
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

const HeartIcon = styled(Heart)`
  margin-bottom: 40px;
`;

const mb8 = css`
  margin-bottom: 8px;
`;

const mb32 = css`
  margin-bottom: 32px;
`;

const CustomLink = styled(Link)`
  min-width: 244px;
`;
