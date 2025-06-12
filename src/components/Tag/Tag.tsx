import { type FC } from 'react';
import { View } from 'react-native';

import { useStyles } from '@/hooks/useStyles';

import { getStyles } from './styles';
import type { ITagProps } from './types';

import { Typography } from '../Typography';

export const Tag: FC<ITagProps> = ({
  variant = 'default',
  style,
  color,
  children,
  borderColor,
  textColor,
  ref,
}) => {
  const styles = useStyles(getStyles);

  return (
    <View
      ref={ref}
      style={[styles.container(variant, color, borderColor), style]}
    >
      <Typography style={styles.text(variant, textColor)} variant="xs-600">
        {children}
      </Typography>
    </View>
  );
};
