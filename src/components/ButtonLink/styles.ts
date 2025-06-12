import { createStyleSheet, getColorWithOpacity } from '@/helpers';

export const getStyles = createStyleSheet(({ colors, constants }) => ({
  buttonLink: {
    padding: constants.spacing.sm,
  },
  buttonLinkText: (disabled: boolean) => ({
    color: disabled ? getColorWithOpacity(colors.primary, 0.5) : colors.primary,
  }),
}));
