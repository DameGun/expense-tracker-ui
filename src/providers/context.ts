import { createContext } from 'react';

import { theme } from '@/constants/theme';
import type { IThemeContext } from '@/types/theme';

export const ThemeContext = createContext<IThemeContext>({
  currentTheme: theme,
  changeMode: () => console.log('Theme context function not implemented'),
});
