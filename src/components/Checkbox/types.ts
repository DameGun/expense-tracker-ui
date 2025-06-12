import type { View, ViewStyle } from 'react-native';

import type { IComponentWithStyleProps, PropsWithRef } from '@/types';

export type TCheckboxSize = 'small' | 'medium';

export interface ICheckboxProps
  extends IComponentWithStyleProps<ViewStyle>,
    PropsWithRef<View> {
  checked: boolean;
  size?: TCheckboxSize;
  onChange: VoidFunction;
  text?: string;
}
