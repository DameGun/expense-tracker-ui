import { type FC, useCallback } from 'react';
import { Pressable, TouchableOpacity, View } from 'react-native';

import { CloseFilledIcon } from '@/assets';
import { useStyles, useTheme } from '@/hooks';

import { getStyles } from './styles';
import type { IChipProps } from './types';

import { Typography } from '../Typography';

export const Chip: FC<IChipProps> = ({
  leftContent,
  children,
  style,
  id,
  color = 'accent',
  ref,
  onRemove,
}) => {
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
        <TouchableOpacity onPress={handleRemove}>
          <CloseFilledIcon style={styles.removeIcon} color={colors[color]} />
        </TouchableOpacity>
      )}
    </View>
  );
};
