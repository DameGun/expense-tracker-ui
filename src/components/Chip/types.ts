import type { ViewStyle } from 'react-native';

import type { IComponentWithStyleProps } from '@/types';
import type { TThemeColorsKeys } from '@/types/theme';

export interface IChipProps extends IComponentWithStyleProps<ViewStyle> {
  leftContent?: string;
  children: string;
  id?: string;
  onRemove?(id: string): void;
  color?: TThemeColorsKeys;
}
