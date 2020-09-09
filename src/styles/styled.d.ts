import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primaryLight: string;
      primaryContrast: string;
      primary: string;
      primaryDark: string;

      secondaryLight: string;
      secondaryContrast: string;
      secondary: string;
      secondaryDark: string;

      backgroundLight: string;
      backgroundContrast: string;
      background: string;
      backgroundDark: string;

      textLight: string;
      text: string;
      textDark: string;
      textDarker: string;

      red: string;
      green: string;
    };
  }
}
