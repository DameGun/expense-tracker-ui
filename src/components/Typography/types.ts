import type { TextProps } from 'react-native';

import type { IThemeTypography } from '@/types/theme';

export type ITypographyVariant = keyof IThemeTypography;

export interface IBaseTypographyProps extends TextProps {
  variant: ITypographyVariant;
  centered?: boolean;
}

export type TTypographyProps = IBaseTypographyProps ;
