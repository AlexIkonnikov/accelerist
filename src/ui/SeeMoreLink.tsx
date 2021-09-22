import React, { FC } from 'react';
import { Link, LinkProps } from 'react-router-dom';
import { css } from 'styled-components';
import { AppText } from './AppText';

export const SeeMoreLink: FC<LinkProps> = ({...outerProps}) => {
  return (
    <Link {...outerProps}>
      <AppText tagName="span" CSS={blue}>see more</AppText>
    </Link>
  );
};

const blue = css`
  color: ${({theme}) => theme.colors.blue};
`
