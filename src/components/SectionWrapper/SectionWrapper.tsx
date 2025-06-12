import type { FC, PropsWithChildren, ReactNode } from 'react';
import { View, type ViewStyle } from 'react-native';

import { useStyles } from '@/hooks';
import type { PropsWithRef } from '@/types';

import { getStyles } from './styles';

import { ButtonLink } from '../ButtonLink';
import { Typography } from '../Typography';

interface ISectionWrapperProps extends PropsWithChildren, PropsWithRef<View> {
  title: ReactNode;
  style?: ViewStyle;
  onLinkPress?: VoidFunction;
  disableLink?: boolean;
}

export const SectionWrapper: FC<ISectionWrapperProps> = ({
  title,
  children,
  style,
  onLinkPress,
  disableLink,
  ref,
}) => {
  const styles = useStyles(getStyles);

  return (
    <View style={[styles.sectionWrapper, style]} ref={ref}>
      {typeof title === 'string' ? (
        <View style={styles.titleContainer}>
          <Typography style={styles.title} variant="lg2-600">
            {title}
          </Typography>
          {onLinkPress && (
            <ButtonLink disabled={disableLink} onPress={onLinkPress}>
              View all
            </ButtonLink>
          )}
        </View>
      ) : (
        title
      )}
      {children}
    </View>
  );
};
