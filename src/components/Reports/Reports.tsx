import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { AppText } from '../../ui/AppText';
import { Avatar } from '../../ui/Avatar';
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
        <AppText type="BodySelect" CSS={mb16} >Top Matched</AppText>
          <CompanyIconWrapper>
            <IconWrapper>
              <Avatar type="square" />
            </IconWrapper>
            <IconWrapper>
              <Avatar type="square" />
            </IconWrapper>
            <IconWrapper>
              <Avatar type="square" />
            </IconWrapper>
          </CompanyIconWrapper>
        <LastLogin/>
      </ContentWrapper>
    </>
  );
};

const mb16 = css`
  margin-bottom: 16px;
`

const mb24 = css`
  margin-bottom: 24px;
`

const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex: 1 1 0;
  ${mb16};
`;

const ContentWrapper = styled.div`
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
`;

const IndicatorWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  ${mb24};
`;

const CompanyIconWrapper = styled.div`
  display: flex;
  align-items: center;
  ${mb24};
`;

const IconWrapper = styled.div`
  width: 83px;
  height: 83px;
  margin-right: 12px;
`

export default Reports;
