import React, { FC } from 'react';
import styled, { css } from 'styled-components';
import { ReactComponent as BuildingIcon } from './../assets/icons/building.svg';
import { ReactComponent as UserIcon } from './../assets/icons/user.svg';

interface AvatarProps {
  type?: 'rounded' | 'square';
}

export const Avatar: FC<AvatarProps> = ({ type = 'square' }) => {
  if (type === 'square') {
    return (
      <SquareAvatar>
        <BuildingIcon />
      </SquareAvatar>
    );
  }
  return (
    <RoundedAvatar>
      <UserIcon />
    </RoundedAvatar>
  );
};

const center = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const SquareAvatar = styled.div`
  ${center}
  border-radius: 6px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 5px;
`;

const RoundedAvatar = styled.div`
  ${center}
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.secondaryBlue};
`;
