import type { ElementType } from 'react';
import type { ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';

import type { ISVGProps } from './assets';
import type { ITheme } from './theme';

export type TStylesObject = ViewStyle | TextStyle | ImageStyle;

export type TNamedStyles = Record<string, TStylesObject | TStylesObjectFn>;

export type TStylesObjectFn = (
  ...args: any[]
) => TStylesObject | TStylesObjectFn;

export type TIconComponentType = ElementType<ISVGProps>;

export interface IPropsWithIcon {
  IconComponent?: TIconComponentType;
}

export type TStyleSheetFn<T extends TNamedStyles> = (theme: ITheme) => T;

type TStylePropName<N extends string | undefined> = N extends undefined
  ? 'style'
  : `${N}Style`;

export type IComponentWithStyleProps<
  T extends TStylesObject,
  N extends string | undefined = undefined,
> = {
  [key in TStylePropName<N>]?: StyleProp<T>;
};
