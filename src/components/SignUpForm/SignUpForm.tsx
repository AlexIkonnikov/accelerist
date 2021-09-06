import React, { FC } from 'react';
import { Field, Form } from 'react-final-form';
import styled from 'styled-components';
import { Button } from '../../ui/Button';
import { FormWrapper } from '../../ui/FormWrapper';
import { Input } from '../../ui/Input';
import { PasswordInput } from '../PasswordInput/PasswordInput';

const SignUpForm: FC = () => {
  const handleFormSubmit = () => {
    console.log('lol');
  };
  return (
    <FormWrapper>
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
                render={({ input, meta }) => {
                  return <PasswordInput label="Password" input={input} meta={meta} />;
                }}
              />
              <TextWrapper>
                I agree that by clicking <b>“Registration”</b> I accept the Terms Of Service and Privacy Policy
              </TextWrapper>
              <Button onClick={handleSubmit}>Registration</Button>
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

const TextWrapper = styled.p`
  text-align: center;
  font-size: 12px;
  line-height: 18px;
  margin: 40px 0 16px;
  padding: 0 7px;
`;

export default SignUpForm;
