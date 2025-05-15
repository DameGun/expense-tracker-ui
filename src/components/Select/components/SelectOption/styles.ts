import type { PressableStateCallbackType } from 'react-native';

import { createStyleSheet, getColorWithOpacity } from '@/helpers';

export const getStyles = createStyleSheet(({ constants, colors }) => ({
  selectOption: ({ pressed }: PressableStateCallbackType) => ({
    borderRadius: constants.borderRadius.sm,
    borderWidth: constants.borderWidth.sm,
    borderColor: 'transparent',
    backgroundColor: getColorWithOpacity(colors.secondary, 0.1),
    paddingHorizontal: constants.spacing.sm,
    paddingVertical: constants.spacing.sm,
    marginVertical: constants.spacing.xs2,
    marginHorizontal: constants.spacing.xs2,
    opacity: pressed ? constants.opacity.md : constants.opacity.full,
  }),
}));
