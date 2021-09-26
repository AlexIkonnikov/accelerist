import React, { FC } from 'react';
import styled from 'styled-components';
import { AppText } from './AppText';

export const Tickers: FC = () => {
  return (
    <Wrapper>
      <Title type="BodySelect">Company Ticker</Title>
      <Row>
        <Ticker>
          <TickerTitle type="Headline">WMT</TickerTitle>
          <AppText>London Stock Exchange</AppText>
        </Ticker>
        <Ticker>
          <TickerTitle type="Headline">WMR</TickerTitle>
          <AppText>Nasdaq</AppText>
        </Ticker>
        <Ticker>
          <TickerTitle type="Headline">WLMT</TickerTitle>
          <AppText>Stock Exchange of Singapore</AppText>
        </Ticker>
      </Row>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-bottom: 32px;
`;

const Title = styled(AppText)`
  margin-bottom: 16px;
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Ticker = styled.div`
  padding: 24px 18px 24px;
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 6px;
  max-width: 206px;
  flex-grow: 1;
`;

const TickerTitle = styled(AppText)`
  margin-bottom: 8px;
`;
