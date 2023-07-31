import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { getFormattedRevenue } from '../utils';
import { AppText } from './AppText';

interface ReportedProps {
  revenue: string;
  employeeCount: number;
}

export const Reported: FC<ReportedProps> = ({ revenue, employeeCount }) => {
  return (
    <ReportedBlock>
      <Title type="BodySelect">Reported</Title>
      <ReportBody>
        <Revenue>
          <AppText>Revenue Reported</AppText>
          <AppText type="BodySelect">{getFormattedRevenue(revenue)}</AppText>
        </Revenue>
        <Employees>
          <AppText>Employees Reported</AppText>
          <AppText type="BodySelect">{employeeCount}</AppText>
        </Employees>
      </ReportBody>
    </ReportedBlock>
  );
};

const Title = styled(AppText)`
  margin-bottom: 16px;
`;

const ReportedBlock = styled.div`
  margin-bottom: 32px;
`;

const ReportBody = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 6px;
  width: 100%;
  height: 77px;
  display: flex;
`;

const flex = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  flex-direction: column;
`;

const Revenue = styled.div`
  ${flex}
  border-right: 1px solid ${({ theme }) => theme.colors.line}; ;
`;

const Employees = styled.div`
  ${flex}
`;
