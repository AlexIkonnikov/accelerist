import React, { FC } from 'react';
import styled from 'styled-components';

interface AvatarProps {
  isBig?: boolean
}

export const Avatar: FC<AvatarProps> = ({isBig = false, children}) => {
  return <AvatarWrapper $isBig={isBig}>{children}</AvatarWrapper>;
};

const AvatarWrapper = styled.div<{$isBig: boolean}>`
  ${({$isBig}) => {
    return $isBig ? `width: 100px; height: 100px;` : `width: 36px; height: 36px;`
  }}
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
