import { type FC } from 'react';
import {
  TouchableOpacity,
  type TouchableOpacityProps,
  View,
} from 'react-native';

import { useStyles } from '@/hooks';
import type { PropsWithRef, TTypographyVariant } from '@/types';

import { getStyles } from './styles';

import { Typography } from '../Typography';

interface IButtonLinkProps
  extends Omit<TouchableOpacityProps, 'children'>,
    PropsWithRef<View> {
  textVariant?: TTypographyVariant;
  children: string;
  onPress: VoidFunction;
}

export const ButtonLink: FC<IButtonLinkProps> = ({
  children,
  style,
  textVariant = 's-400',
  disabled,
  ref,
  onPress,
  ...rest
}) => {
  const styles = useStyles(getStyles);

  return (
    <TouchableOpacity
      {...rest}
      style={[styles.buttonLink, style]}
      ref={ref}
      onPress={onPress}
    >
      <Typography
        variant={textVariant}
        style={styles.buttonLinkText(!!disabled)}
      >
        {children}
      </Typography>
    </TouchableOpacity>
  );
};
