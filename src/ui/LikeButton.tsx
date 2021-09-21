import React, { FC, ButtonHTMLAttributes, useState } from 'react';
import styled from 'styled-components';
import { Button } from './Button';
import { HeartIcon } from './icons/HeartIcon';
import toast from '../utils/Toaster';
import { dislikeCompany, likeCompany } from '../services/api';

interface LikeButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: string;
  isLike?: boolean;
}

export const LikeButton: FC<LikeButtonProps> = ({ isLike = false, id, ...outerProps }) => {
  const [isLoading, setLoading] = useState(false);
  const [isCompanyLike, setLike] = useState(isLike);

  const handleLikeCompany = () => {
    setLoading(true);
    likeCompany(id)
      .then((response) => {
        setLike(true);
        toast.success(`Company added to favorites`);
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleDislikeCompany = () => {
    setLoading(true);
    dislikeCompany(id)
      .then((response) => {
        setLike(false);
        toast.info(`Company removed from favorites`);
      })
      .catch((error) => {
        toast.error(error);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <StyledButton
      variant="secondary"
      isLoading={isLoading}
      onClick={isCompanyLike ? handleDislikeCompany : handleLikeCompany}
      {...outerProps}
    >
      <HeartIcon isLike={isCompanyLike} />
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  width: 36px;
  height: 36px;
  margin-right: 6px;
  &:active,
  &:focus,
  &:hover {
    border-color: ${({ theme }) => theme.colors.red};
  }
  &:disabled {
    & .heart-icon {
      opacity: 0.5;
    }
  }
  @media (max-width: 768px) {
    margin-right: 12px;
  }
  @media (max-width: 375px) {
    margin-right: 15px;
  }
`;
