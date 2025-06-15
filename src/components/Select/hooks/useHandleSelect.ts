import { useCallback, useMemo, useState } from 'react';

import {
  handleMultipleSelect,
  handleSingleSelect,
  isSelectMultipleOnChange,
  prepareDefaultSelected,
} from '../helpers';
import type {
  ISelectOption,
  THandleSelectFn,
  TSelectFnMultiple,
  TSelectFnSingle,
  TSelectMode,
  TSelectValue,
} from '../types';

interface IUseHandleSelectParams {
  mode: TSelectMode;
  placeholder: string;
  onChange: TSelectFnMultiple | TSelectFnSingle;
  defaultSelected?: TSelectValue[] | TSelectValue;
  options: ISelectOption[];
}

export const useHandleSelect = ({
  mode,
  placeholder,
  onChange,
  defaultSelected,
  options,
}: IUseHandleSelectParams) => {
  const [selected, setSelected] = useState<Map<TSelectValue, ISelectOption>>(
    new Map(prepareDefaultSelected(options, defaultSelected))
  );

  const displayedOption = useMemo(() => {
    if (mode === 'multiple') return `Selected items: ${selected.size}`;

    return selected.values().next()?.value?.label ?? placeholder;
  }, [selected, placeholder, mode]);

  const handleSelect = useCallback<THandleSelectFn>(
    (selectedValue, isSelectedBefore) => {
      setSelected((prevSelected) => {
        const mapClone = new Map(prevSelected);

        if (isSelectMultipleOnChange(mode, onChange)) {
          handleMultipleSelect(mapClone, selectedValue, isSelectedBefore);

          onChange([...mapClone.values()].map(({ value }) => value));
        } else {
          handleSingleSelect(mapClone, selectedValue, isSelectedBefore);
          onChange(mapClone.values().next().value?.value);
        }

        return mapClone;
      });
    },
    [onChange, mode]
  );

  const handleClear = useCallback(() => {
    setSelected(new Map());

    if (isSelectMultipleOnChange(mode, onChange)) {
      onChange([]);
    } else {
      onChange(undefined);
    }
  }, [onChange, mode]);

  return { displayedOption, selected, handleSelect, handleClear };
};
