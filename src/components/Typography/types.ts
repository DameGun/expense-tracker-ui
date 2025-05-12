import type { TextProps } from 'react-native';

import type { IThemeTypography } from '@/types/theme';

export type ITypographyVariant = keyof IThemeTypography;

export interface IBaseTypographyProps extends TextProps {
  variant: ITypographyVariant;
  centered?: boolean;
  isLink?: boolean;
  href?: string;
  replace?: boolean;
}

export type TTypographyProps = IBaseTypographyProps;
