import type { PropsWithChildren } from 'react';
import type { TouchableOpacityProps, View } from 'react-native';

import type { PropsWithRef } from '@/types/common';
import type { IPropsWithIcon } from '@/types/styles';

export interface ButtonProps
  extends Omit<TouchableOpacityProps, 'children'>,
    PropsWithChildren,
    IPropsWithIcon,
    PropsWithRef<View> {
  isFullWidth?: boolean;
}
