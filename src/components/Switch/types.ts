import type { ViewStyle } from 'react-native';

import type { IComponentWithStyleProps } from '@/types';

export type TSwitchPosition = 'left' | 'right';

export interface ISwitchProps extends IComponentWithStyleProps<ViewStyle> {
  enabled: boolean;
  onChange(value: boolean): void;
  text: string;
  switchPosition?: TSwitchPosition;
}
