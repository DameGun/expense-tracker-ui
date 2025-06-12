import { type FC, useCallback } from 'react';
import { TouchableOpacity } from 'react-native';

import { Typography } from '@/components/Typography';
import { useStyles } from '@/hooks';

import { getStyles } from './styles';

import type { ISelectOption, TSelectValue } from '../../types';

interface ISelectOptionProps extends ISelectOption {
  onSelect: (value: TSelectValue) => void;
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
    <TouchableOpacity
      style={styles.selectOption(isSelected)}
      onPress={handlePress}
    >
      <Typography style={styles.selectOptionText(isSelected)} variant="xs-400">
        {label}
      </Typography>
    </TouchableOpacity>
  );
};
