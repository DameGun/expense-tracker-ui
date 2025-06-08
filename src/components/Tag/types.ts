import type { ViewStyle } from 'react-native';

import type { IComponentWithStyleProps } from '@/types';
import type { TThemeColorsKeys } from '@/types/theme';

export type TTagVariant = 'default' | 'outlined';

export interface ITagProps extends IComponentWithStyleProps<ViewStyle> {
  variant?: TTagVariant;
  children: string;
  color?: TThemeColorsKeys;
  borderColor?: TThemeColorsKeys;
  textColor?: TThemeColorsKeys;
}
