import { createStyleSheet, getColorWithOpacity } from '@/helpers';

export const getStyles = createStyleSheet(({ constants, colors }) => ({
  selectDropdown: {
    position: 'absolute',
    width: '100%',
    zIndex: 10,
    top: 65,
    borderRadius: constants.borderRadius.sm,
    borderWidth: constants.borderWidth.sm,
    borderColor: getColorWithOpacity(colors.backgroundSecondary, 0.7),
    backgroundColor: colors.backgroundSecondaryGray,
    maxHeight: 150,
    boxShadow: `0px 2px 4px ${getColorWithOpacity(colors.textBlack, 0.5)}`,
  },
}));
