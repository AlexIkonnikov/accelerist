import React, { FC } from 'react';
import { SignInForm } from '../components/SignInForm';
import { StartLayout } from '../layouts/StartLayout';

const SignInPage: FC = () => {
  return (
    <StartLayout>
      <SignInForm />
    </StartLayout>
  );
};

export default SignInPage;
