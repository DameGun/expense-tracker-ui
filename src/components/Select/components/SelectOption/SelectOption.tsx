import { useCallback, useMemo } from 'react';
import { TouchableOpacity } from 'react-native';

import { Typography } from '@/components/Typography';
import { useStyles } from '@/hooks';

import { getStyles } from './styles';

import type { ISelectOption, TSelectValue } from '../../types';

interface ISelectOptionProps {
  onSelect: (item: ISelectOption, isSelectedBefore: boolean) => void;
  selectedOptions: Map<TSelectValue, ISelectOption>;
}

interface ISelectionOptionRenderProps {
  item: ISelectOption;
}

export const selectOptionRenderer =
  (props: ISelectOptionProps) => (renderProps: ISelectionOptionRenderProps) => (
    <SelectOption {...props} {...renderProps} />
  );

const SelectOption = ({
  item,
  onSelect,
  selectedOptions,
}: ISelectionOptionRenderProps & ISelectOptionProps) => {
  const { label, id } = item;
  const styles = useStyles(getStyles);

  const isSelected = useMemo(
    () => selectedOptions.has(id),
    [selectedOptions, id]
  );

  const handlePress = useCallback(
    () => onSelect(item, isSelected),
    [item, onSelect, isSelected]
  );

  return (
    <TouchableOpacity
      style={styles.selectOption(isSelected)}
      onPress={handlePress}
    >
      <Typography style={styles.selectOptionText(isSelected)} variant="s-500">
        {label}
      </Typography>
    </TouchableOpacity>
  );
};
