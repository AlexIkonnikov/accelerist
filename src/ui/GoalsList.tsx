import React from 'react';
import styled from 'styled-components';
import { AppText } from './AppText';
import Goal1 from './../assets/icons/goal1.svg';
import Goal3 from './../assets/icons/goal3.svg';
import Goal5 from './../assets/icons/goal5.svg';
import Goal6 from './../assets/icons/goal6.svg';
import Goal15 from './../assets/icons/goal14.svg';

export const GoalsList = () => {
  return (
    <div>
      <Title type="Headline">SDG Goal Alignment</Title>
      <GoalsContainer>
        <Img src={Goal1} />
        <Img src={Goal3} />
        <Img src={Goal5} />
        <Img src={Goal6} />
        <Img src={Goal15} />
      </GoalsContainer>
    </div>
  );
};

const Title = styled(AppText)`
  margin-bottom: 16px;
`;

const GoalsContainer = styled.div`
  display: flex;
  align-items: center;
`;

const Img = styled.img`
  margin-right: 16px;
  border-radius: 6px;
`;
