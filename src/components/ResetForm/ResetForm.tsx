import React, { FC, useEffect, useState } from 'react';
import { Field, Form, FormProps } from 'react-final-form';
import styled from 'styled-components';
import { AppText } from '../../ui/AppText';
import { Button } from '../../ui/Button';
import { mailValidator } from '../../utils/validators';
import { InputField } from '../InputField/';
import { sendLinkToEmail } from '../../services/api';
import { FormWrapper } from '../../ui/FormWrapper';
import toast from './../../utils/Toaster';

const ResetForm: FC = () => {
  const [timer, setTimer] = useState(0);
  const textBeforeSubmit = 'Enter your email to receive instructions on how to reset your password.'
  const textAfterSubmit = 'A link was sent to your email to confirm password reset and create a new one';
  const timerTemplate = timer < 10 ? `00:0${timer}` : `00:${timer}`;
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    if (timer > 0) {
      setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
    }
  }, [timer]);

  const handleFormSubmit = async ({ email }: FormProps) => {
    setLoading(true);
    try {
      await sendLinkToEmail({ email });
      toast.info(textAfterSubmit);
    } catch (e) {
      toast.error(e + '');
    } finally {
      setLoading(false);
      setTimer(40);
    }
  };
  return (
    <FormWrapper
      render={() => (
        <>
          <BoldText type="Headline" tagName="h3">
            Password Reset
          </BoldText>
          <Text type="Body">{timer === 0 ? textBeforeSubmit : textAfterSubmit}</Text>
          <Form
            onSubmit={handleFormSubmit}
            render={({ handleSubmit, invalid }) => {
              return (
                <>
                  {timer === 0 && (
                    <InputWrapper>
                      <Field
                        name="email"
                        validate={mailValidator}
                        render={({ input, meta }) => <InputField label="Email" input={input} meta={meta} />}
                      />
                    </InputWrapper>
                  )}
                  <Button onClick={handleSubmit} disabled={invalid || timer > 0} isLoading={isLoading}>
                    {timer > 0 ? timerTemplate : 'Reset'}
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
  margin: 32px 0 40px;
`;

const BoldText = styled(AppText)`
  text-align: left;
  margin-bottom: 20px;
`;

const Text = styled(AppText)`
  margin-top: 8px;
`;

export default ResetForm;
