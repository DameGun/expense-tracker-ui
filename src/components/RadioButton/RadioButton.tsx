import { forwardRef, useCallback } from 'react';
import { Pressable, View } from 'react-native';

import { useStyles } from '@/hooks/useStyles';

import { getStyles } from './styles';
import type { IRadioButtonProps } from './types';

import { Typography } from '../Typography';

export const RadioButton = forwardRef<View, IRadioButtonProps>(
  ({ selected, onPress, id, text, size = 'small' }, ref) => {
    const styles = useStyles(getStyles);

    const handlePress = useCallback(() => {
      if (selected) return;

      onPress(id);
    }, [selected, onPress, id]);

    return (
      <Pressable ref={ref} style={styles.container} onPress={handlePress}>
        <View style={styles.circle(selected, size)} />
        {text && <Typography variant="m-400">{text}</Typography>}
      </Pressable>
    );
  }
);
