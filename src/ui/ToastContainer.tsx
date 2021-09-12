import React, { FC } from 'react';
import { ToastContainer as Container, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

export const ToastContainer: FC = () => {
  return <StyledContainer hideProgressBar={true} autoClose={false} />;
};

const StyledContainer = styled(Container)`
  --toastify-color-light: #EAEAEA;
  & .Toastify__toast-icon {
    width: auto;
  }
`;
