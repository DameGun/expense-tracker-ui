import type { TextProps, View } from 'react-native';

import type { PropsWithRef } from '@/types';
import type { TTypographyVariant } from '@/types/theme';

export interface ITypographyProps extends TextProps, PropsWithRef<View> {
  variant: TTypographyVariant;
  centered?: boolean;
}
