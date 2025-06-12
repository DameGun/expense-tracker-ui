import type { FC } from 'react';
import { View } from 'react-native';

import { useStyles } from '@/hooks/useStyles';

import { getStyles } from './styles';
import type { IContentCardProps } from './types';

export const ContentCard: FC<IContentCardProps> = ({
  children,
  style,
  ref,
}) => {
  const styles = useStyles(getStyles);

  return (
    <View ref={ref} style={[styles.container, style]}>
      {children}
    </View>
  );
};
