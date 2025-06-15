import { createStyleSheet } from '@/helpers';

export const getStyles = createStyleSheet(({ constants }) => ({
  container: {
    marginHorizontal: constants.spacing.md,
    marginTop: constants.spacing.sm,
  },
  textInput: {
    flexGrow: 1,
  },
}));
