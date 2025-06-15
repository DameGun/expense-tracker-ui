import { createStyleSheet, getColorWithOpacity } from '@/helpers';

export const getStyles = createStyleSheet(({ constants, colors }) => ({
  selectOption: (isSelected: boolean) => ({
    borderRadius: constants.borderRadius.sm,
    borderWidth: constants.borderWidth.sm,
    borderColor: 'transparent',
    backgroundColor: isSelected
      ? colors.primary
      : getColorWithOpacity(colors.secondary, 0.1),
    paddingHorizontal: constants.spacing.sm,
    paddingVertical: constants.spacing.sm,
    marginVertical: constants.spacing.xs2,
    marginHorizontal: constants.spacing.sm,
  }),
  selectOptionText: (isSelected: boolean) => ({
    color: isSelected ? colors.textWhite : colors.textBlack,
  }),
}));
