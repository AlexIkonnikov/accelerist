import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { HeartIcon } from './icons/HeartIcon';
import { TransparentButton } from './TransparentButton';

export const CompanyCard: FC = () => {
  return (
    <Wrapper>
      <Body>
        <CompanyFace>
          <AvatarWapper>
            <div>Аватар</div>
          </AvatarWapper>
          <Rating>
            <RatingText>Priority Ranking</RatingText>
            <RatingNum>12</RatingNum>
          </Rating>
        </CompanyFace>
        <CompanyInfo>
          <Name>Apple</Name>
          <Address>4140 Parker Rd. Allentown, New Mexico 31134</Address>
          <Phone>(671) 555-0110</Phone>
          <BorderWrapper>
            <Focus>
              <FocusText>CSR Focus</FocusText>
              <TagWrapper>
                <Tag className="tag">Health</Tag>
                <Tag className="tag">Animals</Tag>
                <Tag className="tag">Education</Tag>
              </TagWrapper>
            </Focus>
            <Revenue>
              <RevenueText>Revenue</RevenueText>
              <RevenueNum>$ 434,476</RevenueNum>
            </Revenue>
          </BorderWrapper>
        </CompanyInfo>
        <Buttons>
          <HeartWrapper>
            <HeartIcon />
          </HeartWrapper>
          <TransparentButton>Profile</TransparentButton>
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
  border: 1px solid #e8e8e8;
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
const AvatarWapper = styled.div`
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
  border-top: 1px solid #e8e8e8;
  padding: 9px 0;
  text-align: center;
`;

const grayText = css`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: 12px;
  line-height: 18px;
`;

const boldText = css`
  font-size: 16px;
  line-height: 24px;
  font-family: Rubik-Medium;
  color: ${({ theme }) => theme.colors.black};
`;

const RatingText = styled.p`
  ${grayText}
`;

const RatingNum = styled.span`
  ${boldText}
`;

const Name = styled.p`
  ${boldText}
  margin-bottom: 12px;
`;

const Address = styled.p`
  ${grayText}
  margin-bottom: 4px;
`;

const Phone = styled.p`
  ${grayText}
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

const FocusText = styled.p`
  ${grayText}
  margin-bottom: 4px;
`;

const RevenueText = styled.p`
  ${grayText}
  margin-bottom: 4px;
  text-align: right;
`;

const smallBoldText = css`
  ${boldText}
  font-size: 12px;
  line-height: 18px;
`;

const TagWrapper = styled.div`
  ${smallBoldText}
  font-size: 12px;
  line-height: 18px;
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const Tag = styled.span`
  padding-right: 16px;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    right: 6px;
    top: 5px;
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #c4c4c4;
  }

  &.tag:last-child {
    padding: 0;
    &:after {
      display: none;
    }
  }
  @media (max-width: 768px) {
    padding-right: 11px;
    &:after {
      right: 4px;
      top: 7px;
    }
  }
`;

const RevenueNum = styled.span`
  ${smallBoldText}
`;

const HeartWrapper = styled.div`
  width: 36px;
  height: 36px;
  border: 1px solid #e8e8e8;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
  @media(max-width: 768px) {
    margin-right: 12px;
  }
  @media(max-width: 375px) {
    margin-right: 15px;
  }
`;
