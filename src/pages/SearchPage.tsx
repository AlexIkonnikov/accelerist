import React, { FC } from 'react';
import styled from 'styled-components';
import { MainLayout } from '../layouts/MainLayout';
import { CompanyCard } from '../ui/CompanyCard';
import { SearchResult } from '../ui/SearchResult';
import { TitleBlock } from '../ui/TitleBlock';
import { ReactComponent as Save } from './../assets/icons/folder-plus.svg';
import { ReactComponent as Mail } from './../assets/icons/mail.svg';
import { ReactComponent as Upload } from '../assets/icons/upload.svg';
import { Pagination } from '../components/Pagination';

const SearchPage: FC = () => {
  return (
    <MainLayout>
      <TitleBlock title="Search" />
      <Inner>
        <SearchResult count={0} />
        <Wrapper>
          <BtnWrapper>
            <BtnIcon>
              <SaveIcon />
              <Text>Save List</Text>
            </BtnIcon>
            <BtnIcon>
              <UploadIcon/>
              <Text>Export to Excel</Text>
            </BtnIcon>
            <BtnIcon>
              <MailIcon/>
              <Text>Accelerist Support</Text>
            </BtnIcon>
          </BtnWrapper>
          <DesktopPagination/>
        </Wrapper>
        <CardWrapper>
          <CompanyCard />
          <CompanyCard />
          <CompanyCard />
          <MobilePagination/>
        </CardWrapper>
      </Inner>
    </MainLayout>
  );
};

const Inner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 284px 0 60px;
  @media (max-width: 768px) {
    max-width: 768px;
    padding: 0 32px;
  }
  @media (max-width: 375px) {
    max-width: 375px;
    padding: 0 16px;
  }
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 375px) {
    display: block;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 26px 0;
`;

const BtnWrapper = styled.div`
  display: flex;
`;

const BtnIcon = styled.button`
  padding: 0;
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 35px;
`;

const SaveIcon = styled(Save)`
  margin-right: 8px;
`;

const UploadIcon = styled(Upload)`
  margin-right: 8px;
`;

const MailIcon = styled(Mail)`
  margin-right: 8px;
`;

const Text = styled.span`
  font-size: 12px;
  line-height: 18px;
`;

const DesktopPagination = styled(Pagination)`
  @media(max-width: 375px) {
    display: none;
  }
`;

const MobilePagination = styled(Pagination)`
  display: none;
  text-align: center;
  @media(max-width: 375px) {
    display: flex;
    justify-content: center;
    padding-bottom: 27px;
  }
`;

export default SearchPage;
