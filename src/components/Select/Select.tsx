import { type FC, useCallback, useMemo, useRef, useState } from 'react';
import {
  type LayoutChangeEvent,
  type LayoutRectangle,
  Modal,
  ScrollView,
  TouchableWithoutFeedback,
  View,
} from 'react-native';

import { BaseInput } from '@/components/BaseInput';
import { isSelectMultiple } from '@/components/Select/helpers';
import { useStyles } from '@/hooks';

import { renderSelectChevron } from './components/SelectChevron';
import { SelectOption } from './components/SelectOption';
import { getStyles } from './styles';
import type { ISelectProps, TSelectValue } from './types';

export const Select: FC<ISelectProps> = ({
  onSelect,
  options,
  IconComponent,
  selectedValue,
  placeholder,
  mode = 'single',
}) => {
  const [triggerLayout, setTriggerLayout] = useState<LayoutRectangle | null>(
    null
  );
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const inputRef = useRef<View>(null);
  const styles = useStyles(getStyles);

  const onTriggerLayout = useCallback(() => {
    inputRef?.current.measure((x, y, width, height, pageX, pageY) => {
      setTriggerLayout({
        x: pageX,
        y: pageY,
        width,
        height,
      });
    });
  }, [inputRef]);

  const handleDropdown = useCallback(
    () => setIsDropdownVisible((prev) => !prev),
    []
  );

  console.log(triggerLayout);

  const handleSelect = useCallback(
    (value: TSelectValue) => {
      let selectedBefore: boolean;

      if (isSelectMultiple(mode, selectedValue)) {
        selectedBefore = selectedValue.includes(value);
      } else {
        selectedBefore = selectedValue === value;
      }

      onSelect(value, selectedBefore ? 'remove' : 'select');

      if (mode === 'single') handleDropdown();
    },
    [onSelect, handleDropdown, mode, selectedValue]
  );

  const selectedOption = useMemo(() => {
    if (isSelectMultiple(mode, selectedValue)) return placeholder;

    return options.find(({ value }) => value === selectedValue)?.label;
  }, [selectedValue, options, placeholder, mode]);

  const renderOptions = useMemo(
    () =>
      options.map((option) => {
        let isSelected: boolean;

        if (isSelectMultiple(mode, selectedValue)) {
          isSelected = selectedValue.includes(option.value);
        } else {
          isSelected = selectedValue === option.value;
        }

        return (
          <SelectOption
            key={option.id}
            onSelect={handleSelect}
            isSelected={isSelected}
            {...option}
          />
        );
      }),
    [handleSelect, options, mode, selectedValue]
  );

  const handleClear = useCallback(() => onSelect(), [onSelect]);

  const isShowClear = useMemo(
    () => mode === 'single' && selectedValue !== undefined,
    [selectedValue, mode]
  );

  return (
    <BaseInput
      handleClear={handleClear}
      handlePress={handleDropdown}
      value={selectedOption}
      showClear={isShowClear}
      ref={inputRef}
      placeholder={placeholder}
      LeftAddon={IconComponent}
      RightAddon={renderSelectChevron(isDropdownVisible)}
      onLayout={onTriggerLayout}
    >
      {triggerLayout && (
        <Modal visible={isDropdownVisible} transparent>
          <ScrollView style={styles.selectDropdown(triggerLayout)}>
            {renderOptions}
          </ScrollView>
          <TouchableWithoutFeedback onPress={handleDropdown}>
            <View style={styles.dropdownOverlay} />
          </TouchableWithoutFeedback>
        </Modal>
      )}
    </BaseInput>
  );
};
