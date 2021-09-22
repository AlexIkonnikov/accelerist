import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { ReactComponent as Arrow } from '../../assets/icons/arrow.svg';
import { IMeta } from '../../store/company';
import { AppText } from './../../ui/AppText';

interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  meta?: IMeta;
  onToggle?: (params: any) => void;
}

const Pagination: FC<PaginationProps> = ({ className, meta, onToggle }) => {
  const currentPage = Number(meta?.currentPage);
  const limit = Number(meta?.itemsPerPage);
  const itemsCount = meta?.itemCount;
  const totalPage = meta?.totalPages;
  const totalItems = meta?.totalItems;

  const LeftBorderRange = () => {
    if (totalPage === 1) {
      return `${1}`;
    } else {
      return `${1 + (limit * currentPage - limit)}`;
    }
  };

  const rightBorderRange = () => {
    if (totalPage === 1) {
      return `${itemsCount}`;
    }
    if (currentPage === totalPage) {
      return `${totalItems}`
    }
    return `${currentPage * limit}`
  }

  const handleNextPage = () => {
    onToggle && onToggle({page: currentPage + 1});
  };

  const handlePrevPage = () => {
    onToggle && onToggle({page: currentPage - 1});
  };

  if (totalItems === 0) {
    return null;
  }

  return (
    <PaginationWrapper className={className}>
      {currentPage !== 1 && (
        <button onClick={handlePrevPage}>
          <LeftArrow />
        </button>
      )}
      <Text type="FootnoteBlack" tagName="span">
        {LeftBorderRange()}-{rightBorderRange()} of {totalItems}
      </Text>
      {currentPage !== totalPage && (
        <button onClick={handleNextPage}>
          <Arrow />
        </button>
      )}
    </PaginationWrapper>
  );
};

const LeftArrow = styled(Arrow)`
  transform: rotate(-180deg);
`;

const PaginationWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Text = styled(AppText)`
  margin-right: 12px;
  margin-left: 12px;
`;

export default Pagination;
