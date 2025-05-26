import type { FC, PropsWithChildren } from 'react';
import { ActivityIndicator, View } from 'react-native';

import { EmptyIcon } from '@/assets';
import { Typography } from '@/components';
import { getStyles } from '@/components/ContentWrapper/styles';
import { useStyles, useTheme } from '@/hooks';

interface IContentWrapperProps extends PropsWithChildren {
  isLoading?: boolean;
  data?: Array<any>;
  emptyTitle?: string;
}

export const ContentWrapper: FC<IContentWrapperProps> = ({
  data,
  isLoading,
  emptyTitle,
  children,
}) => {
  const colors = useTheme((context) => context.currentTheme.colors);
  const styles = useStyles(getStyles);

  if (isLoading) {
    return (
      <View style={styles.fallbackContainer}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (!data?.length) {
    return (
      <View style={[styles.fallbackContainer, styles.additionalBorder]}>
        <View style={styles.emptyContainer}>
          <EmptyIcon color={colors.secondary} />
          <Typography variant="m-400">{emptyTitle ?? 'No data'}</Typography>
        </View>
      </View>
    );
  }

  return children;
};
