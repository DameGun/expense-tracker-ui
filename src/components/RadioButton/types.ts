import type { ViewStyle } from 'react-native';

import type { IComponentWithStyleProps } from '@/types';

export type TRadioButtonSize = 'small' | 'medium';

export interface IRadioButtonProps extends IComponentWithStyleProps<ViewStyle> {
  selected: boolean;
  id: string | number;
  text?: string;
  onPress(id: string | number): void;
  size?: TRadioButtonSize;
}
