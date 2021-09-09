import React, { FC, HTMLAttributes, ComponentType } from 'react';
import styled, { css, FlattenInterpolation, ThemeProps, DefaultTheme, FlattenSimpleInterpolation } from 'styled-components';

interface AppTextProps extends HTMLAttributes<HTMLElement> {
  type?: 'Footnote' | 'FootnoteBlack' | 'FootnoteSelect' | 'Body' | 'BodyBlack' | 'BodySelect' | 'Headline' | 'Title';
  tagName?: string | ComponentType<any> | undefined;
}

export const AppText: FC<AppTextProps> = ({ children, className, type = 'Footnote', tagName = 'p' }) => {
  return (
    <Text $type={type} className={className} as={tagName}>
      {children}
    </Text>
  );
};

const Text = styled.p<{ $type: string }>`
  ${({ $type }) => {
    return typeText[$type];
  }}
`;

const Footnote = css`
  font-size: 12px;
  line-height: 18px;
  color: ${({theme}) => theme.colors.darkGray};
`;

const FootnoteBlack = css`
  ${Footnote}
  color: ${({ theme }) => theme.colors.black};
`;

const FootnoteSelect = css`
  ${FootnoteBlack}
  font-family: Rubik-Medium;
`;

const Body = css`
  font-size: 16px;
  line-height: 25px;
  color: ${({ theme }) => theme.colors.darkGray};
`;

const BodyBlack = css`
  ${Body}
  color: ${({ theme }) => theme.colors.black};
`;

const BodySelect = css`
  ${BodyBlack}
  font-family: Rubik-Medium;
`;

const Headline = css`
  font-size: 24px;
  line-height: 35px;
  font-family: Rubik-Medium;
`;

const Title = css`
  font-size: 32px;
  line-height: 48px;
  font-family: Rubik-Medium;
`;

const typeText: Record<string, FlattenSimpleInterpolation | FlattenInterpolation<ThemeProps<DefaultTheme>>> = {
  Footnote,
  FootnoteBlack,
  FootnoteSelect,
  Body,
  BodyBlack,
  BodySelect,
  Headline,
  Title,
};
