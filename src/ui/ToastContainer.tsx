import React, { FC } from 'react';
import { ToastContainer as Container } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

export const ToastContainer: FC = () => {
  return <StyledContainer hideProgressBar={true} autoClose={3000} limit={5} />;
};

const StyledContainer = styled(Container)`
  --toastify-color-light: #EAEAEA;
  & .Toastify__toast-icon {
    width: auto;
  }
`;
