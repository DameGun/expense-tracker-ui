import { type FC, useCallback } from 'react';
import { TouchableOpacity, View } from 'react-native';

import { useStyles } from '@/hooks/useStyles';

import { getStyles } from './styles';
import type { IRadioButtonProps } from './types';

import { Typography } from '../Typography';

export const RadioButton: FC<IRadioButtonProps> = ({
  selected,
  style,
  onPress,
  id,
  text,
  size = 'small',
  ref,
}) => {
  const styles = useStyles(getStyles);

  const handlePress = useCallback(() => {
    if (!selected) onPress(id);
  }, [selected, onPress, id]);

  return (
    <TouchableOpacity
      ref={ref}
      style={[styles.container, style]}
      onPress={handlePress}
    >
      <View style={styles.circle(selected, size)} />
      {text && <Typography variant="m-400">{text}</Typography>}
    </TouchableOpacity>
  );
};
