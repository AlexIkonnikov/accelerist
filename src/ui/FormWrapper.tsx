import React, {Children, FC} from 'react';
import styled from 'styled-components';
import { AppText } from './AppText';
import LinkedinIcon from './icons/LinkedinIcon';
import { TabLink } from './TabLink';

export const FormWrapper: FC = ({children}) => {
  return (
    <StyledWrapper>
      <WelcomeText type="Headline" tagName="h3">Welcome to Accelerist</WelcomeText>
      <TabWrapper>
        <TabLink to="signup" title="Register"/>
        <TabLink to="signin" title="Login"/>
      </TabWrapper>
      {children}
      <TextWrapper type="Footnote">or continue with</TextWrapper>
      <IconWrapper>
        <LinkedinIcon/>
      </IconWrapper>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  max-width: 454px;
  margin: 0 auto;
  background: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  padding: 40px;
  @media (max-width: 375px) {
    max-width: 343px;
    padding: 24px 16px 30px 16px;
  }
`;

const TextWrapper = styled(AppText)`
  text-align: center;
  margin: 32px 0 24px;
  @media (max-width: 375px) {
    margin: 16px 0 16px;
  }
`;

const TabWrapper = styled.div`
  width: 100%;
  display: flex;
  margin-bottom: 34px;
  background-color: #f8f8f8;
  @media (max-width: 375px) {
    margin-bottom: 22px;
  }
`;

const WelcomeText = styled(AppText)`
  text-align: center;
  margin-bottom: 25px;
  @media (max-width: 375px) {
    margin-bottom: 20px;
  }
`;

const IconWrapper = styled.div`
  width: 44px;
  height: 44px;
  margin: 0 auto;
  border-radius: 50%;
  background-color: #f8f8f8;
  display: flex;
  justify-content: center;
  align-items: center;
`;
