import React, { FC } from 'react';
import { Field, Form, FormProps } from 'react-final-form';
import styled from 'styled-components';
import { Button } from '../../ui/Button';
import { AppText } from '../../ui/AppText';
import { stringify } from 'query-string';
import { ethnicities } from './data';
import { MultiSelect } from '../MultiSelect';
import { SearchableMultiSelect } from '../SearchableMultiSelect';
import { InputRange } from '../InputRange';
import { TabRadio } from '../../ui/TabRadio';
import { TabRadioGroupe } from '../../ui/TabRadioGroupe';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const FiltersForm: FC = () => {
  const initialValue = {relations: 'married', gender: 'male'};
  const handleFormSubmit = (values: FormProps) => {
    //const query = { ...values, revenue: undefined, maxRevenue: values.revenue[1], minRevenue: values.revenue[0] };
    console.log(values);
  };
  return (
    <Wrapper>
      <Title type="Headline">Filters</Title>
      <Form
        onSubmit={handleFormSubmit}
        initialValues={initialValue}
        render={({ handleSubmit, pristine }) => {
          return (
            <>
              <SubTitle type="BodySelect">Company</SubTitle>
              <Grid>
                <SearchableMultiSelect label="Industry" />
                <SearchableMultiSelect label="Geographic Location" />
                <Field
                  name="a"
                  render={({ ...outerProps }) => <MultiSelect label="Scope" data={ethnicities} {...outerProps} />}
                />

                <Field
                  name="s"
                  render={({ ...outerProps }) => <MultiSelect label="SDG Goals" data={ethnicities} {...outerProps} />}
                />
                <Field
                  name="d"
                  render={({ ...outerProps }) => <MultiSelect label="CDR Focus" data={ethnicities} {...outerProps} />}
                />
                <Field
                  name="f"
                  render={({ ...outerProps }) => (
                    <MultiSelect label="Total Annual Contributions" data={ethnicities} {...outerProps} />
                  )}
                />
              </Grid>
              <Row>
                <Field
                  name="revenue"
                  type="range"
                  render={({ ...outerProps }) => <InputRange value={[0, 50]} label="Revenue" {...outerProps} />}
                />
              </Row>
              <SubTitle type="BodySelect">Customer Demographics</SubTitle>
              <Grid>
                <TabRadioGroupe name="gender" label="Gender" items={['Male', 'Female', 'Both']}/>
                <TabRadioGroupe name="relations" label="Relations" items={['Married', 'Single']}/>
                <Field
                  name="j"
                  render={({ ...outerProps }) => (
                    <MultiSelect label="Total Annual Contributions" data={ethnicities} {...outerProps} />
                  )}
                />
                <Field
                  name="k"
                  render={({ ...outerProps }) => (
                    <MultiSelect label="Total Annual Contributions" data={ethnicities} {...outerProps} />
                  )}
                />
              </Grid>
              <Row>
                <Field
                  name="age"
                  type="range"
                  render={({ ...outerProps }) => <InputRange label="Age" value={[0, 50]} {...outerProps} />}
                />
              </Row>
              <ButtonWrapper>
                <SearchButton onClick={handleSubmit}>Search</SearchButton>
              </ButtonWrapper>
            </>
          );
        }}
      />
    </Wrapper>
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
  @media(max-width: 768px) {
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
