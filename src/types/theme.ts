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
  borderRadius: TThemeConstantsSizes<'xs' | 'md2' | 'circle'>;
  spacing: TThemeConstantsSizes<'xs2' | 'xs' | 'xl'>;
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
  success: string;
  error: string;
}

export interface IThemeTypographyValue {
  fontSize: number;
  fontWeight: TextStyle['fontWeight'];
  lineHeight?: number;
}

export type TTypographyVariant =
  | 'xs-400'
  | 'xs-600'
  | 's-400'
  | 's-500'
  | 'm-400'
  | 'm-600'
  | 'lg-600'
  | 'lg-400'
  | 'lg2-600'
  | 'xl-600';

export type TThemeTypography = {
  [K in TTypographyVariant]: IThemeTypographyValue;
};

export interface ITheme {
  constants: IThemeConstants;
  typography: TThemeTypography;
  colors: IThemeColors;
  mode: TThemeMode;
}

export interface IThemeContext {
  currentTheme: ITheme;
  changeMode: (mode?: TThemeMode) => void;
}

export type TUseThemeSelectorFn<T> = (themeContext: IThemeContext) => T;

export type TThemeColorsKeys = keyof IThemeColors;
