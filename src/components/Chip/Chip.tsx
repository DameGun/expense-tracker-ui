import { forwardRef, useCallback } from 'react';
import { Pressable, View } from 'react-native';

import { CloseFilledIcon } from '@/assets';
import { useStyles, useTheme } from '@/hooks';

import { getStyles } from './styles';
import type { IChipProps } from './types';

import { Typography } from '../Typography';

export const Chip = forwardRef<View, IChipProps>(
  ({ leftContent, children, style, id, color = 'accent', onRemove }, ref) => {
    const styles = useStyles(getStyles);
    const colors = useTheme((theme) => theme.currentTheme.colors);

    const handleRemove = useCallback(
      () => onRemove?.(id ?? children),
      [id, children, onRemove]
    );

    return (
      <View style={[styles.container(color), style]} ref={ref}>
        {leftContent && (
          <Typography style={styles.text(color)} variant="lg-400">
            {leftContent}
          </Typography>
        )}
        <Typography style={styles.text(color)} variant="lg-400">
          {children}
        </Typography>
        {onRemove && (
          <Pressable onPress={handleRemove}>
            <CloseFilledIcon style={styles.removeIcon} color={colors[color]} />
          </Pressable>
        )}
      </View>
    );
  }
);
