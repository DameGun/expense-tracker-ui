import { createStyleSheet } from '@/helpers';

export const getStyles = createStyleSheet(() => ({
  chevronIcon: (isDropdownVisible: boolean) => ({
    transform: [{ rotate: `${isDropdownVisible ? 180 : 0}deg` }],
  }),
}));
