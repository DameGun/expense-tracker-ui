import type { TNamedStyles, TStyleSheetFn } from '@/types/styles';

export const createStyleSheet = <T extends TNamedStyles>(
  styleSheetFunc: TStyleSheetFn<T>
) => styleSheetFunc;
