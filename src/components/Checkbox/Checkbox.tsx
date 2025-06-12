import { type FC } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { CheckIcon } from '@/assets';
import { useStyles, useTheme } from '@/hooks';

import { getStyles } from './styles';
import type { ICheckboxProps } from './types';

import { Typography } from '../Typography';

export const Checkbox: FC<ICheckboxProps> = ({
  size = 'small',
  style,
  onChange,
  checked,
  text,
  ref,
}) => {
  const styles = useStyles(getStyles);
  const colors = useTheme((theme) => theme.currentTheme.colors);

  return (
    <TouchableOpacity
      ref={ref}
      style={[styles.container, style]}
      onPress={onChange}
    >
      <View style={styles.checkbox(size, checked)}>
        <CheckIcon
          style={styles.icon(size)}
          color={checked ? colors.textWhite : colors.textGray}
        />
      </View>
      {text && <Typography variant="m-400">{text}</Typography>}
    </TouchableOpacity>
  );
};
