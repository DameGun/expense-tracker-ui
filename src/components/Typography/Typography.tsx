import { Link } from 'expo-router';
import { forwardRef, useMemo } from 'react';
import { Text } from 'react-native';

import { useStyles } from '@/hooks/useStyles';

import { getStyles } from './styles';
import type { ITypographyProps } from './types';

export const Typography = forwardRef<Text, ITypographyProps>(
  ({ variant, centered, style, isLink, href, replace, ...props }, ref) => {
    const styles = useStyles(getStyles);

    const combinedStyles = useMemo(
      () => [styles.typography(variant, centered, isLink), style],
      [variant, centered, isLink, style, styles]
    );

    const BaseTextComponent = useMemo(
      () => <Text ref={ref} {...props} style={combinedStyles} />,
      [ref, props, combinedStyles]
    );

    if (!isLink) return BaseTextComponent;

    return (
      <Link href={href} asChild style={combinedStyles} replace={replace}>
        {BaseTextComponent}
      </Link>
    );
  }
);
