import type { LayoutRectangle } from 'react-native';

import { createStyleSheet, getColorWithOpacity } from '@/helpers';

export const getStyles = createStyleSheet(({ constants, colors }) => ({
  selectDropdown: (triggerLayout: LayoutRectangle) => ({
    position: 'absolute',
    width: triggerLayout.width,
    zIndex: 10,
    top: triggerLayout.y + triggerLayout.height + 20,
    left: triggerLayout.x,
    borderRadius: constants.borderRadius.sm,
    borderWidth: constants.borderWidth.sm,
    borderColor: getColorWithOpacity(colors.backgroundSecondary, 0.7),
    backgroundColor: colors.backgroundSecondaryGray,
    maxHeight: 150,
    boxShadow: `0px 2px 4px ${getColorWithOpacity(colors.textBlack, 0.5)}`,
  }),
  dropdownOverlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
    backgroundColor: 'transparent',
    zIndex: 5,
  },
}));
