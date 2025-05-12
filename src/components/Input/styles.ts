import type { ViewStyle } from 'react-native';

import { createStyleSheet } from '@/helpers/createStyleSheet';

export const getStyles = createStyleSheet(
  ({ constants, colors, typography }) => ({
    inputContainer: {
      display: 'flex',
      gap: constants.spacing.xs,
    },
    errorText: {
      color: colors.error,
      marginLeft: constants.spacing.xs,
    },
    textInputWrapper: (isFocused: boolean) => {
      const baseStyles: ViewStyle = {
        borderRadius: constants.borderRadius.sm,
        borderWidth: constants.borderWidth.sm,
        borderColor: 'transparent',
        backgroundColor: colors.backgroundSecondaryGray,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: constants.spacing.xs,
        paddingHorizontal: constants.spacing.sm,
      };

      if (isFocused) {
        return {
          ...baseStyles,
          borderColor: colors.primary,
          backgroundColor: colors.backgroundSecondaryGray,
        };
      }

      return baseStyles;
    },
    textInput: {
      paddingVertical: constants.spacing.lg,
      flexGrow: 1,
    },
    text: {
      color: colors.textBlack,
      ...typography['m-400'],
    },
  })
);
