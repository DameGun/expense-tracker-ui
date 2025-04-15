import {
  type FC,
  type PropsWithChildren,
  useCallback,
  useMemo,
  useState,
} from 'react';

import { theme } from '@/constants/theme';
import type { IThemeContext, TThemeMode } from '@/types/theme';

import { ThemeContext } from './context';

interface IThemeProviderProps extends PropsWithChildren {
  initialMode: TThemeMode;
}

export const ThemeProvider: FC<IThemeProviderProps> = ({
  children,
  initialMode,
}) => {
  const [mode, setMode] = useState(initialMode);

  const handleChangeMode = useCallback(
    (newMode?: TThemeMode) =>
      setMode((prevMode) => {
        if (newMode) return newMode;

        return prevMode === 'light' ? 'dark' : 'light';
      }),
    []
  );

  const value = useMemo<IThemeContext>(
    () => ({
      currentTheme: { ...theme, mode },
      changeMode: handleChangeMode,
    }),
    [mode, handleChangeMode]
  );

  return <ThemeContext.Provider {...{ value, children }} />;
};
