import type { TextProps } from 'react-native';

import type { TTypographyVariant } from '@/types/theme';

export interface IBaseTypographyProps extends TextProps {
  variant: TTypographyVariant;
  centered?: boolean;
  isLink?: boolean;
  href?: string;
  replace?: boolean;
}

export type TTypographyProps = IBaseTypographyProps;
