import React, { FC, useState } from 'react';
import { Field, Form, FormProps } from 'react-final-form';
import styled from 'styled-components';
import { passwordChangeRequest } from '../../services/api';
import { AppText } from '../../ui/AppText';
import { Button } from '../../ui/Button';
import { FormWrapper } from '../../ui/FormWrapper';
import { confirm, requireField } from '../../utils/validators';
import { InputField } from '../InputField';
import toast from './../../utils/Toaster';

const NewPasswordForm: FC = () => {
  const [isLoading, setLoading] = useState(false);
  const handleSubmitForm = async ({ password, confirmPassword }: FormProps) => {
    setLoading(true);
    try {
      await passwordChangeRequest({ password, passwordConfirmation: confirmPassword });
      toast.success('Password changed successfully!');
    } catch (e) {
      toast.error(e + '');
    } finally {
      setLoading(false);
    }
  };
  return (
    <FormWrapper
      render={() => (
        <>
          <BoldText type="Headline">New Password</BoldText>
          <Text type="BodyBlack">Сome up with a new password</Text>
          <Form
            onSubmit={handleSubmitForm}
            render={({ handleSubmit, invalid }) => {
              return (
                <>
                  <InputWrapper>
                    <Field
                      name="password"
                      type="password"
                      validate={requireField}
                      render={({ input, meta }) => {
                        return <InputField label="Password" input={input} meta={meta} />;
                      }}
                    />
                  </InputWrapper>
                  <InputWrapper>
                    <Field
                      name="confirmPassword"
                      type="password"
                      validate={confirm}
                      render={({ input, meta }) => {
                        return <InputField label="Confirm password" input={input} meta={meta} />;
                      }}
                    />
                  </InputWrapper>
                  <Button onClick={handleSubmit} disabled={invalid} isLoading={isLoading}>
                    Done
                  </Button>
                </>
              );
            }}
          />
        </>
      )}
    />
  );
};

const InputWrapper = styled.div`
  margin-bottom: 24px;
  @media (max-width: 375px) {
    margin-bottom: 20px;
  }
`;

const BoldText = styled(AppText)`
  margin-bottom: 8px;
`;

const Text = styled(AppText)`
  margin-bottom: 32px;
`;

export default NewPasswordForm;
