import React, { FC } from 'react';
import { SignUpForm } from '../components/SignUpForm';
import { StartLayout } from '../layouts/StartLayout';

const SignUpPage: FC = () => {
  return (
    <StartLayout>
      <SignUpForm />
    </StartLayout>
  );
};

export default SignUpPage;
