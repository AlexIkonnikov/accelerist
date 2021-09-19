import React, { FC, useEffect, useState } from 'react';
import styled from 'styled-components';
import { CompanyCard } from '../ui/CompanyCard';
import { Counter } from '../ui/Counter';
import { ReactComponent as Save } from './../assets/icons/folder-plus.svg';
import { ReactComponent as Mail } from './../assets/icons/mail.svg';
import { ReactComponent as Upload } from '../assets/icons/upload.svg';
import { Pagination } from '../components/Pagination';
import { Container } from '../ui/Container';
import { SearchForm } from '../components/SearchForm';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { actions, selectors } from '../store/ducks';
import { Loader } from '../ui/Loader';
import { stringify, parse } from 'query-string';

const SearchPage: FC = () => {
  const dispatch = useAppDispatch();
  const [page, setPage] = useState(1);

  const company = useAppSelector(selectors.company.selectCompany);
  const meta = useAppSelector(selectors.company.selectMeta);
  const status = useAppSelector(selectors.company.selectStatus);

  const getCompanies = (page?: number) => {
    const params = parse(location.search);
    const query = stringify({ ...params, page: page || 1, limit: 12 });
    history.replaceState(location.search, '', '?' + query);
    dispatch(actions.company.getCompaniesRequest(query));
  };

  useEffect(() => {
    getCompanies();
  }, []);

  return (
    <>
      <SearchForm />
      <Container variant={2}>
        {status === 'pending' ? (
          <LoaderWrapper>
            <Loader size="big" />
          </LoaderWrapper>
        ) : (
          <>
            <Counter count={meta.totalItems} />
            <Wrapper>
              <BtnWrapper>
                <BtnIcon>
                  <SaveIcon />
                  <Text>Save List</Text>
                </BtnIcon>
                <BtnIcon disabled={true}>
                  <UploadIcon />
                  <Text>Export to Excel</Text>
                </BtnIcon>
                <BtnIcon disabled={true}>
                  <MailIcon />
                  <Text>Accelerist Support</Text>
                </BtnIcon>
              </BtnWrapper>
              <DesktopPagination meta={meta} onToggle={getCompanies} />
            </Wrapper>
            <CardWrapper>
              {company.map((cmp) => {
                return <CompanyCard key={cmp.id} company={cmp} />;
              })}
            </CardWrapper>
          </>
        )}
      </Container>
    </>
  );
};

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
  @media (max-width: 375px) {
    display: none;
  }
`;

const MobilePagination = styled(Pagination)`
  display: none;
  text-align: center;
  @media (max-width: 375px) {
    display: flex;
    justify-content: center;
    padding-bottom: 27px;
  }
`;

const LoaderWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default SearchPage;
