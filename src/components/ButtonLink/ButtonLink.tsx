import type { FC } from 'react';
import { Pressable, type PressableProps } from 'react-native';

import { useStyles } from '@/hooks';
import type { TTypographyVariant } from '@/types';

import { getStyles } from './styles';

import { Typography } from '../Typography';

interface IButtonLinkProps extends Omit<PressableProps, 'children'> {
  textVariant?: TTypographyVariant;
  children: string;
}

export const ButtonLink: FC<IButtonLinkProps> = ({
  children,
  textVariant = 's-400',
  disabled,
  ...rest
}) => {
  const styles = useStyles(getStyles);

  return (
    <Pressable style={styles.buttonLink} {...rest}>
      <Typography variant={textVariant} style={styles.buttonLinkText(disabled)}>
        {children}
      </Typography>
    </Pressable>
  );
};
