import React, { FC, useEffect } from 'react';
import { Container } from '../ui/Container';
import { Counter } from '../ui/Counter';
import { Filters } from '../ui/Filters';
import { TitleBlock } from '../ui/TitleBlock';
import { ReactComponent as Upload } from '../assets/icons/upload.svg';
import styled from 'styled-components';
import { CompanyCard } from './../components/CompanyCard';
import { Pagination } from '../components/Pagination';
import { useParams } from 'react-router-dom';
import { getSaveListById } from '../services/api';
import { IFilters, IList } from '../store/savedList/types';
import { ParsedQuery } from 'query-string';
import { Loader } from '../ui/Loader';
import { createInitParams, mergeWithExisting } from '../utils/queryParams';
import {useAppDispatch, useAppSelector} from './../store/hooks';
import {actions, selectors} from './../store/ducks';
import { EditListForm } from '../components/EditListForm';

const ProspectPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useAppDispatch();
  const list = useAppSelector(selectors.saveList.selectListById(id));
  const company = useAppSelector(selectors.company.selectCompany);
  const status = useAppSelector(selectors.company.selectStatus);
  const meta = useAppSelector(selectors.company.selectMeta);

  const getCompany = (query: ParsedQuery<string | number>) => {
    const params = mergeWithExisting(query);
    dispatch(actions.company.getCompaniesRequest({ ...list?.filters, ...params }));
  };

  useEffect(() => {
    const query = createInitParams({ page: 1, limit: 12 });
    getCompany(query);
  }, []);

  return (
    <>
      <TitleBlock
        render={() => <EditListForm name={list?.name || 'No name'}/>}
      />
      <Container variant={2}>
        {status === 'pending' ? (
          <Loader size="big" variant="secondary" />
        ) : (
          <>
            <Counter count={meta?.totalItems || 0} />
            <FiltersWrapper>
              <Filters filters={list?.filters} />
            </FiltersWrapper>
            <Row>
              <BtnIcon>
                <UploadIcon />
                <Text>Export to Excel</Text>
              </BtnIcon>
              <Pagination meta={meta} onToggle={getCompany} />
            </Row>
            <CardWrapper>{company && company.map((item) => <CompanyCard key={item.id} company={item} />)}</CardWrapper>
          </>
        )}
      </Container>
    </>
  );
};

const FiltersWrapper = styled.div`
  margin: 24px 0;
`;

const Row = styled.div`
  margin-bottom: 27px;
  display: flex;
  justify-content: space-between;
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

const UploadIcon = styled(Upload)`
  margin-right: 8px;
`;

const Text = styled.span`
  font-size: 12px;
  line-height: 18px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  @media (max-width: 375px) {
    display: block;
  }
`;

export default ProspectPage;
