import React, { FC } from 'react';
import styled from 'styled-components';
import { AppText } from './AppText';
import { ReactComponent as Web } from './../assets/icons/web.svg';
import { ReactComponent as MapPin } from './../assets/icons/mapPin.svg';
import { ReactComponent as Phone } from './../assets/icons/phone.svg';

interface ContactsProps {
  website?: string;
  phone?: string;
  address?: string;
}

export const Contacts: FC<ContactsProps> = ({ website = '', phone = '', address = '' }) => {
  return (
    <Container>
      <Title type="Headline">Company Contacts</Title>
      <ContactsWrapper>
        <ContactWrapper>
          <Web />
          <Info type="FootnoteBlack">{website}</Info>
        </ContactWrapper>
        <ContactWrapper>
          <Phone />
          <Info type="FootnoteBlack">{phone}</Info>
        </ContactWrapper>
        <ContactWrapper>
          <MapPin />
          <Info type="FootnoteBlack">{address}</Info>
        </ContactWrapper>
      </ContactsWrapper>
    </Container>
  );
};

const Container = styled.div`
  margin-bottom: 50px;
`;

const Title = styled(AppText)`
  margin-bottom: 16px;
`;

const ContactsWrapper = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: 6px;
  width: 100%;
  display: flex;
  align-items: center;
  padding: 18px 24px;
  justify-content: space-between;
`;

const ContactWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Info = styled(AppText)`
  margin-left: 10px;
`;
