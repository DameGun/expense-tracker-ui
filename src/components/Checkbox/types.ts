import type { ViewStyle } from 'react-native';

import type { IComponentWithStyleProps } from '@/types';

export type TCheckboxSize = 'small' | 'medium';

export interface ICheckboxProps extends IComponentWithStyleProps<ViewStyle> {
  checked: boolean;
  size?: TCheckboxSize;
  onChange: VoidFunction;
  text?: string;
}
