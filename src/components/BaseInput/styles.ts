import { createStyleSheet } from '@/helpers/createStyleSheet';

export const getStyles = createStyleSheet(({ constants, colors }) => ({
  container: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    gap: constants.spacing.xs,
    marginBottom: 18,
  },
  inputWrapper: {
    borderRadius: constants.borderRadius.sm,
    borderWidth: constants.borderWidth.sm,
    borderColor: 'transparent',
    backgroundColor: colors.backgroundSecondaryGray,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: constants.spacing.xs,
    paddingHorizontal: constants.spacing.sm,
    paddingVertical: constants.spacing.md,
  },
  inputText: (isPlaceholder: boolean) => ({
    flexGrow: 1,
    color: isPlaceholder ? colors.secondary : colors.textBlack,
  }),
}));
