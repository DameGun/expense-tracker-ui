import { type FC, type PropsWithChildren } from 'react';
import { ActivityIndicator, View, type ViewStyle } from 'react-native';

import { EmptyIcon } from '@/assets';
import { Typography } from '@/components';
import { getStyles } from '@/components/ContentWrapper/styles';
import { useStyles, useTheme } from '@/hooks';
import type { IComponentWithStyleProps, PropsWithRef } from '@/types';

interface IContentWrapperProps
  extends PropsWithChildren,
    IComponentWithStyleProps<ViewStyle>,
    PropsWithRef<View> {
  isLoading?: boolean;
  contentLength?: number;
  emptyTitle?: string;
}

export const ContentWrapper: FC<IContentWrapperProps> = ({
  contentLength,
  style,
  isLoading,
  emptyTitle,
  children,
  ref,
}) => {
  const colors = useTheme((context) => context.currentTheme.colors);
  const styles = useStyles(getStyles);

  if (isLoading) {
    return (
      <View style={styles.fallbackContainer} ref={ref}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  if (contentLength) return children;

  return (
    <View
      style={[styles.fallbackContainer, styles.additionalBorder, style]}
      ref={ref}
    >
      <View style={styles.emptyContainer}>
        <EmptyIcon color={colors.secondary} />
        <Typography variant="m-400">{emptyTitle ?? 'No data'}</Typography>
      </View>
    </View>
  );
};
