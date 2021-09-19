import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const NavList: FC = () => {
  return (
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
        <Link to="/prospects">Prospecting</Link>
      </Item>
      <Item>
        <Link to="/roi">ROI</Link>
      </Item>
      <Item>
        <Link to="/upgrade-membership">Upgrade Membership</Link>
      </Item>
    </List>
  );
};

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-width: 504px;
  @media (max-width: 970px) {
    min-width: 400px;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    min-width: unset;
    align-items: flex-start;
  }
`;

const Item = styled.li`
  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

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
