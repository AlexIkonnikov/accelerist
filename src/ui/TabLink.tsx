import React, { FC } from 'react';
import styled from 'styled-components';
import { NavLinkProps, NavLink } from 'react-router-dom';

export const TabLink: FC<NavLinkProps> = ({ title, ...outerProps }) => {
  return <Tab {...outerProps}>{title}</Tab>;
};

const Tab = styled(NavLink)`
  text-align: center;
  flex: 1 1 0%;
  font-size: 12px;
  padding: 9px 0px;
  border-radius: 6px;
  color: ${({theme}) => theme.colors.darkGray};
  background-color: #F8F8F8;
  &:hover {
    color: ${({theme}) => theme.colors.black};
  }
  &.active {
    color: ${({theme}) => theme.colors.black};
    background-color: ${({theme}) => theme.colors.secondaryBlue};
    &:disabled {
      color: #A8BED2;
    }
  }
  &:disabled {
    color: ${({theme}) => theme.colors.gray};
  }
`;
