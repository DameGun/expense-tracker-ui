import type { View, ViewStyle } from 'react-native';

import type { IComponentWithStyleProps, PropsWithRef } from '@/types';

export type TSwitchPosition = 'left' | 'right';

export interface ISwitchProps
  extends IComponentWithStyleProps<ViewStyle>,
    PropsWithRef<View> {
  enabled: boolean;
  onChange(value: boolean): void;
  text: string;
  switchPosition?: TSwitchPosition;
}
