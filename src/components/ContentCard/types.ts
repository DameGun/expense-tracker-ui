import type { PropsWithChildren } from 'react';
import type { View, ViewStyle } from 'react-native';

import type { IComponentWithStyleProps, PropsWithRef } from '@/types';

export interface IContentCardProps
  extends PropsWithChildren,
    IComponentWithStyleProps<ViewStyle>,
    PropsWithRef<View> {}
