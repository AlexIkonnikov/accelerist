import React, { FC } from 'react';
import styled from 'styled-components';
import { AppText } from './AppText';

interface TagListInterface {
  tags: Array<string> | undefined;
}

export const TagList: FC<TagListInterface> = ({ tags }) => {
  if (tags && tags.length === 0) {
    return <AppText type="FootnoteSelect">No information</AppText>
  }
  return (
    <TagWrapper>
      {tags && tags.map((tag, idx) => (
        <TagItem className="tag" tagName="li" type="FootnoteSelect" key={tag + idx}>
          {tag}
        </TagItem>
      ))}
    </TagWrapper>
  );
};

const TagWrapper = styled.ul`
  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
  }
`;

const TagItem = styled(AppText)`
  padding-right: 16px;
  position: relative;
  display: inline;

  &:after {
    content: '';
    position: absolute;
    right: 6px;
    top: 5px;
    display: block;
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #c4c4c4;
  }

  &.tag:last-child {
    padding: 0;
    &:after {
      display: none;
    }
  }
  @media (max-width: 768px) {
    padding-right: 11px;
    &:after {
      right: 4px;
      top: 7px;
    }
  }
`;
