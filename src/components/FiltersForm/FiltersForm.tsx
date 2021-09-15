import React, { FC } from 'react';
import { Field, Form, FormProps } from 'react-final-form';
import styled from 'styled-components';
import { Button } from '../../ui/Button';
import { AppSelect } from '../../ui/AppSelect';
import { AppText } from '../../ui/AppText';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const FiltersForm: FC = () => {
  const handleFormSubmit = (values: FormProps) => {console.log(values.lol)}
  return (
    <Wrapper>
      <Title type="Headline">Filters</Title>
      <Form
        onSubmit={handleFormSubmit}
        render={({handleSubmit}) => {
          return (
            <>
            <Field
              name="lol"
              render={({input}) => <AppSelect options={options} {...input} />}
            />
            <Button onClick={handleSubmit}>Send</Button>
            </>
          )
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
`

export default FiltersForm;
