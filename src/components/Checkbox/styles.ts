import { createStyleSheet } from '@/helpers';

import { CHECKBOX_SIZE_MAP } from './constants';
import type { TCheckboxSize } from './types';

export const getStyles = createStyleSheet(({ constants, colors }) => ({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: constants.spacing.sm,
    alignItems: 'center',
  },
  checkbox: (size: TCheckboxSize, checked: boolean) => ({
    borderRadius: constants.borderRadius.xs,
    height: CHECKBOX_SIZE_MAP[size],
    width: CHECKBOX_SIZE_MAP[size],
    backgroundColor: checked ? colors.primary : colors.backgroundSecondaryGray,
  }),
  icon: (size: TCheckboxSize) => ({
    height: CHECKBOX_SIZE_MAP[size],
    width: CHECKBOX_SIZE_MAP[size],
  }),
}));
