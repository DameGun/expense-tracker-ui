import type { TSelectMode, TSelectValue } from '@/components';

export const isSelectMultiple = (
  mode: TSelectMode,
  selectedValue: Array<TSelectValue> | TSelectValue
): selectedValue is Array<TSelectValue> => mode === 'multiple';
