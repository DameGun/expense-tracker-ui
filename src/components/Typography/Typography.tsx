import { type FC } from 'react';
import { Text } from 'react-native';

import { useStyles } from '@/hooks/useStyles';

import { getStyles } from './styles';
import type { ITypographyProps } from './types';

export const Typography: FC<ITypographyProps> = ({
  variant,
  centered,
  style,
  ref,
  ...props
}) => {
  const styles = useStyles(getStyles);

  return (
    <Text
      {...props}
      ref={ref}
      style={[styles.typography(variant, centered), style]}
    />
  );
};
