import {
  type FC,
  type ForwardedRef,
  forwardRef,
  type PropsWithChildren,
  useMemo,
} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  View,
  type ViewStyle,
} from 'react-native';

import { useStyles } from '@/hooks';
import type { IComponentWithStyleProps } from '@/types';

import { getStyles } from './styles';

interface IPageWrapperProps
  extends PropsWithChildren,
    IComponentWithStyleProps<ViewStyle> {
  useScrollView?: boolean;
}

export const PageWrapper = forwardRef<View | ScrollView, IPageWrapperProps>(
  ({ children, style, useScrollView }, ref) => {
    const styles = useStyles(getStyles);

    const combinedStyles = useMemo(
      () => [styles.pageWrapper, style],
      [styles, style]
    );

    const renderWrapper = useMemo(() => {
      if (useScrollView) {
        return (
          <ScrollView
            ref={ref as ForwardedRef<ScrollView>}
            nestedScrollEnabled={true}
            style={combinedStyles}
          >
            {children}
          </ScrollView>
        );
      }

      return (
        <View ref={ref as ForwardedRef<View>} style={combinedStyles}>
          {children}
        </View>
      );
    }, [combinedStyles, ref, useScrollView, children]);

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        {renderWrapper}
      </KeyboardAvoidingView>
    );
  }
);
