import type { PropsWithChildren } from 'react';
import type { PressableProps } from 'react-native';

import type { IPropsWithIcon } from '@/types/styles';

export interface ButtonProps
  extends Omit<PressableProps, 'children'>,
    PropsWithChildren,
    IPropsWithIcon {
  isFullWidth?: boolean;
}
