import React, { FC } from 'react';
import { Field, Form, FormProps, FormSpy } from 'react-final-form';
import styled from 'styled-components';
import { Button } from '../../ui/Button';
import { AppText } from '../../ui/AppText';
import { stringify } from 'query-string';
import { ethnicities } from './data';
import { MultiSelect } from '../MultiSelect';
import { SearchableMultiSelect } from '../SearchableMultiSelect';
import { InputRange } from '../InputRange';
import { TabRadioGroupe } from '../../ui/TabRadioGroupe';
import { useAppDispatch } from '../../store/hooks';
import { actions } from '../../store/ducks';

const FiltersForm: FC = () => {
  const initialValue = { relations: 'married', gender: 'male'};
  const dispatch = useAppDispatch();
  const handleFormSubmit = (values: FormProps) => {
    //const query = { ...values, revenue: undefined, maxRevenue: values.revenue[1], minRevenue: values.revenue[0] };
    console.log(values);
    dispatch(actions.company.getCompaniesRequest(stringify(values) + `&limit=12&page=1`))
  };
  return (
    <Form
      onSubmit={handleFormSubmit}
      initialValues={initialValue}
      keepDirtyOnReinitialize={true}
      render={({ handleSubmit, values }) => {
        return (
          <Wrapper>
            <Title type="Headline">Filters</Title>
            <SubTitle type="BodySelect">Company</SubTitle>
            {/* <Grid>
              <SearchableMultiSelect label="Industry" />
              <SearchableMultiSelect label="Geographic Location" />
              <MultiSelect name="scope" label="Scope" items={['first', 'second', 'last']} />
            </Grid>
            <Row>
              <Field
                name="revenue"
                type="range"
                min={0}
                max={50}
                render={({ ...outerProps }) => (
                  <InputRange value={values.revenue || [0, 50]} {...outerProps} label="Revenue" />
                )}
              />
            </Row> */}
            <SubTitle type="BodySelect">Customer Demographics</SubTitle>
            <Grid>
              <TabRadioGroupe name="gender" label="Gender" items={['Male', 'Female', 'Both']} />
              <TabRadioGroupe name="relations" label="Relations" items={['Married', 'Single']} />
            </Grid>
            <Row>
              <Field
                name="age"
                type="range"
                min={0}
                max={50}
                render={({ ...outerProps }) => <InputRange label="Age" value={values.age || [0, 50]} {...outerProps} />}
              />
            </Row>
            <ButtonWrapper>
              <SearchButton onClick={handleSubmit}>Search</SearchButton>
            </ButtonWrapper>
          </Wrapper>
        );
      }}
    />
  );
};

const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px 40px 32px 40px;
  border-radius: 6px;
  width: 100%;
  margin-bottom: 60px;
`;

const Title = styled(AppText)`
  margin-bottom: 18px;
`;

const SubTitle = styled(AppText)`
  margin-bottom: 16px;
`;

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 23px;
  margin-bottom: 24px;
`;

const Row = styled.div`
  width: 48.2%;
  margin-bottom: 31px;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const ButtonWrapper = styled.div`
  width: 48.2%;
  margin-top: 40px;
`;

const SearchButton = styled(Button)`
  font-size: 16px;
  line-height: 24px;
  font-family: Rubik-Medium;
`;

export default FiltersForm;
