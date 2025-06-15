import { type FC, useCallback } from 'react';
import { TextInput } from 'react-native';

import { SearchIcon } from '@/assets';
import { BaseInput } from '@/components/BaseInput';
import { useStyles, useTheme } from '@/hooks';

import { getStyles } from './styles';

interface ISelectSearchProps {
  searchString: string;
  onChange: (value: string) => void;
}

export const SelectSearch: FC<ISelectSearchProps> = ({
  searchString,
  onChange,
}) => {
  const colors = useTheme((context) => context.currentTheme.colors);
  const styles = useStyles(getStyles);

  const handleClear = useCallback(() => onChange(''), [onChange]);

  return (
    <BaseInput
      replaceTextByChildren
      LeftAddon={SearchIcon}
      showClear={!!searchString}
      handleClear={handleClear}
      style={styles.container}
    >
      <TextInput
        style={styles.textInput}
        value={searchString}
        onChangeText={onChange}
        placeholderTextColor={colors.secondary}
        placeholder="Type to search options"
      />
    </BaseInput>
  );
};
