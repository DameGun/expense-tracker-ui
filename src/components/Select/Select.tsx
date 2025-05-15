import { type FC, useCallback, useMemo, useState } from 'react';
import { ScrollView } from 'react-native';

import { BaseInput } from '@/components/BaseInput';
import { useStyles } from '@/hooks';

import { SelectOption } from './components/SelectOption';
import { getStyles } from './styles';
import type { ISelectProps } from './types';

export const Select: FC<ISelectProps> = ({
  onSelect,
  options,
  IconComponent,
  selectedValue,
  placeholder,
}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const styles = useStyles(getStyles);

  const handleDropdown = useCallback(
    () => setIsDropdownVisible((prev) => !prev),
    []
  );

  const handleSelect = useCallback(
    (value: string | number) => {
      onSelect(value);
      handleDropdown();
    },
    [onSelect, handleDropdown]
  );

  const selectedOption = useMemo(
    () => options.find(({ value }) => value === selectedValue)?.label,
    [selectedValue, options]
  );

  const renderOptions = useMemo(
    () =>
      options.map((option) => (
        <SelectOption key={option.id} onSelect={handleSelect} {...option} />
      )),
    [handleSelect, options]
  );

  return (
    <BaseInput
      handlePress={handleDropdown}
      value={selectedOption}
      placeholder={placeholder}
      isShowChevron
      IconComponent={IconComponent}
      isChevronExpanded={isDropdownVisible}
    >
      {isDropdownVisible && (
        <ScrollView style={styles.selectDropdown}>{renderOptions}</ScrollView>
      )}
    </BaseInput>
  );
};
