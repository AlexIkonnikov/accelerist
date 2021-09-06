import React, { FC } from 'react';
import { Field, Form, FormProps } from 'react-final-form';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../../ui/Button';
import { CheckBox } from '../../ui/CheckBox';
import { FormWrapper } from '../../ui/FormWrapper';
import { Input } from '../../ui/Input';
import { PasswordInput } from '../PasswordInput/PasswordInput';

const SignInForm: FC = () => {
  const handleFormSubmit = (values: FormProps) => {
    console.log(values);
  };
  return (
    <FormWrapper>
      <Form
        onSubmit={handleFormSubmit}
        render={({ handleSubmit }) => {
          return (
            <>
              <InputWrapper>
                <Field name="email" render={({...outerProps}) => <Input label="Email" {...outerProps} />} />
              </InputWrapper>
              <Field
                name="password"
                type="password"
                render={({...outerProps}) => <PasswordInput label="Password" {...outerProps} />}
              />
              <Wrapper>
                <Field name="remember" type="checkbox" render={CheckBox} />
                <ForgotLink to="/reset">Forgot Password?</ForgotLink>
              </Wrapper>
              <Button onClick={handleSubmit}>Login</Button>
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

const ForgotLink = styled(NavLink)`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

export default SignInForm;
