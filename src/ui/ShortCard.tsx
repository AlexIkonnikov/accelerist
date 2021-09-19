import React, { FC } from 'react';
import styled from 'styled-components';
import { ICompany } from '../store/company/types';
import { AppText } from './AppText';
import { Avatar } from './Avatar';
import { TagList } from './TagList';

interface ShortCardProps {
  company: ICompany
}

export const ShortCard: FC<ShortCardProps> = ({company}) => {
  return (
    <Wrapper>
      <CompanyWrapper>
        <AvatarWrapper>
          <Avatar type="square" />
        </AvatarWrapper>
        <CompanyInfoWrapper>
          <CompanyName type="FootnoteSelect">{company.name}</CompanyName>
          <AppText>Priority Ranking 43</AppText>
        </CompanyInfoWrapper>
      </CompanyWrapper>
      <Text>CSR Focus</Text>
      <TagList tags={['Health', 'Foo', 'Bar']} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 24px;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
`;

const CompanyWrapper = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const AvatarWrapper = styled.div`
  width: 48px;
  height: 48px;
  margin-right: 12px;
`;

const CompanyInfoWrapper = styled.div`
  padding: 4px 0;
`;

const CompanyName = styled(AppText)`
  margin-bottom: 4px;
`;

const Text = styled(AppText)`
  margin-bottom: 4px;
`;
