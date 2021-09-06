import React, { FC } from 'react';
import { Field, Form } from 'react-final-form';
import styled from 'styled-components';
import { Button } from '../../ui/Button';
import { InputField } from '../InputField/';

const ResetForm: FC = () => {
  const handleFormSubmit = () => {
    console.log();
  };
  return (
    <StyledWrapper>
      <BoldText>Password Reset</BoldText>
      <Text>Enter your email to receive instructions on how to reset your password.</Text>
      <Form
        onSubmit={handleFormSubmit}
        render={({ handleSubmit }) => {
          return (
            <>
              <InputWrapper>
                <Field
                  name="email"
                  render={({ input, meta }) => <InputField label="Email" input={input} meta={meta} />}
                />
              </InputWrapper>
              <Button onClick={handleSubmit}>Reset</Button>
            </>
          );
        }}
      />
    </StyledWrapper>
  );
};

const InputWrapper = styled.div`
  margin: 32px 0 40px;
`;

const BoldText = styled.h3`
  font-size: 24px;
  line-height: 36px;
  font-size: Rubik-Medium;
  text-align: left;
  color: ${({ theme }) => theme.colors.black};
  margin-bottom: 20px;
`;

const Text = styled.p`
  font-size: 16px;
  line-height: 24px;
  color: ${({ theme }) => theme.colors.black};
  margin-top: 8px;
`;

const StyledWrapper = styled.div`
  max-width: 454px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  padding: 40px;
`;

export default ResetForm;
