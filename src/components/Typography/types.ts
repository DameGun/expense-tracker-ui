import type { TextProps } from 'react-native';

import type { TTypographyVariant } from '@/types/theme';

export interface ITypographyProps extends TextProps {
  variant: TTypographyVariant;
  centered?: boolean;
  isLink?: boolean;
  href?: string;
  replace?: boolean;
}
