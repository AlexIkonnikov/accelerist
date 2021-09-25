import React, { FC } from 'react';
import { Field, Form, FormProps } from 'react-final-form';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { AppText } from '../../ui/AppText';
import { Button } from '../../ui/Button';
import { CheckBox } from '../../ui/CheckBox';
import { FormWrapper } from '../../ui/FormWrapper';
import { InputField } from '../InputField';
import { actions, selectors } from '../../store/ducks';
import { mailValidator, requireField } from '../../utils/validators';
import { ROUTES } from '../../route';

const SignInForm: FC = () => {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectors.user.selectStatus);
  const isLoading = status === 'pending';
  const handleFormSubmit = ({ email, password }: FormProps) => {
    dispatch(actions.user.signInRequest({ email, password }));
  };
  return (
    <FormWrapper>
      <Form
        onSubmit={handleFormSubmit}
        render={({ handleSubmit, invalid }) => {
          return (
            <>
              <InputWrapper>
                <Field
                  name="email"
                  validate={mailValidator}
                  render={({ ...outerProps }) => <InputField label="Email" {...outerProps} />}
                />
              </InputWrapper>
              <Field
                name="password"
                type="password"
                validate={requireField}
                render={({ ...outerProps }) => <InputField label="Password" {...outerProps} />}
              />
              <Wrapper>
                <Field name="remember" type="checkbox" render={({input}) => <CheckBox text="Remember" {...input}/>} />
                <NavLink to={ROUTES.resetPassword}>
                  <AppText>Forgot Password?</AppText>
                </NavLink>
              </Wrapper>
              <Button onClick={handleSubmit} disabled={invalid} isLoading={isLoading}>
                Login
              </Button>
            </>
          );
        }}
      />
    </FormWrapper>
  );
};

const InputWrapper = styled.div`
  margin-bottom: 24px;
  @media (max-width: 375px) {
    margin-bottom: 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  margin: 12px 0 61px;
  @media (max-width: 375px) {
    margin-bottom: 49px;
  }
`;

export default SignInForm;
