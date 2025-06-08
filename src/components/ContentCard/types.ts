import type { PropsWithChildren } from 'react';
import type { ViewStyle } from 'react-native';

import type { IComponentWithStyleProps } from '@/types';

export interface IContentCardProps
  extends PropsWithChildren,
    IComponentWithStyleProps<ViewStyle> {}
