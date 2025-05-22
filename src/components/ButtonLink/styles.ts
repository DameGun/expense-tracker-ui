import type { PressableStateCallbackType } from 'react-native';

import { createStyleSheet } from '@/helpers';

export const getStyles = createStyleSheet(({ colors, constants }) => ({
  buttonLink: ({ pressed }: PressableStateCallbackType) => ({
    opacity: pressed ? constants.opacity.md : constants.opacity.full,
    padding: constants.spacing.sm,
  }),
  buttonLinkText: {
    color: colors.primary,
  },
}));
