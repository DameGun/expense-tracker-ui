import { forwardRef } from 'react';
import { Switch as RNSwitch, View } from 'react-native';

import { useStyles, useTheme } from '@/hooks';

import { getStyles } from './styles';
import type { ISwitchProps } from './types';

import { Typography } from '../Typography';

export const Switch = forwardRef<View, ISwitchProps>(
  ({ enabled, style, onChange, text, switchPosition = 'left' }, ref) => {
    const styles = useStyles(getStyles);
    const colors = useTheme((theme) => theme.currentTheme.colors);

    return (
      <View ref={ref} style={[styles.container(switchPosition), style]}>
        <RNSwitch
          value={enabled}
          onValueChange={onChange}
          thumbColor={colors.textWhite}
          trackColor={{
            false: colors.textGray,
            true: colors.primary,
          }}
        />
        {text && <Typography variant="m-400">{text}</Typography>}
      </View>
    );
  }
);
