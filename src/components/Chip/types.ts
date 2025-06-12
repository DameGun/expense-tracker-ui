import type { View, ViewStyle } from 'react-native';

import type { IComponentWithStyleProps, PropsWithRef } from '@/types';
import type { TThemeColorsKeys } from '@/types/theme';

export interface IChipProps
  extends IComponentWithStyleProps<ViewStyle>,
    PropsWithRef<View> {
  leftContent?: string;
  children: string;
  id?: string;
  onRemove?(id: string): void;
  color?: TThemeColorsKeys;
}
