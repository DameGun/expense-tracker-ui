import type { ControllerProps, FieldValues, Path } from 'react-hook-form';
import type { TextInputProps } from 'react-native';

import type { IPropsWithIcon } from '@/types/styles';

export type TTextInputProps<
  TFieldNames extends FieldValues,
  TName extends Path<TFieldNames>,
> = TextInputProps &
  IPropsWithIcon &
  Omit<ControllerProps<TFieldNames, TName>, 'render'>;
