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

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const FiltersForm: FC = () => {
  const handleFormSubmit = (values: FormProps) => {
    const query = { ...values, revenue: undefined, maxRevenue: values.revenue[1], minRevenue: values.revenue[0] };
    console.log(query);
  };
  return (
    <Wrapper>
      <Title type="Headline">Filters</Title>
      <Form
        onSubmit={handleFormSubmit}
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
                <Field
                  name="revenue"
                  type="range"
                  render={({ ...outerProps }) => <InputRange label="Revenue" value={[0, 50]} {...outerProps} />}
                />
              </Grid>
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
  margin-bottom: 40px;
`;

export default FiltersForm;
