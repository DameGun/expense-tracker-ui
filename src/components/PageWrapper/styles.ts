import { createStyleSheet } from '@/helpers';

export const getStyles = createStyleSheet(({ constants, colors }) => ({
  pageWrapper: {
    display: 'flex',
    flex: 1,
    paddingHorizontal: constants.spacing.lg,
    backgroundColor: colors.background,
  },
}));
