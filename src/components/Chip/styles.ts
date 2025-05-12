import { createStyleSheet, getColorWithOpacity } from '@/helpers';
import type { TThemeColorsKeys } from '@/types';

export const getStyles = createStyleSheet(({ constants, colors }) => ({
  container: (color: TThemeColorsKeys) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: constants.spacing.xs,
    borderRadius: constants.borderRadius.md,
    alignItems: 'center',
    paddingHorizontal: constants.spacing.xs,
    paddingVertical: constants.spacing.xs2,
    backgroundColor: getColorWithOpacity(colors[color], 0.5),
  }),
  text: (color: TThemeColorsKeys) => ({
    color: colors[color],
  }),
  removeIcon: {
    height: 12,
    width: 12,
  },
}));
