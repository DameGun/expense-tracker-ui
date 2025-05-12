import { forwardRef } from 'react';
import { View } from 'react-native';

import { useStyles } from '@/hooks/useStyles';

import { getStyles } from './styles';
import type { IContentCardProps } from '@/components/ContentCard/types';

export const ContentCard = forwardRef<View, IContentCardProps>(
  ({ children, style }, ref) => {
    const styles = useStyles(getStyles);

    return (
      <View ref={ref} style={[styles.container, style]}>
        {children}
      </View>
    );
  }
);
