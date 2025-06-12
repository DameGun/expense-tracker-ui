import type { TSelectMode, TSelectValue } from '@/components';

export const isSelectMultiple = (
  mode: TSelectMode,
  selectedValue?: TSelectValue[] | TSelectValue
): selectedValue is TSelectValue[] => mode === 'multiple';
