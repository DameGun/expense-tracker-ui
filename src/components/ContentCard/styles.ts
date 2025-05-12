import { createStyleSheet } from '@/helpers';
import { getColorWithOpacity } from '@/helpers/getColorWithOpacity';

export const getStyles = createStyleSheet(({ colors, constants }) => ({
  container: {
    borderRadius: constants.borderRadius.sm,
    borderWidth: constants.borderWidth.sm,
    borderColor: getColorWithOpacity(colors.textGray, 0.8),
    padding: constants.spacing.sm,
    backgroundColor: colors.background,
    boxShadow: `0px 2px 4px ${getColorWithOpacity(colors.textBlack, 0.25)}`,
  },
}));
