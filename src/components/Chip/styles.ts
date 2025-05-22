import { createStyleSheet, getColorWithOpacity } from '@/helpers';
import type { TThemeColorsKeys } from '@/types';

export const getStyles = createStyleSheet(({ constants, colors }) => ({
  container: (color: TThemeColorsKeys) => ({
    display: 'flex',
    flexDirection: 'row',
    gap: constants.spacing.xs,
    borderRadius: constants.borderRadius.circle,
    alignItems: 'center',
    paddingHorizontal: constants.spacing.sm,
    paddingVertical: constants.spacing.xs,
    backgroundColor: getColorWithOpacity(colors[color], 0.5),
    flexGrow: 0,
  }),
  text: (color: TThemeColorsKeys) => ({
    color: colors[color],
  }),
  removeIcon: {
    height: 24,
    width: 24,
  },
}));
