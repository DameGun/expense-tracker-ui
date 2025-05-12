import { forwardRef } from 'react';
import { Pressable, View } from 'react-native';

import { CheckIcon } from '@/assets';
import { useStyles, useTheme } from '@/hooks';

import { getStyles } from './styles';
import type { ICheckboxProps } from './types';

import { Typography } from '../Typography';

export const Checkbox = forwardRef<View, ICheckboxProps>(
  ({ size = 'small', onChange, checked, text }, ref) => {
    const styles = useStyles(getStyles);
    const colors = useTheme((theme) => theme.currentTheme.colors);

    return (
      <Pressable ref={ref} style={styles.container} onPress={onChange}>
        <View style={styles.checkbox(size, checked)}>
          <CheckIcon
            style={styles.icon(size)}
            color={checked ? colors.textWhite : colors.textGray}
          />
        </View>
        {text && <Typography variant="m-400">{text}</Typography>}
      </Pressable>
    );
  }
);
