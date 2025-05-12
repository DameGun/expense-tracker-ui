import { forwardRef, useCallback } from 'react';
import {
  Pressable,
  type PressableStateCallbackType,
  Text,
  View,
} from 'react-native';

import { useStyles } from '@/hooks/useStyles';

import { getStyles } from './styles';
import type { ButtonProps } from './types';

export const Button = forwardRef<View, ButtonProps>(
  (
    {
      children,
      disabled,
      isFullWidth = true,
      IconComponent,
      style,
      ...pressableProps
    },
    ref
  ) => {
    const styles = useStyles(getStyles);

    const mergedStyles = useCallback(
      (state: PressableStateCallbackType) => [
        styles.button(disabled, isFullWidth)(state),
        typeof style === 'function' ? style(state) : style,
      ],
      [disabled, isFullWidth, style, styles]
    );

    return (
      <Pressable
        {...pressableProps}
        ref={ref}
        disabled={disabled}
        style={mergedStyles}
      >
        <View style={styles.buttonContentContainer}>
          {IconComponent && <IconComponent />}
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    );
  }
);
