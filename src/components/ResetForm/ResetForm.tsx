import React, { FC, useState } from 'react';
import { Field, Form, FormProps } from 'react-final-form';
import styled from 'styled-components';
import { AppText } from '../../ui/AppText';
import { Button } from '../../ui/Button';
import { mailValidator } from '../../utils/validators';
import { InputField } from '../InputField/';
import { useHistory } from 'react-router-dom';
import { sendLinkToEmail } from '../../services/api';

const ResetForm: FC = () => {
  const history = useHistory();
  const [isLoading, setLoading] = useState(false);
  const handleFormSubmit = async ({ email }: FormProps) => {
    setLoading(true);
    try {
      await sendLinkToEmail({ email });
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
      history.push('/signin');
    }
  };
  return (
    <StyledWrapper>
      <BoldText type="Headline" tagName="h3">
        Password Reset
      </BoldText>
      <Text type="Body">Enter your email to receive instructions on how to reset your password.</Text>
      <Form
        onSubmit={handleFormSubmit}
        render={({ handleSubmit, invalid }) => {
          return (
            <>
              <InputWrapper>
                <Field
                  name="email"
                  validate={mailValidator}
                  render={({ input, meta }) => <InputField label="Email" input={input} meta={meta} />}
                />
              </InputWrapper>
              <Button onClick={handleSubmit} disabled={invalid} isLoading={isLoading}>
                Reset
              </Button>
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
