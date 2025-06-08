import { Link } from 'expo-router';
import { forwardRef, useCallback } from 'react';
import {
  Pressable,
  type PressableProps,
  type PressableStateCallbackType,
  View,
} from 'react-native';

import { useStyles } from '@/hooks';
import type { TTypographyVariant } from '@/types';

import { getStyles } from './styles';

import { Typography } from '../Typography';

interface IButtonLinkProps extends Omit<PressableProps, 'children'> {
  textVariant?: TTypographyVariant;
  children: string;
  href: string;
  replace?: boolean;
}

export const ButtonLink = forwardRef<View, IButtonLinkProps>(
  (
    {
      children,
      style,
      replace,
      href,
      textVariant = 's-400',
      disabled,
      ...rest
    },
    ref
  ) => {
    const styles = useStyles(getStyles);

    const mergedStyles = useCallback(
      (state: PressableStateCallbackType) => [
        styles.buttonLink(state),
        typeof style === 'function' ? style(state) : style,
      ],
      [style, styles]
    );

    return (
      <Link href={href} asChild disabled={disabled} replace={replace}>
        <Pressable style={mergedStyles} {...rest} ref={ref}>
          <Typography
            variant={textVariant}
            style={styles.buttonLinkText(disabled)}
          >
            {children}
          </Typography>
        </Pressable>
      </Link>
    );
  }
);
