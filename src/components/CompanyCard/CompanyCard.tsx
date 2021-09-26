import React, { FC } from 'react';
import styled from 'styled-components';
import { AppText } from './../../ui/AppText';
import { TagList } from './../../ui/TagList';
import { ICompany } from './../../store/company/types';
import { Link } from 'react-router-dom';
import { AppLink } from './../../ui/AppLink';
import { LikeButton } from './../LikeButton';
import { ROUTES } from './../../route';
import { getFormattedRevenue } from '../../utils';

interface CompanyCardProps {
  company: ICompany;
}

const CompanyCard: FC<CompanyCardProps> = ({ company }) => {
  const address = `${company.street}, ${company.state}, ${company.zipCode}`;
  return (
    <Wrapper>
      <Body>
        <CompanyFace>
          <AvatarWrapper>
            <div>Аватар</div>
          </AvatarWrapper>
          <Rating>
            <AppText>Priority Ranking</AppText>
            <AppText type="BodySelect">12</AppText>
          </Rating>
        </CompanyFace>
        <CompanyInfo>
          <Name type="BodySelect">
            <StyledLink to={ROUTES.profile(company.id)}>{company.name}</StyledLink>
          </Name>
          <Address>{address}</Address>
          <Phone>{company?.phone}</Phone>
          <BorderWrapper>
            <Focus>
              <FocusText>CSR Focus</FocusText>
              <TagList tags={company.crsFocus} />
            </Focus>
            <Revenue>
              <RevenueText>Revenue</RevenueText>
              <AppText type="FootnoteSelect" tagName="span">
                {getFormattedRevenue(company.revenue)}
              </AppText>
            </Revenue>
          </BorderWrapper>
        </CompanyInfo>
        <Buttons>
          <LikeButton
            id={company.id}
            isLike={company.like}
          />
          <AppLink to={ROUTES.profile(company.id)}>Profile</AppLink>
        </Buttons>
      </Body>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 26px 32px;
  background-color: white;
  border-radius: 6px;
  width: 48.98%;
  max-width: 536px;
  margin-bottom: 24px;
  @media (max-width: 768px) {
    width: 48.3%;
    padding: 24px 16px;
  }
  @media (max-width: 375px) {
    width: 100%;
    margin-bottom: 17px;
  }
`;

const Body = styled.div`
  display: grid;
  grid-gap: 24px 16px;
  grid-template-areas:
    'avatar info'
    'avatar buttons';
  @media (max-width: 768px) {
    grid-template-areas:
      'avatar info'
      'buttons buttons';
    grid-gap: 16px;
  }
`;

const CompanyFace = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 6px;
  grid-area: avatar;
  display: flex;
  flex-direction: column;
`;

const CompanyInfo = styled.div`
  grid-area: info;
`;

const Buttons = styled.div`
  grid-area: buttons;
  display: flex;
  justify-content: space-between;
`;

const AvatarWrapper = styled.div`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 26px 32px;
  text-align: center;
  @media (max-width: 768px) {
    margin: 22px;
  }
`;

const Rating = styled.div`
  border-top: 1px solid ${({ theme }) => theme.colors.line};
  padding: 9px 0;
  text-align: center;
`;

const Name = styled(AppText)`
  margin-bottom: 12px;
`;

const FocusText = styled(AppText)`
  margin-bottom: 4px;
`;

const Address = styled(AppText)`
  margin-bottom: 4px;
`;

const Phone = styled(AppText)`
  margin-bottom: 28px;
  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const BorderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgb(232, 232, 232);
  width: 100%;
  @media (max-width: 768px) {
    display: block;
    border: none;
  }
`;

const Focus = styled.div`
  border-right: 1px solid rgb(232, 232, 232);
  padding: 0px 20px 12px 0px;
  @media (max-width: 768px) {
    border: none;
    padding: 0;
    margin-bottom: 17px;
  }
`;

const Revenue = styled.div`
  padding: 0px 0px 12px 20px;
  @media (max-width: 768px) {
    padding: 0;
    display: flex;
    justify-content: space-between;
  }
`;

const RevenueText = styled(AppText)`
  margin-bottom: 4px;
  text-align: right;
`;

const StyledLink = styled(Link)`
  color: ${({ theme }) => theme.colors.black};
  padding-bottom: 2px;
  &:hover {
    border-bottom: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

export default CompanyCard;
