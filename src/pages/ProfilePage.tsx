import React, { FC } from 'react';
import styled from 'styled-components';
import { Avatar } from '../ui/Avatar';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import {ReactComponent as Linkedin} from './../assets/icons/linkedin.svg';
import { TitleBlock } from '../ui/TitleBlock';
import { AppText } from '../ui/AppText';

const ProfilePage: FC = () => {
  return (
    <>
      <TitleBlock title="Corparate Profile"/>
      <Container variant={2}>
        <ProfileHeader>
          <Wrapper>
            <Avatar isBig={true}/>
            <InfoBlock>
              <Name type="Headline">Apple</Name>
              <ShortDescription>Administration, Business Support and Waste Management Services</ShortDescription>
              <IconWrapper>
                <LinkedinIcon></LinkedinIcon>
                <LinkedinIcon></LinkedinIcon>
                <LinkedinIcon></LinkedinIcon>
              </IconWrapper>
            </InfoBlock>
            <BlockButton variant="secondary">Block</BlockButton>
          </Wrapper>
        </ProfileHeader>
        <ProfileBody>
          <Title type="Headline" tagName="h3">Business Description Products</Title>
          <SubTitle type="BodySelect">Description</SubTitle>
          <Text type="BodyBlack">We are a national, award-winning nonprofit that provides the most flexible and accountable funding for K-12 teachers and schools with our proprietary, easy-to-use education fundraising platform. Through local impact, our goal is to give every child the tools they deserve to succeed in school.</Text>
          <SubTitle type="BodySelect">Products & Brand Descriptions</SubTitle>
          <Text type="BodyBlack">We are a national, award-winning nonprofit that provides the most flexible and accountable funding for K-12 teachers and schools with our proprietary, easy-to-use education fundraising platform. Through local impact, our goal is to give every child the tools they deserve to succeed in school.</Text>
          <SubTitle type="BodySelect">Structure</SubTitle>
          <Text type="BodyBlack">Sole proprietorship</Text>
        </ProfileBody>
      </Container>
    </>
  );
};

const ProfileHeader = styled.div`
  padding: 40px 33px 40px 40px;
  background-color: #F2F2F2;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

const ProfileBody = styled.div`
  padding: 32px 40px 0 40px;
  border-right: 1px solid ${({theme}) => theme.colors.line};
  background-color: white;
  margin-right: 366px;
`

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const InfoBlock = styled.div`
  margin-left: 24px;
  flex-grow: 1;
`;

const BlockButton = styled(Button)`
  background: white;
  border: none;
  padding: 9px 37px;
  width: auto;
  color: ${({theme}) => theme.colors.red};
`;

const Name = styled(AppText)`
  margin-bottom: 4px;
`;

const ShortDescription = styled(AppText)`
  margin-bottom: 20px;
`;

const IconWrapper = styled.div`
  height: 20px;
  display: flex;
  align-items: center;
`;

const LinkedinIcon = styled(Linkedin)`
  width: 20px;
  height: 20px;
  margin-right: 12px;
`;

const Title = styled(AppText)`
  margin-bottom: 24px;
`;

const SubTitle = styled(AppText)`
  margin-bottom: 16px;
`;

const Text = styled(AppText)`
  margin-bottom: 24px;
`

export default ProfilePage;