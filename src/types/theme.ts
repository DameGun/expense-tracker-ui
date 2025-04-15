import type { TextStyle } from 'react-native';

export type TThemeMode = 'light' | 'dark';

export interface IThemeConstantsBaseSizes {
  sm: number;
  md: number;
  lg: number;
}

export type TThemeConstantsSizes<T extends string = ''> = [T] extends ['']
  ? IThemeConstantsBaseSizes
  : IThemeConstantsBaseSizes & {
      [K in T]: number;
    };

export interface IThemeConstants {
  borderRadius: TThemeConstantsSizes<'xs' | 'md2'>;
  spacing: TThemeConstantsSizes<'xs' | 'xl'>;
  borderWidth: TThemeConstantsSizes;
  opacity: TThemeConstantsSizes<'none' | 'full'>;
}

export interface IThemeColors {
  primary: string;
  accent: string;
  secondary: string;
  background: string;
  backgroundSecondary: string;
  backgroundSecondaryGray: string;
  textWhite: string;
  textBlack: string;
  textSecondary: string;
  textGray: string;
}

export interface IThemeTypographyValue {
  fontSize: number;
  fontWeight: TextStyle['fontWeight'];
  lineHeight?: number;
}

export interface IThemeTypography {
  'xs-400': IThemeTypographyValue;
  'xs-600': IThemeTypographyValue;
  's-400': IThemeTypographyValue;
  's-500': IThemeTypographyValue;
  'm-400': IThemeTypographyValue;
  'm-600': IThemeTypographyValue;
  'lg-600': IThemeTypographyValue;
  'lg2-600': IThemeTypographyValue;
  'xl-600': IThemeTypographyValue;
}

export interface ITheme {
  constants: IThemeConstants;
  typography: IThemeTypography;
  colors: IThemeColors;
  mode: TThemeMode;
}

export interface IThemeContext {
  currentTheme: ITheme;
  changeMode: (mode?: TThemeMode) => void;
}

export type TUseThemeSelectorFn<T> = (themeContext: IThemeContext) => T;
