import type { FC, PropsWithChildren, ReactNode } from 'react';
import { View, type ViewStyle } from 'react-native';

import { useStyles } from '@/hooks';

import { getStyles } from './styles';

import { ButtonLink } from '../ButtonLink';
import { Typography } from '../Typography';

interface ISectionWrapperProps extends PropsWithChildren {
  title: ReactNode;
  style?: ViewStyle;
  linkTo?: string;
  disableLink?: boolean;
}

export const SectionWrapper: FC<ISectionWrapperProps> = ({
  title,
  children,
  style,
  linkTo,
  disableLink,
}) => {
  const styles = useStyles(getStyles);

  return (
    <View style={[styles.sectionWrapper, style]}>
      {typeof title === 'string' ? (
        <View style={styles.titleContainer}>
          <Typography style={styles.title} variant="lg2-600">
            {title}
          </Typography>
          {linkTo && (
            <ButtonLink
              href={linkTo}
              disabled={disableLink}
              style={{ marginTop: 5 }}
            >
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
