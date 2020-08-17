import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primaryLight: string;
      primary: string;
      primaryDark: string;

      secondaryLight: string;
      secondary: string;
      secondaryDark: string;

      textLight: string;
      text: string;
      textDark: string;

      red: string;
      yellow: string;
      green: string;
    };
  }
}
