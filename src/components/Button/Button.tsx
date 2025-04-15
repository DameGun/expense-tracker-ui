import { forwardRef } from 'react';
import { Pressable, Text, View } from 'react-native';

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
      ...pressableProps
    },
    ref
  ) => {
    const styles = useStyles(getStyles);

    return (
      <Pressable
        {...pressableProps}
        ref={ref}
        disabled={disabled}
        style={styles.button(disabled, isFullWidth)}
      >
        <View style={styles.buttonContentContainer}>
          {IconComponent && <IconComponent />}
          <Text style={styles.text}>{children}</Text>
        </View>
      </Pressable>
    );
  }
);
