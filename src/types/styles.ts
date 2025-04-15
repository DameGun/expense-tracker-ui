import type { ElementType } from 'react';
import type { ImageStyle, TextStyle, ViewStyle } from 'react-native';

import type { ISVGProps } from './assets';
import type { ITheme } from './theme';

export type TStylesObject = ViewStyle | TextStyle | ImageStyle;

export type TNamedStyles = Record<string, TStylesObject | TStylesObjectFn>;

export type TStylesObjectFn = (
  ...args: any[]
) => TStylesObject | TStylesObjectFn;

export interface IPropsWithIcon {
  IconComponent?: ElementType<ISVGProps>;
}

export type TStyleSheetFn<T extends TNamedStyles> = (theme: ITheme) => T;
