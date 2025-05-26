import type { PressableStateCallbackType } from 'react-native';

import { createStyleSheet, getColorWithOpacity } from '@/helpers';

export const getStyles = createStyleSheet(({ colors, constants }) => ({
  buttonLink: ({ pressed }: PressableStateCallbackType) => ({
    opacity: pressed ? constants.opacity.md : constants.opacity.full,
    padding: constants.spacing.sm,
  }),
  buttonLinkText: (disabled: boolean) => ({
    color: disabled ? getColorWithOpacity(colors.primary, 0.5) : colors.primary,
  }),
}));
