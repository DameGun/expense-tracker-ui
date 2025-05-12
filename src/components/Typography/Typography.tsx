import { forwardRef, useMemo } from 'react';
import { Text } from 'react-native';

import { useStyles } from '@/hooks/useStyles';

import { getStyles } from './styles';
import type { TTypographyProps } from './types';
import { Link } from 'expo-router';

export const Typography = forwardRef<Text, TTypographyProps>(
  ({ variant, centered, style, isLink, href, replace, ...props }, ref) => {
    const styles = useStyles(getStyles);

    const BaseTextComponent = useMemo(
      () => (
        <Text
          ref={ref}
          {...props}
          style={[styles.typography(variant, centered, isLink), style]}
        />
      ),
      [ref, props, variant, centered, isLink, style]
    );

    if (!isLink) return BaseTextComponent;

    return (
      <Link href={href} asChild replace={replace}>
        {BaseTextComponent}
      </Link>
    );
  }
);
