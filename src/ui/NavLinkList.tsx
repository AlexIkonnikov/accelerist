import React, { FC, HTMLAttributes } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavLinkList: FC<HTMLAttributes<HTMLElement>> = ({ className }) => {
  return (
    <nav className={className}>
      <List>
        <Item>
          <Link to="/dashboard">Dashboard</Link>
        </Item>
        <Item>
          <Link to="/audience">Audience</Link>
        </Item>
        <Item>
          <Link to="/pricing">Pricing</Link>
        </Item>
        <Item>
          <Link to="/prospecting">Prospecting</Link>
        </Item>
        <Item>
          <Link to="/roi">ROI</Link>
        </Item>
        <Item>
          <Link to="/upgrade-membership">Upgrade Membership</Link>
        </Item>
      </List>
    </nav>
  );
};

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 504px;
`;

const Item = styled.li``;

const Link = styled(NavLink)`
  ${({ theme }) => `color: ${theme.colors.black}`};
  font-size: 12px;
  line-height: 18px;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 25px;
  }
  &.active {
    font-family: Rubik-Medium;
  }
`;
