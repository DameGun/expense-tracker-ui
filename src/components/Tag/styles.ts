import { createStyleSheet } from '@/helpers';
import type { TThemeColorsKeys } from '@/types/theme';

import type { TTagVariant } from './types';

export const getStyles = createStyleSheet(({ constants, colors }) => ({
  container: (
    variant: TTagVariant,
    color?: TThemeColorsKeys,
    borderColor?: TThemeColorsKeys
  ) => ({
    flexGrow: 0,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: constants.borderRadius.lg,
    backgroundColor:
      variant === 'default'
        ? colors[color ?? 'accent']
        : colors[color ?? 'background'],
    borderWidth: constants.borderWidth.sm,
    borderColor:
      variant === 'outlined'
        ? colors[borderColor ?? 'textBlack']
        : 'transparent',
    paddingVertical: constants.spacing.xs,
    paddingHorizontal: constants.spacing.md,
  }),
  text: (variant: TTagVariant, textColor?: TThemeColorsKeys) => ({
    color:
      colors[textColor ?? (variant === 'default' ? 'textWhite' : 'textBlack')],
  }),
}));
