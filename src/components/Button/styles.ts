import { createStyleSheet } from '@/helpers/createStyleSheet';
import type { NullableOrUndefined } from '@/types/common';

export const getStyles = createStyleSheet(
  ({ constants, typography, colors }) => ({
    button: (
      disabled: NullableOrUndefined<boolean>,
      isFullWidth?: boolean
    ) => ({
      paddingVertical: constants.spacing.lg,
      width: isFullWidth ? '100%' : 'auto',
      paddingHorizontal: constants.spacing.xl,
      borderRadius: constants.borderRadius.md,
      backgroundColor: colors.primary,
      opacity: disabled ? constants.opacity.lg : constants.opacity.full,
    }),
    text: {
      color: colors.textWhite,
      textAlign: 'center',
      ...typography['m-600'],
    },
    buttonContentContainer: {
      display: 'flex',
      flexDirection: 'row',
      gap: constants.spacing.md,
      justifyContent: 'center',
      alignItems: 'center',
    },
  })
);
