import { type FC } from 'react';

import { BaseInput } from '@/components/BaseInput';

import { SelectChevron } from './components/SelectChevron';
import { SelectModal } from './components/SelectModal';
import { useHandleSelect, useHandleSelectModal } from './hooks';
import type { ISelectProps } from './types';

export const Select: FC<ISelectProps> = ({
  onChange,
  options,
  IconComponent,
  placeholder,
  mode = 'single',
  label,
  defaultSelected,
}) => {
  const { isModalVisible, handleModal } = useHandleSelectModal();

  const { handleClear, handleSelect, selected, displayedOption } =
    useHandleSelect({ mode, placeholder, options, onChange, defaultSelected });

  return (
    <BaseInput
      handleClear={handleClear}
      handlePress={handleModal}
      value={displayedOption}
      showClear={!!selected.size}
      placeholder={placeholder}
      LeftAddon={IconComponent}
      RightAddon={SelectChevron}
      label={label}
    >
      <SelectModal
        visible={isModalVisible}
        onClose={handleModal}
        options={options}
        handleSelect={handleSelect}
        selectedOptions={selected}
      />
    </BaseInput>
  );
};
