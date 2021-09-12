import React, { FC } from 'react';
import { Field, Form, FormProps } from 'react-final-form';
import styled from 'styled-components';
import { actions, selectors } from '../../store/ducks';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { AppText } from '../../ui/AppText';
import { Button } from '../../ui/Button';
import { FormWrapper } from '../../ui/FormWrapper';
import { mailValidator, requireField } from '../../utils/validators';
import { InputField } from '../InputField';

const SignUpForm: FC = () => {
  const dispatch = useAppDispatch();

  const isLoading = useAppSelector(selectors.user.selectStatus) === 'pending';
  const error = useAppSelector(selectors.user.selectError).signUpError;

  const handleFormSubmit = ({ email, password }: FormProps) => {
   // dispatch(actions.user.signUpRequest({ email, password }));
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
                  render={({ ...outerProps }) => {
                    return <InputField label="Email" {...outerProps} />;
                  }}
                />
              </InputWrapper>
              <Field
                name="password"
                type="password"
                validate={requireField}
                render={({ ...outerProps }) => {
                  return <InputField label="Password" {...outerProps} />;
                }}
              />
              <TextWrapper>
                I agree that by clicking <b>“Registration”</b> I accept the Terms Of Service and Privacy Policy
              </TextWrapper>
              {error && <ErrorText>{error}</ErrorText>}
              <Button onClick={handleSubmit} disabled={invalid} isLoading={isLoading}>
                Registration
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

const TextWrapper = styled(AppText)`
  text-align: center;
  margin: 40px 0 16px;
  padding: 0 7px;
`;

const ErrorText = styled(AppText)`
  text-align: center;
  color: ${({theme}) => theme.colors.red};
`

export default SignUpForm;
