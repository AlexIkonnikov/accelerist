import React, { FC } from 'react';
import { Field, Form } from 'react-final-form';
import styled from 'styled-components';
import { AppText } from '../../ui/AppText';
import { Button } from '../../ui/Button';
import { InputField } from '../InputField/';

const ResetForm: FC = () => {
  const handleFormSubmit = () => {
    console.log();
  };
  return (
    <StyledWrapper>
      <BoldText type="Headline" tagName="h3">Password Reset</BoldText>
      <Text type="Body">Enter your email to receive instructions on how to reset your password.</Text>
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

const BoldText = styled(AppText)`
  text-align: left;
  margin-bottom: 20px;
`;

const Text = styled(AppText)`
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
