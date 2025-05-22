import { type FC, useCallback } from 'react';
import { Pressable } from 'react-native';

import { Typography } from '@/components/Typography';
import { useStyles } from '@/hooks';

import { getStyles } from './styles';

import type { ISelectOption, ISelectProps } from '../../types';

interface ISelectOptionProps
  extends ISelectOption,
    Pick<ISelectProps, 'onSelect'> {
  isSelected: boolean;
}

export const SelectOption: FC<ISelectOptionProps> = ({
  label,
  value,
  onSelect,
  isSelected,
}) => {
  const styles = useStyles(getStyles);

  const handlePress = useCallback(() => onSelect(value), [value, onSelect]);

  return (
    <Pressable style={styles.selectOption(isSelected)} onPress={handlePress}>
      <Typography style={styles.selectOptionText(isSelected)} variant="xs-400">
        {label}
      </Typography>
    </Pressable>
  );
};
