import React, { FC } from 'react';
import styled from 'styled-components';
import { AppText } from '../../ui/AppText';
import { LastLogin } from '../../ui/LastLogin';
import { IndicatorBlock } from '../IndicatorBlock';

const Reports: FC = () => {
  return (
    <>
      <TitleWrapper>
        <AppText type="Headline" tagName="h3">
          Reports
        </AppText>
      </TitleWrapper>
      <ContentWrapper>
        <IndicatorWrapper>
          <IndicatorBlock title="Search Sessions" index="Total" value={43} />
          <IndicatorBlock title="Sent Pitches" index="Company" value={44} />
        </IndicatorWrapper>
        <LastLogin/>
      </ContentWrapper>
    </>
  );
};

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 0;
  margin-bottom: 16px;
`;

const ContentWrapper = styled.div`
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export default Reports;
