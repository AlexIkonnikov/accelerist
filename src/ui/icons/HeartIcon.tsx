import React, { FC, SVGAttributes } from 'react';

interface HeartIconProps extends SVGAttributes<HTMLOrSVGElement> {
  isLike?: boolean
}

export const HeartIcon: FC<HeartIconProps> = ({ isLike = false, ...outerProps}) => {
  return (
    <svg width="20" height="18" viewBox="0 0 20 18" fill={isLike ? '#F05658' : 'none'} xmlns="http://www.w3.org/2000/svg" {...outerProps}>
      <path
        d="M16.851 3.07311C16.4551 2.66951 15.9852 2.34935 15.4679 2.13092C14.9506 1.91248 14.3961 1.80005 13.8362 1.80005C13.2763 1.80005 12.7218 1.91248 12.2046 2.13092C11.6873 2.34935 11.2173 2.66951 10.8214 3.07311L9.99994 3.91033L9.17843 3.07311C8.37887 2.25825 7.29443 1.80047 6.16367 1.80047C5.03291 1.80047 3.94847 2.25825 3.1489 3.07311C2.34934 3.88797 1.90015 4.99316 1.90015 6.14554C1.90015 7.29793 2.34934 8.40311 3.1489 9.21797L3.97041 10.0552L9.99994 16.2001L16.0295 10.0552L16.851 9.21797C17.247 8.81456 17.5612 8.33559 17.7755 7.80841C17.9898 7.28123 18.1001 6.71618 18.1001 6.14554C18.1001 5.5749 17.9898 5.00985 17.7755 4.48268C17.5612 3.9555 17.247 3.47652 16.851 3.07311Z"
        stroke="#F05658"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
