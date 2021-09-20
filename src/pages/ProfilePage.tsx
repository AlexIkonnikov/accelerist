import React, { FC, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { ReactComponent as Linkedin } from './../assets/icons/linkedin.svg';
import { TitleBlock } from '../ui/TitleBlock';
import { AppText } from '../ui/AppText';
import { Avatar } from '../ui/Avatar';
import { useParams } from 'react-router-dom';
import { getCompanyById } from '../services/api';
import { ICompany } from '../store/company/types';
import { Loader } from '../ui/Loader';
import {ReactComponent as Arrow} from './../assets/icons/arrow.svg';

const ProfilePage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [company, setCompany] = useState<ICompany | undefined>(undefined);

  useEffect(() => {
    const getCompany = async () => {
      const response = await getCompanyById(id);
      setCompany(response.data);
    };
    getCompany();
  }, []);
  return (
    <>
      <TitleBlock title="Corparate Profile" renderBefore={() => <BackArrow onClick={() => {history.back()}} />} />
      <Container variant={2}>
        {company === undefined ? (
          <Loader size="big" variant="secondary" />
        ) : (
          <>
            <ProfileHeader>
              <Wrapper>
                <AvatarWrapper>
                  <Avatar />
                </AvatarWrapper>
                <InfoBlock>
                  <Name type="Headline">{company?.name}</Name>
                  <ShortDescription>{company?.primaryIndustry.join(',')}</ShortDescription>
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
              <Title type="Headline" tagName="h3">
                Business Description Products
              </Title>
              <SubTitle type="BodySelect">Description</SubTitle>
              <AppText type="BodyBlack" CSS={mb24}>{company?.descriptionList}</AppText>
            </ProfileBody>
          </>
        )}
      </Container>
    </>
  );
};

const ProfileHeader = styled.div`
  padding: 40px 33px 40px 40px;
  background-color: #f2f2f2;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

const AvatarWrapper = styled.div`
  width: 100px;
  height: 100px;
  margin-right: 24px;
`;

const ProfileBody = styled.div`
  padding: 32px 40px;
  border-right: 1px solid ${({ theme }) => theme.colors.line};
  background-color: white;
  margin-right: 366px;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
`;

const InfoBlock = styled.div`
  flex-grow: 1;
`;

const BlockButton = styled(Button)`
  background: white;
  border: none;
  padding: 9px 37px;
  width: auto;
  color: ${({ theme }) => theme.colors.red};
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

const mb24 = css`
  margin-bottom: 24px;
`;

const Title = styled(AppText)`
  ${mb24}
`;

const SubTitle = styled(AppText)`
  margin-bottom: 16px;
`;

const BackArrow = styled(Arrow)`
  transform: rotate(-180deg);
  margin-right: 22px;
  cursor: pointer;
`;

export default ProfilePage;
