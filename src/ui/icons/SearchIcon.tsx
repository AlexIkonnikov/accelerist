import React, { FC, DOMAttributes } from 'react';
import styled from 'styled-components';

export const SearchIcon: FC<DOMAttributes<HTMLOrSVGElement>> = ({...outerProps}) => {
  return (
    <Svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" {...outerProps}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.19995 1.59999C4.10717 1.59999 1.59999 4.10717 1.59999 7.19995C1.59999 10.2927 4.10717 12.7999 7.19995 12.7999C10.2927 12.7999 12.7999 10.2927 12.7999 7.19995C12.7999 4.10717 10.2927 1.59999 7.19995 1.59999ZM0 7.19995C0 3.22353 3.22353 0 7.19995 0C11.1764 0 14.3999 3.22353 14.3999 7.19995C14.3999 11.1764 11.1764 14.3999 7.19995 14.3999C3.22353 14.3999 0 11.1764 0 7.19995Z"
        fill="#737373"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.1542 11.1544C11.4667 10.8419 11.9732 10.8419 12.2856 11.1544L15.7656 14.6343C16.078 14.9467 16.078 15.4533 15.7656 15.7657C15.4532 16.0781 14.9466 16.0781 14.6342 15.7657L11.1542 12.2857C10.8418 11.9733 10.8418 11.4668 11.1542 11.1544Z"
        fill="#737373"
      />
    </Svg>
  );
};

const Svg = styled.svg`
  cursor: pointer;
`
