import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { IndicatorBlock } from '../IndicatorBlock';
import { AppText } from './../../ui/AppText';
import { Filters } from './../../ui/Filters';
import { Owner } from './../../ui/Owner';

const ProspectsCard: FC = () => {
  return (
    <Wrapper>
      <CardName type="BodySelect">CardName</CardName>
      <Filters />
      <InnerWrapper>
        <IndicatorBlock index="№ of Prospects Available" value={236}/>
        <IndicatorBlock index="№ of Contacts Pursued" value={72}/>
      </InnerWrapper>
      <InnerWrapper>
        <Owner />
        <LastActivityWrapper>
          <AppText>Last Activity</AppText>
          <Date type="FootnoteBlack">1 Jul 2020</Date>
        </LastActivityWrapper>
      </InnerWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 24px;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const CardName = styled(AppText)`
  margin-bottom: 16px;
  padding-bottom: 9px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.line};
`;

const InnerWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  justify-content: space-between;
`;

const LastActivityWrapper = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
`;

const Date = styled(AppText)`
  margin-top: 4px;
`;

export default ProspectsCard;
