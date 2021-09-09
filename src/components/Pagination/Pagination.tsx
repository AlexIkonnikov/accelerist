import React, { FC, HTMLAttributes } from 'react';
import styled from 'styled-components';
import { ReactComponent as Arrow} from '../../assets/icons/arrow.svg';
import { AppText } from './../../ui/AppText';

const Pagination: FC<HTMLAttributes<HTMLDivElement>> = ({className}) => {
  return (
    <PaginationWrapper className={className}>
      <LeftArrow />
      <Text type="FootnoteBlack" tagName="span">1-12 of 32</Text>
      <RightArrow />
    </PaginationWrapper>
  );
};

const RightArrow = styled(Arrow)`
  cursor: pointer;
`;

const LeftArrow = styled(RightArrow)`
  transform: rotate(-180deg);
  margin-right: 19px;
`;

const PaginationWrapper = styled.div`
  display: flex;
`;

const Text = styled(AppText)`
  margin-right: 12px;
`;

export default Pagination;
