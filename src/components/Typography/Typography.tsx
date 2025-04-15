import { forwardRef, useMemo } from 'react';
import { Text } from 'react-native';

import { useStyles } from '@/hooks/useStyles';

import { getStyles } from './styles';
import type { TTypographyProps } from './types';

export const Typography = forwardRef<Text, TTypographyProps>(
  ({ variant, centered, style, ...props }, ref) => {
    const styles = useStyles(getStyles);

    const BaseTypography = useMemo(
      () => (
        <Text
          ref={ref}
          {...props}
          style={[styles.typography(variant, centered, false), style]}
        />
      ),
      [props, styles, style, centered, variant, ref]
    );

    return BaseTypography;
  }
);
