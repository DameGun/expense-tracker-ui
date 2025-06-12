import type { View, ViewStyle } from 'react-native';

import type { IComponentWithStyleProps, PropsWithRef } from '@/types';
import type { TThemeColorsKeys } from '@/types/theme';

export type TTagVariant = 'default' | 'outlined';

export interface ITagProps
  extends IComponentWithStyleProps<ViewStyle>,
    PropsWithRef<View> {
  variant?: TTagVariant;
  children: string;
  color?: TThemeColorsKeys;
  borderColor?: TThemeColorsKeys;
  textColor?: TThemeColorsKeys;
}
