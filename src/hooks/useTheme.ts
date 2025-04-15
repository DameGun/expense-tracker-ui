import { useContext, useMemo } from 'react';

import { ThemeContext } from '@/providers/context';
import type { IThemeContext, TUseThemeSelectorFn } from '@/types/theme';

export function useTheme(): IThemeContext;
export function useTheme<T>(selector: TUseThemeSelectorFn<T>): T;
export function useTheme<T>(selector?: TUseThemeSelectorFn<T>) {
  const context = useContext(ThemeContext);

  return useMemo(
    () => (selector ? selector(context) : context),
    [selector, context]
  );
}
