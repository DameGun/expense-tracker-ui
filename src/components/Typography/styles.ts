import { createStyleSheet } from '@/helpers/createStyleSheet';
import type { TTypographyVariant } from '@/types';

export const getStyles = createStyleSheet(({ typography, colors }) => ({
  typography: (
    variant: TTypographyVariant,
    centered?: boolean,
    isLink?: boolean
  ) => ({
    ...typography[variant],
    textAlign: centered ? 'center' : 'auto',
    color: isLink ? colors.primary : colors.textBlack,
  }),
}));
