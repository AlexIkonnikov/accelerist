import { createGlobalStyle } from 'styled-components';
import RubikRegular from './Rubik-Regular.ttf';
import RubikMedium from './Rubik-Medium.ttf';
import Gotham from './GothamRnd-Medium.ttf';

export default createGlobalStyle`
  @font-face {
    font-family: Rubik-Regular;
    src: url(${RubikRegular}) format('truetype');
    font-weight: 400;
    font-style: normal;
  }
  @font-face {
    font-family: Rubik-Medium;
    src: url(${RubikMedium}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
  @font-face {
    font-family: Gotham;
    src: url(${Gotham}) format('truetype');
    font-weight: 500;
    font-style: normal;
  }
`;
