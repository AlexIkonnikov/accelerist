import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { AppText } from '../../ui/AppText';

interface indicatorProps {
  title?: string;
  index: string;
  value: number;
}

const IndicatorBlock: FC<indicatorProps> = ({ title, index, value }) => {
  return (
    <div>
      {title && <Title type="BodySelect">{title}</Title>}
      <SmallCard>
        <Index>{index}</Index>
        <AppText type="Headline">{value}</AppText>
      </SmallCard>
    </div>
  );
};

const SmallCard = styled.div`
  padding: 5px 0;
  min-width: 235px;
  background: ${({theme}) => theme.colors.substrate};
  border-radius: 4px;
  text-align: center;
`;

const Title = styled(AppText)`
  margin-bottom: 16px;
`;

const Index = styled(AppText)`
  margin-bottom: 8px;
`;

export default IndicatorBlock;
