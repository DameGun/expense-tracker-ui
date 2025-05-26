import { createStyleSheet, getColorWithOpacity } from '@/helpers';

export const getStyles = createStyleSheet(({ constants, colors }) => ({
  fallbackContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  additionalBorder: {
    borderWidth: constants.borderWidth.md,
    borderColor: getColorWithOpacity(colors.secondary, 0.1),
    borderRadius: constants.borderRadius.md,
    marginVertical: constants.spacing.md,
  },
  emptyContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: constants.spacing.xs,
    paddingHorizontal: constants.spacing.lg,
  },
}));
