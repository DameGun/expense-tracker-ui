import { type FC, useCallback } from 'react';
import { Pressable } from 'react-native';

import { Typography } from '@/components/Typography';
import { useStyles } from '@/hooks';

import { getStyles } from './styles';

import type { ISelectOption, ISelectProps } from '../../types';

interface ISelectOptionProps
  extends ISelectOption,
    Pick<ISelectProps, 'onSelect'> {}

export const SelectOption: FC<ISelectOptionProps> = ({
  label,
  value,
  onSelect,
}) => {
  const styles = useStyles(getStyles);

  const handlePress = useCallback(() => onSelect(value), [value, onSelect]);

  return (
    <Pressable style={styles.selectOption} onPress={handlePress}>
      <Typography variant="xs-400">{label}</Typography>
    </Pressable>
  );
};
