import type { TThemeColorsKeys } from '@/types/theme';

export type TTagVariant = 'default' | 'outlined';

export interface ITagProps {
  variant?: TTagVariant;
  children: string;
  color?: TThemeColorsKeys;
  borderColor?: TThemeColorsKeys;
  textColor?: TThemeColorsKeys;
}
