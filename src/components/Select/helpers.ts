import { isArray } from 'es-toolkit/compat';

import type {
  ISelectOption,
  TSelectFnMultiple,
  TSelectFnSingle,
  TSelectMode,
  TSelectValue,
} from './types';

export const isSelectMultipleOnChange = (
  mode: TSelectMode,
  onChange: TSelectFnMultiple | TSelectFnSingle
): onChange is TSelectFnMultiple => mode === 'multiple';

export const handleMultipleSelect = (
  prevSelectedOptions: Map<TSelectValue, ISelectOption>,
  selectedOption: ISelectOption,
  isSelectedBefore: boolean
) => {
  if (!isSelectedBefore) {
    prevSelectedOptions.set(selectedOption.id, selectedOption);
    return;
  }

  prevSelectedOptions.delete(selectedOption.id);
};

export const handleSingleSelect = (
  prevSelectedOptions: Map<TSelectValue, ISelectOption>,
  selectedOption: ISelectOption,
  isSelectedBefore: boolean
) => {
  if (isSelectedBefore) {
    prevSelectedOptions.delete(selectedOption.id);
    return;
  }

  prevSelectedOptions.clear();
  prevSelectedOptions.set(selectedOption.id, selectedOption);
};
export const prepareDefaultSelected = (
  options: ISelectOption[],
  defaultSelected?: TSelectValue[] | TSelectValue
): [TSelectValue, ISelectOption][] =>
  options
    .filter(({ id }) =>
      isArray(defaultSelected)
        ? defaultSelected.includes(id)
        : id === defaultSelected
    )
    .map((value) => [value.id, value]);
