import { useMemo } from 'react';

import type { TNamedStyles, TStyleSheetFn } from '@/types/styles';

import { useTheme } from './useTheme';

export const useStyles = <T extends TNamedStyles>(
  styleSheetFunc: TStyleSheetFn<T>
) => {
  const theme = useTheme((context) => context.currentTheme);

  return useMemo(() => styleSheetFunc(theme), [theme, styleSheetFunc]);
};
