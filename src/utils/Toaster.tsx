import React from 'react';
import { toast } from 'react-toastify';
import { ReactComponent as SuccessIcon } from './../assets/icons/success.svg';
import { ReactComponent as ErrorIcon } from './../assets/icons/error.svg';
import { ReactComponent as InfoIcon } from './../assets/icons/info.svg';
import { ReactComponent as WarningIcon } from './../assets/icons/warning.svg';
import styled from 'styled-components';
import { AppText } from '../ui/AppText';

class Toaster {
  success(msg: string) {
    toast.success(
      <>
        <AppText type="FootnoteSelect">Well Done!</AppText>
        <AppText type="FootnoteBlack">{msg}</AppText>
      </>,
      {
        icon: <SuccessIcon />,
      },
    );
  }

  error(msg: string) {
    toast.error(
      <>
        <AppText type="FootnoteSelect">Error</AppText>
        <AppText type="FootnoteBlack">{msg}</AppText>
      </>,
      {
        icon: <ErrorIcon />,
      },
    );
  }

  info(msg: string) {
    toast.info(
      <>
        <AppText type="FootnoteSelect">Info</AppText>
        <AppText type="FootnoteBlack">{msg}</AppText>
      </>,
      {
        icon: <InfoIcon />,
      },
    );
  }

  warning(msg: string) {
    toast.warning(
      <>
        <AppText type="FootnoteSelect">Warning</AppText>
        <AppText type="FootnoteBlack">{msg}</AppText>
      </>,
      {
        icon: <WarningIcon />,
      },
    );
  }
}

const Title = styled(AppText)``;

export default new Toaster();
