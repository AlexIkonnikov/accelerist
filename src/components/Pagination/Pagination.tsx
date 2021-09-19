import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { ReactComponent as Arrow} from '../../assets/icons/arrow.svg';
import { IMeta } from '../../store/company';
import { AppText } from './../../ui/AppText';

interface PaginationProps extends HTMLAttributes<HTMLDivElement> {
  meta?: IMeta,
  onToggle?: (page: number) => void
}

const Pagination: FC<PaginationProps> = ({className, meta, onToggle}) => {
  const currentPage = Number(meta?.currentPage);
  const limit = Number(meta?.itemsPerPage);
  const totalPage = meta?.totalPages;
  const totalItems = meta?.totalItems;
  const handleNextPage = () => {
    onToggle && onToggle(currentPage + 1);
  }

  const handlePrevPage = () => {
    onToggle && onToggle(currentPage - 1);
  }

  return (
    <PaginationWrapper className={className}>
      {currentPage !== 1 && <button onClick={handlePrevPage}><LeftArrow /></button>}
      <Text type="FootnoteBlack" tagName="span">{1 + (limit * currentPage - limit)}-{(currentPage * limit)} of {totalItems}</Text>
      {currentPage !== totalPage && <button onClick={handleNextPage}><Arrow/></button>}
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
