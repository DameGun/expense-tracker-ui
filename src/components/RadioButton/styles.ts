import { createStyleSheet } from '@/helpers';

import { RADIO_BUTTON_SIZE_MAP } from './constants';
import type { TRadioButtonSize } from './types';

export const getStyles = createStyleSheet(({ constants, colors }) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: constants.spacing.sm,
  },
  circle: (selected: boolean, size: TRadioButtonSize) => ({
    borderRadius: 50,
    height: RADIO_BUTTON_SIZE_MAP[size],
    width: RADIO_BUTTON_SIZE_MAP[size],
    borderWidth: constants.borderWidth.lg,
    borderColor: colors.backgroundSecondaryGray,
    backgroundColor: selected ? colors.primary : colors.background,
  }),
}));
