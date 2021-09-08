import React, { FC } from 'react';
import styled from 'styled-components';
import { Avatar } from '../ui/Avatar';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import {ReactComponent as Linkedin} from './../assets/icons/linkedin.svg';
import { TitleBlock } from '../ui/TitleBlock';

const ProfilePage: FC = () => {
  return (
    <>
      <TitleBlock title="Corparate Profile"/>
      <Container variant={2}>
        <ProfileHeader>
          <Wrapper>
            <Avatar isBig={true}/>
            <InfoBlock>
              <BoldText>Apple</BoldText>
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
          <BoldText>Business Description Products</BoldText>
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

const BoldText = styled.p`
  font-size: 24px;
  line-height: 35px;
  font-family: Rubik-Medium;
  color: ${({theme}) => theme.colors.black};
  margin-bottom: 4px;
`;

const ShortDescription = styled.p`
  font-size: 12px;
  line-height: 18px;
  color: ${({theme}) => theme.colors.darkGray};
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

export default ProfilePage;
