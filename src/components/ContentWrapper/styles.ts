import { createStyleSheet } from '@/helpers';

export const getStyles = createStyleSheet(({ constants }) => ({
  fallbackContainer: {
    display: 'flex',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: constants.spacing.xs,
    paddingHorizontal: constants.spacing.lg,
  },
}));
