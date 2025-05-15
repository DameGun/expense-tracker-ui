import { createStyleSheet } from '@/helpers/createStyleSheet';

export const getStyles = createStyleSheet(
  ({ colors, constants, typography }) => ({
    otpInputContainer: {
      display: 'flex',
      flexDirection: 'row',
      paddingHorizontal: '10%',
      justifyContent: 'space-evenly',
      gap: constants.spacing.xs,
      alignItems: 'center',
    },
    splittedBoxes: (isFocused: boolean) => ({
      borderColor: isFocused ? colors.primary : 'transparent',
      borderWidth: isFocused
        ? constants.borderWidth.md
        : constants.borderWidth.sm,
      borderRadius: constants.borderRadius.md,
      padding: constants.spacing.sm,
      backgroundColor: colors.backgroundSecondaryGray,
      height: 50,
      width: 50,
      ...typography['lg-600'],
      lineHeight: 0,
      textAlign: 'center',
      color: colors.textBlack,
    }),
    otpContainer: {
      display: 'flex',
      gap: constants.spacing.md,
    },
    errorMessage: (isError: boolean) => ({
      color: isError ? colors.error : colors.background,
    }),
  })
);
