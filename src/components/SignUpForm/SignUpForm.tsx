import React, { FC } from 'react';
import { Field, Form } from 'react-final-form';
import styled from 'styled-components';
import { Button } from '../../ui/Button';
import { CheckBox } from '../../ui/CheckBox';
import { Input } from '../../ui/Input';
import { TabLink } from '../../ui/TabLink';

const SignUpForm: FC = () => {
  const handleFormSubmit = () => {
    console.log('lol')
  }
  return (
    <FormWrapper>
      <WelcomeText>Welcome to Accelerist</WelcomeText>
      <TabWrapper>
        <TabLink to="/registration" title="Register"/>
        <TabLink to="/login" title="Login" />
      </TabWrapper>
      <Form
        onSubmit={handleFormSubmit}
        render={({ handleSubmit }) => {
          return (
            <>
              <InputWrapper>
                <Field
                  name="email"
                  render={({ input, meta }) => {
                    return <Input label="Email" input={input} meta={meta} />;
                  }}
                />
              </InputWrapper>
              <Field
                name="password"
                type="password"
                render={({ input, meta}) => {
                  return <Input label="Password" input={input} meta={meta} />;
                }}
              />
              <CheckBox/>

            </>
          );
        }}
      />
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  width: 100%;
  max-width: 454px;
  background: rgb(255, 255, 255);
  border-radius: 6px;
  padding: 40px;
`;

const WelcomeText = styled.h3`
  font-size: 24px;
  line-height: 36px;
  font-weight: 500;
  text-align: center;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 20px;
`;

const TabWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 34px;
`;

const InputWrapper = styled.div`
  margin-bottom: 24px;
`;

export default SignUpForm;
