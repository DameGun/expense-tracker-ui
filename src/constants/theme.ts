import type {
  ITheme,
  IThemeColors,
  IThemeConstants,
  IThemeTypography,
} from '@/types/theme';

export const themeColors: IThemeColors = {
  primary: '#C941FF',
  accent: '#1D7AF3',
  secondary: '#565D6D',
  background: '#FFFFFF',
  backgroundSecondary: '#FBF0FF',
  backgroundSecondaryGray: '#F3F4F6',
  textWhite: '#FFFFFF',
  textBlack: '#000000',
  textSecondary: '#565D6D',
  textGray: '#BDC1CA',
};

export const themeConstants: IThemeConstants = {
  borderRadius: {
    xs: 2,
    sm: 6,
    md: 10,
    md2: 12,
    lg: 20,
  },
  spacing: {
    xs: 6,
    sm: 10,
    md: 16,
    lg: 20,
    xl: 26,
  },
  borderWidth: {
    sm: 1,
    md: 2,
    lg: 4,
  },
  opacity: {
    sm: 0.9,
    md: 0.7,
    lg: 0.5,
    none: 0,
    full: 1,
  },
};

export const themeTypography: IThemeTypography = {
  'xs-400': {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
  },
  'xs-600': {
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 18,
  },
  's-400': {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 20,
  },
  's-500': {
    fontSize: 14,
    fontWeight: '500',
    lineHeight: 20,
  },
  'm-400': {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
  },
  'm-600': {
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 20,
  },
  'lg-600': {
    fontSize: 18,
    fontWeight: '600',
    lineHeight: 28,
  },
  'lg2-600': {
    fontSize: 20,
    fontWeight: '600',
    lineHeight: 30,
  },
  'xl-600': {
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 40,
  },
};

export const theme: ITheme = {
  mode: 'dark',
  constants: themeConstants,
  typography: themeTypography,
  colors: themeColors,
};
