import React, { FC, useEffect, useState } from 'react';
import { Container } from '../ui/Container';
import { Counter } from '../ui/Counter';
import { Filters } from '../ui/Filters';
import { TitleBlock } from '../ui/TitleBlock';
import { ReactComponent as Upload } from '../assets/icons/upload.svg';
import styled from 'styled-components';
import { CompanyCard } from '../ui/CompanyCard';
import { Pagination } from '../components/Pagination';
import { Button } from '../ui/Button';
import { ReactComponent as Pen } from './../assets/icons/pen.svg';
import { useParams } from 'react-router-dom';
import { getSaveListById } from '../services/api';
import { IFilters } from '../store/savedList/types';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { actions, selectors } from '../store/ducks';
import { stringify, parse } from 'query-string';

const ProspectPage: FC = () => {
  const {id} = useParams<{id: string}>();
  const dispatch = useAppDispatch();
  const company = useAppSelector(selectors.company.selectCompany)
  const meta = useAppSelector(selectors.company.selectMeta)
  const status = useAppSelector(selectors.company.selectStatus)
  const [filters, setFilters] = useState<IFilters>()

  useEffect(() => {
    const getList = async () => {
      const response = await getSaveListById(id);
      setFilters(response.data.filters)
    }
    getList();

  }, [])

  useEffect(() => {
    const query = stringify({page: 1, limit:12, ...filters});
    dispatch(actions.company.getCompaniesRequest(query));
  }, [filters])

  return (
    <>
      <TitleBlock
        title="Prospect"
        render={() => {
          return (
            <ButtonWrapper>
              <EditButton variant="secondary">
                <PenIcon />
                Edit
              </EditButton>
              <DeleteButton variant="secondary">Delete</DeleteButton>
            </ButtonWrapper>
          );
        }}
      />
      <Container variant={2}>
        <Counter count={meta.totalItems} />
        <FiltersWrapper>
          <Filters />
        </FiltersWrapper>
        <Row>
          <BtnIcon>
            <UploadIcon />
            <Text>Export to Excel</Text>
          </BtnIcon>
          <Pagination meta={meta} />
        </Row>
        <CardWrapper>
          {company.map((item) => <CompanyCard key={item.id} company={item} />)}
        </CardWrapper>
      </Container>
    </>
  );
};

const ButtonWrapper = styled.div`
  margin-left: auto;
  display: flex;
`;

const PenIcon = styled(Pen)`
  margin-right: 10px;
`;

const EditButton = styled(Button)`
  padding: 9px 16px;
  display: flex;
  align-items: center;
  margin-right: 8px;
`;

const DeleteButton = styled(Button)`
  border: none;
  padding: 9px 20px;
  color: ${({ theme }) => theme.colors.red};
`;

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
