import type { View, ViewStyle } from 'react-native';

import type { IComponentWithStyleProps, PropsWithRef } from '@/types';

export type TRadioButtonSize = 'small' | 'medium';

export interface IRadioButtonProps
  extends IComponentWithStyleProps<ViewStyle>,
    PropsWithRef<View> {
  selected: boolean;
  id: string | number;
  text?: string;
  onPress(id: string | number): void;
  size?: TRadioButtonSize;
}
