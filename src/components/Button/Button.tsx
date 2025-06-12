import { type FC } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

import { useStyles } from '@/hooks/useStyles';

import { getStyles } from './styles';
import type { ButtonProps } from './types';

export const Button: FC<ButtonProps> = ({
  children,
  disabled,
  isFullWidth = true,
  IconComponent,
  style,
  ref,
  ...pressableProps
}) => {
  const styles = useStyles(getStyles);

  return (
    <TouchableOpacity
      {...pressableProps}
      ref={ref}
      disabled={disabled}
      activeOpacity={0.5}
      style={[styles.button(disabled, isFullWidth), style]}
    >
      <View style={styles.buttonContentContainer}>
        {IconComponent && <IconComponent />}
        <Text style={styles.text}>{children}</Text>
      </View>
    </TouchableOpacity>
  );
};
