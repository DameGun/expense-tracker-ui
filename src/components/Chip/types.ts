import type { StyleProp, ViewStyle } from 'react-native';

import type { TThemeColorsKeys } from '@/types/theme';

export interface IChipProps {
  leftContent?: string;
  children: string;
  id?: string;
  onRemove?(id: string): void;
  color?: TThemeColorsKeys;
  style?: StyleProp<ViewStyle>;
}
