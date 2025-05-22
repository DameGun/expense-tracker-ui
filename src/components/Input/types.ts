import type { ControllerProps, FieldValues, Path } from 'react-hook-form';
import type { StyleProp, TextInputProps, ViewStyle } from 'react-native';

import type { IPropsWithIcon } from '@/types/styles';

interface IBaseTextInputProps {
  containerStyle?: StyleProp<ViewStyle>;
}

export type TTextInputProps<
  TFieldNames extends FieldValues,
  TName extends Path<TFieldNames>,
> = TextInputProps &
  IPropsWithIcon &
  Omit<ControllerProps<TFieldNames, TName>, 'render'> &
  IBaseTextInputProps;
