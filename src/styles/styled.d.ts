import 'styled-components';
import { COLORS } from './color';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: typeof COLORS
  }
}
