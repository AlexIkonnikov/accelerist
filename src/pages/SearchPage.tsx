import React, { FC } from 'react';
import styled from 'styled-components';
import { CompanyCard } from '../ui/CompanyCard';
import { Counter } from '../ui/Counter';
import { TitleBlock } from '../ui/TitleBlock';
import { ReactComponent as Save } from './../assets/icons/folder-plus.svg';
import { ReactComponent as Mail } from './../assets/icons/mail.svg';
import { ReactComponent as Upload } from '../assets/icons/upload.svg';
import { Pagination } from '../components/Pagination';
import { SlidersIcon } from '../ui/icons/SlidersIcon';
import { SearchBar } from '../components/SearchBar';
import { Container } from '../ui/Container';

const SearchPage: FC = () => {
  return (
    <>
      <TitleBlock title="Search" render={() => {
        return (
          <SearchBarWrapper>
            <SearchBar render={() => <StyledSlidersIcon/>}/>
          </SearchBarWrapper>
        )
      }}/>
      <Container variant={2}>
        <Counter count={0} />
        <Wrapper>
          <BtnWrapper>
            <BtnIcon>
              <SaveIcon />
              <Text>Save List</Text>
            </BtnIcon>
            <BtnIcon disabled={true}>
              <UploadIcon/>
              <Text>Export to Excel</Text>
            </BtnIcon>
            <BtnIcon disabled={true}>
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
      </Container>
    </>
  );
};

const SearchBarWrapper = styled.div`
  margin-left: 82px;
  width: 100%;
  margin-right: 173px;
  min-width: 200px;
  @media (max-width: 768px) {
    margin-left: 32px;
    margin-right: 0;
  }
  @media (max-width: 375px) {
    margin: 8px 0 0 0;
  }
`;

const StyledSlidersIcon = styled(SlidersIcon)`
  margin-right: 15px;
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
  &:disabled {
    cursor: no-drop;
  }
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
